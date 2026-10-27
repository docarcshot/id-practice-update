import test from 'node:test';
import assert from 'node:assert/strict';
import {parsePage,localTarget,validateLinks,validateReviews,digest,removedAnchors} from './lecture-links.mjs';

test('missing destination and missing fragment block a release',()=>{
 const pages=new Map([
  ['lectures/a.html',parsePage('<a href="b.html#missing">B</a><a href="absent.html">Absent</a>')],
  ['lectures/b.html',parsePage('<h2 id="treatment">Treatment</h2>')]
 ]);
 const errors=validateLinks(pages,['lectures/a.html'],x=>pages.has(x));
 assert.equal(errors.length,2);
 assert(errors.some(x=>x.includes('missing destination')));
 assert(errors.some(x=>x.includes('missing section')));
});

test('moving or retitling content preserves links; a compatibility anchor permits renaming',()=>{
 const old=parsePage('<section id="treatment"><h2>Old heading</h2></section>');
 const moved=parsePage('<div>Introduction</div><section id="treatment"><h2>New heading</h2></section>');
 assert.deepEqual(removedAnchors(old,moved),[]);
 const renamed=parsePage('<section id="therapy"><span id="treatment"></span><h2>Therapy</h2></section>');
 assert.deepEqual(removedAnchors(old,renamed),[]);
 assert.deepEqual(removedAnchors(old,parsePage('<section id="therapy">Therapy</section>')),['treatment']);
});

test('same-site absolute URLs, encoded fragments, query strings and directories resolve',()=>{
 assert.deepEqual(localTarget('lectures/a.html','https://docarcshot.github.io/id-practice-update/lectures/b.html?v=2#drug%20levels'),{file:'lectures/b.html',anchor:'drug levels'});
 assert.deepEqual(localTarget('lectures/a.html','./'),{file:'lectures/index.html',anchor:''});
 assert.deepEqual(localTarget('lectures/a.html','../'),{file:'index.html',anchor:''});
 assert.equal(localTarget('lectures/a.html','https://www.idsociety.org/guidelines'),null);
});

test('parser ignores script and comment pseudo-links, handles HTML entities, and detects duplicate IDs',()=>{
 const p=parsePage(`<script>const text='<a href="ghost.html">';</script><!-- <a href="other.html"> --><h2 id='dose'>Doses</h2><span id="dose"></span><a href='b.html?x=1&amp;y=2#dose'>1 > 0</a>`);
 assert.deepEqual(p.links,['b.html?x=1&y=2#dose']);
 assert.deepEqual(p.duplicates,['dose']);
});

test('editing a reviewed module or adding an unreviewed module requires a fresh record',()=>{
 const text='<h1>Antibiotics</h1>';
 const record={sha256:digest(text),reviewedOn:'2026-10-27',relatedModulesReviewed:[],incomingLinksReviewed:true,outgoingLinksReviewed:true,catalogReviewed:true,note:'Reviewed catalog and incoming and outgoing link placement.'};
 assert.deepEqual(validateReviews(new Map([['lectures/a.html',text]]),{'lectures/a.html':record}),[]);
 assert(validateReviews(new Map([['lectures/a.html',text+'<p>Changed scope</p>']]),{'lectures/a.html':record})[0].includes('stale'));
 assert(validateReviews(new Map([['lectures/new.html',text]]),{})[0].includes('missing'));
 assert(validateReviews(new Map([['lectures/a.html',text]]),{'lectures/a.html':{...record,incomingLinksReviewed:false}})[0].includes('incomplete'));
});
