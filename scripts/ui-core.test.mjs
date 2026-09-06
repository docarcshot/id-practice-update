import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync('ui-core.js','utf8'),context);
const ui=context.window.ID_UI;
const ids = rows => Array.from(rows, a => a.id);
const articles=[
  {id:'older-paper-new-addition',date:'2026-01-15',title:'Oral treatment for PJI',type:'Randomized trial',journal:'Journal',impact:'Practice informing',tags:['Bone & Joint'],summary:'Patients with PJI',change:'Result',takeaway:'Interpret carefully',limitations:'Small trial',link:'https://example.org/pji',doi:'10.1234/pji'},
  {id:'recent-publication',date:'2026-09-01',title:'HIV guidance',type:'Guideline',journal:'Society',impact:'Practice changing',tags:['HIV'],summary:'HIV guidance',change:'Result',takeaway:'Apply guidance',limitations:'Evidence gaps',link:'https://example.org/hiv'},
  {id:'old-addition',date:'2026-02-01',title:'Other paper',type:'Review',journal:'Journal',impact:'Worth knowing',tags:['Inpatient ID'],summary:'Review',change:'Context',takeaway:'Read',limitations:'Review',link:'https://example.org/review'}
];
const metadata={
  'older-paper-new-addition':{addedAt:'2026-09-06T12:00:00Z'},
  'recent-publication':{addedAt:'2026-08-31T12:00:00Z'},
  'old-addition':{addedAt:'2026-08-01T12:00:00Z'}
};
const base={area:'All',type:'All',impact:'All',time:'all',sort:'added',query:''};

test('date added and publication date give different, correct orders',()=>{
  assert.deepEqual(ids(ui.sortArticles(articles,'added',metadata)),['older-paper-new-addition','recent-publication','old-addition']);
  assert.deepEqual(ids(ui.sortArticles(articles,'published',metadata)),['recent-publication','old-addition','older-paper-new-addition']);
  assert.equal(articles[0].id,'older-paper-new-addition');
});
test('seven-day catch-up includes newly backfilled papers, using Chicago dates',()=>{
  assert.deepEqual(ids(ui.filterArticles(articles,{...base,time:'7'},metadata,null,'2026-09-06')),['older-paper-new-addition','recent-publication']);
  assert.equal(ui.matchesTime(articles[1],'7',metadata,null,'2026-09-07'),false);
  assert.equal(ui.chicagoDate('2026-09-07T02:00:00Z'),'2026-09-06');
});
test('impact, area, type, search, and date filters combine',()=>{
  assert.deepEqual(ids(ui.filterArticles(articles,{...base,impact:'Practice informing',area:'Bone & Joint',type:'Trial',query:'10.1234/pji',time:'30'},metadata,null,'2026-09-06')),['older-paper-new-addition']);
  assert.equal(ui.filterArticles(articles,{...base,impact:'Practice changing',query:'PJI'},metadata,null,'2026-09-06').length,0);
});
test('first visit creates a baseline without labelling the whole archive new',()=>{
  const visit=ui.visitState(null,['a'],'2026-09-06T12:00:00Z');
  assert.equal(visit.previousIds,null);
  assert.equal(ui.matchesTime({id:'a'},'new',{},visit.previousIds,'2026-09-06'),false);
});
test('return visit catches additions, and refresh preserves the same catch-up session',()=>{
  const initial=ui.visitState(null,['a'],'2026-09-04T12:00:00Z');
  const returning=ui.visitState(initial,['a','b'],'2026-09-06T12:00:00Z');
  assert.equal(ui.matchesTime({id:'b'},'new',{},returning.previousIds,'2026-09-06'),true);
  const refreshed=ui.visitState(returning,['a','b'],'2026-09-06T12:05:00Z');
  assert.equal(ui.matchesTime({id:'b'},'new',{},refreshed.previousIds,'2026-09-06'),true);
  const later=ui.visitState(refreshed,['a','b'],'2026-09-06T14:00:00Z');
  assert.equal(ui.matchesTime({id:'b'},'new',{},later.previousIds,'2026-09-06'),false);
});
test('malformed visit data resets safely',()=>{
  assert.equal(ui.visitState({seenIds:'bad',lastVisit:'never'},['a']).previousIds,null);
});
test('review dates follow the existing cadence across delayed reviews and DST',()=>{
  assert.equal(ui.nextReview('2026-09-06'),'2026-09-08');
  assert.equal(ui.nextReview('2026-09-09'),'2026-09-10');
  assert.equal(ui.nextReview('2026-10-31'),'2026-11-01');
});
test('citations use recorded fields and permalinks preserve legacy ids',()=>{
  assert.equal(ui.summaryUrl({id:'dfO-clean-margin-2026'}),'https://docarcshot.github.io/id-practice-update/#dfO-clean-margin-2026');
  assert.equal(ui.citation(articles[0]),'Oral treatment for PJI. Journal. 2026-01-15. https://doi.org/10.1234/pji');
  assert(ui.citation(articles[1]).endsWith('https://example.org/hiv'));
});
