import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaqItem } from '@/components/ui/FaqItem'
import { ContactForm } from '@/components/forms/ContactForm'
import { FaqPageJsonLd } from '@/components/seo/FaqPageJsonLd'
import { company } from '@/lib/company'

export const metadata: Metadata = {
  title:       'Dödsbotömning & städning i Göteborg – Trygg Dödsbo',
  description: 'Vi hjälper dig tömma och städa dödsbon i Göteborg med omsorg och respekt. Fast pris, kostnadsfri bedömning, snabba tider.',
  alternates:  { canonical: '/' },
}

const services = [
  {
    href:        '/tjanster/dodsbotomning',
    title:       'Dödsbotömning',
    description: 'Vi tömmer bostaden noggrant och hanterar bohaget med respekt — sortering, återbruk och bortforsling ingår.',
  },
  {
    href:        '/tjanster/dodsbostadning',
    title:       'Dödsbostädning',
    description: 'Grundlig städning av hela bostaden efter tömning — vi lämnar den i inflyttningsklart skick.',
  },
  {
    href:        '/tjanster/vardering-och-uppkop',
    title:       'Värdering & uppköp',
    description: 'Vi inventerar och värderar bohaget, och kan köpa upp föremål av värde direkt — enkelt för dig som anhörig.',
  },
  {
    href:        '/tjanster/bortforsling',
    title:       'Bortforsling',
    description: 'Vi transporterar bort allt som ska lämnas — till återvinning, second hand eller tipp. Miljöansvarigt och dokumenterat.',
  },
]

const areas = [
  'Göteborg','Mölndal','Partille','Lerum','Alingsås','Kungälv',
  'Stenungsund','Ale','Härryda','Borås','Trollhättan','Vänersborg',
  'Lidköping','Uddevalla','Skövde','Mariestad','Falköping',
]

const faqs = [
  {
    question: 'Vad kostar det att tömma ett dödsbo?',
    answer:
      'Vi lämnar ett fast pris efter ett kostnadsfritt hembesök, och priset ändras inte längs vägen. Finns det möbler eller annat av värde räknas det av mot kostnaden — ibland täcker värdet hela jobbet, och ibland blir det pengar över till dig. Du betalar mot faktura efter att arbetet är godkänt, aldrig i förskott.',
  },
  {
    question: 'Hur lång tid tar en dödsbotömning?',
    answer:
      'Oftast en till två dagar, beroende på bostadens storlek och hur mycket bohag som finns. Vi bestämmer start- och slutdatum tillsammans innan vi börjar.',
  },
  {
    question: 'Kan ni hantera hela processen — från tömning till städning?',
    answer:
      'Ja. Tömning, sortering, värdering, bortforsling och flyttstädning kan göras i samma uppdrag. Vi hjälper även till med flytt, magasinering och röjning av trädgården om det behövs. Du har en kontaktperson genom hela processen.',
  },
  {
    question: 'Vad händer med föremål av värde?',
    answer:
      'Vi går igenom bohaget och gör en värdering. Det du vill behålla samlar vi ihop och lämnar över till dig. Resten säljer vi vidare, bland annat via Blocket och Tradera, och redovisar vad det gav. Personliga handlingar och fotografier hanterar vi varsamt — det som inte ska sparas destrueras säkert.',
  },
  {
    question: 'Hur snabbt kan ni komma?',
    answer:
      'Oftast inom ett par dagar. Hör av dig så bokar vi ett hembesök som passar dig — besöket är kostnadsfritt och du binder dig inte till något.',
  },
  {
    question: 'Vilka områden arbetar ni i?',
    answer:
      'Hela Göteborg och kranskommunerna, samt övriga Västra Götaland. Vi tackar inte nej till ett uppdrag för att bostaden ligger obekvämt till. Är du osäker på om vi kommer till dig, hör av dig så svarar vi direkt.',
  },
]

export default function HomePage() {
  return (
    <>
      <link rel="preload" as="image" href="/images/hero-team-at-work.webp" fetchPriority="high" />
      <FaqPageJsonLd faqs={faqs} />

      {/* ── Hero ──────────────────────────────────────────────────────────
          Two-column: left = content card (solid bg, full WCAG AA contrast),
          right = full-bleed team photo. Mobile: card above, image below.
         ──────────────────────────────────────────────────────────────── */}
      <section className="overflow-hidden border-b border-stone-100">
        <div className="flex flex-col md:grid md:grid-cols-[55%_45%] md:min-h-[580px] lg:min-h-[640px]">

          {/* Content card — white background guarantees contrast over any photo */}
          <div className="bg-white flex items-center px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-14 md:py-0">
            <div className="w-full">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-600 mb-4">
                Trygg Dödsbo
              </p>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-stone-900 leading-[1.05] mb-6 max-w-xl">
                Dödsbotömning &amp; städning i Göteborg
              </h1>
              <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-8 max-w-xl">
                Vi tar hand om hela processen med omsorg och respekt — tömning, värdering,
                bortforsling och städning. Du slipper tänka på det praktiska.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-7 max-w-xl">
                <Link
                  href="/kontakt"
                  className="w-full sm:w-auto bg-warm-600 hover:bg-warm-700 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-center"
                >
                  Kostnadsfri bedömning
                </Link>
                <a
                  href={`tel:${company.phoneTel}`}
                  className="w-full sm:w-auto border border-stone-300 hover:border-brand-700 text-stone-700 hover:text-brand-700 font-semibold px-6 py-3.5 rounded-lg transition-colors text-center"
                >
                  Ring oss
                </a>
              </div>

              <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
                {[
                  'Kostnadsfritt hembesök',
                  'Fast pris efter hembesök',
                  'Betalning efter utfört arbete',
                ].map(point => (
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

          {/*
            PHOTO SLOT — swap this <div> for the snippet below once the photo is ready:

              import Image from 'next/image'

              <div className="relative">
                <Image
                  src="/images/hero-team-at-work.jpg"
                  alt="Trygg Dödsbo team i arbete på ett dödsbo"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

            Expected file : /public/images/hero-team-at-work.jpg
            Dimensions    : 1080 × 1280 px  (portrait — fills the right column)
          */}
          <div className="relative min-h-[260px] md:min-h-0">
            <Image
              src="/images/hero-team-at-work.webp"
              alt="Trygg Dödsbo team i arbete på ett dödsbo"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              quality={72}
              className="object-cover object-center"
              priority
            />
          </div>

        </div>
      </section>

      <div className="container">
        {/* Vad vi gör */}
        <div className="pt-16 md:pt-24 pb-16 md:pb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-4 max-w-2xl">
            Vad vi gör
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-10">
            Vi erbjuder ett komplett utbud av tjänster för dödsbon i Göteborg.
            Välj det du behöver eller låt oss hantera allt.
          </p>

          <div className="max-w-prose divide-y divide-stone-200 mb-8">
            {services.map(s => (
              <Link key={s.href} href={s.href} className="group block py-6 first:pt-0">
                <h3 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-brand-700 transition-colors mb-2">
                  {s.title}
                </h3>
                <p className="text-base text-stone-600 leading-relaxed">{s.description}</p>
              </Link>
            ))}
          </div>

          <Link
            href="/tjanster"
            className="text-brand-700 hover:text-brand-800 font-medium underline underline-offset-4"
          >
            Se alla tjänster →
          </Link>
        </div>

        {/* Uppdrag Göteborg image */}
        <div className="relative max-w-3xl aspect-video mb-16 md:mb-24 overflow-hidden rounded-lg">
          <Image
            src="/images/uppdrag-dödsbo-göteborg.webp"
            alt="Uppdrag dödsbotömning i Göteborg"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            quality={72}
            className="object-cover object-center"
          />
        </div>

        {/* How it works */}
        <div className="pb-16 md:pb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-6 max-w-2xl">
            Så går det till — från första kontakt till återlämnad nyckel
          </h2>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mb-3">1. Du hör av dig</h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-10">
            Ring oss eller skicka ett meddelande via formuläret. Vi återkommer så snart vi
            kan för att höra vad du behöver hjälp med. Du behöver inte ha bestämt något i
            förväg.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mb-3">2. Kostnadsfritt hembesök</h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-10">
            Vi bokar en tid som passar dig och kommer ut till bostaden. Vi går igenom
            utrymmena tillsammans och lyssnar på vad du vill ha gjort: vad som ska sparas,
            om något ska magasineras, om bostaden ska flyttstädas inför försäljning eller
            avflyttning, eller om trädgården behöver röjas. Besöket är kostnadsfritt och du
            binder dig inte till något.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mb-3">3. Värdering av lösöret</h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-10">
            Finns det möbler, konst, smycken eller annat av värde gör vi en värdering.
            Ibland innebär det att värdet dras av från kostnaden — och ibland att vi betalar
            dig. Vad som gäller i ditt fall ser du svart på vitt i offerten.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mb-3">4. Offert och avtal</h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-10">
            Du får en offert med ett tydligt pris för det ni kommit överens om. Är du nöjd
            skickar vi ett avtal att skriva under, så att du vet exakt vad som ingår innan
            vi börjar.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mb-3">5. Vi utför arbetet</h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-10">
            Vi bestämmer ett start- och slutdatum tillsammans och du lämnar över nycklarna.
            En tömning tar oftast en till två dagar beroende på bostadens storlek och hur
            mycket bohag som finns. Dyker något upp under arbetets gång hör vi av oss.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mb-3">6. Överlämning och faktura</h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose">
            När bostaden är tömd och eventuellt städad går vi igenom den tillsammans. Är du
            nöjd lämnar vi tillbaka nycklarna. Du betalar först efteråt — fakturan kommer
            när arbetet är godkänt.
          </p>
        </div>

        {/* Areas — quiet, plain text, no pills, no colored panel */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
            Vi arbetar i hela Västra Götaland
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-4">
            Vi utgår från Göteborg men åker dit uppdraget finns — i hela regionen.
          </p>
          <p className="text-base text-stone-500 leading-relaxed mb-6">
            {areas.join(', ')}.
          </p>
          <Link
            href="/omraden/goteborg"
            className="text-brand-700 hover:text-brand-800 font-medium underline underline-offset-4"
          >
            Läs mer om Göteborg →
          </Link>
        </div>

        {/* FAQ */}
        <div className="max-w-prose border-t border-stone-200 pt-10 mb-16 md:mb-24">
          <h2 className="text-xl font-semibold text-stone-900 mb-2">Vanliga frågor</h2>
          <p className="text-stone-500 mb-6">
            Hittar du inte svaret du söker?{' '}
            <Link href="/kontakt" className="text-brand-700 underline hover:text-brand-800">
              Kontakta oss direkt.
            </Link>
          </p>
          <div className="divide-y divide-stone-200">
            {faqs.map(f => (
              <FaqItem key={f.question} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>

        {/* Kontakta oss + form, plain — no card, no sidebar */}
        <div id="kontakt-formulär" className="pb-20 md:pb-28">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-2 max-w-prose">
            Skicka en förfrågan
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-2">
            Vi återkommer inom en arbetsdag med en kostnadsfri bedömning.
          </p>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-10">
            Vi lämnar ett fast pris efter hembesöket, och du betalar mot faktura
            efteråt — ingen förskottsbetalning.
          </p>
          <div className="max-w-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
