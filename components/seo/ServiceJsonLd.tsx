import { company } from '@/lib/company'
import { JsonLd } from './JsonLd'

type ServiceJsonLdProps = {
  name:        string
  description: string
  url:         string
  areaServed?: string
}

export function ServiceJsonLd({ name, description, url, areaServed = 'Göteborg' }: ServiceJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type':    'Service',
    name,
    description,
    url:        `${company.siteUrl}${url}`,
    provider: {
      '@type': 'LocalBusiness',
      name:    company.name,
      url:     company.siteUrl,
    },
    areaServed: {
      '@type': 'City',
      name:    areaServed,
    },
    serviceType: 'Dödsbohantering',
  }

  return <JsonLd data={data} />
}
