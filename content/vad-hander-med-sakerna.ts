// Single source of truth for the "Vad händer med sakerna?" section.
// Shown in full on /tjanster/dodsbotomning and as relevant subsets on
// /tjanster/bortforsling and /tjanster/vardering-och-uppkop — see
// components/content/VadHanderMedSakerna.tsx. Do not duplicate this text
// elsewhere; render it through that component instead.

export type VadHanderMedSakernaKey =
  | 'salja'
  | 'skanka'
  | 'kassera'
  | 'personliga-handlingar'

export type VadHanderMedSakernaSection = {
  key:     VadHanderMedSakernaKey
  heading: string
  body:    string
}

export const vadHanderMedSakernaId = 'vad-hander-med-sakerna'

export const vadHanderMedSakernaHeading = 'Vad händer med sakerna?'

export const vadHanderMedSakernaSections: VadHanderMedSakernaSection[] = [
  {
    key:     'salja',
    heading: 'Sådant som kan säljas vidare',
    body:
      'Möbler, husgeråd och annat i gott skick säljer vi vidare, bland annat via Blocket och Tradera. Vad försäljningen ger redovisar vi för dig, och beloppet räknas av mot kostnaden för arbetet.',
  },
  {
    key:     'skanka',
    heading: 'Sådant som kan skänkas',
    body:
      'Saker som fortfarande är användbara men inte går att sälja erbjuder vi till second hand-verksamheter och hjälporganisationer i Göteborg. Hellre att något kommer till nytta än att det slängs.',
  },
  {
    key:     'kassera',
    heading: 'Sådant som måste kasseras',
    body:
      'Det som inte går att sälja eller skänka lämnar vi på närmaste återvinningscentral — vi kör inte bohaget längre än nödvändigt. Allt sorteras och lämnas enligt gällande regler.',
  },
  {
    key:     'personliga-handlingar',
    heading: 'Personliga handlingar',
    body:
      'Brev, fotografier, betyg, bankpapper och andra personliga dokument hanterar vi varsamt. Det du vill spara samlar vi ihop och överlämnar till dig. Resten destrueras på ett säkert sätt — inget personligt material hamnar i en container.',
  },
]
