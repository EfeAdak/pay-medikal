# Yakut kristal alternatifi

## Tasarım okuması

Kırmızı rota bağımsız beyaz-kırmızı bir konsept değildir. Kullanıcının istediği yön, zümrüt kristal sayfasının aynı kompozisyon ve malzeme kalitesini koruyan yakut-kırmızı varyantıdır. Siyah yüzey saf siyah değil; sıcak obsidyen, grafit ve bordo alt tonlarından oluşan katmanlı bir zemindir.

DESIGN_VARIANCE: 7. MOTION_INTENSITY: 4. VISUAL_DENSITY: 3.

## Sistem

- Obsidyen zemin: `#0c090a`
- Grafit-bordo yüzey: `#171112`
- Yakut vurgu: `#a41f36`
- Mineral ışık: `#f0a0ae`
- Ana metin: `#f7f2f3`
- İkincil metin: `#bcaeb1`
- Tipografi: yerel Plus Jakarta Sans Variable
- Hareket: zümrüt varyantla aynı tek seferlik, yalnızca opacity ve transform giriş koreografisi

## Uygulama

`src/concepts/RedApp.tsx`, ortak `CrystalApp` bileşenini `ruby` varyantıyla kullanır. Böylece `/kirmizi/` ve `/zumrut/` yerleşimleri gerçekten aynıdır; yalnızca tema tokenları ve kristal görseli değişir. Kırmızı tema `src/red.css` içinde zümrüt sistemini yakut ve obsidyen tokenlarıyla değiştirir.

Yakut görselinin üretim kaynağı `docs/generated/ruby-crystal-source.png`; responsive AVIF ve WebP türevleri `public/images/ruby-crystal-*` altındadır. Görsel soyut bir konsept çalışmasıdır, resmî logo veya ürün değildir.

Eski beyaz zeminli kırmızı konsept ve programatik SVG artı kaldırılmıştır.

## Doğrulama

Masaüstü ve mobil ekran görüntüleri görsel olarak incelendi. Kırmızı route için build, axe A/AA, 320-1920px yatay taşma, 44px temas hedefleri, büyütülmüş metin, klavye odağı, reduced-motion, iletişim URL'leri ve JavaScript kapalı statik HTML senaryoları test edilir.
