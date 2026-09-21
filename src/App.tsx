import { ArrowDown, ArrowUpRight, EnvelopeSimple, MapPin, Phone, Plus, Wrench } from '@phosphor-icons/react'
import { company, mapsUrl } from './content/company'
import { PageEntrance } from './components/PageEntrance'

export function App() {
  return (
    <PageEntrance>
      <a className="skip-link" href="#main">İçeriğe geç</a>

      <header className="site-header flex items-center justify-between">
        <div className="wordmark" aria-label={company.name}>
          <span className="brand-symbol" aria-hidden="true"><Plus size={24} weight="light" /></span>
          <span className="brand-name">pay<span className="brand-descriptor">medikal</span></span>
        </div>
        <span className="header-location"><MapPin size={16} weight="light" aria-hidden="true" />Kartal, İstanbul</span>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="maintenance-label" data-entrance>
              <Wrench size={16} weight="light" aria-hidden="true" />
              Web sitemiz yenileniyor
            </div>
            <h1 id="hero-title" data-entrance>Daha iyi bir<br />deneyim için.</h1>
            <p className="hero-description" data-entrance>Size daha iyi bir hizmet verebilmek için sitemiz geçici bir süreliğine bakımdadır.</p>
            <div data-entrance>
              <a className="contact-button" href="#iletisim">
                İletişime geçin
                <span className="button-icon"><ArrowDown size={19} weight="light" aria-hidden="true" /></span>
              </a>
            </div>
          </div>

          <div className="artwork-shell" aria-hidden="true">
            <div className="artwork-inner">
              <picture>
                <source type="image/avif" srcSet="/images/medical-glass-640.avif 640w, /images/medical-glass-1280.avif 1280w" sizes="(max-width: 767px) 100vw, 50vw" />
                <img data-artwork src="/images/medical-glass-1280.webp" srcSet="/images/medical-glass-640.webp 640w, /images/medical-glass-1280.webp 1280w" sizes="(max-width: 767px) 100vw, 50vw" alt="" width={1448} height={1086} fetchPriority="high" />
              </picture>
            </div>
          </div>
        </section>

        <section id="iletisim" className="contact-section" aria-labelledby="contact-title" tabIndex={-1}>
          <div className="contact-heading">
            <h2 id="contact-title">Bize ulaşın.</h2>
            <p>Sorularınız ve talepleriniz için iletişim bilgilerimiz.</p>
          </div>
          <div className="contact-grid">
            <a className="contact-item phone-item" href={company.phone.href} aria-label={`${company.phone.display} numarasını arayın`}>
              <span className="contact-label"><Phone size={19} weight="light" aria-hidden="true" />Telefon</span>
              <span className="contact-value">{company.phone.display}</span>
              <span className="contact-action">Bizi arayın <ArrowUpRight size={15} weight="light" aria-hidden="true" /></span>
            </a>

            {company.email ? (
              <a className="contact-item email-item" href={`mailto:${company.email}`}>
                <span className="contact-label"><EnvelopeSimple size={19} weight="light" aria-hidden="true" />E-posta</span>
                <span className="contact-value">{company.email}</span>
                <span className="contact-action">E-posta gönderin <ArrowUpRight size={15} weight="light" aria-hidden="true" /></span>
              </a>
            ) : (
              <div className="contact-item email-item email-pending">
                <span className="contact-label"><EnvelopeSimple size={19} weight="light" aria-hidden="true" />E-posta</span>
                <span className="contact-value pending-value">Bilgilerimiz güncelleniyor</span>
                <span className="contact-note">Bize telefonla ulaşabilirsiniz.</span>
              </div>
            )}

            <a className="contact-item address-item" href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Pay Medikal adresini Google Haritalar'da açın (yeni sekme)">
              <span className="contact-label"><MapPin size={19} weight="light" aria-hidden="true" />Adres</span>
              <address>{company.address.street}<br />{company.address.locality}</address>
              <span className="contact-action">Haritada görüntüleyin <ArrowUpRight size={15} weight="light" aria-hidden="true" /></span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer flex flex-wrap items-center justify-between">
        <p>© {new Date().getFullYear()} Pay Medikal</p>
        <p>Anlayışınız için teşekkür ederiz.</p>
      </footer>
    </PageEntrance>
  )
}
