import type { Metadata } from 'next'
import Link from 'next/link'
import { HeroSection } from '@/components/ui/HeroSection'
import { ServiceCard } from '@/components/ui/ServiceCard'
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
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href:        '/tjanster/dodsbostadning',
    title:       'Dödsbostädning',
    description: 'Grundlig städning av hela bostaden efter tömning — vi lämnar den i inflyttningsklart skick.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href:        '/tjanster/vardering-och-uppkop',
    title:       'Värdering & uppköp',
    description: 'Vi inventerar och värderar bohaget, och kan köpa upp föremål av värde direkt — enkelt för dig som anhörig.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-5 5a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 10V5a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    href:        '/tjanster/bortforsling',
    title:       'Bortforsling',
    description: 'Vi transporterar bort allt som ska lämnas — till återvinning, second hand eller tipp. Miljöansvarigt och dokumenterat.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
]

const faqs = [
  {
    question: 'Vad kostar det att tömma ett dödsbo?',
    answer:
      'Priset beror på bostadens storlek, mängden bohag och vilka tjänster du önskar. Vi erbjuder alltid en kostnadsfri bedömning på plats innan vi lämnar en offert — kontakta oss för ett personligt prisförslag utan förbindelser.',
  },
  {
    question: 'Hur lång tid tar en dödsbotömning?',
    answer:
      'En genomsnittlig lägenhet tar 1–2 dagar. Villor och bostäder med mer bohag kan ta längre tid. Vi ger en uppskattning av tidsåtgången i samband med vår bedömning.',
  },
  {
    question: 'Kan ni hantera hela processen — från tömning till städning?',
    answer:
      'Ja. Vi erbjuder ett komplett paket där vi tömmer bostaden, hanterar och sorterar bohag, utför bortforsling och avslutar med en grundlig slutstädning — allt i ett och samma uppdrag om du önskar det.',
  },
  {
    question: 'Vad händer med föremål av värde?',
    answer:
      'Vi inventerar noggrant och kan utföra en värdering. Föremål av ekonomiskt eller sentimentalt värde identifieras och hanteras enligt dina önskemål — överlämnas till familjen, säljs eller hanteras på annat överenskommet sätt.',
  },
  {
    question: 'Hur snabbt kan ni komma?',
    answer:
      'Vi strävar efter korta ledtider. Kontakta oss så berättar vi om aktuella tider — vi förstår att många situationer är tidskänsliga.',
  },
  {
    question: 'Vilka områden arbetar ni i?',
    answer:
      'Vi arbetar i hela Västra Götaland — från Göteborg och kranskommunerna till Borås, Trollhättan, Uddevalla, Alingsås och övriga delar av regionen. Kontakta oss om du är osäker på om vi täcker ditt område, så berättar vi.',
  },
]

export default function HomePage() {
  return (
    <>
      <FaqPageJsonLd faqs={faqs} />

      <HeroSection
        heading="Dödsbotömning & städning i Göteborg"
        subheading="Vi tar hand om hela processen med omsorg och respekt — tömning, värdering, bortforsling och städning. Du slipper tänka på det praktiska."
      />

      {/* Services */}
      <section className="section bg-stone-50">
        <div className="container">
          <div className="mb-10 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Vad vi gör</h2>
            <p className="text-stone-500">
              Vi erbjuder ett komplett utbud av tjänster för dödsbon i Göteborg.
              Välj det du behöver eller låt oss hantera allt.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(s => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/tjanster"
              className="inline-flex items-center gap-1 text-brand-700 font-medium hover:gap-2 transition-all"
            >
              Se alla tjänster
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-white">
        <div className="container">
          <div className="mb-10 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Så här går det till</h2>
            <p className="text-stone-500">Tre enkla steg från kontakt till avslutat uppdrag.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                heading: 'Kontakt & bedömning',
                body: 'Du kontaktar oss och vi bokar in en kostnadsfri besiktning på plats. Vi går igenom vad som behöver göras och ger dig en tydlig offert.',
              },
              {
                step: '2',
                heading: 'Tömning & hantering',
                body: 'Vi utför uppdraget på överenskomna dagar. Bohaget sorteras, värdesaker hanteras separat och allt övrigt körs bort på ett ansvarsfullt sätt.',
              },
              {
                step: '3',
                heading: 'Städning & överlämning',
                body: 'Vi avslutar med en grundlig städning och lämnar bostaden i det skick som avtalats — redo för visning, uthyrning eller försäljning.',
              },
            ].map(({ step, heading, body }) => (
              <div key={step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-700 text-white font-bold flex items-center justify-center">
                  {step}
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-1">{heading}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="section bg-brand-50">
        <div className="container">
          <div className="mb-8 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Vi arbetar i hela Västra Götaland</h2>
            <p className="text-stone-500">
              Vi utgår från Göteborg men åker dit uppdraget finns — i hela regionen.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              'Göteborg','Mölndal','Partille','Lerum','Alingsås','Kungälv',
              'Stenungsund','Ale','Härryda','Borås','Trollhättan','Vänersborg',
              'Lidköping','Uddevalla','Skövde','Mariestad','Falköping',
            ].map(area => (
              <span
                key={area}
                className="px-3 py-1 bg-white border border-brand-200 text-brand-700 text-sm rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
          <Link
            href="/omraden/goteborg"
            className="inline-flex items-center gap-1 text-brand-700 font-medium hover:gap-2 transition-all"
          >
            Läs mer om Göteborg
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Vanliga frågor</h2>
              <p className="text-stone-500 mb-8">
                Hittar du inte svaret du söker?{' '}
                <Link href="/kontakt" className="text-brand-700 underline">
                  Kontakta oss direkt.
                </Link>
              </p>
              <div className="divide-y divide-stone-200">
                {faqs.map(f => (
                  <FaqItem key={f.question} question={f.question} answer={f.answer} />
                ))}
              </div>
            </div>

            <div id="kontakt-formulär" className="bg-stone-50 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold mb-2">Skicka en förfrågan</h2>
              <p className="text-stone-500 text-sm mb-6">
                Vi återkommer inom en arbetsdag med en kostnadsfri bedömning.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
