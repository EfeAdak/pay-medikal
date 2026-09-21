/** Contact details confirmed directly by the owner on 21 Eylül 2026: docs/company-research.md.
 * Do not replace with guessed or directory-sourced values without re-confirming provenance.
 */
export const company: {
  name: string
  phone: { display: string; href: string; confirmedByOwner: boolean }
  email: string | null
  address: { street: string; locality: string; mapQuery: string; confirmedByOwner: boolean }
} = {
  name: 'Pay Medikal',
  phone: {
    display: '+90 216 541 45 05',
    href: 'tel:+902165414505',
    confirmedByOwner: true,
  },
  email: 'pay@paymedikal.com',
  address: {
    street: 'Soğanlık Yeni Mahallesi, Ihlara Sokak, No: 23/A',
    locality: '34880 Kartal / İstanbul, Türkiye',
    mapQuery: 'Pay Medikal, Soğanlık Yeni Mahallesi, Ihlara Sokak, No: 23/A, 34880 Kartal, İstanbul, Türkiye',
    confirmedByOwner: true,
  },
}

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address.mapQuery)}`
