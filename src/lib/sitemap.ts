// Sitemap helpers — build per-cluster URL sets from the page registry
// and render valid <urlset> XML.
import { getAllPages } from '@data/pageRegistry';
import { countries } from '@data/countries';
import { cities } from '@data/cities';
import { blogIndex } from '@data/blogs';
import { knowledgeBase } from '@data/knowledgeBase';
import { riqTopics } from '@data/realInterviewQuestions';

const SITE = 'https://proxysupportindia.com';
export const LASTMOD = '2026-07-14';

export interface Url { loc: string; priority?: number; changefreq?: string; lastmod?: string; }

const abs = (p: string) => `${SITE}${p === '/' ? '/' : '/' + p.replace(/^\//, '').replace(/\/$/, '') + '/'}`;

export function urlset(urls: Url[]): Response {
  const body = urls
    .map((u) => {
      const parts = [`    <loc>${abs(u.loc)}</loc>`, `    <lastmod>${u.lastmod ?? LASTMOD}</lastmod>`];
      if (u.changefreq) parts.push(`    <changefreq>${u.changefreq}</changefreq>`);
      if (u.priority != null) parts.push(`    <priority>${u.priority.toFixed(1)}</priority>`);
      return `  <url>\n${parts.join('\n')}\n  </url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

// ---- Cluster URL sets ----
export function corePagesUrls(): Url[] {
  return [
    { loc: '/', priority: 1.0, changefreq: 'weekly' },
    { loc: '/services', priority: 0.9, changefreq: 'weekly' },
    { loc: '/technologies', priority: 0.9, changefreq: 'weekly' },
    { loc: '/countries', priority: 0.9, changefreq: 'weekly' },
    { loc: '/locations', priority: 0.8, changefreq: 'weekly' },
    // NOTE: /india-to-global-proxy-support is emitted by the data-driven
    // services sitemap — don't duplicate it here.
    { loc: '/direct-it-support-no-middlemen', priority: 0.8, changefreq: 'monthly' },
    { loc: '/high-paying-it-roles', priority: 0.8, changefreq: 'monthly' },
    { loc: '/forward-deployed-engineer', priority: 0.85, changefreq: 'weekly' },
    { loc: '/how-to-get-it-jobs', priority: 0.8, changefreq: 'weekly' },
    { loc: '/blog', priority: 0.8, changefreq: 'weekly' },
    { loc: '/knowledge-base', priority: 0.8, changefreq: 'weekly' },
    { loc: '/real-interview-questions', priority: 0.8, changefreq: 'weekly' },
    { loc: '/contact', priority: 0.7, changefreq: 'monthly' },
    { loc: '/pricing', priority: 0.7, changefreq: 'monthly' },
    { loc: '/about', priority: 0.6, changefreq: 'monthly' },
  ];
}

export function servicesUrls(): Url[] {
  const pages = getAllPages().filter((p) => p.kind === 'service' || p.kind === 'service-country' || p.kind === 'how-to-get');
  return pages.map((p) => ({ loc: '/' + p.slug, priority: p.priority, changefreq: 'weekly' }));
}

export function technologiesUrls(): Url[] {
  const pages = getAllPages().filter((p) => p.kind === 'tech-interview' || p.kind === 'tech-job' || p.kind === 'tech-country' || p.kind === 'fde');
  return pages.map((p) => ({ loc: '/' + p.slug, priority: p.priority, changefreq: 'weekly' }));
}

export function locationsUrls(): Url[] {
  const pages = getAllPages().filter((p) => p.kind === 'city' || p.kind === 'india-to-global' || p.kind === 'tech-city');
  const dyn = pages.map((p) => ({ loc: '/' + p.slug, priority: p.priority, changefreq: 'weekly' }));
  const countryOverviews = countries.map((c) => ({ loc: `/countries/${c.slug}`, priority: c.center ? 0.8 : 0.6, changefreq: 'weekly' }));
  return [...countryOverviews, ...dyn];
}

export function blogUrls(): Url[] {
  return blogIndex.map((b) => ({ loc: `/blog/${b.slug}`, priority: 0.6, changefreq: 'monthly' }));
}
export function kbUrls(): Url[] {
  return knowledgeBase.map((k) => ({ loc: `/knowledge-base/${k.slug}`, priority: 0.6, changefreq: 'monthly' }));
}
export function riqUrls(): Url[] {
  return riqTopics.map((t) => ({ loc: `/real-interview-questions/${t.slug}`, priority: 0.6, changefreq: 'monthly' }));
}

export function sitemapIndex(): Response {
  const names = ['sitemap-pages', 'sitemap-services', 'sitemap-technologies', 'sitemap-locations', 'sitemap-blog', 'sitemap-knowledge-base', 'sitemap-real-interview-questions'];
  const body = names.map((n) => `  <sitemap>\n    <loc>${SITE}/${n}.xml</loc>\n    <lastmod>${LASTMOD}</lastmod>\n  </sitemap>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
