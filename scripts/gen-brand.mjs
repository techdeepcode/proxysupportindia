// ============================================================
// Brand asset generator for ProxySupportIndia.com
// Renders the logo + every derived image (favicon, PWA, OG,
// social profile/cover images) from vector definitions using
// the exact site theme colors. Run: node scripts/gen-brand.mjs
// ============================================================
import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUB = join(ROOT, 'public');
const BRAND = join(PUB, 'brand');
const OG = join(PUB, 'og');
mkdirSync(BRAND, { recursive: true });
mkdirSync(OG, { recursive: true });

// ---- Brand palette (matches src/styles/global.css) ----
const C = {
  jamun: '#2E2159',
  violet: '#6D28D9',
  violetDeep: '#4C2FA8',
  brass: '#C9A227',
  brassLite: '#E8C860',
  consoleBg: '#191233',
  consoleCard: '#241B46',
  white: '#FFFFFF',
  wa: '#25D366',
  ink: '#221A3E',
};
const FONT = "'Segoe UI', 'Helvetica Neue', Arial, sans-serif";

// ---- Reusable SVG pieces ----
// Shared gradient/defs used by every document.
function defs(extra = '') {
  return `<defs>
    <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${C.jamun}"/>
      <stop offset="1" stop-color="${C.violet}"/>
    </linearGradient>
    <linearGradient id="scene" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${C.consoleBg}"/>
      <stop offset="0.55" stop-color="${C.jamun}"/>
      <stop offset="1" stop-color="${C.violetDeep}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.6">
      <stop offset="0" stop-color="${C.violet}" stop-opacity="0.55"/>
      <stop offset="1" stop-color="${C.violet}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="brassG" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${C.brass}"/>
      <stop offset="1" stop-color="${C.brassLite}"/>
    </linearGradient>
    ${extra}
  </defs>`;
}

// The logomark: rounded jamun→violet badge, brass border, "PS" monogram,
// brass underline accent. Drawn in a 120×120 space, scalable via translate/scale.
function mark(x, y, size, { border = true } = {}) {
  const s = size / 120;
  return `<g transform="translate(${x},${y}) scale(${s})">
    <rect x="0" y="0" width="120" height="120" rx="28" fill="url(#mark)"/>
    ${border ? `<rect x="6.5" y="6.5" width="107" height="107" rx="22" fill="none" stroke="${C.brass}" stroke-width="2.4" opacity="0.7"/>` : ''}
    <text x="60" y="78" text-anchor="middle" font-family="${FONT}" font-size="58" font-weight="800" letter-spacing="0.5" fill="${C.white}">PS</text>
    <rect x="42" y="90" width="36" height="4.5" rx="2.25" fill="url(#brassG)"/>
  </g>`;
}

// Faint console dot-grid overlay for scene backgrounds.
function dotGrid(w, h, step = 46) {
  let d = '';
  for (let yy = step; yy < h; yy += step)
    for (let xx = step; xx < w; xx += step)
      d += `<circle cx="${xx}" cy="${yy}" r="1.3" fill="${C.white}" opacity="0.05"/>`;
  return d;
}

async function renderSVG(svg, out, w, h) {
  await sharp(Buffer.from(svg)).resize(w, h).png({ compressionLevel: 9 }).toFile(out);
  console.log('  ✓', out.replace(ROOT + '\\', '').replace(ROOT + '/', ''), `(${w}×${h})`);
}

// ---- 1. Standalone logo SVGs (for downloads / external use) ----
function saveSVG(name, svg) {
  writeFileSync(join(BRAND, name), svg);
  console.log('  ✓ brand/' + name);
}

const markDoc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" aria-label="Proxy Support India logomark">${defs()}${mark(0, 0, 120)}</svg>`;
saveSVG('logo-mark.svg', markDoc);

// Horizontal lockup (transparent bg) — dark wordmark for light backgrounds.
function lockup(wordFill, indiaFill, tagFill) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 140" role="img" aria-label="Proxy Support India">
    ${defs()}
    ${mark(0, 10, 120)}
    <text x="140" y="66" font-family="${FONT}" font-size="40" font-weight="800" letter-spacing="0.2" fill="${wordFill}">Proxy Support <tspan fill="${indiaFill}">India</tspan></text>
    <text x="142" y="98" font-family="${FONT}" font-size="18.5" font-weight="600" letter-spacing="1.5" fill="${tagFill}">END-TO-END IT CAREER PROXY SUPPORT</text>
  </svg>`;
}
saveSVG('logo-horizontal.svg', lockup(C.ink, C.violet, C.brass));           // light backgrounds
saveSVG('logo-horizontal-light.svg', lockup(C.white, C.brassLite, C.brassLite)); // dark backgrounds

// ---- 2. Favicons + app icons ----
// PNG icons from the mark (no border tweak for tiny sizes handled by rx scaling).
const markPNG = (size, border = true) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 120 120">${defs()}${mark(0, 0, 120, { border })}</svg>`;

await renderSVG(markPNG(180), join(PUB, 'apple-touch-icon.png'), 180, 180);
await renderSVG(markPNG(192), join(OG, 'icon-192.png'), 192, 192);
await renderSVG(markPNG(512), join(OG, 'icon-512.png'), 512, 512);
await renderSVG(markPNG(512), join(BRAND, 'logo-mark-512.png'), 512, 512);
await renderSVG(markPNG(1024), join(BRAND, 'logo-mark-1024.png'), 1024, 1024);

// favicon.ico — pack 16/32/48/64 PNGs into a single .ico
async function buildICO(sizes, outPath) {
  const imgs = [];
  for (const sz of sizes) {
    const buf = await sharp(Buffer.from(markPNG(sz, sz >= 48))).resize(sz, sz).png().toBuffer();
    imgs.push({ sz, buf });
  }
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(imgs.length, 4);
  const entries = []; const payloads = [];
  let offset = 6 + imgs.length * 16;
  for (const { sz, buf } of imgs) {
    const e = Buffer.alloc(16);
    e.writeUInt8(sz >= 256 ? 0 : sz, 0);
    e.writeUInt8(sz >= 256 ? 0 : sz, 1);
    e.writeUInt8(0, 2); e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6);
    e.writeUInt32LE(buf.length, 8); e.writeUInt32LE(offset, 12);
    offset += buf.length; entries.push(e); payloads.push(buf);
  }
  writeFileSync(outPath, Buffer.concat([header, ...entries, ...payloads]));
  console.log('  ✓', outPath.replace(ROOT + '\\', '').replace(ROOT + '/', ''), `(${sizes.join('/')})`);
}
await buildICO([16, 32, 48, 64], join(PUB, 'favicon.ico'));

// ---- 3. Scene builder for OG + social covers (dark console aesthetic) ----
function scene({ w, h, markSize, markX, markY, textX, brandSize, tagSize, lines = true, centered = false, cta = true }) {
  const anchor = centered ? 'middle' : 'start';
  const tx = textX;
  const brandY = markY + markSize * 0.42;
  const tagY = brandY + brandSize * 0.62;
  const svcY = tagY + tagSize * 2.1;
  const mktY = svcY + tagSize * 1.5;
  const services = 'Proxy Interview Support · Proxy Job Support · Profile Engineering';
  const markets = 'USA · Canada · UK · Europe · Australia · Singapore · Japan · India';
  const showLines = lines && h > 300;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    ${defs()}
    <rect width="${w}" height="${h}" fill="url(#scene)"/>
    <ellipse cx="${w * 0.78}" cy="${h * 0.2}" rx="${w * 0.4}" ry="${h * 0.5}" fill="url(#glow)"/>
    ${dotGrid(w, h)}
    <rect x="0" y="0" width="${w}" height="6" fill="url(#brassG)"/>
    ${mark(markX, markY, markSize)}
    <text x="${tx}" y="${brandY}" text-anchor="${anchor}" font-family="${FONT}" font-size="${brandSize}" font-weight="800" fill="${C.white}">Proxy Support <tspan fill="${C.brassLite}">India</tspan></text>
    <text x="${tx}" y="${tagY}" text-anchor="${anchor}" font-family="${FONT}" font-size="${tagSize}" font-weight="700" letter-spacing="${tagSize * 0.06}" fill="${C.brass}">END-TO-END IT CAREER PROXY SUPPORT</text>
    ${showLines ? `<text x="${tx}" y="${svcY}" text-anchor="${anchor}" font-family="${FONT}" font-size="${tagSize * 0.92}" font-weight="600" fill="${C.white}" opacity="0.92">${services}</text>` : ''}
    ${showLines ? `<text x="${tx}" y="${mktY}" text-anchor="${anchor}" font-family="${FONT}" font-size="${tagSize * 0.82}" font-weight="500" fill="${C.white}" opacity="0.7">${markets}</text>` : ''}
    ${cta ? `<text x="${centered ? w / 2 : tx}" y="${h - 34}" text-anchor="${anchor}" font-family="${FONT}" font-size="${tagSize * 0.92}" font-weight="700" fill="${C.white}">proxysupportindia.com &#160; &#160;<tspan fill="${C.wa}">●</tspan> <tspan fill="${C.white}">WhatsApp +91 96539 59626</tspan></text>` : ''}
  </svg>`;
}

// OG / social share — 1200×630
const ogSVG = scene({ w: 1200, h: 630, markSize: 150, markX: 90, markY: 150, textX: 270, brandSize: 74, tagSize: 27 });
await renderSVG(ogSVG, join(OG, 'default-og.png'), 1200, 630);
await renderSVG(ogSVG, join(BRAND, 'og-1200x630.png'), 1200, 630);

// Facebook cover — 1640×624 (content kept within centered safe area)
const fbSVG = scene({ w: 1640, h: 624, markSize: 150, markX: 300, markY: 150, textX: 480, brandSize: 78, tagSize: 28 });
await renderSVG(fbSVG, join(BRAND, 'facebook-cover-1640x624.png'), 1640, 624);

// LinkedIn company cover — 1128×376
const liCoSVG = scene({ w: 1128, h: 376, markSize: 110, markX: 70, markY: 70, textX: 210, brandSize: 58, tagSize: 21, cta: false });
await renderSVG(liCoSVG, join(BRAND, 'linkedin-company-cover-1128x376.png'), 1128, 376);

// LinkedIn personal banner — 1584×396
const liPeSVG = scene({ w: 1584, h: 396, markSize: 120, markX: 110, markY: 80, textX: 270, brandSize: 62, tagSize: 22, cta: false });
await renderSVG(liPeSVG, join(BRAND, 'linkedin-personal-banner-1584x396.png'), 1584, 396);

// X / Twitter header — 1500×500
const xSVG = scene({ w: 1500, h: 500, markSize: 130, markX: 120, markY: 110, textX: 290, brandSize: 66, tagSize: 24, cta: false });
await renderSVG(xSVG, join(BRAND, 'x-twitter-header-1500x500.png'), 1500, 500);

// ---- 4. Social profile image — 1000×1000, circle-crop safe (mark centered) ----
const profileSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 1000 1000">
  ${defs()}
  <rect width="1000" height="1000" fill="url(#scene)"/>
  <ellipse cx="500" cy="430" rx="520" ry="520" fill="url(#glow)"/>
  ${mark(310, 230, 380)}
  <text x="500" y="770" text-anchor="middle" font-family="${FONT}" font-size="62" font-weight="800" fill="${C.white}">Proxy Support <tspan fill="${C.brassLite}">India</tspan></text>
  <text x="500" y="825" text-anchor="middle" font-family="${FONT}" font-size="26" font-weight="700" letter-spacing="2" fill="${C.brass}">IT CAREER PROXY SUPPORT</text>
</svg>`;
await renderSVG(profileSVG, join(BRAND, 'social-profile-1000.png'), 1000, 1000);
// Plain circular-safe mark-only profile (no text) for tight avatars.
await renderSVG(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 1000 1000">${defs()}<rect width="1000" height="1000" fill="url(#scene)"/>${mark(180, 180, 640)}</svg>`,
  join(BRAND, 'social-profile-mark-1000.png'), 1000, 1000
);

console.log('\nBrand asset generation complete.');
