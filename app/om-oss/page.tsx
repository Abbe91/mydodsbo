import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title:       'Om oss – Trygg Dödsbo',
  description: 'Vi hjälper familjer i Göteborg och hela Västra Götaland att tömma och städa dödsbon med omsorg och respekt. Lär känna oss och hur vi arbetar.',
  alternates:  { canonical: '/om-oss' },
}

const breadcrumbs = [
  { name: 'Hem', href: '/' },
  { name: 'Om oss', href: '/om-oss' },
]

export default function OmOssPage() {
  return (
    <>
      <div className="bg-stone-100 border-b border-stone-200 py-3">
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <section className="section">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Om oss</h1>

          <div className="prose-content">
            <h2>Varför vi gör det här</h2>
            <p>
              Att tömma och städa ett dödsbo är sällan bara ett praktiskt arbete. Det är
              en del av ett avsked — ofta i ett skede då familjen redan bär tungt. Det är
              den insikten som ligger till grund för allt vi gör på Trygg Dödsbo.
            </p>
            <p>
              Vi startade Trygg Dödsbo av en enkel anledning: vi ville erbjuda en tjänst
              som vi själva skulle känna oss trygga med att anlita. Det innebär ärliga
              priser, tydlig kommunikation och ett arbete vi faktiskt kan stå bakom.
            </p>

            <h2>Vad vi gör</h2>
            <p>
              Vi hjälper familjer och dödsbodelägare i Göteborg och hela Västra Götaland
              med tömning och städning av dödsbon. Vi tar hand om det praktiska — sortering,
              bortforsling, värdering och städning — så att du kan fokusera på det som är
              viktigast.
            </p>
            <p>
              Vi utför inga bedömningar på distans. Varje uppdrag börjar med ett möte på
              plats där vi går igenom bostaden, lyssnar på dina önskemål och ger dig en
              tydlig offert. Inga dolda avgifter, inga överraskningar efteråt.
            </p>

            <h2>Hur vi arbetar</h2>
            <p>
              Vi fattar inga egenmäktiga beslut om vad som ska behållas, säljas eller
              slängas. Allt sker i samråd med dig eller de som är dödsbodelägare. Vi
              håller dig informerad under uppdragets gång utan att belasta dig med
              detaljer du inte behöver.
            </p>
            <p>
              Bohaget hanteras med respekt. Föremål som kan få ett nytt liv skänks till
              välgörenhet eller säljs vidare. Det som måste bort körs till godkänd
              anläggning och vi dokumenterar vart det tagit vägen.
            </p>
            <p>
              Vi avslutar alltid med en städning som lämnar bostaden i det skick som
              avtalats — redo för visning, uthyrning eller överlåtelse.
            </p>

            <h2>Våra värderingar</h2>
            <p>
              <strong>Trygghet.</strong> Inte bara ett namn. Vi vill att du ska känna
              att du kan lita på oss — med bohaget, med nycklarna och med informationen
              om uppdraget. Vi beter oss som vi skulle vilja att andra betedde sig i
              din situation.
            </p>
            <p>
              <strong>Ärlighet.</strong> Vi säger som det är. Om ett uppdrag är mer
              komplext än vad som framgår av en första kontakt berättar vi det tidigt.
              Vi lämnar inte en offert vi inte kan hålla.
            </p>
            <p>
              <strong>Omsorg.</strong> Vi förstår att det som för oss är ett uppdrag,
              för dig är en del av ett avsked. Det påverkar hur vi pratar, hur vi
              hanterar föremål och hur vi lämnar bostaden.
            </p>

            <h2>Göteborg och hela Västra Götaland</h2>
            <p>
              Vi utgår från Göteborg men arbetar i hela Västra Götaland. Vare sig det
              gäller en lägenhet i Majorna, en villa i Alingsås eller ett hus i Borås
              är vi på plats. Vår lokala närvaro innebär kortare ledtider och god
              kännedom om praktiska förutsättningar i regionen — återvinningscentraler,
              parkeringsregler, logistik i äldre bebyggelse.
            </p>
            <p>
              Vi svarar normalt inom en arbetsdag och bokar in en bedömning så snart
              som möjligt efter första kontakt.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="inline-block bg-warm-600 hover:bg-warm-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Kontakta oss
            </Link>
            <Link
              href="/uppdrag"
              className="inline-block border border-stone-300 hover:border-brand-300 text-stone-700 hover:text-brand-700 font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Se genomförda uppdrag
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
