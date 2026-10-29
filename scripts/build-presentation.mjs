import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {pathToFileURL} from 'node:url';
import {createRequire} from 'node:module';
import {execFileSync} from 'node:child_process';
const runtime=process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES;
if(!runtime)throw Error('The Codex presentation runtime is required.');
const requireRuntime=createRequire(path.join(runtime,'runtime-loader.cjs'));
const {Presentation,PresentationFile}=await import(pathToFileURL(path.join(runtime,'@oai/artifact-tool/dist/artifact_tool.mjs')).href);
const root=process.cwd(),dir=path.join(root,'lectures/presentations'),name=process.argv[2];
if(!name||!/^[\w-]+$/.test(name))throw Error('Pass a module basename.');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const input=await fs.readFile(path.join(dir,name+'.json'));const modelHash=sha(input),model=JSON.parse(input);
const tmp=path.join(root,'.presentation-build',name);await fs.mkdir(tmp,{recursive:true});
const ppt=Presentation.create({slideSize:{width:1280,height:720}}),FONT='DejaVu Sans',dark='#173E48',ink='#16323B';
function text(slide,name,value,box,size,color=ink,bold=false){const s=slide.shapes.add({geometry:'textbox',name,position:box,fill:'none',line:{style:'solid',fill:'none',width:0}});s.text=value;s.text.style={typeface:FONT,fontSize:size,color,bold,insets:0,wrap:'square',autoFit:'none'};return s;}
const cover=ppt.slides.add();cover.background.fill=dark;
text(cover,'title',model.title,{left:72,top:180,width:1136,height:300},56,'#FFFFFF',true);
text(cover,'subtitle','ID Practice Update\nResident teaching and advanced reference',{left:76,top:540,width:1120,height:88},26,'#D7E8E8');cover.speakerNotes.text=model.source+'\n'+model.references.join('\n');
const owners=[];
for(const [i,s] of model.slides.entries()){
 const page=ppt.slides.add();page.background.fill='#FFFFFF';
 text(page,'title',s.title.replace(/^\d+\.\s*/,'').replace(/[.]$/,''),{left:64,top:40,width:1152,height:142},s.title.length>125?38:44,dark,true);
 if(s.kind==='text'){
  let y=205;for(const [j,p] of s.paragraphs.entries()){const h=Math.max(1,Math.ceil(p.length/70))*37+12;text(page,'paragraph-'+j,p,{left:68,top:y,width:1140,height:h},30);y+=h+15;}
 }else if(s.kind==='table'){
  const font=s.matrix?24:26,widths=s.widths;
  const heights=s.rows.map(row=>Math.max(52,...row.map((v,c)=>Math.ceil(v.length/Math.floor((widths[c]-30)/(font*.58)))*font*1.25+24)));
  const total=heights.reduce((a,b)=>a+b,0);if(total>450)throw Error(name+' table overflow on slide '+(i+2));
  const table=page.tables.add({rows:s.rows.length,columns:widths.length,left:68,top:196,width:1144,height:total,columnWidths:widths,values:s.rows});table.borders.assign({style:'solid',fill:'#CEDADB',width:1});
  for(let r=0;r<s.rows.length;r++){table.rows[r].height=heights[r];for(let c=0;c<widths.length;c++){const cell=table.getCell(r,c);cell.fill=r===0?dark:(r%2?'#EFF5F5':'#FFFFFF');cell.text.style={typeface:FONT,fontSize:font,color:r===0?'#FFFFFF':ink,bold:r===0,insets:12,verticalAlignment:'middle',autoFit:'none'};}}
  owners.push(i+2);
 }else if(s.kind==='image'){
  if(/^https?:/.test(s.src))throw Error('Download and verify the remote figure before export.');
  const sharp=requireRuntime('sharp');const b=await sharp(await fs.readFile(path.join(dir,s.src))).resize({width:1100,height:430,fit:'inside'}).png().toBuffer();
  page.images.add({blob:b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),contentType:'image/png',alt:s.alt,fit:'contain',position:{left:68,top:196,width:1144,height:440}});
 }
 text(page,'footer',s.track==='core'?'Resident teaching':s.track==='advanced'?'Advanced teaching':'Reference',{left:64,top:674,width:1070,height:28},16,'#51656B');text(page,'number',String(i+2),{left:1160,top:674,width:56,height:28},16,'#51656B');page.speakerNotes.text=s.notes;
}
const candidate=path.join(tmp,'candidate.pptx');await(await PresentationFile.exportPptx(ppt)).save(candidate);
const SKILL='/root/.codex/skills/builtins/presentations',validator=path.join(SKILL,'container_tools/inspect_presentation_layout_geometry.py');
for(let i=0;i<owners.length;i+=35)execFileSync(process.env.CODEX_PRIMARY_RUNTIME_PYTHON,[validator,candidate,'--fail-on-findings',...owners.slice(i,i+35).flatMap(n=>['--require-native-table-slide',String(n)])],{stdio:'pipe'});
const {finalizePresentation}=await import(pathToFileURL(path.join(SKILL,'container_tools/artifact_tool_utils.mjs')).href);
const out=path.join(root,'.presentation-build','validated');await fs.mkdir(out,{recursive:true});const final=path.join(out,name+'-'+crypto.randomUUID()+'.pptx');
await finalizePresentation({workspaceDir:root,candidatePath:candidate,finalPath:final,pythonExecutable:process.env.CODEX_PRIMARY_RUNTIME_PYTHON,integrityValidatorPath:path.join(SKILL,'container_tools/inspect_presentation_package_integrity.py'),layoutValidatorPath:validator,layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-heading-fit'],fontPolicy:{basis:'design',families:[FONT]},explicitTotalSlideCount:model.slides.length+1,verifyArtifactToolImport:true,receiptPath:path.join(tmp,'validation-'+crypto.randomUUID()+'.json')});
for(const [i,slide] of ppt.slides.items.entries()){const b=await ppt.export({slide,format:'png',scale:1});await fs.writeFile(path.join(tmp,String(i+1).padStart(3,'0')+'.png'),new Uint8Array(await b.arrayBuffer()));}
if(sha(await fs.readFile(path.join(dir,name+'.json')))!==modelHash||sha(await fs.readFile(path.join(root,'lectures',model.module)))!==model.sourceSha256)throw Error('Source changed during export. Rebuild.');
await fs.copyFile(final,path.join(dir,name+'.pptx'));
await fs.writeFile(path.join(dir,name+'.build.json'),JSON.stringify({sourceSha256:model.sourceSha256,modelSha256:modelHash,pptxSha256:sha(await fs.readFile(final)),slides:model.slides.length+1},null,2)+'\n');
console.log(name+': '+(model.slides.length+1)+' slides exported, rendered and validated.');
