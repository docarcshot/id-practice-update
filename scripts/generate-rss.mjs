import fs from 'node:fs';
import vm from 'node:vm';

const dataFiles = [
  'data/articles.js',
  'data/backfill-2026-jul.js',
  'data/backfill-2026-apr-may.js',
  'data/backfill-2026-mar.js',
  'data/backfill-2026-jan-feb.js'
];

const context = { window: { ID_ARTICLES: [] } };
vm.createContext(context);

for (const file of dataFiles) {
  const source = fs.readFileSync(file, 'utf8');
  vm.runInContext(source, context, { filename: file });
}

const escapeXml = value => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

const siteUrl = 'https://docarcshot.github.io/id-practice-update/';
const feedUrl = `${siteUrl}rss.xml`;

const articles = [...context.window.ID_ARTICLES]
  .filter(article => article?.title && article?.date && article?.link)
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 30);

const items = articles.map(article => {
  const publicationDate = new Date(`${article.date}T12:00:00Z`).toUTCString();
  const description = [
    article.summary,
    article.takeaway ? `Practical takeaway: ${article.takeaway}` : ''
  ].filter(Boolean).join('\n\n');

  return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(article.link)}</link>
      <guid isPermaLink="false">id-practice-update:${escapeXml(article.id || article.doi || article.link)}</guid>
      <pubDate>${publicationDate}</pubDate>
      <category>${escapeXml(article.impact || 'ID literature')}</category>
      <description>${escapeXml(description)}</description>
    </item>`;
}).join('\n');

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ID Practice Update</title>
    <link>${siteUrl}</link>
    <description>Selected adult infectious diseases literature with concise clinical summaries and practical takeaways.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

fs.writeFileSync('rss.xml', rss, 'utf8');
console.log(`Generated rss.xml with ${articles.length} entries.`);
