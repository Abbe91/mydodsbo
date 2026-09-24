import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { uppdrag } from '@/content/uppdrag'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return uppdrag.map(u => ({ slug: u.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const u = uppdrag.find(u => u.slug === slug)
  if (!u) return {}

  return {
    title:       u.title,
    description: `${u.propertyType} i ${u.area}, ${u.city}. ${u.size} m², ${u.durationDays} ${u.durationDays === 1 ? 'dag' : 'dagar'}. ${u.services.length} tjänst${u.services.length > 1 ? 'er' : ''}.`,
    alternates:  { canonical: `/uppdrag/${u.slug}` },
  }
}

const serviceLabels: Record<string, string> = {
  dodsbotomning:  'Dödsbotömning',
  dodsbostadning: 'Dödsbostädning',
  vardering:      'Värdering',
  bortforsling:   'Bortforsling',
}

export default async function UppdragDetailPage({ params }: Props) {
  const { slug } = await params
  const u = uppdrag.find(u => u.slug === slug)
  if (!u) notFound()

  const breadcrumbs = [
    { name: 'Hem', href: '/' },
    { name: 'Uppdrag', href: '/uppdrag' },
    { name: u.title, href: `/uppdrag/${u.slug}` },
  ]

  const formattedDate = new Date(u.completedDate).toLocaleDateString('sv-SE', {
    month: 'long',
    year:  'numeric',
  })

  return (
    <>
      <div className="bg-stone-100 border-b border-stone-200 py-3">
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <section className="section">
        <div className="container max-w-3xl">
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {u.services.map(s => (
                <span key={s} className="px-3 py-1 bg-brand-50 text-brand-700 text-sm rounded-full">
                  {serviceLabels[s] ?? s}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{u.title}</h1>
            <p className="text-stone-400 text-sm">{formattedDate}</p>
          </div>

          {/* Metadata grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-stone-50 rounded-xl p-4 mb-8">
            <div>
              <p className="text-xs text-stone-400 uppercase tracking-wide mb-0.5">Bostadstyp</p>
              <p className="text-sm font-medium text-stone-700">{u.propertyType}</p>
            </div>
            <div>
              <p className="text-xs text-stone-400 uppercase tracking-wide mb-0.5">Storlek</p>
              <p className="text-sm font-medium text-stone-700">{u.size} m²</p>
            </div>
            <div>
              <p className="text-xs text-stone-400 uppercase tracking-wide mb-0.5">Stadsdel</p>
              <p className="text-sm font-medium text-stone-700">{u.area}</p>
            </div>
            <div>
              <p className="text-xs text-stone-400 uppercase tracking-wide mb-0.5">Tid</p>
              <p className="text-sm font-medium text-stone-700">
                {u.durationDays} {u.durationDays === 1 ? 'dag' : 'dagar'}
              </p>
            </div>
          </div>

          {/* Images */}
          {u.images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {u.images.map((img, i) => (
                <div key={i} className="aspect-video relative rounded-xl overflow-hidden bg-stone-100">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    loading={i === 0 ? 'eager' : 'lazy'}
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Summary */}
          <div className="prose-content">
            <p className="text-stone-600 leading-relaxed">{u.summary}</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="inline-block bg-warm-600 hover:bg-warm-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Begär kostnadsfri bedömning
            </Link>
            <Link
              href="/uppdrag"
              className="inline-block border border-stone-300 hover:border-brand-300 text-stone-700 hover:text-brand-700 font-medium px-6 py-3 rounded-lg transition-colors"
            >
              ← Tillbaka till uppdrag
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
