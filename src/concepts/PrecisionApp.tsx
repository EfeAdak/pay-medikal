import { ArrowUpRight, EnvelopeSimple, MapPin, Phone, Wrench } from '@phosphor-icons/react'
import { PageEntrance } from '../components/PageEntrance'
import { company, mapsUrl } from '../content/company'

export function PrecisionApp() {
  return (
    <PageEntrance className="precision-site">
      <a className="precision-skip" href="#precision-main">İçeriğe geç</a>

      <header className="precision-header">
        <div className="precision-wordmark">
          <img className="precision-logo" src="/images/pay-medikal-logo.jpeg" alt={`${company.name} logosu`} width={347} height={314} decoding="async" />
        </div>
      </header>

      <main id="precision-main" tabIndex={-1}>
        <section className="precision-hero" aria-labelledby="precision-title">
          <div className="precision-copy">
            <div className="precision-status" data-entrance>
              <Wrench size={16} weight="light" aria-hidden="true" />
              Web sitemiz yenileniyor
            </div>
            <h1 id="precision-title" data-entrance>Daha iyi bir deneyim için.</h1>
            <p className="precision-description" data-entrance>
              Size daha iyi hizmet verebilmek için sitemizi yeniliyoruz. Bu süreçte iletişim bilgilerimiz üzerinden bize ulaşabilirsiniz.
            </p>
            <div className="precision-quick-contact" data-entrance>
              <a className="precision-quick-row" href={company.phone.href} aria-label={`${company.phone.display} numarasını arayın`}>
                <Phone size={18} weight="light" aria-hidden="true" />
                {company.phone.display}
              </a>
              {company.email ? (
                <a className="precision-quick-row" href={'mailto:' + company.email}>
                  <EnvelopeSimple size={18} weight="light" aria-hidden="true" />
                  {company.email}
                </a>
              ) : null}
              <a className="precision-quick-row precision-address" href={mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Pay Medikal adresini Google Haritalar'da açın (yeni sekme)">
                <MapPin size={18} weight="light" aria-hidden="true" />
                {company.address.street}, {company.address.locality}
                <ArrowUpRight size={14} weight="light" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="precision-visual-shell" aria-hidden="true">
            <div className="precision-visual-frame">
              <picture>
                <source type="image/avif" srcSet="/images/precision-cross-720.avif 720w, /images/precision-cross-1448.avif 1448w" sizes="(max-width: 767px) calc(100vw - 32px), 55vw" />
                <img data-artwork src="/images/precision-cross-1448.webp" srcSet="/images/precision-cross-720.webp 720w, /images/precision-cross-1448.webp 1448w" sizes="(max-width: 767px) calc(100vw - 32px), 55vw" alt="" width={1448} height={1086} fetchPriority="high" />
              </picture>
            </div>
          </div>
        </section>
      </main>

      <footer id="precision-footer" className="precision-footer">
        <p>© {new Date().getFullYear()} Pay Medikal</p>
        <p>Anlayışınız için teşekkür ederiz.</p>
      </footer>
    </PageEntrance>
  )
}
