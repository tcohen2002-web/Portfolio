import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { mkdir } from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, '../public/og');
await mkdir(outDir, { recursive: true });

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#F4F1EA"/>

  <g font-family="Menlo, monospace" font-size="18" letter-spacing="3.2" fill="#6B6B72">
    <text x="72" y="78" text-transform="uppercase">PORTFOLIO · 2026</text>
  </g>

  <g font-family="Helvetica Neue, Helvetica, Arial, sans-serif" fill="#0B0B0E">
    <text x="68" y="340" font-size="192" font-weight="500" letter-spacing="-6">Tal Cohen</text>
  </g>

  <g font-family="Georgia, serif" font-style="italic" fill="#0B0B0E">
    <text x="72" y="430" font-size="56">UX/UI designer.</text>
  </g>

  <g font-family="Menlo, monospace" font-size="18" letter-spacing="3.2" fill="#6B6B72">
    <text x="72" y="558" text-transform="uppercase">Hola · Hello · G'day</text>
  </g>

  <g font-family="Menlo, monospace" font-size="18" letter-spacing="3.2" fill="#6B6B72">
    <text x="1128" y="558" text-anchor="end" text-transform="uppercase">Sydney</text>
  </g>

  <line x1="72" y1="100" x2="1128" y2="100" stroke="#0B0B0E" stroke-opacity="0.15" stroke-width="1"/>
  <line x1="72" y1="530" x2="1128" y2="530" stroke="#0B0B0E" stroke-opacity="0.15" stroke-width="1"/>
</svg>`;

await sharp(Buffer.from(svg))
  .png()
  .toFile(resolve(outDir, 'default.png'));

console.log('OG image written to public/og/default.png');
