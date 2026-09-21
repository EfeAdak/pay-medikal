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

E-posta bulunamadı, kullanıcıdan istendi. `src/content/company.ts` içindeki `email` şu anda `null`. E-posta alanı açık bir güncelleme mesajı gösterir; uydurma adres kullanılmaz. Telefon `0216 541 43 05` ve Kartal adresi dizin araştırmasına dayanır; güncel oldukları firma tarafından henüz doğrulanmadı. Firma logosu da doğrulanmadı, yazı düzeni tasarım önerisidir.

## Devam ederken

1. Firma bilgisi gelirse tek kaynak dosyayı ve araştırma notunu güncelle.
2. `npm run build` ve `npm run test:browser` ile doğrula.
3. `docs/screenshots` görsellerini incele.
4. Alan adı/barındırma kullanıcıyla netleştiğinde yayınlama işini ele al. Henüz internete yayın yapılmadı.

## Tasarım alternatifleri

21 Eylül 2026: Mevcut yeşil bakım sayfası `/` altında korundu. Kullanıcının istediği koyu kahverengi alternatif `/kahve/` altında eklendi. Konsept; tütün camı görseli, koyu kakao zemin, mineral kâğıt iletişim yüzeyi ve editorial Newsreader başlık kullanır. Uygulama ve karar notları `design-system/pay-medikal/pages/kahve-editorial.md` içindedir.

İki sonraki radikal tema için aynı proje içinde ayrı route geliştirilebilir. Kullanıcı bir temayı seçtiğinde yayın branch'i seçilen route'u ana sayfaya taşıyabilir. Ayrı worktree kullanımı, alternatifler paralel geliştirilirken dosya çakışmasını önlemek için uygundur.

Bu klasör başka bir projenin Git deposu içinde bulunuyor. Üst klasörün frontend/backend dosyaları ve mevcut kullanıcı değişiklikleri bu işe ait değil.

## Doğrulama sonucu

21 Eylül 2026: `npm run build` başarılı. Kahve konsepti eklendikten sonra `npm run test:browser -- --workers=2`: 16/16 başarılı (Chromium masaüstü ve mobil emülasyonu). Otomatik axe taramasında test edilen WCAG A/AA kuralları için ihlal bulunmadı. 320, 375, 768, 844, 1024 ve 1920px genişlikler; yatay taşma, klavye odağı, iletişim URL'leri, görsel yükleme, büyütülmüş metin, reduced-motion ve JavaScript kapalı kullanım kontrol edildi. Bu sonuç tüm tarayıcılarda manuel erişilebilirlik sertifikası değildir.

Her iki konseptin masaüstü ve mobil ekran görüntüleri `docs/screenshots/` altında. Ekran görüntüsü incelemesinden sonra başlık aralığı ve hero yüksekliği düzeltildi, testler yeniden geçti. Windows sandbox altında tsx kullanıcı bilgisi erişimi ve test alt süreç kapanışı sorunları görüldüğünden son başarılı çalıştırma yükseltilmiş izinle yapıldı.
