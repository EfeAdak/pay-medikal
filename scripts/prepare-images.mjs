import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

await mkdir('public/images', { recursive: true })
const sets = [
  { source: 'assets/source/medical-glass.png', name: 'medical-glass', widths: [640, 1280] },
  { source: 'assets/source/medical-amber.png', name: 'medical-amber', widths: [640, 1152] },
]

for (const set of sets) {
  for (const width of set.widths) {
    const input = sharp(set.source).resize({ width })
    await input.clone().webp({ quality: 84 }).toFile(`public/images/${set.name}-${width}.webp`)
    await input.clone().avif({ quality: 62, effort: 6 }).toFile(`public/images/${set.name}-${width}.avif`)
  }
}
console.log('Responsive AVIF and WebP assets prepared for both concepts.')
