import json,re
from pathlib import Path
from zipfile import ZipFile
import xml.etree.ElementTree as ET
NS={'a':'http://schemas.openxmlformats.org/drawingml/2006/main'}
norm=lambda x:re.sub(r'\s+',' ',x).strip()
root=Path('lectures/presentations');manifest=json.loads((root/'manifest.json').read_text())
for entry in manifest['modules']:
    stem=Path(entry['module']).stem;model=json.loads((root/(stem+'.json')).read_text())
    with ZipFile(root/(stem+'.pptx')) as z:
        assert len([n for n in z.namelist() if re.fullmatch(r'ppt/slides/slide\d+\.xml',n)])==len(model['slides'])+1,(stem,'slide count')
        for i,s in enumerate(model['slides'],2):
            notes=ET.fromstring(z.read(f'ppt/notesSlides/notesSlide{i}.xml'));actual=norm(' '.join(x.text or '' for x in notes.findall('.//a:t',NS)))
            assert norm(s['notes']) in actual,(stem,i,'speaker notes differ')
            page=ET.fromstring(z.read(f'ppt/slides/slide{i}.xml'));shown=norm(' '.join(x.text or '' for x in page.findall('.//a:t',NS)))
            for v in s.get('paragraphs',[])+[v for row in s.get('rows',[]) for v in row]:assert norm(v) in shown,(stem,i,'projected text differs',v)
print('Verified actual exported slide counts, text, table cells and notes for all modules.')
