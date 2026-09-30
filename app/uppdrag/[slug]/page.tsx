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

  const parts = [
    `${u.propertyType} i ${u.city}.`,
    u.size ? `${u.size} m².` : null,
    u.durationDays ? `${u.durationDays} ${u.durationDays === 1 ? 'dag' : 'dagar'}.` : null,
    `${u.services.length} tjänst${u.services.length > 1 ? 'er' : ''}.`,
  ].filter(Boolean)

  return {
    title:       u.title,
    description: parts.join(' '),
    alternates:  { canonical: `/uppdrag/${u.slug}` },
  }
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

      <div className="container pt-14 md:pt-20 pb-10 md:pb-14">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-warm-600 mb-4">
          {u.services.join(', ')}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 leading-[1.05] max-w-3xl mb-3">
          {u.title}
        </h1>
        <p className="text-stone-400">{formattedDate}</p>
      </div>

      <div className="container max-w-3xl pb-20 md:pb-28">
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          <div>
            <dt className="text-xs text-stone-400 uppercase tracking-wide mb-0.5">Bostadstyp</dt>
            <dd className="text-sm font-medium text-stone-700">{u.propertyType}</dd>
          </div>
          <div>
            <dt className="text-xs text-stone-400 uppercase tracking-wide mb-0.5">Ort</dt>
            <dd className="text-sm font-medium text-stone-700">{u.city}</dd>
          </div>
          {u.size && (
            <div>
              <dt className="text-xs text-stone-400 uppercase tracking-wide mb-0.5">Storlek</dt>
              <dd className="text-sm font-medium text-stone-700">{u.size} m²</dd>
            </div>
          )}
          {u.durationDays && (
            <div>
              <dt className="text-xs text-stone-400 uppercase tracking-wide mb-0.5">Tid</dt>
              <dd className="text-sm font-medium text-stone-700">
                {u.durationDays} {u.durationDays === 1 ? 'dag' : 'dagar'}
              </dd>
            </div>
          )}
        </dl>

        {u.images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {u.images.map((img, i) => (
              <div key={i} className="aspect-video relative bg-stone-100">
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
        ) : (
          <div className="aspect-video border border-dashed border-stone-300 bg-stone-100 flex items-center justify-center mb-12">
            <p className="text-sm text-stone-400 italic">Bildplats — foto tillkommer</p>
          </div>
        )}

        <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-12">
          {u.summary}
        </p>

        <div className="flex flex-wrap gap-6">
          <Link
            href="/kontakt"
            className="text-brand-700 hover:text-brand-800 font-medium underline underline-offset-4"
          >
            Begär kostnadsfri bedömning →
          </Link>
          <Link
            href="/uppdrag"
            className="text-stone-600 hover:text-brand-700 font-medium underline underline-offset-4"
          >
            ← Tillbaka till uppdrag
          </Link>
        </div>
      </div>
    </>
  )
}
