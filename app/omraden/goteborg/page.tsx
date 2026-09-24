import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { ContactForm } from '@/components/forms/ContactForm'
import { ServiceJsonLd } from '@/components/seo/ServiceJsonLd'

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

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Dödsbotömning & städning i Göteborg
              </h1>
              <p className="text-lg text-stone-500 mb-8">
                Vi är lokalt förankrade och arbetar dagligen med dödsbon i Göteborg
                och hela Västra Götaland. Det innebär kortare ledtider, god kännedom
                om lokala förutsättningar och alltid ett rimligt reseavstånd.
              </p>

              <div className="prose-content">
                <h2>Varför välja ett lokalt företag i Göteborg?</h2>
                {/* TODO: Skriv om konkreta fördelar med er lokala närvaro — inte generiska säljargument */}

                <h2>Stadsdelar vi arbetar i</h2>
                <p>Vi täcker hela Göteborg, inklusive alla stadsdelar och kranskommuner:</p>
              </div>

              <div className="flex flex-wrap gap-2 my-6">
                {districts.map(d => (
                  <span
                    key={d}
                    className="px-3 py-1.5 bg-brand-50 border border-brand-200 text-brand-700 text-sm rounded-full"
                  >
                    {d}
                  </span>
                ))}
              </div>

              <div className="prose-content">
                <h2>Vad vi gör i Göteborg</h2>
                <p>
                  Vi utför dödsbotömning, dödsbostädning, värdering och bortforsling i hela
                  Göteborg. Oavsett om det rör sig om en liten lägenhet i Centrum eller en
                  villa på Hisingen hanterar vi uppdraget med samma omsorg och respekt.
                </p>

                <h2>Praktisk information för Göteborg</h2>
                {/* TODO: Skriv lokal information — återvinningscentraler, parkeringsregler, ev. hiss-situationer i äldre bebyggelse etc. */}

                <h2>Kontakta oss i Göteborg</h2>
                <p>
                  Ring oss, skicka ett meddelande eller fyll i formuläret nedan.
                  Vi svarar normalt inom en arbetsdag.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
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
                  Priser & offert
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-stone-50 rounded-2xl p-6">
                <h2 className="text-lg font-semibold mb-2">Kontakta oss</h2>
                <p className="text-stone-500 text-sm mb-5">
                  Kostnadsfri bedömning i hela Göteborg.
                </p>
                <ContactForm />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
