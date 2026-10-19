import type { Metadata } from 'next'
import Link from 'next/link'
import { preload } from 'react-dom'
import { FaqItem } from '@/components/ui/FaqItem'
import { ContactForm } from '@/components/forms/ContactForm'
import { HeroContactForm } from '@/components/forms/HeroContactForm'
import { Reviews } from '@/components/content/Reviews'
import { ServiceJsonLd } from '@/components/seo/ServiceJsonLd'
import { FaqPageJsonLd } from '@/components/seo/FaqPageJsonLd'
import { VadHanderMedSakerna } from '@/components/content/VadHanderMedSakerna'
import { company } from '@/lib/company'

export const metadata: Metadata = {
  title:       'Dödsbotömning i Göteborg',
  description: 'Professionell dödsbotömning i Göteborg. Vi tömmer bostaden med omsorg, sorterar bohaget och hanterar bortforsling. Kostnadsfri bedömning.',
  alternates:  { canonical: '/tjanster/dodsbotomning' },
}

const faqs = [
  {
    question: 'Vad ingår i en dödsbotömning?',
    answer:   'Tömning innebär att vi tar hand om allt bohag i bostaden — möbler, kläder, husgeråd, papper och övrigt. Vi sorterar vad som kan återbrukas, vad som skänks och vad som ska till tippen.',
  },
  {
    question: 'Behöver vi närvara under tömningen?',
    answer:   'Det är inte nödvändigt, men om du vill vara med och visa vad som ska tas tillvara är det välkommet. Många anhöriga föredrar att inte närvara, och det fungerar lika bra.',
  },
  {
    question: 'Vad händer med saker vi vill behålla?',
    answer:   'Innan vi börjar stämmer vi av vilka föremål som ska sparas för familjen. Dessa märker vi och ställer undan. Allt övrigt hanteras enligt överenskommelse.',
  },
  {
    question: 'Kan ni tömma en lägenhet på övervåning utan hiss?',
    answer:   'Ja, vi hanterar alla typer av bostäder inklusive utan hiss. Det kan påverka tidsåtgången och priset, vilket vi redovisar tydligt i offerten.',
  },
]

const trustPoints = [
  'Kostnadsfritt hembesök',
  'Fast pris efter hembesök',
  'Betalning efter utfört arbete',
]

export default function DodsbotomningPage() {
  preload('/images/tomma-dodsbo-600w.avif', {
    as:           'image',
    fetchPriority: 'high',
  })

  return (
    <>
      <ServiceJsonLd
        name="Dödsbotömning i Göteborg"
        description="Professionell tömning av dödsbon i Göteborg. Vi hanterar hela processen med omsorg och respekt."
        url="/tjanster/dodsbotomning"
      />
      <FaqPageJsonLd faqs={faqs} />

      {/* ── Hero ──────────────────────────────────────────────────────────
          Same layout as /omraden: text left, image right, form card over image.
          Mobile: content → image → form card (no overlay).
         ──────────────────────────────────────────────────────────────── */}
      <section id="formular" className="overflow-hidden border-b border-stone-100">
        <div className="flex flex-col md:grid md:grid-cols-[55%_45%] md:min-h-[580px] lg:min-h-[640px]">

          {/* Left: content card */}
          <div className="bg-white flex items-center px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-14 md:py-0">
            <div className="w-full">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-600 mb-4">
                Tjänster
              </p>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-stone-900 leading-[1.05] mb-6 max-w-xl">
                Dödsbotömning i Göteborg
              </h1>
              <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-8 max-w-xl">
                Vi tömmer bostaden noggrant och hanterar bohaget med respekt — sortering,
                återbruk och bortforsling ingår. Du lämnar över nyckeln, vi sköter resten.
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

          {/* Right: full-bleed photo + form card */}
          <div className="relative">
            <div className="relative min-h-[280px] md:absolute md:inset-0">
              <picture>
                <source
                  type="image/avif"
                  srcSet="/images/tomma-dodsbo-600w.avif"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <source
                  type="image/webp"
                  srcSet="/images/tomma-dodsbo-600w.webp"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/tomma-dodsbo-600w.jpg"
                  alt="Dödsbotömning i Göteborg – Trygg Dödsbo"
                  width={600}
                  height={900}
                  fetchPriority="high"
                  decoding="sync"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </picture>
            </div>

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

      <div className="container">
        <div className="pt-16 md:pt-24 pb-16 md:pb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
            Vad ingår i en dödsbotömning?
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose">
            Vi tömmer hela bostaden. Möbler, kläder, husgeråd, mattor, gardiner, vitvaror
            och allt som står i garderober, förråd, källare och på vinden. Du behöver inte
            sortera eller bära ut något i förväg, och du behöver inte vara på plats medan
            vi arbetar.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mt-12 mb-6">
            Så går en dödsbotömning till
          </h2>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mb-3">
            1. Inventering och genomgång
          </h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose">
            Vi börjar med ett hembesök. Vi går igenom bostaden tillsammans och stämmer av
            tre saker: när det passar dig att vi tömmer och städar, om du vet att det finns
            föremål av värde som du vill sälja, och om du vill att vi värderar hela
            bohaget. Utifrån det lämnar vi ett fast pris.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mt-8 mb-3">
            2. Hantering av värdesaker
          </h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose">
            Finns det möbler, konst, smycken eller annat av värde går vi igenom det
            tillsammans med dig. Värdet räknas av mot kostnaden för arbetet, och ibland
            blir det pengar över till dig.{' '}
            <Link href="/tjanster/vardering-och-uppkop" className="text-brand-700 hover:text-brand-800 underline underline-offset-4">
              Läs mer om värdering och uppköp
            </Link>.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mt-8 mb-3">
            3. Bortforsling
          </h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose">
            Vi forslar bort allt som ska ut och lämnar det på närmaste
            återvinningscentral. Brukbara saker säljs vidare eller skänks.{' '}
            <Link href="/tjanster/bortforsling" className="text-brand-700 hover:text-brand-800 underline underline-offset-4">
              Så hanterar vi bortforslingen
            </Link>.
          </p>

          <div className="mt-12">
            <VadHanderMedSakerna />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mt-12 mb-4">
            Vad påverkar priset?
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose">
            Priset beror på bostadens storlek, hur mycket bohag som finns, vilket
            våningsplan bostaden ligger på och om det finns hiss. Du får ett fast pris
            efter hembesöket, och det ändras inte under arbetets gång.{' '}
            <Link href="/priser" className="text-brand-700 hover:text-brand-800 underline underline-offset-4">
              Se vad som påverkar priset
            </Link>.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mt-12 mb-4">
            Varför anlita oss?
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose">
            Du lämnar över nyckeln och vi sköter resten. Du får ett fast pris innan vi
            börjar, du betalar först när arbetet är godkänt, och personliga handlingar och
            fotografier hanterar vi varsamt — det du vill spara samlar vi ihop och lämnar
            över till dig.
          </p>
        </div>

        <Reviews />

        <div className="relative max-w-3xl aspect-video mb-16 md:mb-24 overflow-hidden rounded-lg">
          <picture>
            <source type="image/avif" srcSet="/images/dodsbo-trygg-600w.avif" />
            <source type="image/webp" srcSet="/images/dodsbo-trygg-600w.webp" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/dodsbo-trygg-600w.jpg"
              alt="Trygg Dödsbo i arbete"
              width={600}
              height={450}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </picture>
        </div>

        <div className="max-w-prose border-t border-stone-200 pt-10 mb-16 md:mb-24">
          <h2 className="text-xl font-semibold text-stone-900 mb-6">Vanliga frågor om dödsbotömning</h2>
          <div className="divide-y divide-stone-200">
            {faqs.map(f => (
              <FaqItem key={f.question} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>

        <div className="max-w-prose border-t border-stone-200 pt-10 mb-16 md:mb-24">
          <h2 className="text-xl font-semibold text-stone-900 mb-4">Relaterade guider</h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="/guide/vad-hander-med-ett-dodsbo"
                className="text-brand-700 hover:text-brand-800 font-medium underline underline-offset-4"
              >
                Vad är ett dödsbo och vad händer med det? →
              </Link>
            </li>
            <li>
              <Link
                href="/guide/checklista-dodsbo"
                className="text-brand-700 hover:text-brand-800 font-medium underline underline-offset-4"
              >
                Checklista när en anhörig gått bort →
              </Link>
            </li>
          </ul>
        </div>

        <div className="pb-20 md:pb-28 max-w-prose border-t border-stone-200 pt-10">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
            Kom igång idag
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-7">
            Ring oss direkt eller fyll i formuläret — vi återkommer inom en arbetsdag
            med en kostnadsfri bedömning.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
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
          <div className="max-w-xl">
            <h3 className="text-lg font-semibold text-stone-900 mb-2">Kostnadsfri bedömning</h3>
            <p className="text-base text-stone-600 leading-relaxed mb-6">
              Vi besiktar och lämnar offert utan kostnad eller förbindelser.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>

      <section className="section bg-stone-50">
        <div className="container">
          <h2 className="text-xl font-semibold mb-4">Relaterade tjänster</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/tjanster/dodsbostadning" className="px-4 py-2 border border-stone-300 hover:border-brand-500 hover:text-brand-700 rounded-lg text-sm transition-colors">
              Dödsbostädning
            </Link>
            <Link href="/tjanster/vardering-och-uppkop" className="px-4 py-2 border border-stone-300 hover:border-brand-500 hover:text-brand-700 rounded-lg text-sm transition-colors">
              Värdering & uppköp
            </Link>
            <Link href="/tjanster/bortforsling" className="px-4 py-2 border border-stone-300 hover:border-brand-500 hover:text-brand-700 rounded-lg text-sm transition-colors">
              Bortforsling
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
