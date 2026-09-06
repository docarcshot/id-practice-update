import fs from 'node:fs';
import vm from 'node:vm';
import {execFileSync} from 'node:child_process';
import {loadData, dataFiles} from './site-data.mjs';

const git = args => execFileSync('git', args, {encoding:'utf8', maxBuffer:16 * 1024 * 1024}).trim();
const {ID_ARTICLES: articles, ID_STATUS: status, ID_UI: ui} = loadData();
if (git(['rev-parse', '--is-shallow-repository']) === 'true') throw new Error('Full repository history is required to recover dates added.');
const metadata = {};
const commits = git(['log', '--reverse', '--format=%H|%cI', '--', ...dataFiles]).split('\n').filter(Boolean);
for (const line of commits) {
  const [sha, addedAt] = line.split('|');
  const files = git(['diff-tree', '--root', '--no-commit-id', '--name-only', '-r', sha, '--', ...dataFiles]).split('\n').filter(Boolean);
  for (const file of files) {
    const context = vm.createContext({window:{ID_ARTICLES:[]}});
    vm.runInContext(git(['show', `${sha}:${file}`]), context, {filename:`${sha}:${file}`, timeout:1000});
    for (const article of context.window.ID_ARTICLES) {
      if (!metadata[article.id]) metadata[article.id] = {addedAt, commit:sha};
    }
  }
}
for (const article of articles) {
  if (!metadata[article.id]) throw new Error(`No committed date added for ${article.id}. Commit the accepted entry before generating publication metadata.`);
}
const activeMetadata = Object.fromEntries(articles.map(a => [a.id, metadata[a.id]]));
const newCount = articles.filter(a => ui.chicagoDate(metadata[a.id].addedAt) === status.lastReviewed).length;
const publication = {
  sourceCommit:git(['rev-parse', 'HEAD']),
  generatedAt:new Date().toISOString(),
  reviewedThrough:status.lastReviewed,
  newCount,
  articles:activeMetadata
};
fs.writeFileSync('data/article-metadata.js', `window.ID_PUBLICATION = ${JSON.stringify(publication, null, 2)};\n`);
console.log(`Recovered dates added for ${articles.length} entries. ${newCount} added on the latest review date.`);
