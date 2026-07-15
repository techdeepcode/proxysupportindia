// ============================================================
// Instagram service-post generator for ProxySupportIndia.com
// Layout mirrors the sister-brand Canva template (logo TL, two
// outline pills TR, category pill, two-tone headline, subheading
// with accent bar, bottom website + WhatsApp bar) — rendered in
// the Proxy Support India violet + brass theme. 1080×1350 (4:5).
// Run: node scripts/gen-instagram.mjs
// ============================================================
import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT = join(ROOT, 'public', 'brand', 'instagram');
mkdirSync(OUT, { recursive: true });

const C = {
  bg0: '#0E0A1C', bg1: '#191233', jamun: '#2E2159', violet: '#6D28D9',
  brass: '#C9A227', brassLite: '#E8C860', white: '#FFFFFF', wa: '#25D366',
};
const FONT = "'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
const W = 1080, H = 1350, M = 70;
const COUNTRIES = ['USA · Canada · UK · Europe', 'Australia · Singapore · India'];

// ---- Content: one entry per post ----
const POSTS = [
  {
    file: '01-proxy-interview-support', category: 'INTERVIEW PROXY', context: 'Real-Time Guidance',
    white: ['INTERVIEW', 'SCHEDULED SOON?'], accent: ["DON'T WALK", 'IN UNPREPARED.'],
    sub: ['Get live expert backup', 'before the interview starts.'],
  },
  {
    file: '02-proxy-job-support', category: 'JOB SUPPORT', context: 'Real-Time Support',
    white: ['STRUGGLING IN', 'YOUR NEW JOB?'], accent: ["DON'T WAIT", 'TOO LONG.'],
    sub: ['Get real-time expert job', 'support before it gets worse.'],
  },
  {
    file: '03-profile-engineering', category: 'PROFILE ENGINEERING', context: 'ATS-Ready Profiles',
    white: ['PROFILE ACTIVE', 'BUT NO CALLS?'], accent: ['FIX YOUR', 'PROFILE FIRST.'],
    sub: ['An ATS-ready profile', 'built to get you noticed.'],
  },
  {
    file: '04-profile-marketing', category: 'PROFILE MARKETING', context: 'Recruiter Outreach',
    white: ['GREAT SKILLS', 'BUT UNSEEN?'], accent: ['GET IN FRONT', 'OF RECRUITERS.'],
    sub: ['We market your profile to', 'recruiters & vendors daily.'],
  },
  {
    file: '05-profile-managing', category: 'PROFILE MANAGING', context: 'Full Job-Search',
    white: ['TOO MANY', 'FOLLOW-UPS?'], accent: ['WE RUN YOUR', 'JOB SEARCH.'],
    sub: ['JD matching, replies & pipeline', 'tracking — handled for you.'],
  },
  {
    file: '06-get-more-recruiter-calls', category: 'RECRUITER CALLS', context: 'More Interviews',
    white: ['APPLYING DAILY', 'PHONE SILENT?'], accent: ['GET MORE', 'RECRUITER CALLS.'],
    sub: ['Turn your profile into a', 'steady stream of calls.'],
  },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Brass logomark badge (compact).
function mark(x, y, size) {
  const s = size / 120;
  return `<g transform="translate(${x},${y}) scale(${s})">
    <rect width="120" height="120" rx="28" fill="url(#markG)"/>
    <rect x="6.5" y="6.5" width="107" height="107" rx="22" fill="none" stroke="${C.brass}" stroke-width="2.4" opacity="0.75"/>
    <text x="60" y="80" text-anchor="middle" font-family="${FONT}" font-size="60" font-weight="800" fill="${C.white}">PS</text>
    <rect x="42" y="92" width="36" height="4.5" rx="2.25" fill="url(#brassG)"/>
  </g>`;
}

// ---- line icons (24×24 viewBox, drawn at given translate/scale) ----
function icon(name, x, y, sz, stroke = C.brass) {
  const s = sz / 24;
  const g = (inner) => `<g transform="translate(${x},${y}) scale(${s})" fill="none" stroke="${stroke}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${inner}</g>`;
  if (name === 'globe') return g(`<circle cx="12" cy="12" r="9.5"/><ellipse cx="12" cy="12" rx="4" ry="9.5"/><line x1="2.5" y1="12" x2="21.5" y2="12"/><line x1="4" y1="6.5" x2="20" y2="6.5"/><line x1="4" y1="17.5" x2="20" y2="17.5"/>`);
  if (name === 'shield') return g(`<path d="M12 2.5 L20 5.5 V11 C20 16.2 16.4 19.8 12 21.5 C7.6 19.8 4 16.2 4 11 V5.5 Z"/><path d="M8.6 12 l2.4 2.4 l4.4 -4.8"/>`);
  if (name === 'briefcase') return g(`<rect x="3" y="7.5" width="18" height="12.5" rx="2.2"/><path d="M8.5 7.5 V6 a2 2 0 0 1 2 -2 h3 a2 2 0 0 1 2 2 v1.5"/><line x1="3" y1="12.5" x2="21" y2="12.5"/>`);
  return '';
}

// Rounded outline pill.
function pill(x, y, w, h, inner) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="20" fill="${C.white}" fill-opacity="0.04" stroke="${C.brass}" stroke-width="2" stroke-opacity="0.65"/>${inner}`;
}

function gridLines() {
  let d = '';
  for (let x = 0; x <= W; x += 54) d += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="${C.violet}" stroke-width="1" opacity="0.05"/>`;
  for (let y = 0; y <= H; y += 54) d += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="${C.violet}" stroke-width="1" opacity="0.05"/>`;
  return d;
}

function postSVG(p) {
  // --- top-right pills ---
  const pill1 = { x: 560, y: 66, w: 450, h: 96 };
  const ctxW = 70 + p.context.length * 16.5;
  const pill2 = { x: 1010 - ctxW, y: 178, w: ctxW, h: 74 };
  // --- category pill (left) ---
  const catW = 96 + p.category.length * 18.5;
  const catP = { x: M, y: 300, h: 66 };
  // --- headline ---
  const headX = M, head0 = 486, headLH = 92, headSize = 82;
  const wl = p.white.map((l, i) => `<text x="${headX}" y="${head0 + i * headLH}" font-family="${FONT}" font-size="${headSize}" font-weight="800" letter-spacing="-1" fill="${C.white}">${esc(l)}</text>`).join('');
  const al = p.accent.map((l, i) => `<text x="${headX}" y="${head0 + (p.white.length + i) * headLH}" font-family="${FONT}" font-size="${headSize}" font-weight="800" letter-spacing="-1" fill="url(#brassG)">${esc(l)}</text>`).join('');
  const subY = head0 + (p.white.length + p.accent.length) * headLH + 54;
  // --- bottom bar ---
  const barY = H - 132;
  const waPill = { x: 615, y: barY + 26, w: 395, h: 80 };

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0.6" y2="1">
        <stop offset="0" stop-color="${C.bg0}"/><stop offset="1" stop-color="${C.bg1}"/>
      </linearGradient>
      <linearGradient id="markG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${C.jamun}"/><stop offset="1" stop-color="${C.violet}"/>
      </linearGradient>
      <linearGradient id="brassG" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="${C.brass}"/><stop offset="1" stop-color="${C.brassLite}"/>
      </linearGradient>
      <radialGradient id="glow" cx="0.92" cy="0.06" r="0.75">
        <stop offset="0" stop-color="${C.violet}" stop-opacity="0.7"/><stop offset="1" stop-color="${C.violet}" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg)"/>
    ${gridLines()}
    <rect width="${W}" height="${H}" fill="url(#glow)"/>

    <!-- logo -->
    ${mark(M, 66, 80)}
    <text x="${M + 98}" y="112" font-family="${FONT}" font-size="40" font-weight="800" letter-spacing="0.5" fill="${C.white}">PROXY SUPPORT</text>
    <text x="${M + 100}" y="150" font-family="${FONT}" font-size="25" font-weight="700" letter-spacing="7" fill="${C.brassLite}">INDIA</text>

    <!-- pill 1: countries -->
    ${pill(pill1.x, pill1.y, pill1.w, pill1.h,
      `${icon('globe', pill1.x + 26, pill1.y + 30, 36)}
       <text x="${pill1.x + 84}" y="${pill1.y + 42}" font-family="${FONT}" font-size="26" font-weight="700" fill="${C.white}">${esc(COUNTRIES[0])}</text>
       <text x="${pill1.x + 84}" y="${pill1.y + 76}" font-family="${FONT}" font-size="26" font-weight="700" fill="${C.white}">${esc(COUNTRIES[1])}</text>`)}

    <!-- pill 2: context -->
    ${pill(pill2.x, pill2.y, pill2.w, pill2.h,
      `${icon('shield', pill2.x + 22, pill2.y + 21, 34)}
       <text x="${pill2.x + 66}" y="${pill2.y + 47}" font-family="${FONT}" font-size="28" font-weight="700" fill="${C.white}">${esc(p.context)}</text>`)}

    <!-- category pill (left) -->
    ${pill(catP.x, catP.y, catW, catP.h,
      `${icon('briefcase', catP.x + 24, catP.y + 21, 32)}
       <text x="${catP.x + 66}" y="${catP.y + 44}" font-family="${FONT}" font-size="27" font-weight="800" letter-spacing="2" fill="${C.brassLite}">${esc(p.category)}</text>`)}

    <!-- headline -->
    ${wl}${al}

    <!-- subheading with accent bar -->
    <rect x="${M}" y="${subY - 40}" width="8" height="86" rx="4" fill="url(#brassG)"/>
    <text x="${M + 30}" y="${subY}" font-family="${FONT}" font-size="38" font-weight="700" fill="${C.white}">${esc(p.sub[0])}</text>
    <text x="${M + 30}" y="${subY + 46}" font-family="${FONT}" font-size="38" font-weight="700" fill="${C.white}">${esc(p.sub[1])}</text>

    <!-- bottom bar -->
    <rect x="0" y="${barY}" width="${W}" height="132" fill="url(#brassG)"/>
    <text x="${M}" y="${barY + 80}" font-family="${FONT}" font-size="38" font-weight="800" letter-spacing="0.5" fill="${C.jamun}">PROXYSUPPORTINDIA.COM</text>
    <rect x="${waPill.x}" y="${waPill.y}" width="${waPill.w}" height="${waPill.h}" rx="18" fill="${C.white}"/>
    <circle cx="${waPill.x + 44}" cy="${waPill.y + waPill.h / 2}" r="23" fill="${C.wa}"/>
    <g transform="translate(${waPill.x + 44 - 13.2}, ${waPill.y + waPill.h / 2 - 13.2}) scale(1.1)">
      <path fill="${C.white}" d="M17.5 14.4c-.3-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.2.3-.75.94-.92 1.13-.17.2-.34.22-.63.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.29-.02-.45.13-.6.13-.13.3-.34.44-.5.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.14-.65-1.57-.9-2.15-.23-.56-.47-.48-.65-.49l-.55-.01c-.2 0-.5.07-.77.36-.26.3-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.95.14.2 2.02 3.08 4.9 4.32.68.3 1.22.47 1.63.6.69.22 1.31.19 1.8.12.55-.08 1.7-.7 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.34zM12 2a10 10 0 0 0-8.6 15.05L2 22l5.05-1.32A10 10 0 1 0 12 2z"/>
    </g>
    <text x="${waPill.x + 88}" y="${waPill.y + waPill.h / 2 + 12}" font-family="${FONT}" font-size="34" font-weight="800" fill="${C.jamun}">+91 96539 59626</text>
  </svg>`;
}

for (const p of POSTS) {
  const out = join(OUT, p.file + '.png');
  await sharp(Buffer.from(postSVG(p))).resize(W, H).png({ compressionLevel: 9 }).toFile(out);
  console.log('  ✓ brand/instagram/' + p.file + '.png');
}
console.log('\n6 Instagram service posts generated (1080×1350, template layout).');
