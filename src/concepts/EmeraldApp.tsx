import {
  ArrowDown,
  ArrowUpRight,
  EnvelopeSimple,
  MapPin,
  Phone,
  Wrench,
} from '@phosphor-icons/react'
import { PageEntrance } from '../components/PageEntrance'
import { company, mapsUrl } from '../content/company'

export function CrystalApp({ variant = 'emerald' }: { variant?: 'emerald' | 'ruby' }) {
  const isRuby = variant === 'ruby'
  const crystalAsset = isRuby ? 'ruby-crystal' : 'emerald-crystal'

  return (
    <PageEntrance className={`emerald-site${isRuby ? ' ruby-site' : ''}`}>
      <a className="emerald-skip" href="#emerald-main">İçeriğe geç</a>

      <header className="emerald-header">
        <div className="emerald-wordmark">
          <img
            className="emerald-logo"
            src="/images/pay-medikal-logo.jpeg"
            alt={`${company.name} logosu`}
            width={347}
            height={314}
            decoding="async"
          />
        </div>
        <span className="emerald-location">
          <MapPin size={16} weight="light" aria-hidden="true" />
          Kartal, İstanbul
        </span>
      </header>

      <main id="emerald-main" tabIndex={-1}>
        <section className="emerald-hero" aria-labelledby="emerald-title">
          <div className="emerald-copy">
            <div className="emerald-status" data-entrance>
              <Wrench size={16} weight="light" aria-hidden="true" />
              Web sitemiz yenileniyor
            </div>
            <h1 id="emerald-title" data-entrance>Daha iyi bir deneyim için.</h1>
            <p className="emerald-description" data-entrance>
              Size daha iyi hizmet verebilmek için sitemizi yeniliyoruz. Bu süreçte iletişim bilgilerimiz üzerinden bize ulaşabilirsiniz.
            </p>
            <div data-entrance>
              <a className="emerald-primary" href="#iletisim">
                İletişim bilgileri
                <span aria-hidden="true"><ArrowDown size={18} weight="light" /></span>
              </a>
            </div>
          </div>

          <div className="emerald-visual-shell" aria-hidden="true">
            <div className="emerald-visual-frame">
              <picture>
                <source
                  type="image/avif"
                  srcSet={`/images/${crystalAsset}-720.avif 720w, /images/${crystalAsset}-1448.avif 1448w`}
                  sizes="(max-width: 767px) calc(100vw - 32px), 56vw"
                />
                <img
                  data-artwork
                  src={`/images/${crystalAsset}-1448.webp`}
                  srcSet={`/images/${crystalAsset}-720.webp 720w, /images/${crystalAsset}-1448.webp 1448w`}
                  sizes="(max-width: 767px) calc(100vw - 32px), 56vw"
                  alt=""
                  width={1448}
                  height={1086}
                  fetchPriority="high"
                />
              </picture>
              <div className="emerald-glass-edge" />
            </div>
          </div>
        </section>

        <section id="iletisim" className="emerald-contact" aria-labelledby="emerald-contact-title" tabIndex={-1}>
          <div className="emerald-contact-intro">
            <h2 id="emerald-contact-title">Bu süreçte bize ulaşın.</h2>
            <p>Sorularınız ve talepleriniz için iletişim bilgilerimiz.</p>
          </div>

          <div className="emerald-contact-list">
            <a className="emerald-contact-row" href={company.phone.href} aria-label={company.phone.display + ' numarasını arayın'}>
              <span className="emerald-contact-icon" aria-hidden="true"><Phone size={20} weight="light" /></span>
              <span className="emerald-contact-meta">Telefon</span>
              <strong>{company.phone.display}</strong>
              <span className="emerald-contact-action">Bizi arayın <ArrowUpRight size={17} weight="light" aria-hidden="true" /></span>
            </a>

            {company.email ? (
              <a className="emerald-contact-row" href={'mailto:' + company.email}>
                <span className="emerald-contact-icon" aria-hidden="true"><EnvelopeSimple size={20} weight="light" /></span>
                <span className="emerald-contact-meta">E-posta</span>
                <strong>{company.email}</strong>
                <span className="emerald-contact-action">E-posta gönderin <ArrowUpRight size={17} weight="light" aria-hidden="true" /></span>
              </a>
            ) : (
              <div className="emerald-contact-row emerald-contact-pending">
                <span className="emerald-contact-icon" aria-hidden="true"><EnvelopeSimple size={20} weight="light" /></span>
                <span className="emerald-contact-meta">E-posta</span>
                <strong>Bilgilerimiz güncelleniyor</strong>
                <span className="emerald-contact-action">Bize telefonla ulaşabilirsiniz.</span>
              </div>
            )}

            <a
              className="emerald-contact-row emerald-address"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pay Medikal adresini Google Haritalar'da açın (yeni sekme)"
            >
              <span className="emerald-contact-icon" aria-hidden="true"><MapPin size={20} weight="light" /></span>
              <span className="emerald-contact-meta">Adres</span>
              <address><strong>{company.address.street}</strong><br />{company.address.locality}</address>
              <span className="emerald-contact-action">Haritada görüntüleyin <ArrowUpRight size={17} weight="light" aria-hidden="true" /></span>
            </a>
          </div>
        </section>
      </main>

      <footer className="emerald-footer">
        <p>© {new Date().getFullYear()} Pay Medikal</p>
        <p>Anlayışınız için teşekkür ederiz.</p>
      </footer>
    </PageEntrance>
  )
}

export function EmeraldApp() {
  return <CrystalApp />
}
