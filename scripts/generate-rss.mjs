import fs from 'node:fs';
import vm from 'node:vm';
import {loadData} from './site-data.mjs';
const {ID_ARTICLES:allArticles, ID_UI:ui} = loadData();
const context = vm.createContext({window:{}});
vm.runInContext(fs.readFileSync('data/article-metadata.js','utf8'),context,{timeout:1000});
const metadata = context.window.ID_PUBLICATION.articles;
const escapeXml = value => String(value ?? '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&apos;');
const articles = ui.sortArticles(allArticles, 'added', metadata).slice(0,30);
const items = articles.map(article => {
  const description = [
    `Published ${article.date}. Added ${ui.chicagoDate(metadata[article.id].addedAt)}.`,
    article.summary,
    `Practical takeaway: ${article.takeaway}`,
    `Primary source: ${article.link}`
  ].join('\n\n');
  return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(ui.summaryUrl(article))}</link>
      <guid isPermaLink="false">id-practice-update:${escapeXml(article.id)}</guid>
      <pubDate>${new Date(metadata[article.id].addedAt).toUTCString()}</pubDate>
      <category>${escapeXml(article.impact)}</category>
      <description>${escapeXml(description)}</description>
    </item>`;
}).join('\n');
fs.writeFileSync('rss.xml', `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ID Practice Update</title>
    <link>${ui.SITE_URL}</link>
    <description>Selected adult infectious diseases literature with concise clinical summaries and practical takeaways.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${ui.SITE_URL}rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`);
console.log(`Generated rss.xml with ${articles.length} summaries and stable item IDs.`);
