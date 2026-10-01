# Pay Medikal proje hafızası

## Kapsam

21 Eylül 2026: Kullanıcı projeyi yönlendirme ve uygulama yetkisini verdi. İlk aşama sadece bakım mesajı, adres, telefon ve e-posta. Şirket İstanbul/Kartal'da. Daha büyük kurumsal site sonraki aşama.

Codex'in giriş yönergeleri `AGENTS.md` içindedir. Bu dosya proje kararlarını ve teslim durumunu saklar.

## Teknik karar

React + TypeScript + Vite. Tasarım için Tailwind CSS/native CSS, tek seferlik animasyon için Motion. Sadece kullanılan Phosphor Light ikonları. Yerel Plus Jakarta Sans fontu. Build sonunda React çıktısı statik HTML'ye yazılır; bakım bilgileri JavaScript yüklenmesine bağlı değildir.

Backend, veritabanı veya haricî API gerekmez. Sunucu ve kişisel veri toplayan form yok. Harita iframe'i yerine kullanıcının açtığı harita bağlantısı var. Takip/analitik eklenmedi. Paket sürümleri `package-lock.json` ile sabitlenir.

## Skill düzeni

İstenen beş skill `.agents/skills/` altında projeye kuruldu. `awwwards-animation` talebinin upstream adı `awwwards-animations`. Kaynaklar `docs/skills.md`. Skill'ler tasarım rehberidir; teknoloji kararını proje ihtiyacına göre uygulayıcı verir. Çakışan estetik kurallarda doğruluk, erişilebilirlik ve kullanıcının sınırlı sayfa kapsamı önceliklidir.

## Açık bilgi

E-posta `pay@paymedikal.com`, telefon `+90 216 541 43 05` ve adres `Soğanlık Yeni Mahalle, Ihlara Sokak, No: 23/A, 34880 Kartal / İstanbul, Türkiye` proje sahibi tarafından 21 Eylül 2026 tarihinde doğrulandı. Bu bilgiler `src/content/company.ts` içinde tek kaynaktan yönetilir. Firma logosu 24 Eylül 2026 tarihinde proje sahibi tarafından WhatsApp JPEG'i olarak iletildi ve `public/images/pay-medikal-logo.jpeg` altında yerel varlık olarak saklanıyor.

## Devam ederken

1. Firma bilgisi gelirse tek kaynak dosyayı ve araştırma notunu güncelle.
2. `npm run build` ve `npm run test:browser` ile doğrula.
3. `docs/screenshots` görsellerini incele.
4. Alan adı/barındırma kullanıcıyla netleştiğinde yayınlama işini ele al. Henüz internete yayın yapılmadı.

## Tasarım alternatifleri

21 Eylül 2026: Mevcut yeşil bakım sayfası `/` altında korundu. Kullanıcının istediği koyu kahverengi alternatif `/kahve/` altında eklendi. Konsept; tütün camı görseli, koyu kakao zemin, mineral kâğıt iletişim yüzeyi ve editorial Newsreader başlık kullanır. Uygulama ve karar notları `design-system/pay-medikal/pages/kahve-editorial.md` içindedir.

İki sonraki radikal tema için aynı proje içinde ayrı route geliştirilebilir. Kullanıcı bir temayı seçtiğinde yayın branch'i seçilen route'u ana sayfaya taşıyabilir. Ayrı worktree kullanımı, alternatifler paralel geliştirilirken dosya çakışmasını önlemek için uygundur.

Bu klasör başka bir projenin Git deposu içinde bulunuyor. Üst klasörün frontend/backend dosyaları ve mevcut kullanıcı değişiklikleri bu işe ait değil.

21 Eylül 2026: Kullanıcı üçüncü konsepti (mühür) istemedi; ilgili branch ve dosyalar silindi, yalnızca yeşil ve kahve kaldı. Kullanıcı bu ikisini bir başkasına göstermek için tek link istedi. Bu proje reposuna (pay-medikal) hiçbir push/commit yapılmadan, ayrı bir repo olan `EfeAdak/EfeAdak.github.io` oluşturulup `npm run build` çıktısı oraya push edildi ve GitHub Pages açıldı: https://efeadak.github.io/ (yeşil) ve https://efeadak.github.io/kahve/ (kahve). Bu statik bir anlık görüntüdür; pay-medikal reposundaki sonraki değişiklikler otomatik yansımaz, güncellemek için build tekrar oraya push edilmeli.

## Karar (21 Eylül 2026)

Kullanıcı iki konsepti (yeşil, kahve) efeadak.github.io önizlemesinden inceledi ve **yeşil konsepti** seçti. Kahve konsepti (`/kahve/`, `src/concepts/BrownApp.tsx`, `src/brown.css`, `tests/brown.spec.ts`, `design-system/pay-medikal/pages/kahve-editorial.md`) şimdilik referans olarak repoda kalıyor, kod tarafında bir değişiklik yapılmadı. Bir sonraki adım kullanıcı tarafından netleştirilecek: kahve'yi tamamen kaldırmak mı, yoksa gerçek alan adına (paymedikal.com) yayın hazırlığına mı geçilecek.

## Dördüncü konsept: kırmızı-siyah (21 Eylül 2026, sonraki tur)

Kullanıcı yeşil konsept seçilmesine rağmen bir alternatif daha istedi: firmanın kırmızı-siyah logosuna dayanan, yeşil konseptle yerleşim/metin olarak birebir aynı ama renk paleti kırmızı (`#b3121c`) + siyah (`#161616`) + beyaz/gri olan bir varyant. `/kirmizi/` route'u, `src/concepts/RedApp.tsx` (App.tsx'in birebir kopyası, `red-` sınıf öneki) ve `src/red.css` ile eklendi. Cam artı fotoğrafı yeniden kullanıldı, `grayscale` filtresiyle nötr hale getirildi (kırmızı/siyah temaya özel yeni bir fotoğraf üretecek bir görsel üretim aracı bu ortamda yok). Karar notları `design-system/pay-medikal/pages/kirmizi.md` içinde. `npm run test:browser -- --workers=2`: 22/22 başarılı.

## Doğrulama sonucu

21 Eylül 2026: `npm run build` başarılı. Kahve konsepti eklendikten sonra `npm run test:browser -- --workers=2`: 16/16 başarılı (Chromium masaüstü ve mobil emülasyonu). Otomatik axe taramasında test edilen WCAG A/AA kuralları için ihlal bulunmadı. 320, 375, 768, 844, 1024 ve 1920px genişlikler; yatay taşma, klavye odağı, iletişim URL'leri, görsel yükleme, büyütülmüş metin, reduced-motion ve JavaScript kapalı kullanım kontrol edildi. Bu sonuç tüm tarayıcılarda manuel erişilebilirlik sertifikası değildir.

Her iki konseptin masaüstü ve mobil ekran görüntüleri `docs/screenshots/` altında. Ekran görüntüsü incelemesinden sonra başlık aralığı ve hero yüksekliği düzeltildi, testler yeniden geçti. Windows sandbox altında tsx kullanıcı bilgisi erişimi ve test alt süreç kapanışı sorunları görüldüğünden son başarılı çalıştırma yükseltilmiş izinle yapıldı.

## Beşinci konsept: zümrüt kristal (21 Eylül 2026)

Kullanıcı kırmızı alternatifi beğenmedi ve kristal-zümrüt tonlarıyla elegant siyah kullanan yeni bir seçenek istedi. Mevcut rotalara dokunulmadan /zumrut/ eklendi. Yeni kompozisyon src/concepts/EmeraldApp.tsx, görsel sistem src/emerald.css, kararlar design-system/pay-medikal/pages/zumrut-kristal.md içindedir. Soyut kristal görseli bir ürün veya resmî logo değildir; seçilen üretim kaynağı docs/generated/emerald-crystal-source.png, web türevleri public/images/emerald-crystal-*.avif ve webp altında tutulur. İletişim verileri yalnızca src/content/company.ts üzerinden gelir.

Zümrüt konsept sonrası npm run build başarılı. npm run test:browser -- --workers=2 sonucu 28/28 başarılı. Yeni rota masaüstü ve mobil Chromium'da axe A/AA taraması, 320-1920px yatay taşma, 844x390 yatay görünüm, en az 44px temas hedefleri, büyütülmüş metin, klavye odağı, reduced-motion, iletişim URL'leri ve JavaScript kapalı statik HTML için doğrulandı. İncelenen ekran görüntüleri docs/screenshots/zumrut-desktop.png ve docs/screenshots/zumrut-mobile.png altında.

21 Eylül 2026: Güncel dört konsept build'i `EfeAdak/EfeAdak.github.io` reposuna `a611df0` commit'iyle yayınlandı. GitHub Pages build'i başarıyla tamamlandı; `/`, `/kahve/`, `/kirmizi/` ve `/zumrut/` adreslerinin tamamı HTTP 200, güncel ortak bundle ve prerender edilmiş ana içerikle doğrulandı.

## Kırmızı konsept düzeltmesi (21 Eylül 2026)

Kullanıcının talebi önce yanlış yorumlanmıştı. İstenen kırmızı sayfa, ayrı beyaz-kırmızı konsept değil; zümrüt kristal kompozisyonunun yakut-kırmızı ve elegant obsidyen siyahı varyantıdır. `RedApp` artık ortak `CrystalApp` bileşenini `ruby` varyantıyla kullanır. Eski `RedCrossArt` ve beyaz kırmızı düzen kaldırıldı. Yeni imagegen kaynağı `docs/generated/ruby-crystal-source.png`, responsive web türevleri `public/images/ruby-crystal-*` altındadır.

Düzeltme `552d8c4` commit'iyle GitHub Pages'e yayınlandı. Pages build'i tamamlandı; canlı `/kirmizi/` HTML'inde yeni bundle ve `ruby-crystal` referansı, görsel varlığında HTTP 200 doğrulandı.

## Kırmızı medikal alternatifi (21 Eylül 2026)

Kullanıcı yakut kristal konseptin yaratıcılığını beğendi ancak tıbbi ürün tedarikçisi için kristali fazla gösterişli buldu. Aynı yakut kırmızısı ve elegant obsidyen siyahı paletinde, daha ölçülü ikinci alternatif `/kirmizi-medikal/` altında eklendi. Hero görseli mat siyah anodize teknik yüzeye gömülü yarı saydam kırmızı medikal artıdır; belirli bir ürün veya resmî logo olarak sunulmaz. Uygulama `src/concepts/PrecisionApp.tsx`, stil `src/precision.css`, tasarım notu `design-system/pay-medikal/pages/kirmizi-medikal.md`, imagegen kaynağı `docs/generated/precision-cross-source.png` altındadır.

Yeni alternatif sonrası `npm run build` başarılı ve tam Playwright paketi 34/34 geçti. Masaüstü/mobil ekran görüntüleri görsel olarak incelendi. `3d32460` commit'iyle GitHub Pages'e yayınlandı; canlı `/kirmizi-medikal/` HTML'i, güncel bundle ve `precision-cross` görseli HTTP 200 ile doğrulandı.

Mobil tarayıcıların eski sayfa-altı konumunu reload ve bfcache dönüşünde geri yüklemesi düzeltildi. `src/main.tsx`, hash yokken scroll restoration'ı manual yapıp ilk açılış, `load` ve `pageshow` aşamalarında üst konumu uygular; doğrudan anchor bağlantıları korunur. Reload, history return ve hash senaryoları masaüstü/mobil testlere eklendi; tam paket 36/36 geçti.

Düzeltme `e0ad986` commit'iyle GitHub Pages'e yayınlandı. Canlı 390x844 mobil Chromium kontrolünde sayfa altındaki `scrollY=835` konumu reload sonrası `scrollY=0` oldu; `#precision-contact` doğrudan açılışı iletişim bölümüne kaydı.

## Şirket logosu (24 Eylül 2026)

Proje sahibi 347x314 piksellik resmî Pay Medikal logosunu iletti. Yeşil ve kırmızı temalı `/`, `/zumrut/`, `/kirmizi/` ve `/kirmizi-medikal/` rotalarındaki geçici artı simgesi ve tipografik isim gerçek logoyla değiştirildi. Logo renkleri ve oranı değiştirilmedi, doğal çözünürlüğünün altında gösteriliyor ve koyu zeminlerde beyaz bir plaka içinde tutuluyor. Kaynak daha sonra SVG veya yüksek çözünürlüklü şeffaf PNG ile değiştirilebilir. Yayınlama yapılmadı.

Logo değişikliğinden sonra `npm run build` başarılı ve `npm run test:browser -- --workers=2` sonucu 36/36 geçti. Dört yeşil/kırmızı rotanın masaüstü ve mobil ekran görüntüleri incelendi; logo oranı, responsive yerleşim, axe A/AA taraması, 320-1920px yatay taşma, klavye odağı, reduced-motion, iletişim URL'leri ve JavaScript kapalı statik HTML doğrulandı.

24 Eylül 2026: Güncel statik build, ayrı önizleme reposu `EfeAdak/EfeAdak.github.io` ana dalına `4bd537d` commit'iyle gönderildi. GitHub Pages build ve deployment işleri başarıyla tamamlandı. `/`, `/zumrut/`, `/kirmizi/` ve `/kirmizi-medikal/` canlı rotalarının tamamı HTTP 200, güncel `main-8a1XeIX8.css` ve `/images/pay-medikal-logo.jpeg` referansıyla doğrulandı.
