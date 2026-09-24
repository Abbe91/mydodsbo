import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { company } from '@/lib/company'

export const metadata: Metadata = {
  title:       'Cookiepolicy',
  description:
    'Information om hur Trygg Dödsbo använder cookies och hur du hanterar dina inställningar.',
  alternates:  { canonical: '/cookies' },
}

const breadcrumbs = [
  { name: 'Hem', href: '/' },
  { name: 'Cookiepolicy', href: '/cookies' },
]

export default function CookiesPage() {
  const cookieYesActive = Boolean(company.cookieYesId)

  return (
    <>
      <div className="bg-stone-100 border-b border-stone-200 py-3">
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="prose-content max-w-3xl">
            <h1>Cookiepolicy</h1>

            <h2>Vad är cookies?</h2>
            <p>
              Cookies är små textfiler som lagras i din webbläsare när du besöker en
              webbplats. De används för att webbplatsen ska fungera korrekt, för att
              förstå hur besökare använder sajten, och i vissa fall för att visa
              relevant annonsering. Du kan när som helst ändra eller återkalla ditt
              samtycke via knappen längst ned på denna sida.
            </p>

            <h2>Vilka cookiekategorier använder vi?</h2>

            <h3>Nödvändiga cookies</h3>
            <p>
              Dessa cookies krävs för att webbplatsen ska fungera och kan inte
              stängas av. De sätts som svar på dina handlingar, till exempel när du
              anger cookieinställningar. De innehåller inte personidentifierbar
              information och kräver inte ditt samtycke.
            </p>
            <p>
              Vår samtyckeshanterare (CookieYes) sparar ditt val i en nödvändig
              cookie så att du inte behöver ta ställning vid varje besök.
            </p>

            <h3>Analyscookies</h3>
            <p>
              Om du samtycker aktiverar vi Google Analytics via Google Tag Manager.
              Analyscookies samlar in anonym information om hur besökare använder
              webbplatsen — vilka sidor som visas, hur länge och varifrån besökaren
              kommer. Informationen hjälper oss att förbättra sajten. Din
              IP-adress anonymiseras.
            </p>
            <p>
              Analyscookies aktiveras <strong>endast</strong> efter att du gett ditt
              samtycke. Innan dess körs Google Analytics i begränsat läge (Google
              Consent Mode v2) utan att sätta cookies eller samla in mätdata.
            </p>

            <h3>Marknadsföringscookies</h3>
            <p>
              Om du samtycker aktiverar vi Google Ads-mätning via Google Tag Manager.
              Marknadsföringscookies mäter om ett besök på webbplatsen härrör från en
              annons och vilka åtgärder du vidtar (t.ex. att skicka formulär eller
              klicka på ett telefonnummer). Uppgifterna används för att utvärdera
              och optimera våra annonskampanjer.
            </p>
            <p>
              Marknadsföringscookies aktiveras <strong>endast</strong> efter ditt
              samtycke. Utan samtycke körs Google Ads i begränsat läge utan att
              sätta cookies.
            </p>

            <h2>Google Consent Mode v2</h2>
            <p>
              Webbplatsen är konfigurerad med Google Consent Mode v2. Det innebär att
              all datalagring för analys- och annonskategorier är inaktiverad som
              standard (<code>denied</code>) tills du aktivt godkänner respektive
              kategori. Inget Google-skript sätter cookies eller skickar persondata
              innan ditt samtycke registrerats.
            </p>

            <h2>Cookietabell</h2>
            <p>
              Nedanstående tabell genereras automatiskt av CookieYes och uppdateras
              när cookiescanning körs. Den listar alla cookies som faktiskt hittas på
              webbplatsen med namn, leverantör, syfte och lagringstid.
            </p>
            {cookieYesActive ? (
              // CookieYes auto-generated cookie audit table — populated by the
              // CookieYes script once loaded.
              <div className="cky-audit-table-element" />
            ) : (
              <p className="rounded-md border border-dashed border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-500">
                Cookietabellen visas här när cookiehanteraren (CookieYes) är
                konfigurerad.
              </p>
            )}

            <h2>Hantera dina cookieinställningar</h2>
            {cookieYesActive ? (
              <>
                <p>
                  Du kan när som helst ändra eller återkalla ditt samtycke. Klicka på
                  knappen nedan för att öppna cookieinställningarna igen:
                </p>
                <p>
                  <button
                    className="cky-btn-revisit inline-flex items-center gap-2 rounded-md bg-brand-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-700 transition-colors"
                    type="button"
                  >
                    Ändra dina cookieinställningar
                  </button>
                </p>
              </>
            ) : (
              <p className="rounded-md border border-dashed border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-500">
                Knappen för att ändra cookieinställningar visas här när
                cookiehanteraren (CookieYes) är konfigurerad.
              </p>
            )}
            <p className="text-sm text-stone-500">
              Du kan även hantera cookies direkt i din webbläsare via
              inställningarna. Observera att blockering av alla cookies kan påverka
              webbplatsens funktionalitet.
            </p>

            <h2>Mer information</h2>
            <p>
              Läs mer om hur vi behandlar personuppgifter i vår{' '}
              <a href="/integritetspolicy">integritetspolicy</a>. Har du frågor om
              vår cookieanvändning är du välkommen att kontakta oss — se kontaktuppgifter
              i integritetspolicyn.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
