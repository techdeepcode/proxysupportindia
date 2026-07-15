// One-off: convert plain page headers to <PageHero> on static hub/standalone pages.
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const files = [
  'src/pages/services/index.astro',
  'src/pages/technologies/index.astro',
  'src/pages/countries/index.astro',
  'src/pages/locations/index.astro',
  'src/pages/blog/index.astro',
  'src/pages/knowledge-base/index.astro',
  'src/pages/real-interview-questions/index.astro',
  'src/pages/pricing.astro',
  'src/pages/contact.astro',
];

const unesc = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const attr = (s) => unesc(s).replace(/"/g, '&quot;').trim();

const re = /<div class="wrap"><Breadcrumbs items=\{crumbs\} \/><\/div>\s*\n\s*<(section|article) class="wrap section" style="padding-top:\.5rem;">\s*\n\s*<p class="eyebrow">([\s\S]*?)<\/p>\s*\n\s*<h1[^>]*>([\s\S]*?)<\/h1>\s*\n\s*<p class="lead-intro"[^>]*>([\s\S]*?)<\/p>/;

for (const rel of files) {
  const p = join(root, rel);
  let src = readFileSync(p, 'utf8');
  const m = src.match(re);
  if (!m) { console.log('SKIP (no match):', rel); continue; }
  const [, tag, eyebrow, h1, intro] = m;
  if (/[{<]/.test(h1) || /[{<]/.test(intro)) { console.log('SKIP (dynamic):', rel); continue; }
  const hero = `<PageHero eyebrow="${attr(eyebrow)}" h1="${attr(h1)}" intro="${attr(intro)}" breadcrumb={crumbs} />\n  <${tag} class="wrap section">`;
  src = src.replace(re, hero);
  src = src.replace("import Breadcrumbs from '@components/Breadcrumbs.astro';", "import PageHero from '@components/PageHero.astro';");
  writeFileSync(p, src);
  console.log('OK:', rel);
}
