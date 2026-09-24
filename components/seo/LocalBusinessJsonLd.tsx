import { company } from '@/lib/company'
import { JsonLd } from './JsonLd'

export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type':    'LocalBusiness',
    name:       company.name,
    legalName:  company.legalName,
    url:        company.siteUrl,
    telephone:  company.phoneTel,
    email:      company.email,
    address: {
      '@type':         'PostalAddress',
      streetAddress:   company.address.street,
      addressLocality: company.address.city,
      postalCode:      company.address.zip,
      addressCountry:  'SE',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name:    'Västra Götaland',
    },
    openingHoursSpecification: company.openingHours.map(h => ({
      '@type':    'OpeningHoursSpecification',
      dayOfWeek:  h.days,
      opens:      h.opens,
      closes:     h.closes,
    })),
    priceRange: '$$',
    currenciesAccepted: 'SEK',
    paymentAccepted:    'Kontant, Swish, Faktura',
  }

  return <JsonLd data={data} />
}
