// ============================================================
// Transparent PNG logo pack for Canva (Instagram posts/stories)
// Mark + horizontal + stacked lockups, in white-text and dark-text
// variants, all on a TRANSPARENT background, high resolution.
// Run: node scripts/gen-logo-png.mjs
// ============================================================
import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT = join(ROOT, 'public', 'brand', 'logo');
mkdirSync(OUT, { recursive: true });

const C = {
  jamun: '#2E2159', violet: '#6D28D9', brass: '#C9A227',
  brassLite: '#E8C860', white: '#FFFFFF', ink: '#221A3E',
};
const FONT = "'Segoe UI', 'Helvetica Neue', Arial, sans-serif";

const DEFS = `<defs>
  <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="${C.jamun}"/><stop offset="1" stop-color="${C.violet}"/>
  </linearGradient>
  <linearGradient id="brassG" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="${C.brass}"/><stop offset="1" stop-color="${C.brassLite}"/>
  </linearGradient>
</defs>`;

function mark(x, y, size) {
  const s = size / 120;
  return `<g transform="translate(${x},${y}) scale(${s})">
    <rect width="120" height="120" rx="28" fill="url(#mark)"/>
    <rect x="6.5" y="6.5" width="107" height="107" rx="22" fill="none" stroke="${C.brass}" stroke-width="2.4" opacity="0.75"/>
    <text x="60" y="80" text-anchor="middle" font-family="${FONT}" font-size="60" font-weight="800" fill="${C.white}">PS</text>
    <rect x="42" y="92" width="36" height="4.5" rx="2.25" fill="url(#brassG)"/>
  </g>`;
}

async function save(name, svg, w, h) {
  await sharp(Buffer.from(svg))
    .resize(w, h, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(join(OUT, name));
  console.log('  ✓ brand/logo/' + name, `(${w}×${h}, transparent)`);
}

// ---- 1. Mark only (universal, works on any background) ----
await save('logo-mark-transparent.png',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">${DEFS}${mark(0, 0, 120)}</svg>`,
  1600, 1600);

// ---- 2. Horizontal lockup (mark + wordmark + tagline) ----
function horizontal(wordFill, indiaFill, tagFill) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 140">${DEFS}
    ${mark(0, 10, 120)}
    <text x="140" y="66" font-family="${FONT}" font-size="40" font-weight="800" fill="${wordFill}">Proxy Support <tspan fill="${indiaFill}">India</tspan></text>
    <text x="142" y="98" font-family="${FONT}" font-size="18" font-weight="600" letter-spacing="1.5" fill="${tagFill}">END-TO-END IT CAREER PROXY SUPPORT</text>
  </svg>`;
}
await save('logo-horizontal-white-text.png', horizontal(C.white, C.brassLite, C.brassLite), 2200, 592);   // for dark bg
await save('logo-horizontal-dark-text.png', horizontal(C.ink, C.violet, C.brass), 2200, 592);             // for light bg

// ---- 3. Stacked lockup (mark on top, wordmark below) ----
function stacked(wordFill, indiaFill, tagFill) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 340">${DEFS}
    ${mark(165, 8, 150)}
    <text x="240" y="222" text-anchor="middle" font-family="${FONT}" font-size="46" font-weight="800" fill="${wordFill}">Proxy Support <tspan fill="${indiaFill}">India</tspan></text>
    <text x="240" y="258" text-anchor="middle" font-family="${FONT}" font-size="18" font-weight="600" letter-spacing="2" fill="${tagFill}">END-TO-END IT CAREER PROXY SUPPORT</text>
  </svg>`;
}
await save('logo-stacked-white-text.png', stacked(C.white, C.brassLite, C.brassLite), 1600, 1133);  // for dark bg
await save('logo-stacked-dark-text.png', stacked(C.ink, C.violet, C.brass), 1600, 1133);            // for light bg

console.log('\nTransparent logo pack ready for Canva.');
