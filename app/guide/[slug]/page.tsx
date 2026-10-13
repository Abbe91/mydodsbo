import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { guides } from '@/content/guides'
import { JsonLd } from '@/components/seo/JsonLd'
import { company } from '@/lib/company'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return guides.map(g => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = guides.find(g => g.slug === slug)
  if (!guide) return {}

  return {
    title:       guide.title,
    description: guide.description,
    alternates:  { canonical: `/guide/${guide.slug}` },
  }
}

function renderBody(body: string): ReactNode[] {
  return body.split('\n\n').map((para, pIdx) => {
    const parts: ReactNode[] = []
    const pattern = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g
    let last = 0
    let m: ReturnType<typeof pattern.exec>
    let k = 0
    while ((m = pattern.exec(para)) !== null) {
      if (m.index > last) parts.push(para.slice(last, m.index))
      if (m[0].startsWith('**')) {
        parts.push(<strong key={k++}>{m[1]}</strong>)
      } else {
        parts.push(<Link key={k++} href={m[3]!} className="text-brand-700 hover:text-brand-800 underline underline-offset-4">{m[2]}</Link>)
      }
      last = m.index + m[0].length
    }
    if (last < para.length) parts.push(para.slice(last))
    return (
      <p key={pIdx} className="text-base md:text-lg text-stone-600 leading-relaxed mb-3 last:mb-0">
        {parts}
      </p>
    )
  })
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params
  const guide = guides.find(g => g.slug === slug)
  if (!guide) notFound()

  const breadcrumbs = [
    { name: 'Hem', href: '/' },
    { name: guide.title, href: `/guide/${guide.slug}` },
  ]

  const articleJsonLd = {
    '@context':       'https://schema.org',
    '@type':          'Article',
    headline:         guide.title,
    description:      guide.description,
    datePublished:    guide.publishedDate,
    dateModified:     guide.publishedDate,
    url:              `${company.siteUrl}/guide/${guide.slug}`,
    publisher: {
      '@type': 'Organization',
      name:    company.name,
      url:     company.siteUrl,
    },
    author: {
      '@type': 'Organization',
      name:    company.name,
    },
  }

  const formattedDate = new Date(guide.publishedDate).toLocaleDateString('sv-SE', {
    day:   'numeric',
    month: 'long',
    year:  'numeric',
  })

  return (
    <>
      <JsonLd data={articleJsonLd} />

      <div className="bg-stone-100 border-b border-stone-200 py-3">
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <div className="container pt-14 md:pt-20 pb-10 md:pb-14">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-warm-600 mb-4">
          Guide
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 leading-[1.05] max-w-3xl mb-3">
          {guide.title}
        </h1>
        <p className="text-stone-400 mb-4">Publicerad {formattedDate}</p>
        <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose">{guide.description}</p>
      </div>

      <article className="container max-w-prose pb-20 md:pb-28">
        {guide.sections.map(section => (
          <section key={section.heading} className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 leading-tight mb-4">
              {section.heading}
            </h2>
            <div>{renderBody(section.body)}</div>
          </section>
        ))}

        <div className="mt-16 pt-10 border-t border-stone-200">
          <h2 className="text-xl font-semibold text-stone-900 mb-2">
            Behöver du hjälp med ett dödsbo i Göteborg?
          </h2>
          <p className="text-stone-600 mb-4">
            Vi erbjuder kostnadsfri bedömning på plats. Kontakta oss så berättar vi mer.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link
              href="/tjanster/dodsbotomning"
              className="text-brand-700 hover:text-brand-800 font-medium underline underline-offset-4"
            >
              Dödsbotömning →
            </Link>
            <Link
              href="/kontakt"
              className="text-brand-700 hover:text-brand-800 font-medium underline underline-offset-4"
            >
              Kontakta oss →
            </Link>
          </div>
        </div>

        {/* Related guides */}
        {guides.filter(g => g.slug !== guide.slug).length > 0 && (
          <div className="mt-12 pt-8 border-t border-stone-200">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">Relaterade guider</h2>
            <ul className="space-y-3">
              {guides
                .filter(g => g.slug !== guide.slug)
                .slice(0, 3)
                .map(g => (
                  <li key={g.slug}>
                    <Link
                      href={`/guide/${g.slug}`}
                      className="text-brand-700 hover:underline font-medium"
                    >
                      {g.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </article>
    </>
  )
}
