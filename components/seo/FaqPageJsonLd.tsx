import { JsonLd } from './JsonLd'

export type FaqEntry = {
  question: string
  answer:   string
}

export function FaqPageJsonLd({ faqs }: { faqs: FaqEntry[] }) {
  const data = {
    '@context':  'https://schema.org',
    '@type':     'FAQPage',
    mainEntity:  faqs.map(f => ({
      '@type':          'Question',
      name:             f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text:    f.answer,
      },
    })),
  }

  return <JsonLd data={data} />
}
