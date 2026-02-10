import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <defs>
    <linearGradient id="eliteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1e293b;stop-opacity:1" />
    </linearGradient>
  </defs>
  <!-- Main background circle -->
  <circle cx="128" cy="128" r="120" fill="url(#eliteGrad)" stroke="#d4af37" stroke-width="2"/>
  
  <!-- Geometric shapes for premium look -->
  <path d="M 70 90 L 130 50 L 170 110 L 110 150 Z" fill="#d4af37" opacity="0.95"/>
  <path d="M 90 140 L 150 120 L 170 180 L 110 200 Z" fill="#d4af37" opacity="0.7"/>
  
  <!-- Elite text -->
  <text x="128" y="225" font-family="Cinzel, serif" font-size="32" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="2">ELITE</text>
</svg>
`;

// Create favicon sizes
const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 64, name: 'favicon.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-192x192.png' },
  { size: 512, name: 'android-512x512.png' },
];

const svgBuffer = Buffer.from(svgContent);

async function generateFavicons() {
  console.log('Generating favicons...');
  
  for (const { size, name } of sizes) {
    try {
      const outputPath = path.join(__dirname, '..', 'public', name);
      await sharp(svgBuffer)
        .resize(size, size, { fit: 'cover' })
        .png()
        .toFile(outputPath);
      console.log(`✓ Generated ${name} (${size}x${size})`);
    } catch (error) {
      console.error(`✗ Failed to generate ${name}:`, error);
    }
  }
  
  console.log('Favicon generation complete!');
}

generateFavicons().catch(console.error);
