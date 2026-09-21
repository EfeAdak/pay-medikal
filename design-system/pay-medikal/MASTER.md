# Pay Medikal tasarım sistemi

## Tasarım kararı

Kartal'daki medikal tedarik firmasının müşterileri ve iş ortakları için Türkçe bir bakım ve iletişim sayfası. Hedef, bakım durumunu hemen anlatmak ve iletişime geçmeyi kolaylaştırmak. Soft Structuralism + Editorial Split estetiği; resmî marka kılavuzu bulunduğu iddia edilmez.

DESIGN_VARIANCE: 6. MOTION_INTENSITY: 3. VISUAL_DENSITY: 2.

## Skill uygulamaları

- frontend-design: tek güçlü görsel, konuya uygun malzeme, kısa Türkçe metin, net tipografi.
- high-end-visual-design: görselde iç içe iki yüzey, yumuşak gölge, geniş boşluk; ana butonda iç ikon halkası.
- design-taste-frontend: sol metin / sağ görsel, tek açık tema ve tek yeşil vurgu, mobilde tek sütun; dekoratif istatistik yok.
- awwwards-animations: Motion useAnimate ile tek seferlik açılış. Metin 0.7 saniye ve 0.09 saniye aralık; görsel 1.2 saniye. Sadece opacity/transform; reduced-motion, cleanup ve statik HTML.
- ui-ux-pro-max: `medical supplier maintenance minimal --design-system --variance 6 --motion 3 --density 2` araması yapıldı. Sağlık alanına uygun erişilebilir, ferah düzen önerisi benimsendi. Satış sayfasına ait referans, fiyat, sertifika ve form önerileri bakım sayfasının kapsamına uymadığı için uygulanmadı.

## Tokenlar

| Rol | Değer |
| --- | --- |
| Zemin | `#f8faf7` |
| Metin / vurgu / buton | `#254e41` |
| İkincil metin | `#596b61` |
| Ayırıcı | `#dce4dc` |
| Durum etiketi | `#eaf0e8` |
| Yazı tipi | Plus Jakarta Sans Variable, Türkçe karakterler dâhil self-hosted |
| Dış/iç görsel köşeleri | 34/26px masaüstü, 26/20px mobil |
| Buton | Tam yuvarlak, en az 52px yükseklik |
| Hareket eğrisi | cubic-bezier(0.22, 1, 0.36, 1) |

## Yerleşim ve gözden geçirme

```text
Pay Medikal                                   Kartal, İstanbul

Bakım durumu                  ┌──────────────────────────────┐
Büyük, iki satır başlık        │                              │
Açıklama                      │  Cam medikal artı görseli    │
İletişim bağlantısı            │                              │
                              └──────────────────────────────┘

Bize ulaşın
Telefon           E-posta              Açık adres + harita

Telif bilgisi                          Teşekkür
```

İlk planın genel sağlık sitesi şablonuna dönüşmemesi için doktor fotoğrafı, hizmet kartları, sahte güven işaretleri ve ürün iddiaları çıkarıldı. Görsel tek odak. Bu bir bakım sayfası olduğu için çok bölümlü landing page örnekleri, menü, kaydırma kilidi ve sürekli animasyonlar kapsam dışında. Açık tema bilinçli olarak sabit; karanlık tema kontrolü eklenmez.

Marka logosu doğrulanamadığı için yalnızca tipografik isim ve basit artı işareti kullanılır. Gerçek logo geldiğinde değiştirilir. Görsel konsept çalışmasıdır, satılan ürün gösterimi değildir.

## Kalite ölçütleri

- 320px genişlikte yatay taşma olmaması; telefonda iletişimlerin tek sütuna dönüşmesi.
- WCAG AA metin kontrastı, klavye odakları, skip link, native bağlantılar.
- JavaScript kapalıyken ana içerik ve iletişimlerin çalışması.
- Hareket azaltma tercihinde statik görünüm.
- Üretilen görselde AVIF/WebP, responsive srcset ve sabit boyut alanı.
- E-posta gelmeden çalışmayan veya uydurulmuş mail bağlantısı eklenmemesi.
