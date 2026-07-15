// ============================================================
// WhatsApp profile picture (circle-safe) — PS badge + wordmark
// "Proxy Support India" beside it. Run: node scripts/gen-whatsapp-dp.mjs
// ============================================================
import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'public', 'brand');
mkdirSync(OUT, { recursive: true });

const C = {
  bg0: '#191233', jamun: '#2E2159', violet: '#6D28D9',
  brass: '#C9A227', brassLite: '#E8C860', white: '#FFFFFF',
};
const FONT = "'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
const S = 1000;

function mark(x, y, size) {
  const s = size / 120;
  return `<g transform="translate(${x},${y}) scale(${s})">
    <rect width="120" height="120" rx="28" fill="url(#markG)"/>
    <rect x="6.5" y="6.5" width="107" height="107" rx="22" fill="none" stroke="${C.brass}" stroke-width="2.6" opacity="0.85"/>
    <text x="60" y="80" text-anchor="middle" font-family="${FONT}" font-size="60" font-weight="800" fill="${C.white}">PS</text>
    <rect x="42" y="92" width="36" height="4.5" rx="2.25" fill="url(#brassG)"/>
  </g>`;
}

// Badge on the left, three-line wordmark beside it — all within the
// circle-safe centre band so nothing is clipped by WhatsApp's round crop.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${S}" viewBox="0 0 ${S} ${S}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${C.bg0}"/><stop offset="0.55" stop-color="${C.jamun}"/><stop offset="1" stop-color="${C.violet}"/>
    </linearGradient>
    <linearGradient id="markG" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${C.jamun}"/><stop offset="1" stop-color="${C.violet}"/>
    </linearGradient>
    <linearGradient id="brassG" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${C.brass}"/><stop offset="1" stop-color="${C.brassLite}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.42" r="0.6">
      <stop offset="0" stop-color="${C.violet}" stop-opacity="0.5"/><stop offset="1" stop-color="${C.violet}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${S}" height="${S}" fill="url(#bg)"/>
  <rect width="${S}" height="${S}" fill="url(#glow)"/>

  ${mark(150, 350, 300)}

  <text x="512" y="450" font-family="${FONT}" font-size="76" font-weight="800" fill="${C.white}">Proxy</text>
  <text x="512" y="528" font-family="${FONT}" font-size="76" font-weight="800" fill="${C.white}">Support</text>
  <text x="512" y="606" font-family="${FONT}" font-size="76" font-weight="800" fill="${C.brassLite}">India</text>
  <rect x="514" y="624" width="150" height="6" rx="3" fill="url(#brassG)"/>
</svg>`;

await sharp(Buffer.from(svg)).resize(S, S).png({ compressionLevel: 9 }).toFile(join(OUT, 'whatsapp-profile-1000.png'));
console.log('  ✓ brand/whatsapp-profile-1000.png (1000×1000, circle-safe)');
// Smaller copy for quick upload.
await sharp(Buffer.from(svg)).resize(640, 640).png({ compressionLevel: 9 }).toFile(join(OUT, 'whatsapp-profile-640.png'));
console.log('  ✓ brand/whatsapp-profile-640.png (640×640)');
