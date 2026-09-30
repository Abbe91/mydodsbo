import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { ContactForm } from '@/components/forms/ContactForm'
import { ServiceJsonLd } from '@/components/seo/ServiceJsonLd'
import { company } from '@/lib/company'

export const metadata: Metadata = {
  title:       'Dödsbotömning & städning i Göteborg',
  description: 'Lokal dödsbohantering i Göteborg. Vi arbetar i alla stadsdelar — från Centrum och Hisingen till Askim och Angered. Kostnadsfri bedömning.',
  alternates:  { canonical: '/omraden/goteborg' },
}

const districts = [
  'Centrum', 'Majorna–Linné', 'Vasastan', 'Haga', 'Örgryte–Härlanda',
  'Askim–Frölunda–Högsbo', 'Västra Hisingen', 'Lundby', 'Norra Hisingen',
  'Angered', 'Östra Göteborg', 'Partille', 'Mölndal', 'Lerum', 'Kungsbacka',
]

const breadcrumbs = [
  { name: 'Hem', href: '/' },
  { name: 'Göteborg', href: '/omraden/goteborg' },
]

export default function GoteborgPage() {
  return (
    <>
      <ServiceJsonLd
        name="Dödsbotömning och städning i Göteborg"
        description="Komplett dödsboservice i Göteborg och omnejd — tömning, städning, värdering och bortforsling."
        url="/omraden/goteborg"
        areaServed="Göteborg"
      />

      <div className="bg-stone-100 border-b border-stone-200 py-3">
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      {/* Intro — eyebrow is the one accent moment on this page */}
      <div className="container pt-14 md:pt-20 pb-10 md:pb-14">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-warm-600 mb-4">
          Göteborg
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 leading-[1.05] max-w-3xl mb-6">
          Dödsbotömning &amp; städning i Göteborg
        </h1>
        <a
          href={`tel:${company.phoneTel}`}
          className="text-stone-700 hover:text-brand-700 font-medium underline underline-offset-4 decoration-stone-300 hover:decoration-brand-700 transition-colors"
        >
          Ring oss direkt: {company.phone}
        </a>
      </div>

      {/* Full-bleed image slot — hero photo goes here later */}
      <div className="w-full aspect-[21/9] md:aspect-[3/1] border-y border-dashed border-stone-300 bg-stone-100 flex items-center justify-center">
        <p className="text-sm text-stone-400 italic">Bildplats — foto från Göteborg tillkommer</p>
      </div>

      <div className="container">
        {/* Main statement */}
        <div className="pt-16 md:pt-24 pb-16 md:pb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-6 max-w-2xl">
            Vi tar uppdraget oavsett hur det ser ut
          </h2>

          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-md md:max-w-lg mb-6">
            Göteborg är byggt i lager. Ett landshövdingehus i Majorna med smal trappa och
            ingen hiss, en vindsvåning i Vasastan, en villa på Hisingen med källare, garage
            och trädgård, eller ett höghus i Angered där hissen är för liten för en soffa.
            Vi har burit möbler i alla varianterna.
          </p>

          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-12">
            Du behöver inte fundera på om det är krångligt hos dig, om parkeringen är svår
            eller om allt måste bäras i trapporna. Det är vårt jobb att lösa. Ditt jobb är
            att lämna över nyckeln.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mb-3">
            Var sakerna hamnar
          </h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-10">
            Vi lämnar alltid på närmaste återvinningscentral — Högsbo, Sävenäs, Tagene
            eller Bulycke beroende på var bostaden ligger. Att köra bohaget tvärs över
            staden gör varken miljön eller priset någon tjänst.
          </p>

          <h3 className="text-lg md:text-xl font-semibold text-stone-800 mb-3">
            Hela Göteborg, inga undantag
          </h3>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose">
            Vi arbetar i hela kommunen och i kranskommunerna runt omkring. Vi tackar inte
            nej till ett uppdrag för att bostaden ligger obekvämt till eller för att det
            ser jobbigt ut.
          </p>
        </div>

        {/* Contained image slot — second photo goes here later */}
        <div className="max-w-3xl aspect-video border border-dashed border-stone-300 bg-stone-100 flex items-center justify-center mb-16 md:mb-24">
          <p className="text-sm text-stone-400 italic">Bildplats — foto från ett uppdrag tillkommer</p>
        </div>

        {/* Stadsdelar — quiet, plain text, no pills */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-4">
            Stadsdelar vi arbetar i
          </h2>
          <p className="text-base text-stone-500 leading-relaxed">
            {districts.join(', ')} — och alla kranskommuner däremellan.
          </p>
        </div>

        {/* Vad vi gör */}
        <div className="max-w-prose mb-16 md:mb-24">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-6">
            Vad vi gör i Göteborg
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed mb-8">
            Vi utför dödsbotömning, dödsbostädning, värdering och bortforsling i hela
            Göteborg. Oavsett om det rör sig om en liten lägenhet i Centrum eller en
            villa på Hisingen hanterar vi uppdraget med samma omsorg och respekt.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/tjanster"
              className="inline-block border border-brand-700 text-brand-700 hover:bg-brand-50 font-medium px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Se alla tjänster
            </Link>
            <Link
              href="/priser"
              className="inline-block border border-stone-300 hover:border-brand-300 text-stone-700 hover:text-brand-700 font-medium px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Priser &amp; offert
            </Link>
          </div>
        </div>

        {/* Kontakta oss + form, plain — no card, no sidebar */}
        <div className="pb-20 md:pb-28">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-900 leading-tight mb-6 max-w-prose">
            Kontakta oss i Göteborg
          </h2>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-prose mb-10">
            Ring oss, skicka ett meddelande eller fyll i formuläret nedan.
            Vi svarar normalt inom en arbetsdag.
          </p>
          <div className="max-w-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
