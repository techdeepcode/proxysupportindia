// Minimal, dependency-free RSS 2.0 builder.
const SITE = 'https://proxysupportindia.com';
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export interface FeedItem { title: string; path: string; description: string; }

export function rss(opts: { title: string; description: string; feedPath: string; items: FeedItem[] }): Response {
  const now = 'Mon, 14 Jul 2026 00:00:00 GMT';
  const items = opts.items
    .map((i) => `    <item>
      <title>${esc(i.title)}</title>
      <link>${SITE}${i.path}/</link>
      <guid>${SITE}${i.path}/</guid>
      <description>${esc(i.description)}</description>
      <pubDate>${now}</pubDate>
    </item>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(opts.title)}</title>
    <link>${SITE}/</link>
    <atom:link href="${SITE}${opts.feedPath}" rel="self" type="application/rss+xml" />
    <description>${esc(opts.description)}</description>
    <language>en</language>
    <lastBuildDate>${now}</lastBuildDate>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
