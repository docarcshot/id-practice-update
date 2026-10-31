import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const host = 'https://docarcshot.github.io';
const base = '/id-practice-update/';
const decode = value => value.replace(/&#(x[\da-f]+|\d+);/gi, (_,n) => String.fromCodePoint(n[0].toLowerCase()==='x' ? parseInt(n.slice(1),16) : Number(n))).replace(/&(?:amp|quot|apos|lt|gt);/g, x => ({'&amp;':'&','&quot;':'"','&apos;':"'",'&lt;':'<','&gt;':'>'}[x]));
export function parsePage(html) {
  // Ignore comments and raw-text elements; quoted attribute values may contain >.
  const clean = html.replace(/<!--[\s\S]*?-->/g,'').replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi,'');
  const ids = new Set(), duplicates = [], links = [];
  for (const match of clean.matchAll(/<([a-z][\w:-]*)\b((?:[^>"']|"[^"]*"|'[^']*')*)>/gi)) {
    const attrs = {};
    for (const a of match[2].matchAll(/([^\s=<>/'"]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) attrs[a[1].toLowerCase()] = decode(a[2] ?? a[3] ?? a[4]);
    if (attrs.id) { if (ids.has(attrs.id)) duplicates.push(attrs.id); ids.add(attrs.id); }
    if (match[1].toLowerCase()==='a') {
      if (attrs.name) ids.add(attrs.name);
      if (attrs.href !== undefined) links.push(attrs.href);
    }
  }
  return {ids, duplicates, links};
}
export function localTarget(source, href) {
  const url = new URL(href, host + base + source);
  if (url.origin !== host || !url.pathname.startsWith(base)) return null;
  let target = decodeURIComponent(url.pathname.slice(base.length));
  if (!target || target.endsWith('/')) target += 'index.html';
  return {file:target, anchor:decodeURIComponent(url.hash.slice(1))};
}
export function validateLinks(pages, sources, exists) {
  const errors=[];
  for (const source of sources) {
    const page=pages.get(source);
    for (const id of page.duplicates) errors.push(`${source}: duplicate ID ${id}`);
    for (const href of page.links) {
      let target;
      try {target=localTarget(source,href);} catch {errors.push(`${source}: invalid URL ${href}`);continue;}
      if (!target) continue;
      if (!exists(target.file)) {errors.push(`${source}: missing destination ${href}`);continue;}
      if (target.anchor && /\.html?$/i.test(target.file) && !pages.get(target.file)?.ids.has(target.anchor)) errors.push(`${source}: missing section ${href}`);
    }
  }
  return errors;
}
export const digest = text => crypto.createHash('sha256').update(text).digest('hex');
export function validateReviews(modules, reviews) {
  const errors=[];
  for (const [file,text] of modules) {
    const r=reviews[file];
    if (!r || r.sha256 !== digest(text)) {errors.push(`${file}: cross-link review missing or stale; follow docs/lecture-link-protocol.md`);continue;}
    if (!/^\d{4}-\d{2}-\d{2}$/.test(r.reviewedOn || '') || !r.incomingLinksReviewed || !r.outgoingLinksReviewed || !r.catalogReviewed || typeof r.note!=='string' || r.note.trim().length<20 || !Array.isArray(r.relatedModulesReviewed)) errors.push(`${file}: incomplete editorial review record`);
    for (const related of r.relatedModulesReviewed || []) if (!modules.has(related) || related===file) errors.push(`${file}: invalid related module ${related}`);
  }
  for (const file of Object.keys(reviews)) if (!modules.has(file)) errors.push(`${file}: obsolete review record; resolve removal or rename`);
  return errors;
}
export function removedAnchors(previous, current) {
  return [...previous.ids].filter(id => !current.ids.has(id));
}
function main() {
  const files=fs.readdirSync('lectures').filter(x=>x.endsWith('.html')).map(x=>'lectures/'+x);
  const pages=new Map();
  function readPage(file) {
    if (!pages.has(file) && fs.existsSync(file) && /\.html?$/i.test(file)) pages.set(file,parsePage(fs.readFileSync(file,'utf8')));
  }
  for (const file of ['index.html',...files]) readPage(file);
  for (const file of files) for (const href of pages.get(file).links) {try {const t=localTarget(file,href);if(t)readPage(t.file);}catch{}}
  const modules=new Map(files.filter(x=>x!=='lectures/index.html').map(x=>[x,fs.readFileSync(x,'utf8')]));
  if (process.argv[2]==='--context') {
    const file=process.argv[3];
    if (!modules.has(file)) throw Error('Provide an existing lectures/*.html module path.');
    console.log(`Review context for ${file}\nCurrent SHA-256: ${digest(modules.get(file))}`);
    for (const [source,page] of pages) for(const href of page.links) {const t=localTarget(source,href);if(t && ((t.file===file && source!==file) || (source===file && modules.has(t.file) && t.file!==file))) console.log(`${source} -> ${t.file}${t.anchor?'#'+t.anchor:''}`);}
    console.log('\nReview the full catalog for related modules not already linked:');
    for (const [f,text] of modules) console.log(f+' | '+(text.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1].replace(/<[^>]+>/g,'') || f));
    return;
  }
  const errors=validateLinks(pages,files,f=>fs.existsSync(f));
  const reviews=JSON.parse(fs.readFileSync('data/lecture-link-reviews.json','utf8'));
  errors.push(...validateReviews(modules,reviews));
  // A removed anchor needs a compatibility alias, even if no current module links to it.
  // Compare both the committed change and any local edits with the preceding revision.
  let previousFiles=[];
  try {previousFiles=execFileSync('git',['ls-tree','-r','--name-only','HEAD^','lectures'],{encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim().split('\n').filter(x=>x.endsWith('.html') && x!=='lectures/presentations/view.html');} catch {errors.push('Cannot check anchor compatibility: full Git history is required.');}
  // The owner retired the generated presentation viewer on October 31, 2026.
  // Keep compatibility checks for every other prior lecture HTML page.
  for (const file of previousFiles) readPage(file);
  for (const file of previousFiles) {
    if (!pages.has(file)) {errors.push(`${file}: removed page; preserve a compatibility page and its anchors`);continue;}
    const old=parsePage(execFileSync('git',['show',`HEAD^:${file}`],{encoding:'utf8'}));
    for (const id of removedAnchors(old,pages.get(file))) errors.push(`${file}: removed anchor #${id}; keep an alias at the equivalent section`);
  }
  if(errors.length) {console.error(errors.join('\n'));process.exitCode=1;}
  else console.log(`Validated lecture destinations, fragments, anchor compatibility, and review records for ${modules.size} modules.`);
}
if (process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) main();
