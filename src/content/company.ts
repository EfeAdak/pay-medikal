/** Research provenance and unresolved details: docs/company-research.md.
 * Directory-sourced contact details need owner confirmation before publication.
 * Do not replace null with a guessed email address.
 */
export const company: {
  name: string
  phone: { display: string; href: string; confirmedByOwner: boolean }
  email: string | null
  address: { street: string; locality: string; mapQuery: string; confirmedByOwner: boolean }
} = {
  name: 'Pay Medikal',
  phone: {
    display: '0216 541 43 05',
    href: 'tel:+902165414305',
    confirmedByOwner: false,
  },
  email: null,
  address: {
    street: 'Soğanlık Yeni Mah. Ihlara Sok. No:23/A',
    locality: '34880 Kartal / İstanbul',
    mapQuery: 'Pay Medikal Soğanlık Yeni Ihlara Sokak 23/A Kartal İstanbul',
    confirmedByOwner: false,
  },
}

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address.mapQuery)}`
