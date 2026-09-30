import type { Metadata } from 'next'
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
      <FaqPageJsonLd faqs={faqs} />

      {/* Intro — eyebrow is the one accent moment on this page */}
      <div className="container pt-14 md:pt-20 pb-10 md:pb-14">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-warm-600 mb-4">
          Trygg Dödsbo
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 leading-[1.05] max-w-3xl mb-6">
          Dödsbotömning &amp; städning i Göteborg
        </h1>
        <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-md md:max-w-lg mb-8">
          Vi tar hand om hela processen med omsorg och respekt — tömning, värdering,
          bortforsling och städning. Du slipper tänka på det praktiska.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/kontakt"
            className="inline-block bg-warm-600 hover:bg-warm-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Kostnadsfri bedömning
          </Link>
          <a
            href={`tel:${company.phoneTel}`}
            className="text-stone-700 hover:text-brand-700 font-medium underline underline-offset-4 decoration-stone-300 hover:decoration-brand-700 transition-colors"
          >
            Ring oss direkt: {company.phone}
          </a>
        </div>
      </div>

      {/* Full-bleed image slot — hero photo goes here later */}
      <div className="w-full aspect-[21/9] md:aspect-[3/1] border-y border-dashed border-stone-300 bg-stone-100 flex items-center justify-center">
        <p className="text-sm text-stone-400 italic">Bildplats — foto tillkommer</p>
      </div>

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

        {/* Contained image slot — second photo goes here later */}
        <div className="max-w-3xl aspect-video border border-dashed border-stone-300 bg-stone-100 flex items-center justify-center mb-16 md:mb-24">
          <p className="text-sm text-stone-400 italic">Bildplats — foto från ett uppdrag tillkommer</p>
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
