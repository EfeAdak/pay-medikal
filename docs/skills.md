# Skill kaynakları

Kurulum tarihi: 21 Eylül 2026. Yöntem: kurulu `skill-installer/scripts/install-skill-from-github.py`; hedef bu projenin `.agents/skills/` klasörü. Yardımcı script indirme için kullanıldı. İndirilen tasarım yönergeleri doğrudan okundu, ilgili UI/UX veri araması çalıştırıldı.

| Kullanıcının istediği | Kurulan ad | Kaynak |
| --- | --- | --- |
| frontend-design | frontend-design | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/frontend-design) |
| high-end-visual-design | high-end-visual-design | [Leonxlnx/taste-skill: soft-skill](https://github.com/Leonxlnx/taste-skill/tree/main/skills/soft-skill) |
| design-taste-frontend | design-taste-frontend | [Leonxlnx/taste-skill: taste-skill](https://github.com/Leonxlnx/taste-skill/tree/main/skills/taste-skill) |
| awwwards-animation | awwwards-animations | [devmartinese/awwwards-animations-skill](https://github.com/devmartinese/awwwards-animations-skill) |
| ui-ux-pro-max | ui-ux-pro-max | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/main/.claude/skills/ui-ux-pro-max) |

`awwwards-animation` tekil adıyla aynı paket doğrulanamadı; bulunan asıl skill'in `name` alanı çoğul. Adı değiştirilmeden kullanıldı. İki Taste skill'inin klasör adı ile metadata adı farklı olduğundan installer `--name` seçeneğiyle metadata adına kuruldu.

Proje içi skill'ler sonraki Codex turunda keşfedilebilir; `AGENTS.md` ayrıca kesin dosya yollarını belirtir. [Resmî skill dokümantasyonu](https://learn.chatgpt.com/docs/build-skills).

Skill kaynakları otomatik güncellenmez. Yerel `SKILL.md` dosyaları kullanılan sürümü korur; hash kayıtları `skills-lock.json` içindedir. İleride güncellemede yönerge farklarını incele.

Haricî yönergelerin tüm örnekleri sayfaya uygulanmaz. Bakım sayfasında olmayan form, modal, carousel, fiyat tablosu ve müşteri referansları için kod eklenmez. Gerekli olmayan GSAP/Lenis/Three.js bağımlılıkları yüklenmedi. Bu sayfada yalnızca Motion kullanıldı.
