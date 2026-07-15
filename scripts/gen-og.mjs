// Generates valid placeholder PNGs (solid Jamun brand color) for OG images
// and manifest icons. Replace later with branded 1200x630 designs.
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'og');
mkdirSync(outDir, { recursive: true });

// Jamun #2E2159
const R = 0x2e, G = 0x21, B = 0x59;

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return ~c >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crc]);
}
function png(width, height) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0); ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; ihdr[9] = 2; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0; // 8-bit, RGB
  const row = Buffer.alloc(1 + width * 3);
  for (let x = 0; x < width; x++) { row[1 + x * 3] = R; row[2 + x * 3] = G; row[3 + x * 3] = B; }
  const raw = Buffer.concat(Array.from({ length: height }, () => row));
  const idat = deflateSync(raw, { level: 9 });
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))]);
}

const og = png(1200, 630);
const files = [
  'default-og.png', 'proxy-interview-support-og.png', 'proxy-job-support-og.png',
  'profile-engineering-og.png', 'profile-marketing-og.png', 'end-to-end-proxy-support-og.png',
  'ai-ml-proxy-support-og.png', 'devops-proxy-support-og.png', 'workday-proxy-support-og.png',
];
for (const f of files) writeFileSync(join(outDir, f), og);
writeFileSync(join(outDir, 'icon-192.png'), png(192, 192));
writeFileSync(join(outDir, 'icon-512.png'), png(512, 512));
console.log(`Generated ${files.length + 2} placeholder images in public/og/`);
