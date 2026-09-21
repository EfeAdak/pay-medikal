# Görsel üretimi

Araç: yerleşik `image_gen`, CLI veya API key kullanılmadı. Tarih: 21 Eylül 2026.

Asıl dosya: `assets/source/medical-glass.png`.
Web dosyaları: `public/images/medical-glass-{640,1280}.{avif,webp}`.
Format/boyut optimizasyonu: `scripts/prepare-images.mjs` (Sharp). Asıl görsel korunur.

Bu görsel konsept bir marka illüstrasyonudur; firmanın gerçek ürününü veya mevcut logosunu temsil ettiği iddia edilmez.

## Kahve editorial konsept

21 Eylül 2026 tarihinde imagegen ile `assets/source/medical-amber.png` üretildi. Görsel; tütün renkli cam medikal artı, koyu taş kaide ve mineral beyaz stüdyo fonu kullanır. Prompt özellikle kişi, logo, yazı, ilaç, şırınga, cihaz, altın ve pirinç yüzeyleri dışarıda bıraktı.

`scripts/prepare-images.mjs` bu kaynak dosyayı 640 ve 1152 piksel genişliklerde AVIF ile WebP formatlarına dönüştürür. Kaynak üretim dosyası saklanır; türetilen dosyalar `public/images/medical-amber-*` adlarını kullanır.

## Kullanılan prompt

Use case: stylized-concept. Asset type: hero artwork for Pay Medikal, a medical supplies company maintenance webpage. Create one premium photorealistic 3D still-life render, landscape 4:3. Subject: a single large sculptural medical plus sign made from thick pale mint translucent cast glass with subtly rounded edges, standing upright and rotated 15 degrees on a matte pale cool grey-green surface. Inside the glass subtle optical refraction, polished highlights and a faint green core. A thin solid deep eucalyptus green rounded rectangular slab sits slightly behind the cross, partially visible, complementing the geometry without becoming a second cross. Composition: cross centered, occupies 65 percent image height, ample clean negative space all around. Soft daylight from upper left, sophisticated caustics and diffused realistic contact shadow to lower right. Background seamless very light cool mint #edf3ef, absolutely no room or horizon line. Mood: precise, quiet, trustworthy medical technology, high-end studio product photograph. Not a real medical product; abstract conceptual brand artwork. No text, no letters, no logos, no watermark, no pills, no medical devices, no people, no busy particles, no floating labels. High material realism, refined and clean.
