#!/usr/bin/env python3
"""Convert published lecture content without rewriting clinical claims."""
import hashlib,json,math,re
from pathlib import Path
from urllib.parse import urljoin
from bs4 import BeautifulSoup,Tag,NavigableString

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'lectures/presentations'
BASE='https://docarcshot.github.io/id-practice-update/lectures/'
def text(n):return re.sub(r'\s+',' ',n.get_text(' ',strip=True) if isinstance(n,Tag) else str(n)).strip()
def chunks(s,limit=600):
    result=[];part=''
    for sentence in re.split(r'(?<=[.!?])\s+(?=[A-Z])',s):
        if len(sentence)>limit:
            words=sentence.split();pieces=[];piece=''
            for w in words:
                if piece and len(piece)+len(w)+1>limit:pieces.append(piece);piece=''
                piece=(piece+' '+w).strip()
            if piece:pieces.append(piece)
        else:pieces=[sentence]
        for piece in pieces:
            if part and len(part)+len(piece)+1>limit:result.append(part);part=''
            part=(part+' '+piece).strip()
    if part:result.append(part)
    return result
def grid(table):
    result=[];pending={}
    for i,tr in enumerate(table.find_all('tr')):
        row=[];j=0
        for cell in tr.find_all(['th','td'],recursive=False):
            while (i,j) in pending:row.append(pending[i,j]);j+=1
            value=text(cell);cs=int(cell.get('colspan',1));rs=int(cell.get('rowspan',1))
            row.extend([value]*cs)
            for y in range(1,rs):
                for x in range(cs):pending[i+y,j+x]=value
            j+=cs
        while (i,j) in pending:row.append(pending[i,j]);j+=1
        if row:result.append(row)
    width=max(map(len,result),default=0)
    return [r+['']*(width-len(r)) for r in result]

def build(file):
    raw=file.read_bytes();soup=BeautifulSoup(raw,'html.parser');main=soup.main
    if main is None:raise ValueError(str(file)+' has no main content')
    title=text(soup.h1 or soup.title);source=BASE+file.name
    for x in main.select('script,style,nav,button,.section-label,.lecture-crosslinks,.tag,.print-controls,.toolbar'):x.decompose()
    refs=list(dict.fromkeys(urljoin(source,a['href']) for a in main.select('a[href]') if not a['href'].startswith('#')))
    section_notes={};key=title;parts=[]
    for n in main.descendants:
        if isinstance(n,Tag) and n.name=='h2':section_notes[key]=text(' '.join(parts));key=text(n);parts=[]
        if isinstance(n,NavigableString):parts.append(str(n))
    section_notes[key]=text(' '.join(parts))
    atoms=[];heading=title;section=title;anchor='';used=True;sticky=False
    def track(n):
        ancestors=[n]+list(n.parents)
        for p in ancestors:
            if not isinstance(p,Tag):continue
            if p.get('id') in ('references','sources','cheat','cheat-sheet') or set(p.get('class',[]))&{'sources','references','refs','cheat'}:return 'reference'
        if re.search(r'^(References|Sources|Selected public sources)',section,re.I):return 'reference'
        for p in ancestors:
            if not isinstance(p,Tag):continue
            if set(p.get('class',[]))&{'advanced','advanced-section','advanced-intro','fellow','fellow-extension'} or p.get('id') in ('advanced','secondary-teaching','fellow-detail','fellow'):return 'advanced'
            if p.name=='details' and not p.has_attr('open') and not re.search(r'answer|explanation',text(p.summary) if p.summary else '',re.I):return 'advanced'
        return 'advanced' if sticky else 'core'
    def add(kind,n,**data):
        nonlocal used
        ids=[p.get('id') for p in [n]+list(n.parents) if isinstance(p,Tag) and p.get('id')]
        atoms.append(dict(kind=kind,title=heading,section=section,track=track(n),anchor=ids[0] if ids else anchor,**data));used=True
    blocks={'h1','h2','h3','h4','p','li','ul','ol','div','section','article','table','figure','svg','img','details','summary','blockquote','figcaption'}
    def walk(n):
        nonlocal heading,section,anchor,used,sticky
        if isinstance(n,NavigableString):return
        if n.name in ('h1','h2','h3','h4','summary'):
            if heading!=section and not used:add('text',n,text=heading);atoms[-1]['title']=section
            if n.name=='h2':
                section=text(n);heading=section
                anchor=n.get('id') or next((p.get('id') for p in n.parents if isinstance(p,Tag) and p.get('id')),'')
                if not main.find('section') and re.search('fellow',section,re.I):sticky=True
                if re.search(r'^(References|Sources)',section,re.I):sticky=False
            else:heading=text(n) if track(n)!='reference' else section
            used=False;return
        if n.name=='table':
            rows=grid(n)
            if rows:add('table',n,rows=rows,caption=text(n.caption) if n.caption else '')
            return
        if n.name=='svg':
            name=f'{file.stem}-{sum(a["kind"]=="image" for a in atoms)+1}.svg';svg=str(n)
            if 'xmlns=' not in svg:svg=svg.replace('<svg','<svg xmlns="http://www.w3.org/2000/svg"',1)
            (OUT/'assets'/name).write_text(svg);add('image',n,src='assets/'+name,alt=n.get('aria-label') or heading);return
        if n.name=='img':add('image',n,src=urljoin(source,n['src']),alt=n.get('alt',heading));return
        if n.name in ('p','li','figcaption','blockquote') and not n.find(['table','svg','p','ul','ol']):
            if text(n):add('text',n,text=text(n))
            return
        if not n.find(list(blocks),recursive=False):
            if text(n):add('text',n,text=text(n))
            return
        inline=[]
        def flush():
            if inline:
                value=' '.join(text(x) for x in inline).strip()
                if value:add('text',n,text=value)
                inline.clear()
        for child in n.children:
            if isinstance(child,Tag) and child.name in blocks:flush();walk(child)
            else:inline.append(child)
        flush()
    walk(main)
    slides=[];pending=[];owner=None
    def slide(a,**data):slides.append({k:a[k] for k in ('title','section','track','anchor')}|data)
    def flush():
        nonlocal pending,owner
        if pending:slide(owner,kind='text',paragraphs=pending);pending=[];owner=None
    def table_pages(a,rows,matrix=False,vertical=False):
        cols=len(rows[0]);widths=([270,874] if vertical else [458,686]) if cols==2 else [1144/cols]*cols
        font=24 if matrix else 26
        def height(row):return max(52,*[math.ceil(len(v)/max(1,math.floor((widths[c]-30)/(font*.58))))*font*1.25+24 for c,v in enumerate(row)])
        part=[];used=height(rows[0])
        for row in rows[1:]:
            h=height(row)
            if part and (used+h>440 or len(part)>=3):slide(a,kind='table',rows=[rows[0]]+part,widths=widths,matrix=matrix);part=[];used=height(rows[0])
            if used+h>440:raise ValueError(f'{file.name}: table row too tall: {row}')
            part.append(row);used+=h
        if part:slide(a,kind='table',rows=[rows[0]]+part,widths=widths,matrix=matrix)
    for a in atoms:
        if a['kind']=='text':
            for part in chunks(a['text']):
                height=sum(math.ceil(len(p)/70)*37+27 for p in pending+[part])
                if pending and (any(a[k]!=owner[k] for k in ('title','track','anchor')) or height>435 or len(pending)>=4):flush()
                owner=a;pending.append(part)
        elif a['kind']=='image':flush();slide(a,kind='image',src=a['src'],alt=a['alt'])
        else:
            flush();rows=a['rows'];header=rows[0];body=rows[1:]
            if not body:body=[header];header=['']*len(header)
            if len(header)>5:
                for col in range(1,len(header),4):
                    cols=[0]+list(range(col,min(col+4,len(header))))
                    table_pages(a,[[r[c] for c in cols] for r in [header]+body],matrix=True)
            elif len(header)<=3 and all(max(map(len,r))<120 for r in rows) and max(map(len,header))<100:table_pages(a,[header]+body)
            else:
                for row in body:
                    if len(header)==1:
                        for p in chunks(row[0]):slide(a,kind='text',paragraphs=[p])
                        continue
                    fields=[[h,p] for h,v in zip(header[1:],row[1:]) for p in chunks(v,420)]
                    table_pages(a,[['',row[0]]]+fields,vertical=True)
    flush()
    slides.sort(key=lambda s:('core','advanced','reference').index(s['track']))
    for s in slides:
        s['source']=source+('#'+s['anchor'] if s['anchor'] else '')
        s['notes']='Complete source section:\n'+section_notes.get(s['section'],'')+'\n\nModule section: '+s['source']+'\n\nPublic sources and related reading:\n'+'\n'.join(refs)
    model=dict(version=2,module=file.name,title=title,source=source,sourceSha256=hashlib.sha256(raw).hexdigest(),slides=slides,references=refs)
    original=set(re.findall(r'\b[\w%-]+\b',main.get_text(' ',strip=True).lower()))
    represented=set(re.findall(r'\b[\w%-]+\b',json.dumps(model,ensure_ascii=False).lower()))
    missing=original-represented-{'advanced'}
    if missing:raise ValueError(f'{file.name}: missing source vocabulary {missing}')
    return model

def main():
    OUT.mkdir(exist_ok=True);(OUT/'assets').mkdir(exist_ok=True)
    catalog=BeautifulSoup((ROOT/'lectures/index.html').read_text(),'html.parser')
    names=sorted({a['href'] for a in catalog.select('a[href]') if re.fullmatch(r'[\w-]+\.html',a['href']) and a['href']!='index.html'})
    manifest=[]
    for name in names:
        model=build(ROOT/'lectures'/name);(OUT/(Path(name).stem+'.json')).write_text(json.dumps(model,ensure_ascii=False,indent=2)+'\n')
        counts={t:sum(s['track']==t for s in model['slides']) for t in ('core','advanced','reference')}
        manifest.append(dict(module=name,sourceSha256=model['sourceSha256'],slides=len(model['slides'])+1,tracks=counts));print(name,counts)
    (OUT/'manifest.json').write_text(json.dumps(dict(version=2,modules=manifest),indent=2)+'\n')
if __name__=='__main__':main()
