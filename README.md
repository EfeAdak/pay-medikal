# Pay Medikal

Kartal/İstanbul'daki Pay Medikal için Türkçe bakım sayfası.

```powershell
npm install
npm run dev
```

Tarayıcı: http://127.0.0.1:5173

```powershell
npm run build
npm run preview
```

Üretim önizlemesi: http://127.0.0.1:4173. `dist/` statik barındırmaya hazır çıktıdır; üretimde Vite sunucusu gerekmez. Dosyayı çift tıklamak yerine HTTP sunucusuyla görüntüleyin.

İletişim bilgileri: `src/content/company.ts`. E-posta henüz doğrulanmadı; `null` yerine gerçek adres girildiğinde e-posta bağlantısı görünür. Telefon/adres rehber kaynaklıdır ve firma teyidi bekler.

Tarayıcı kontrolleri:

```powershell
npx playwright install chromium
npm run build
npm run test:browser
```

Görsel türevlerini yeniden üretmek: `node scripts/prepare-images.mjs`.

Başlangıç belgeleri: [CODEX.md](CODEX.md), [AGENTS.md](AGENTS.md), [firma araştırması](docs/company-research.md), [tasarım sistemi](design-system/pay-medikal/MASTER.md), [skill kaynakları](docs/skills.md).
