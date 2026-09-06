import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {execFileSync} from 'node:child_process';
import {loadData, dataFiles} from './site-data.mjs';

const {ID_ARTICLES:articles, ID_STATUS:status, ID_UI:ui} = loadData();
assert(articles.length, 'The archive must contain entries.');
const validDate = value => /^\d{4}-\d{2}-\d{2}$/.test(value) && new Date(value + 'T12:00:00Z').toISOString().slice(0,10) === value;
const today = ui.chicagoDate(new Date());
const required = ['id','date','title','type','journal','impact','summary','change','takeaway','limitations','link'];
const ids = new Set(), dois = new Set(), titles = new Set();
for (const a of articles) {
  for (const field of required) assert(typeof a[field] === 'string' && a[field].trim(), `${a.id}: missing ${field}`);
  assert(/^[A-Za-z0-9][A-Za-z0-9_-]*$/.test(a.id), `Invalid permalink id ${a.id}`);
  assert(!ids.has(a.id), `Duplicate id ${a.id}`); ids.add(a.id);
  assert(validDate(a.date) && a.date <= today, `${a.id}: invalid or future publication date`);
  assert(ui.impacts.includes(a.impact), `${a.id}: invalid impact`);
  assert(Array.isArray(a.tags) && a.tags.length && a.tags.every(t => typeof t === 'string' && t.trim()), `${a.id}: invalid tags`);
  assert(['http:','https:'].includes(new URL(a.link).protocol), `${a.id}: invalid source URL`);
  const title = ui.normalizeTitle(a.title);
  assert(!titles.has(title), `Duplicate title ${a.title}`); titles.add(title);
  if (a.doi) {
    const doi = ui.normalizeDoi(a.doi);
    assert(/^10\.\d{4,9}\/\S+$/i.test(doi), `${a.id}: invalid DOI`);
    assert(!dois.has(doi), `Duplicate DOI ${doi}`); dois.add(doi);
  }
}
assert(validDate(status.lastReviewed) && status.lastReviewed <= today, 'Invalid review date');
if (status.lastAttempt) {
  assert(validDate(status.lastAttempt.date) && status.lastAttempt.date <= today, 'Invalid last-attempt date');
  assert(['success','failed'].includes(status.lastAttempt.result), 'Invalid review outcome');
  if (status.lastAttempt.result === 'success') assert.equal(status.lastReviewed, status.lastAttempt.date, 'Successful review and attempt dates disagree');
  else assert(status.lastAttempt.date >= status.lastReviewed, 'Failed attempt predates the published review');
}
const html = fs.readFileSync('index.html','utf8');
const localAssets = [...html.matchAll(/(?:src|href)="([^"#]+\.(?:js|css))\?v=([^"&]+)"/g)].map(m => ({path:m[1],token:m[2]}));
assert(localAssets.length >= dataFiles.length + 5, 'Missing versioned assets');
assert.equal(new Set(localAssets.map(a=>a.token)).size, 1, 'All local scripts and styles must use the same cache version');
for (const path of [...dataFiles,'data/status.js','data/article-metadata.js','ui-core.js','app.js','latest.js','styles.css']) assert(localAssets.some(a=>a.path === path), `Missing versioned ${path}`);
for (const a of localAssets) assert(fs.existsSync(a.path), `Missing asset ${a.path}`);
const publicationContext=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync('data/article-metadata.js','utf8'),publicationContext,{timeout:1000});
const publication=publicationContext.window.ID_PUBLICATION;
assert.equal(publication.reviewedThrough,status.lastReviewed,'Stale publication metadata');
assert.deepEqual(Object.keys(publication.articles).sort(),[...ids].sort(),'Publication metadata does not match the accepted set');
assert.equal(publication.sourceCommit,execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),'Stale publication commit');
for (const a of localAssets.filter(a=>a.path.endsWith('.js'))) new vm.Script(fs.readFileSync(a.path,'utf8'),{filename:a.path});
// Prevent a content change from retaining the previous commit's cache URLs.
try {
  const changed=execFileSync('git',['diff','HEAD^','HEAD','--name-only'],{encoding:'utf8'}).trim().split('\n');
  if (changed.some(p=>p === 'data/status.js' || dataFiles.includes(p))) {
    const oldHtml=execFileSync('git',['show','HEAD^:index.html'],{encoding:'utf8'});
    const oldToken=oldHtml.match(/data\/articles\.js\?v=([^"&]+)/)?.[1];
    assert.notEqual(localAssets[0].token,oldToken,'Content changed without a new cache token. Commit content, status, and cache URLs together.');
  }
} catch (error) {
  if (error.code === 'ERR_ASSERTION') throw error;
  if (!String(error.stderr || '').includes('HEAD^')) throw error;
}
console.log(`Validated ${articles.length} entries, unique IDs/titles/DOIs, review status, publication metadata, and versioned assets.`);
