import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { company } from '@/lib/company'

// TODO: update this date each time the policy is materially changed
const POLICY_DATE = '2026-09-23'

export const metadata: Metadata = {
  title:       'Integritetspolicy',
  description: `Hur ${company.name} behandlar personuppgifter och vilka rättigheter du har som registrerad.`,
  alternates:  { canonical: '/integritetspolicy' },
}

const breadcrumbs = [
  { name: 'Hem', href: '/' },
  { name: 'Integritetspolicy', href: '/integritetspolicy' },
]

export default function IntegritetspolicyPage() {
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
            <h1>Integritetspolicy</h1>
            <p className="text-stone-400 text-sm">
              Senast uppdaterad:{' '}
              {new Date(POLICY_DATE).toLocaleDateString('sv-SE', {
                year: 'numeric', month: 'long', day: 'numeric',
              })}
            </p>

            {/* ── 1. Personuppgiftsansvarig ── */}
            <h2>Personuppgiftsansvarig</h2>
            <p>
              {company.legalName}<br />
              Organisationsnummer: {company.orgNr}<br />
              {company.address.street}, {company.address.zip} {company.address.city}<br />
              E-post: <a href={`mailto:${company.email}`}>{company.email}</a><br />
              Telefon: <a href={`tel:${company.phoneTel}`}>{company.phone}</a>
            </p>
            <p>
              Vi är personuppgiftsansvariga för de personuppgifter som behandlas i samband
              med användningen av denna webbplats och de tjänster vi erbjuder.
            </p>

            {/* ── 2. Vilka uppgifter vi behandlar och varför ── */}
            <h2>Vilka uppgifter behandlar vi och varför?</h2>

            <h3>2.1 Kontaktförfrågan via formulär</h3>
            <p>
              När du fyller i kontaktformuläret på webbplatsen samlar vi in följande
              uppgifter:
            </p>
            <ul>
              <li>Namn</li>
              <li>Telefonnummer</li>
              <li>Stad eller stadsdel (frivilligt)</li>
              <li>Meddelande</li>
            </ul>
            <p>
              <strong>Ändamål:</strong> Att besvara din förfrågan och ge dig en
              kostnadsfri bedömning.
            </p>
            <p>
              <strong>Rättslig grund:</strong> Berättigat intresse (artikel 6.1 f GDPR) —
              att kunna kommunicera med potentiella kunder som kontaktar oss. Om en
              affärsrelation uppstår tillkommer rättslig grund avtal (artikel 6.1 b).
            </p>

            <h3>2.2 Webbanalys (Google Analytics via GTM)</h3>
            <p>
              Om du samtycker till analyscookies samlar vi via Google Tag Manager och
              Google Analytics in teknisk information om ditt besök: vilka sidor du
              besöker, hur länge, varifrån du kommer och vilken enhet och webbläsare du
              använder. Din IP-adress anonymiseras.
            </p>
            <p>
              <strong>Ändamål:</strong> Att förstå hur webbplatsen används och förbättra
              den.
            </p>
            <p>
              <strong>Rättslig grund:</strong> Samtycke (artikel 6.1 a GDPR).
              Du kan när som helst återkalla ditt samtycke via{' '}
              <a href="/cookies">cookieinställningarna</a>.
            </p>

            <h3>2.3 Annonsmätning (Google Ads via GTM)</h3>
            <p>
              Om du samtycker till marknadsföringscookies mäter vi via Google Tag Manager
              och Google Ads hur besökare interagerar med webbplatsen — till exempel om du
              fyller i formuläret, klickar på ett telefonnummer eller öppnar WhatsApp.
              Dessa händelser kopplas till eventuella annonskampanjer.
            </p>
            <p>
              <strong>Ändamål:</strong> Att mäta effekten av marknadsföring och optimera
              annonsering.
            </p>
            <p>
              <strong>Rättslig grund:</strong> Samtycke (artikel 6.1 a GDPR).
            </p>

            <h3>2.4 Samtyckeshantering (CookieYes)</h3>
            <p>
              Vi använder CookieYes som verktyg för att hantera cookiesamtycken. Ditt
              samtyckesval sparas i en cookie i din webbläsare så att du inte behöver
              ta ställning vid varje besök.
            </p>
            <p>
              <strong>Ändamål:</strong> Att dokumentera och efterleva krav på samtycke
              enligt lagen om elektronisk kommunikation och GDPR.
            </p>
            <p>
              <strong>Rättslig grund:</strong> Rättslig förpliktelse (artikel 6.1 c) och
              berättigat intresse (artikel 6.1 f) — att kunna visa att samtycke inhämtats.
            </p>

            {/* ── 3. Lagringstid ── */}
            <h2>Hur länge sparar vi uppgifterna?</h2>
            <p>
              Vi sparar dina uppgifter så länge det är nödvändigt för de ändamål de
              samlades in för:
            </p>
            <ul>
              {/* TODO: bekräfta lagringstid för formulärdata i Netlify och uppdatera */}
              <li>
                <strong>Kontaktformulär (Netlify):</strong>{' '}
                [TODO: ange lagringstid — t.ex. X månader eller tills du begär radering]
              </li>
              {/* TODO: bekräfta lagringstid för Google Analytics-data i GA4-kontot */}
              <li>
                <strong>Webbanalys (Google Analytics):</strong>{' '}
                [TODO: ange lagringstid — beror på inställning i GA4-kontot]
              </li>
              {/* TODO: bekräfta lagringstid för CookieYes-samtyckescookie */}
              <li>
                <strong>Samtyckeslogg (CookieYes):</strong>{' '}
                [TODO: ange lagringstid — vanligtvis 1 år]
              </li>
              <li>
                <strong>Bokföringsunderlag:</strong> 7 år enligt bokföringslagen (om
                affärsrelation uppstår).
              </li>
            </ul>

            {/* ── 4. Mottagare ── */}
            <h2>Mottagare och personuppgiftsbiträden</h2>
            <p>
              Vi delar inte dina personuppgifter med tredje part i marknadsföringssyfte.
              Följande aktörer behandlar uppgifter för vår räkning som
              personuppgiftsbiträden:
            </p>

            <h3>Netlify, Inc. (USA)</h3>
            <p>
              Netlify tillhandahåller webbhotell och tar emot formulärdata via sina
              servrar. Netlify är anslutna till EU–U.S. Data Privacy Framework (DPF) och
              erbjuder ett personuppgiftsbiträdesavtal (DPA).
            </p>

            <h3>Google Ireland Ltd / Google LLC (USA)</h3>
            <p>
              Google behandlar analysdata och konverteringsdata om du har godkänt
              analys- och marknadsföringscookies. Google är anslutna till EU–U.S.
              Data Privacy Framework och EU-standardavtalsklausuler (SCC) tillämpas.
            </p>
            {/* TODO: verifiera aktuell överföringsmekanism med Googles dataskyddsdokumentation */}

            <h3>CookieYes Ltd</h3>
            {/* TODO: verifiera CookieYes etableringsland, DPA och överföringsmekanism */}
            <p>
              CookieYes tillhandahåller vår samtyckesplattform.
              [TODO: ange CookieYes etableringsland och bekräfta DPA och eventuell
              överföringsmekanism]
            </p>

            {/* ── 5. Tredjelandsöverföring ── */}
            <h2>Överföring till tredjeland</h2>
            <p>
              Netlify och Google är etablerade i USA, ett land utanför EU/EES. Överföringen
              till Netlify sker med stöd av EU–U.S. Data Privacy Framework (DPF).
              Överföringen till Google sker med stöd av EU-standardavtalsklausuler (SCC)
              och EU–U.S. Data Privacy Framework.
            </p>
            {/* TODO: bekräfta och uppdatera med aktuella DPF/SCC-references vid lansering */}
            <p>
              Du kan läsa mer om EU–U.S. Data Privacy Framework på{' '}
              <a
                href="https://www.dataprivacyframework.gov"
                target="_blank"
                rel="noopener noreferrer"
              >
                dataprivacyframework.gov
              </a>.
            </p>

            {/* ── 6. Rättigheter ── */}
            <h2>Dina rättigheter</h2>
            <p>
              Enligt GDPR har du följande rättigheter avseende dina personuppgifter:
            </p>
            <ul>
              <li>
                <strong>Tillgång (artikel 15):</strong> Du har rätt att begära ett
                registerutdrag över vilka uppgifter vi behandlar om dig.
              </li>
              <li>
                <strong>Rättelse (artikel 16):</strong> Du har rätt att begära att vi
                rättar felaktiga eller ofullständiga uppgifter.
              </li>
              <li>
                <strong>Radering (artikel 17):</strong> Du har rätt att begära att vi
                raderar dina uppgifter om de inte längre behövs för ändamålet, eller om
                du återkallar ditt samtycke.
              </li>
              <li>
                <strong>Begränsning (artikel 18):</strong> Du har rätt att begära att
                behandlingen begränsas i vissa situationer, till exempel medan vi
                utreder en invändning.
              </li>
              <li>
                <strong>Dataportabilitet (artikel 20):</strong> Du har rätt att få ut
                de uppgifter du lämnat till oss i ett strukturerat, maskinläsbart
                format, om behandlingen grundas på samtycke eller avtal.
              </li>
              <li>
                <strong>Invändning (artikel 21):</strong> Du har rätt att invända mot
                behandling som grundas på berättigat intresse.
              </li>
              <li>
                <strong>Återkalla samtycke:</strong> Du kan när som helst återkalla ett
                lämnat samtycke utan att det påverkar lagligheten av behandling som skett
                dessförinnan. Cookiesamtycke återkallas via{' '}
                <a href="/cookies">cookieinställningarna</a>.
              </li>
            </ul>
            <p>
              För att utöva dina rättigheter, kontakta oss på{' '}
              <a href={`mailto:${company.email}`}>{company.email}</a>.
              Vi besvarar din begäran utan onödigt dröjsmål och senast inom en månad.
            </p>

            {/* ── 7. Klagomål ── */}
            <h2>Rätt att lämna klagomål</h2>
            <p>
              Om du anser att vår behandling av dina personuppgifter strider mot GDPR
              har du rätt att lämna in ett klagomål till tillsynsmyndigheten:
            </p>
            <p>
              <strong>Integritetsskyddsmyndigheten (IMY)</strong><br />
              Box 8114, 104 20 Stockholm<br />
              <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer">
                www.imy.se
              </a>{' '}
              — <a href="mailto:imy@imy.se">imy@imy.se</a>
            </p>

            {/* ── 8. Ändringar ── */}
            <h2>Ändringar i denna policy</h2>
            <p>
              Vi kan komma att uppdatera denna integritetspolicy. Den aktuella versionen
              publiceras alltid på denna sida med datum för senaste uppdatering. Vid
              väsentliga ändringar informerar vi dig via webbplatsen.
            </p>

            {/* ── 9. Kontakt ── */}
            <h2>Kontakta oss</h2>
            <p>
              Har du frågor om hur vi hanterar dina personuppgifter är du välkommen att
              kontakta oss:
            </p>
            <p>
              {company.legalName}<br />
              <a href={`mailto:${company.email}`}>{company.email}</a><br />
              <a href={`tel:${company.phoneTel}`}>{company.phone}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
