(async()=>{
 const $=id=>document.getElementById(id),name=new URLSearchParams(location.search).get('module');
 if(!name||!/^[\w-]+$/.test(name)){$('loading').textContent='Choose a presentation from its lecture module.';return;}
 let model;try{const r=await fetch(name+'.json');if(!r.ok)throw Error();model=await r.json();}catch{$('loading').textContent='This presentation could not be loaded. Return to the module and try again.';return;}
 document.title=model.title+' | Teaching slides';$('return').href='../'+model.module;$('download').href=name+'.pptx';
 const all=[{kind:'cover',title:model.title,track:'core',notes:model.source},...model.slides];let shown=[],current=0;
 function fit(){const stage=$('stage');$('slide').style.transform=`scale(${Math.min((stage.clientWidth-24)/1280,(stage.clientHeight-24)/720)})`;}
 function el(tag,value,cls){const n=document.createElement(tag);if(value!==undefined)n.textContent=value;if(cls)n.className=cls;return n;}
 function render(){
  const s=shown[current];if(!s)return;const root=$('slide');root.replaceChildren();root.className=s.kind==='cover'?'cover':'';
  const h=el('h1',s.title.replace(/^\d+\.\s*/,''));if(s.kind!=='cover'&&s.title.length>125)h.style.fontSize='38px';root.append(h);const body=el('div',undefined,'body');root.append(body);
  if(s.kind==='cover')root.append(el('div','ID Practice Update\nResident teaching and advanced reference','subtitle'));
  if(s.kind==='text')for(const p of s.paragraphs)body.append(el('p',p));
  if(s.kind==='table'){const table=el('table'),cg=el('colgroup');for(const w of s.widths){const c=el('col');c.style.width=w+'px';cg.append(c);}table.append(cg);if(s.matrix)table.style.fontSize='24px';s.rows.forEach((row,i)=>{const tr=el('tr');for(const value of row)tr.append(el(i===0?'th':'td',value));table.append(tr);});body.append(table);}
  if(s.kind==='image'){const img=el('img');img.src=s.src;img.alt=s.alt;body.append(img);}
  if(s.kind!=='cover'){root.append(el('div',s.track==='core'?'Resident teaching':s.track==='advanced'?'Advanced teaching':'Reference','slide-footer'));root.append(el('div',String(all.indexOf(s)+1),'number'));}
  $('counter').textContent=`${current+1} / ${shown.length}`;$('previous').disabled=current===0;$('next').disabled=current===shown.length-1;$('notes-body').replaceChildren();
  for(const line of (s.notes||'').split('\n')){if(/^https?:\/\/\S+$/.test(line)){const a=el('a',line);a.href=line;a.target='_blank';a.rel='noopener';$('notes-body').append(a,document.createTextNode('\n'));}else $('notes-body').append(document.createTextNode(line+'\n'));}
  $('jump').value=String(current);fit();
 }
 function filter(){shown=all.filter(s=>$('track').value==='all'||s.track===$('track').value);current=0;$('jump').replaceChildren();shown.forEach((s,i)=>{const o=el('option',`${i+1}. ${s.title}`);o.value=i;$('jump').append(o);});render();}
 function move(n){current=Math.max(0,Math.min(shown.length-1,current+n));render();}
 function notes(){$('notes').hidden=!$('notes').hidden;$('notes-toggle').setAttribute('aria-expanded',String(!$('notes').hidden));fit();}
 async function full(){try{if(document.fullscreenElement)await document.exitFullscreen();else await document.body.requestFullscreen();}catch{}fit();}
 $('previous').onclick=()=>move(-1);$('next').onclick=()=>move(1);$('track').onchange=filter;$('jump').onchange=()=>{current=Number($('jump').value);render();};$('notes-toggle').onclick=notes;$('fullscreen').onclick=full;
 document.addEventListener('keydown',e=>{if(/INPUT|SELECT|TEXTAREA|BUTTON|A/.test(e.target.tagName))return;if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();move(1);}if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();move(-1);}if(e.key.toLowerCase()==='f')full();if(e.key.toLowerCase()==='n')notes();});
 let x;$('stage').addEventListener('touchstart',e=>{x=e.changedTouches[0].clientX;},{passive:true});$('stage').addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-x;if(Math.abs(d)>60)move(d<0?1:-1);},{passive:true});window.addEventListener('resize',fit);document.addEventListener('fullscreenchange',fit);filter();
})();
