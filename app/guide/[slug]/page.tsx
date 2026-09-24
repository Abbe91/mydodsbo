import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
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

      <article className="section">
        <div className="container max-w-3xl">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{guide.title}</h1>
            <p className="text-stone-400 text-sm">Publicerad {formattedDate}</p>
            <p className="mt-4 text-lg text-stone-500 leading-relaxed">{guide.description}</p>
          </header>

          <div className="prose-content">
            {guide.sections.map(section => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-12 bg-brand-50 border border-brand-200 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-2">Behöver du hjälp med ett dödsbo i Göteborg?</h2>
            <p className="text-stone-600 text-sm mb-4">
              Vi erbjuder kostnadsfri bedömning på plats. Kontakta oss så berättar vi mer.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-warm-600 hover:bg-warm-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Kontakta oss
            </Link>
          </div>

          {/* Related guides */}
          {guides.filter(g => g.slug !== guide.slug).length > 0 && (
            <div className="mt-12 border-t border-stone-200 pt-8">
              <h2 className="text-lg font-semibold mb-4">Relaterade guider</h2>
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
        </div>
      </article>
    </>
  )
}
