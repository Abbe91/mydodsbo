import { company } from '@/lib/company'
import { JsonLd } from './JsonLd'

export type BreadcrumbItem = {
  name: string
  href: string
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    '@context':        'https://schema.org',
    '@type':           'BreadcrumbList',
    itemListElement:   items.map((item, i) => ({
      '@type':    'ListItem',
      position:   i + 1,
      name:       item.name,
      item:       `${company.siteUrl}${item.href}`,
    })),
  }

  return <JsonLd data={data} />
}
