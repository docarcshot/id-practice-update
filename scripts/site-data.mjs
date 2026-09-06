import fs from 'node:fs';
import vm from 'node:vm';

export const dataFiles = [
  'data/articles.js',
  'data/backfill-2026-jul.js',
  'data/backfill-2026-apr-may.js',
  'data/backfill-2026-mar.js',
  'data/backfill-2026-jan-feb.js'
];

export function loadData(root = '.') {
  const context = vm.createContext({window: {ID_ARTICLES: []}});
  for (const file of [...dataFiles, 'data/status.js', 'ui-core.js']) {
    vm.runInContext(fs.readFileSync(`${root}/${file}`, 'utf8'), context, {filename:file, timeout:1000});
  }
  return context.window;
}
