import fs from 'node:fs';import crypto from 'node:crypto';import assert from 'node:assert/strict';import {parsePage} from './lecture-links.mjs';
const hash=x=>crypto.createHash('sha256').update(x).digest('hex'),dir='lectures/presentations/';
const manifest=JSON.parse(fs.readFileSync(dir+'manifest.json','utf8'));
const modules=[...new Set(parsePage(fs.readFileSync('lectures/index.html','utf8')).links.filter(x=>/^[\w-]+\.html$/.test(x)&&x!=='index.html'))].sort();
assert.deepEqual(manifest.modules.map(x=>x.module).sort(),modules,'Every module needs a presentation');
for(const name of modules){const stem=name.slice(0,-5),source=fs.readFileSync('lectures/'+name),data=fs.readFileSync(dir+stem+'.json'),model=JSON.parse(data),receipt=JSON.parse(fs.readFileSync(dir+stem+'.build.json','utf8')),ppt=fs.readFileSync(dir+stem+'.pptx');
 assert.match(source.toString(),/src="presentation-entry\.js"/);assert.equal(model.sourceSha256,hash(source),name+': stale slide model');assert.equal(receipt.sourceSha256,hash(source),name+': stale PowerPoint');assert.equal(receipt.modelSha256,hash(data),name+': model differs from PowerPoint');assert.equal(receipt.pptxSha256,hash(ppt),name+': PowerPoint changed');assert.equal(receipt.slides,model.slides.length+1);assert.equal(ppt.subarray(0,2).toString(),'PK');assert.ok(model.slides.some(s=>s.track==='core'));
 for(const s of model.slides){assert.ok(s.title&&s.notes&&s.source);if(s.kind==='image'&&!/^https?:/.test(s.src))assert.ok(fs.existsSync(dir+s.src));}
}for(const file of ['view.html','viewer.css','viewer.js'])assert.ok(fs.statSync(dir+file).size>0);console.log(`Validated current slide models and PowerPoints for ${modules.length} modules.`);
