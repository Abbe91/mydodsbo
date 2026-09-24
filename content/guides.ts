export type GuideSection = {
  heading: string
  body:    string
}

export type Guide = {
  slug:          string
  title:         string
  description:   string
  publishedDate: string   // ISO date YYYY-MM-DD
  sections:      GuideSection[]
}

export const guides: Guide[] = [
  {
    slug:          'vad-hander-med-ett-dodsbo',
    title:         'Vad händer med ett dödsbo?',
    description:   'En praktisk guide om vad som händer med ett dödsbo efter ett dödsfall och vad du som anhörig behöver tänka på.',
    publishedDate: '2025-01-10',
    sections: [
      {
        heading: 'Vad är ett dödsbo?',
        body:    'TODO: Förklara begreppet dödsbo på ett enkelt och lugnt sätt för en sörjande anhörig.',
      },
      {
        heading: 'Vem ansvarar för dödsboet?',
        body:    'TODO: Beskriv dödsbodelägares ansvar och rättigheter.',
      },
      {
        heading: 'Vilka praktiska steg behöver tas?',
        body:    'TODO: Lista de praktiska stegen — bouppteckning, tömning, städning, försäljning.',
      },
      {
        heading: 'Hur kan Trygg Dödsbo hjälpa till?',
        body:    'TODO: Kortfattat om vad ni tar hand om och hur kontaktflödet ser ut.',
      },
    ],
  },
  {
    slug:          'checklista-dodsbo',
    title:         'Checklista för dödsbo – steg för steg',
    description:   'En komplett checklista över allt som behöver göras när man hanterar ett dödsbo i Sverige.',
    publishedDate: '2025-02-05',
    sections: [
      {
        heading: 'Direkt efter dödsfallet',
        body:    'TODO: Lista åtgärder vecka 1 — anmälan till Skatteverket, begravning, etc.',
      },
      {
        heading: 'Bouppteckning',
        body:    'TODO: Förklara bouppteckning, tidsfrister och vem som utför den.',
      },
      {
        heading: 'Tömning och städning av bostaden',
        body:    'TODO: Steg för att planera och genomföra tömning — vad gör man själv, vad lämnar man till proffs.',
      },
      {
        heading: 'Avsluta abonnemang och kontrakt',
        body:    'TODO: Hyra/bostadsrätt, el, internet, tidningar, bank, försäkringar.',
      },
    ],
  },
  {
    slug:          'hur-mycket-kostar-det-att-tomma-ett-dodsbo',
    title:         'Hur mycket kostar det att tömma ett dödsbo?',
    description:   'Vad påverkar priset för dödsbotömning? Här reder vi ut vad du kan förvänta dig att betala och vad som ingår.',
    publishedDate: '2025-03-12',
    sections: [
      {
        heading: 'Vad påverkar priset?',
        body:    'TODO: Storlek, bohagsmängd, våningsplan, avstånd till bil, specialföremål.',
      },
      {
        heading: 'Timpris vs fast pris',
        body:    'TODO: Förklara skillnaden och vad som passar bäst i olika situationer.',
      },
      {
        heading: 'RUT-avdrag för dödsbo',
        body:    'TODO: Förklara om och hur RUT-avdrag kan tillämpas på dödsbo­städning.',
      },
      {
        heading: 'Kostnadsfri bedömning',
        body:    'TODO: Beskriv hur ni gör er bedömning och varför ni alltid besiktar före offert.',
      },
    ],
  },
  {
    slug:          'dodsbo-goteborg',
    title:         'Dödsbo i Göteborg – det du behöver veta',
    description:   'Lokal guide för dig som hanterar ett dödsbo i Göteborg. Praktiska råd om allt från bortforsling till återvinning.',
    publishedDate: '2025-04-08',
    sections: [
      {
        heading: 'Återvinningscentraler i Göteborg',
        body:    'TODO: Nämn de relevanta ÅVC:erna och öppettiderna — faktabaserat, uppdateras av användaren.',
      },
      {
        heading: 'Regler för bortforsling i Göteborg',
        body:    'TODO: Lokala regler för transport av bohag, tunglyft i hyreshus, etc.',
      },
      {
        heading: 'Välgörenhetsorganisationer som tar emot möbler',
        body:    'TODO: Lista lokala organisationer — Erikshjälpen, Myrorna, Röda Korset m.fl. i Göteborg.',
      },
      {
        heading: 'Varför anlita ett lokalt företag?',
        body:    'TODO: Skriv om fördelarna med lokal kännedom — utan att göra det till en reklampitch.',
      },
    ],
  },
]
