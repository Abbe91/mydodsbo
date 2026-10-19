import type { Metadata } from 'next'
import Link from 'next/link'
import { preload } from 'react-dom'
import { JsonLd } from '@/components/seo/JsonLd'
import { HeroContactForm } from '@/components/forms/HeroContactForm'
import { Reviews } from '@/components/content/Reviews'
import { company } from '@/lib/company'

export const metadata: Metadata = {
  title:       'Dödsbotömning i hela Västra Götaland – Trygg Dödsbo',
  description: 'Vi tömmer, värderar, forslar och städar dödsbon i hela Västra Götaland. Kostnadsfritt hembesök, fast pris, betalning efter utfört arbete.',
  alternates:  { canonical: '/omraden' },
}

const serviceSchema = {
  '@context':   'https://schema.org',
  '@type':      'Service',
  name:         'Dödsbotömning i Västra Götaland',
  description:  'Komplett dödsboservice — tömning, värdering, bortforsling och städning — i hela Västra Götaland.',
  url:          `${company.siteUrl}/omraden`,
  provider: {
    '@type': 'LocalBusiness',
    name:    company.name,
    url:     company.siteUrl,
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name:    'Västra Götaland',
  },
  serviceType: 'Dödsbohantering',
}

const trustPoints = [
  'Kostnadsfritt hembesök',
  'Fast pris efter hembesök',
  'Betalning efter utfört arbete',
]

export default function OmradenPage() {
  preload('/images/hero-430w.avif', {
    as:           'image',
    fetchPriority: 'high',
    imageSrcSet:  '/images/hero-430w.avif 430w, /images/hero-860w.avif 860w',
    imageSizes:   '(max-width: 768px) 100vw, 45vw',
  })

  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* ── Hero ──────────────────────────────────────────────────────────
          Same layout as homepage: text left, image right, form card over image.
          Mobile: content → image → form card (no overlay).
         ──────────────────────────────────────────────────────────────── */}
      <section id="formular" className="overflow-hidden border-b border-stone-100">
        <div className="flex flex-col md:grid md:grid-cols-[55%_45%] md:min-h-[580px] lg:min-h-[640px]">

          {/* Left: content card */}
          <div className="bg-white flex items-center px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-14 md:py-0">
            <div className="w-full">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-600 mb-4">
                Västra Götaland
              </p>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-stone-900 leading-[1.05] mb-6 max-w-xl">
                Dödsbotömning i hela Västra Götaland
              </h1>
              <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-8 max-w-xl">
                Vi tar hand om hela processen — tömning, värdering, bortforsling och
                städning. Du lämnar över nyckeln, vi sköter resten.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-7 max-w-xl">
                <a
                  href="#formular"
                  className="w-full sm:w-auto bg-warm-600 hover:bg-warm-700 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-center"
                >
                  Kostnadsfri bedömning
                </a>
                <a
                  href={`tel:${company.phoneTel}`}
                  className="w-full sm:w-auto border border-stone-300 hover:border-brand-700 text-stone-700 hover:text-brand-700 font-semibold px-6 py-3.5 rounded-lg transition-colors text-center"
                >
                  Ring oss
                </a>
              </div>

              <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
                {trustPoints.map(point => (
                  <li key={point} className="flex items-center gap-2 text-sm text-stone-600">
                    <svg
                      className="w-4 h-4 shrink-0 text-warm-600"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: full-bleed photo + form card.
              Placeholder — swap for a Västra Götaland-specific photo when available. */}
          <div className="relative">
            <div className="relative min-h-[280px] md:absolute md:inset-0">
              <picture>
                <source
                  type="image/avif"
                  srcSet="/images/hero-430w.avif 430w, /images/hero-860w.avif 860w"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <source
                  type="image/webp"
                  srcSet="/images/hero-430w.webp 430w, /images/hero-860w.webp 860w"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero-860w.jpg"
                  alt="Trygg Dödsbo team i arbete"
                  width={860}
                  height={645}
                  fetchPriority="high"
                  decoding="sync"
                  className="absolute inset-0 w-full h-full object-cover object-[25%_50%]"
                />
              </picture>
            </div>

            {/* Form card: below image on mobile, floating over image on desktop */}
            <div className="md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:pr-7 lg:pr-9">
              <div className="
                px-6 pt-8 pb-10 border-t border-stone-200
                md:px-0 md:pt-0 md:pb-0 md:border-0
                md:w-72 lg:w-80
                md:bg-white md:rounded-xl md:shadow-xl
                md:ring-1 md:ring-stone-900/[.06]
                md:p-6 lg:p-7
              ">
                <p className="text-sm font-semibold text-stone-800 mb-0.5">
                  Skriv ett meddelande
                </p>
                <p className="text-xs text-stone-500 mb-4">
                  Vi återkommer inom en arbetsdag.
                </p>
                <HeroContactForm />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Vad vi gör ────────────────────────────────────────────────────── */}
      <div className="container">
        <div className="pt-16 md:pt-24 pb-16 md:pb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-8 max-w-2xl">
            Vad vi gör
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">

            {/* Dödsbotömning — house icon */}
            <div className="border border-stone-200 rounded-lg p-5 md:p-6">
              <svg className="w-6 h-6 mb-4 text-stone-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                <Link href="/tjanster/dodsbotomning" className="hover:text-brand-700 transition-colors">
                  Dödsbotömning
                </Link>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Vi tömmer bostaden och tar hand om allt bohag — möbler, kläder, husgeråd
                och övrigt. Sortering, återbruk och bortforsling ingår.{' '}
                <Link href="/tjanster/dodsbotomning" className="text-brand-700 hover:text-brand-800 underline underline-offset-2">
                  Läs mer om dödsbotömning →
                </Link>
              </p>
            </div>

            {/* Dödsbostädning — sparkles icon */}
            <div className="border border-stone-200 rounded-lg p-5 md:p-6">
              <svg className="w-6 h-6 mb-4 text-stone-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                <Link href="/tjanster/dodsbostadning" className="hover:text-brand-700 transition-colors">
                  Dödsbostädning
                </Link>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Efter tömningen städar vi bostaden grundligt från golv till tak och
                lämnar den i inflyttningsklart skick.{' '}
                <Link href="/tjanster/dodsbostadning" className="text-brand-700 hover:text-brand-800 underline underline-offset-2">
                  Läs mer om dödsbostädning →
                </Link>
              </p>
            </div>

            {/* Värdering & uppköp — price-tag icon */}
            <div className="border border-stone-200 rounded-lg p-5 md:p-6">
              <svg className="w-6 h-6 mb-4 text-stone-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.658.592a18.634 18.634 0 005.4-3.4 18.634 18.634 0 003.4-5.4c.28-.878.107-1.958-.592-2.658L12.318 3.66A2.25 2.25 0 009.568 3z" />
                <path d="M6 6h.008v.008H6V6z" />
              </svg>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                <Link href="/tjanster/vardering-och-uppkop" className="hover:text-brand-700 transition-colors">
                  Värdering &amp; uppköp
                </Link>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Vi inventerar och värderar bohaget och kan köpa upp föremål av värde
                direkt — värdet räknas av mot kostnaden för arbetet.{' '}
                <Link href="/tjanster/vardering-och-uppkop" className="text-brand-700 hover:text-brand-800 underline underline-offset-2">
                  Läs mer om värdering →
                </Link>
              </p>
            </div>

            {/* Bortforsling — truck icon */}
            <div className="border border-stone-200 rounded-lg p-5 md:p-6">
              <svg className="w-6 h-6 mb-4 text-stone-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                <Link href="/tjanster/bortforsling" className="hover:text-brand-700 transition-colors">
                  Bortforsling
                </Link>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Allt som ska lämnas transporteras till återvinning, second hand eller tipp
                — miljöansvarigt och dokumenterat.{' '}
                <Link href="/tjanster/bortforsling" className="text-brand-700 hover:text-brand-800 underline underline-offset-2">
                  Läs mer om bortforsling →
                </Link>
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ── Välkommen ─────────────────────────────────────────────────────
          Two-column: text left, image right.
          Mobile: text above, image placeholder below.
         ──────────────────────────────────────────────────────────────── */}
      <section className="overflow-hidden border-b border-stone-100">
        <div className="flex flex-col md:grid md:grid-cols-[55%_45%] md:min-h-[460px]">

          {/* Left: text */}
          <div className="flex items-center px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-14 md:py-0">
            <div className="w-full max-w-xl">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-stone-900 leading-tight mb-6">
                Välkommen till Trygg Dödsbo
              </h2>
              <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-5">
                Vi tar hand om hela processen när ett dödsbo ska tömmas — tömning, sortering,
                värdering, bortforsling och städning. Du lämnar över nyckeln och slipper tänka
                på det praktiska.
              </p>
              <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-8">
                Efter ett kostnadsfritt hembesök får du ett fast pris som inte ändras under
                arbetets gång. Du betalar mot faktura först när arbetet är godkänt.
              </p>
              <Link
                href="/kontakt"
                className="inline-block bg-warm-600 hover:bg-warm-700 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors"
              >
                Kontakta oss
              </Link>
            </div>
          </div>

          {/* Right: photo */}
          <div className="relative min-h-[280px] md:min-h-0">
            <picture>
              <source type="image/avif" srcSet="/images/dodsbo-trygg-600w.avif" sizes="(max-width: 768px) 100vw, 45vw" />
              <source type="image/webp" srcSet="/images/dodsbo-trygg-600w.webp" sizes="(max-width: 768px) 100vw, 45vw" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/dodsbo-trygg-600w.jpg"
                alt="Trygg Dödsbo i arbete med ett dödsbo"
                width={600}
                height={450}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </picture>
          </div>

        </div>
      </section>

      <div className="container">

        {/* Vi kommer dit du är */}
        <div className="pt-16 md:pt-24 pb-16 md:pb-24 max-w-prose">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-6">
            Vi kommer dit du är
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-5">
            Vi arbetar i hela Västra Götaland — Göteborg och kranskommunerna, Borås,
            Trollhättan, Uddevalla, Alingsås, Skövde, Lidköping och orterna däremellan.
            Ligger bostaden längre bort åker vi dit ändå.
          </p>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed">
            Avståndet räknas in i det fasta priset du får efter hembesöket. Du vet vad
            det kostar innan vi börjar, och inget läggs till i efterhand.
          </p>
        </div>

        <Reviews />

        {/* Placeholder — insert a real photo of the team at work when available (no stock or AI images). */}

        {/* Så går det till */}
        <div className="pb-16 md:pb-24 border-t border-stone-200 pt-16 md:pt-24">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-8">
            Så går det till
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">

            {/* Step 1 — phone icon */}
            <div className="border border-stone-200 rounded-lg p-5 md:p-6">
              <svg className="w-6 h-6 mb-4 text-stone-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <h3 className="text-lg font-semibold text-stone-800 mb-1">1. Du hör av dig</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Ring eller skicka ett meddelande. Vi hör av oss för att boka ett hembesök
                som passar dig.
              </p>
            </div>

            {/* Step 2 — map-pin icon */}
            <div className="border border-stone-200 rounded-lg p-5 md:p-6">
              <svg className="w-6 h-6 mb-4 text-stone-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-stone-800 mb-1">2. Kostnadsfritt hembesök</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Vi besiktar bostaden och lyssnar på vad du vill ha gjort. Besöket kostar
                ingenting och du binder dig inte till något.
              </p>
            </div>

            {/* Step 3 — document-text icon */}
            <div className="border border-stone-200 rounded-lg p-5 md:p-6">
              <svg className="w-6 h-6 mb-4 text-stone-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <h3 className="text-lg font-semibold text-stone-800 mb-1">3. Fast pris och avtal</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Du får en skriftlig offert med ett fast pris på det ni kommit överens om —
                inga överraskningar i efterhand.
              </p>
            </div>

            {/* Step 4 — key icon */}
            <div className="border border-stone-200 rounded-lg p-5 md:p-6">
              <svg className="w-6 h-6 mb-4 text-stone-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.169.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
              </svg>
              <h3 className="text-lg font-semibold text-stone-800 mb-1">4. Vi utför arbetet</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Vi tar hand om allt och lämnar tillbaka nycklarna när bostaden är klar.
                Du betalar mot faktura efter att du godkänt resultatet.
              </p>
            </div>

          </div>
          <p className="mt-8">
            <Link
              href="/#sa-gar-det-till"
              className="text-brand-700 hover:text-brand-800 font-medium underline underline-offset-4"
            >
              Läs hela processen på startsidan →
            </Link>
          </p>
        </div>

        {/* Priser */}
        <div className="max-w-prose border-t border-stone-200 pt-10 pb-16 md:pb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-6">
            Priser
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed">
            Vi lämnar ett fast pris efter hembesöket — du vet exakt vad det kostar
            innan vi börjar. Finns det föremål av värde i bohaget räknas det av mot
            kostnaden, och ibland täcker värdet hela jobbet. Du betalar mot faktura
            när arbetet är godkänt, aldrig i förskott.
          </p>
          <p className="mt-5">
            <Link
              href="/priser"
              className="text-brand-700 hover:text-brand-800 font-medium underline underline-offset-4"
            >
              Läs mer om prissättning →
            </Link>
          </p>
        </div>

        {/* Closing CTA */}
        <div className="pb-20 md:pb-28 max-w-prose border-t border-stone-200 pt-10">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
            Kom igång idag
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-7">
            Ring oss direkt eller fyll i formuläret — vi återkommer inom en arbetsdag
            med en kostnadsfri bedömning.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${company.phoneTel}`}
              className="w-full sm:w-auto bg-warm-600 hover:bg-warm-700 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-center"
            >
              Ring {company.phone}
            </a>
            <a
              href="#formular"
              className="w-full sm:w-auto border border-stone-300 hover:border-brand-700 text-stone-700 hover:text-brand-700 font-semibold px-6 py-3.5 rounded-lg transition-colors text-center"
            >
              Till formuläret ↑
            </a>
          </div>
        </div>

      </div>
    </>
  )
}
