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
    title:         'Vad är ett dödsbo och vad händer med det?',
    description:   'När en person dör blir allt hen ägde — pengar, bostad, möbler, skulder — ett dödsbo. Dödsboet är en egen juridisk person fram till dess att arvet är skiftat.',
    publishedDate: '2026-10-13',
    sections: [
      {
        heading: 'Vem bestämmer över dödsboet?',
        body:
          'Dödsbodelägarna förvaltar dödsboet tillsammans. Det är oftast efterlevande make eller maka, barn och andra arvingar, samt den som eventuellt är testamentstagare. Vem som är dödsbodelägare framgår av dödsfallsintyget med släktutredning från Skatteverket.\n\n' +
          'Att de bestämmer tillsammans betyder i praktiken att alla behöver vara överens om vad som ska säljas, skänkas eller slängas.',
      },
      {
        heading: 'Bouppteckning',
        body:
          'Bouppteckningen är en skriftlig sammanställning av vad den avlidne ägde och var skyldig på dödsdagen. Den ska förrättas senast tre månader efter dödsfallet och lämnas till Skatteverket inom en månad därefter.\n\n' +
          'Ni kan göra den själva eller ta hjälp av en begravningsbyrå eller jurist. Behöver ni mer tid går det att begära anstånd hos Skatteverket.\n\n' +
          'Finns det en bostad i dödsboet, oavsett värde, ska bouppteckning alltid göras.',
      },
      {
        heading: 'Dödsboanmälan',
        body:
          'Räcker tillgångarna bara till begravningen och andra kostnader i samband med dödsfallet, och finns det ingen fastighet eller tomträtt, kan en dödsboanmälan ersätta bouppteckningen. Den görs av socialtjänsten i den avlidnes kommun och kostar ingenting.\n\n' +
          'Kommunen gör då ett hembesök i bostaden som en del av utredningen. Bostaden får inte vara tömd innan det besöket har skett.',
      },
      {
        heading: 'Arvskifte',
        body:    'När bouppteckningen är registrerad kan arvet fördelas mellan dödsbodelägarna. Först därefter kan dödsboets konton avslutas.',
      },
      {
        heading: 'När tömmer man bostaden?',
        body:
          'Efter bouppteckningen eller hembesöket, inte före. Däremot är det ofta bråttom när väl beslutet är taget — hyreskontraktet löper, eller en försäljning väntar.\n\n' +
          'Många väljer att [ta hjälp med den delen](/tjanster/dodsbotomning). Att gå igenom ett helt hem är tungt, både fysiskt och känslomässigt, och det går sällan fort när man gör det själv vid sidan av allt annat.',
      },
      {
        heading: 'Vad kostar det?',
        body:    '[Läs mer om priser](/priser) och vad som påverkar kostnaden.',
      },
    ],
  },
  {
    slug:          'checklista-dodsbo',
    title:         'Checklista när en anhörig gått bort',
    description:   'Det är mycket som ska göras efter ett dödsfall, och allt behöver inte göras på en gång. Den här listan är ordnad efter vad som brådskar.',
    publishedDate: '2026-10-13',
    sections: [
      {
        heading: 'Första veckan',
        body:
          '**Informera de närmaste.** Dödsbodelägare, släkt, vänner, grannar, arbetsgivare och eventuell hemtjänst eller städfirma.\n\n' +
          '**Myndigheterna sköter sig själva.** Läkaren skickar dödsbeviset till Skatteverket, och därifrån går informationen vidare till Försäkringskassan, kommunen och andra myndigheter. Du behöver inte kontakta dem själv.\n\n' +
          '**Beställ dödsfallsintyg med släktutredning** från Skatteverket. Det visar vem som är dödsbodelägare och behövs i nästan alla kontakter framöver.\n\n' +
          '**Planera begravningen.** Den ska normalt ske inom en månad från dödsfallet.\n\n' +
          '**Samla papper.** Räkningar, avtal och kontoutdrag i en pärm. Öppna post som kommer till den avlidne.',
      },
      {
        heading: 'Inom någon månad',
        body:
          '**Begär eftersändning av posten** till den som sköter dödsboet. Reklam och post går inte att stoppa, men den kan styras om.\n\n' +
          '**Kontakta banken.** Stoppa autogiron — men inte sådant som fortfarande behövs, till exempel larm eller försäkring på bostaden.\n\n' +
          '**Säg upp abonnemang och avtal:** telefon, bredband, tv, tidningar, el, medlemskap och föreningar.\n\n' +
          '**Se över hemförsäkringen.** Bostaden står ofta tom ett tag, och försäkringen behöver vanligtvis vara kvar till dess att den är tömd och överlämnad.\n\n' +
          '**Säg upp hyreskontraktet** om det är en hyresrätt. Uppsägningstiden styr hur lång tid ni har på er att tömma bostaden.',
      },
      {
        heading: 'Inom fyra månader',
        body:
          '**Bouppteckningen** ska förrättas senast tre månader efter dödsfallet och lämnas till Skatteverket inom en månad därefter. Behöver ni mer tid kan ni begära anstånd hos Skatteverket för själva förrättningen.\n\n' +
          '**Dödsboanmälan** kan i vissa fall ersätta bouppteckningen — när tillgångarna bara räcker till begravningen och det inte finns någon fastighet eller tomträtt. Den görs av socialtjänsten i den avlidnes kommun.',
      },
      {
        heading: 'Det här missar många',
        body:
          '**Töm inte bostaden före bouppteckningen.** Allt som fanns i bostaden på dödsdagen ska tas upp och värderas. Är saker redan borta blir det svårt att göra rätt.\n\n' +
          '**Töm inte heller bostaden före kommunens hembesök** om ni ska ansöka om dödsboanmälan. Hembesöket är en del av utredningen, och är bostaden redan tömd kan det hindra att dödsboanmälan görs.\n\n' +
          '**Kasta inte papper i förväg.** Testamente, försäkringsbrev, bankpapper, skuldebrev och fakturor behövs i bouppteckningen.\n\n' +
          '**Dödsboet ska deklarera** året efter dödsfallet. Kontrollera att Skatteverket har rätt adress till dödsboet.',
      },
      {
        heading: 'Mer information',
        body:    'Efterlevandeguiden.se drivs av Skatteverket, Försäkringskassan och Pensionsmyndigheten och har en checklista du kan anpassa efter din situation.',
      },
    ],
  },
]
