import { ArrowDown, ArrowUpRight, EnvelopeSimple, MapPin, Phone, Plus } from '@phosphor-icons/react'
import { PageEntrance } from '../components/PageEntrance'
import { company, mapsUrl } from '../content/company'

export function BrownApp() {
  return (
    <PageEntrance className="brown-site">
      <a className="skip-link brown-skip" href="#brown-main">İçeriğe geç</a>

      <header className="brown-header">
        <div className="brown-wordmark" aria-label={company.name}>
          <span className="brown-mark" aria-hidden="true"><Plus size={22} weight="regular" /></span>
          <span className="brown-brand">Pay <span>Medikal</span></span>
        </div>
        <span className="brown-location"><MapPin size={16} weight="regular" aria-hidden="true" />Kartal, İstanbul</span>
      </header>

      <main id="brown-main" tabIndex={-1}>
        <section className="brown-hero" aria-labelledby="brown-title">
          <div className="brown-copy">
            <p className="brown-eyebrow" data-entrance>Web sitemiz yenileniyor</p>
            <h1 className="brown-title" id="brown-title" data-entrance>Aynı güven, yenileniyoruz.</h1>
            <p className="brown-description" data-entrance>
              Size daha iyi bir hizmet verebilmek için sitemiz geçici bir süreliğine bakımdadır.
            </p>
            <div data-entrance>
              <a className="brown-cta" href="#kahve-iletisim">
                Bize ulaşın
                <span aria-hidden="true"><ArrowDown size={18} weight="regular" /></span>
              </a>
            </div>
          </div>

          <figure className="brown-artwork" aria-hidden="true">
            <picture>
              <source type="image/avif" srcSet="/images/medical-amber-640.avif 640w, /images/medical-amber-1152.avif 1152w" sizes="(max-width: 767px) 100vw, 44vw" />
              <img
                data-artwork
                src="/images/medical-amber-1152.webp"
                srcSet="/images/medical-amber-640.webp 640w, /images/medical-amber-1152.webp 1152w"
                sizes="(max-width: 767px) 100vw, 44vw"
                alt=""
                width={1152}
                height={1440}
                fetchPriority="high"
              />
            </picture>
          </figure>

          <section id="kahve-iletisim" className="brown-contact" aria-labelledby="brown-contact-title" tabIndex={-1}>
            <div className="brown-contact-intro">
              <h2 id="brown-contact-title">Buradayız.</h2>
              <p>Sorularınız için bize ulaşabilirsiniz.</p>
            </div>

            <div className="brown-contact-list">
              <a className="brown-contact-item brown-phone" href={company.phone.href} aria-label={`${company.phone.display} numarasını arayın`}>
                <span className="brown-contact-label"><Phone size={18} weight="regular" aria-hidden="true" />Telefon</span>
                <strong>{company.phone.display}</strong>
                <span className="brown-contact-action">Arayın <ArrowUpRight size={15} weight="regular" aria-hidden="true" /></span>
              </a>

              <a className="brown-contact-item brown-address" href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Pay Medikal adresini Google Haritalar'da açın (yeni sekme)">
                <span className="brown-contact-label"><MapPin size={18} weight="regular" aria-hidden="true" />Adres</span>
                <address>{company.address.street}<br />{company.address.locality}</address>
                <span className="brown-contact-action">Haritada açın <ArrowUpRight size={15} weight="regular" aria-hidden="true" /></span>
              </a>

              {company.email ? (
                <a className="brown-contact-item brown-email" href={`mailto:${company.email}`}>
                  <span className="brown-contact-label"><EnvelopeSimple size={18} weight="regular" aria-hidden="true" />E-posta</span>
                  <strong>{company.email}</strong>
                  <span className="brown-contact-action">E-posta gönderin <ArrowUpRight size={15} weight="regular" aria-hidden="true" /></span>
                </a>
              ) : (
                <div className="brown-contact-item brown-email brown-email-pending">
                  <span className="brown-contact-label"><EnvelopeSimple size={18} weight="regular" aria-hidden="true" />E-posta</span>
                  <strong>Bilgilerimiz güncelleniyor</strong>
                  <span className="brown-contact-note">Şimdilik telefonla ulaşabilirsiniz.</span>
                </div>
              )}
            </div>
          </section>
        </section>
      </main>

      <footer className="brown-footer">
        <p>© {new Date().getFullYear()} Pay Medikal</p>
        <p>Anlayışınız için teşekkür ederiz.</p>
      </footer>
    </PageEntrance>
  )
}
