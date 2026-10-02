import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { company } from '@/lib/company'

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
            <h2>Om Trygg Dödsbo</h2>
            <p>
              Trygg Dödsbo är ett nystartat företag i Göteborg. Företaget är nytt — men
              arbetet är vi vana vid. Vi som står bakom det har arbetat i branschen i flera
              år och har sett vad som fungerar och vad som inte gör det.
            </p>
            <p>
              Det var också därför vi startade. Vi har sett hur ett dödsbo kan hanteras när
              det går fort och hur det kan hanteras när någon tar sig tid. Skillnaden märks
              på hur anhöriga mår efteråt. Vi ville göra det på vårt eget sätt: tydliga
              priser, inga överraskningar och tid att lyssna på vad familjen faktiskt
              behöver.
            </p>

            <h3>Vilka vi är</h3>
            <p>
              Vi är sex personer. En som sköter kontakten med dig och svarar på dina frågor.
              En som är specialiserad på att värdera bohag och lösöre. Och fyra som utför
              tömning, bärning och transport.
            </p>
            <p>
              Det betyder att du har en kontaktperson genom hela processen, och att det är
              någon med rätt kunskap som bedömer värdet på det som finns i bostaden.
            </p>

            <h3>Varför vi gör det här</h3>
            <p>
              Jag har själv ingen familj i Sverige. Det här arbetet för mig nära familjer i
              en period som ofta är tung, och jag har alltid velat göra något som gör
              vardagen lättare för andra. Jag tror på att det man ger tillbaka kommer
              tillbaka — och att någon finns där för mina anhörig om de behöver hjälp, på
              samma sätt som vi finns här för dig.
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

          <div className="mt-10 border-t border-stone-200 pt-6 text-sm text-stone-500 space-y-0.5">
            <p>{company.name} · Enskild firma</p>
            <p>{company.address.city}</p>
            <p>Godkänd för F-skatt</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
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
