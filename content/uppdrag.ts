export type Uppdrag = {
  slug:          string
  title:         string
  area:          string   // neighbourhood / district
  city:          string
  propertyType:  string
  size:          number   // m²
  durationDays:  number
  services:      Array<'dodsbotomning' | 'dodsbostadning' | 'vardering' | 'bortforsling'>
  summary:       string
  completedDate: string   // ISO date YYYY-MM-DD
  images:        Array<{ src: string; alt: string }>
}

export const uppdrag: Uppdrag[] = [
  {
    slug:          'majorna-lagenhet-2024-11',
    title:         'Tömning och städning i Majorna',
    area:          'Majorna',
    city:          'Göteborg',
    propertyType:  'Lägenhet',
    size:          68,
    durationDays:  2,
    services:      ['dodsbotomning', 'dodsbostadning'],
    summary:
      'Trerummare på Bangatan. Bohaget sorterades och togs om hand, värdesaker packades och lämnades till anhöriga, resterande gick till återbruk och återvinning. Uppdraget avslutades med en grundlig slutstädning.',
    completedDate: '2024-11-12',
    images: [],
  },
  {
    slug:          'hisingen-villa-2024-09',
    title:         'Dödsbotömning av villa i Biskopsgården',
    area:          'Biskopsgården',
    city:          'Göteborg',
    propertyType:  'Villa',
    size:          145,
    durationDays:  4,
    services:      ['dodsbotomning', 'vardering', 'bortforsling'],
    summary:
      'Friliggande villa med fullt möblerat hem. Inventering och värdering utfördes innan tömning. Möbler av värde togs tillvara, övrigt gods forslas till tippen och återvinningscentralen.',
    completedDate: '2024-09-03',
    images: [],
  },
  {
    slug:          'vasastan-lagenhet-2024-06',
    title:         'Städning och bortforsling i Vasastan',
    area:          'Vasastan',
    city:          'Göteborg',
    propertyType:  'Lägenhet',
    size:          52,
    durationDays:  1,
    services:      ['dodsbostadning', 'bortforsling'],
    summary:
      'Tvårummare som delvis tomts av familjen. Vi hämtade kvarvarande gods, genomförde en grundlig dödsbo­städning och lämnade lägenheten inflyttningsklar.',
    completedDate: '2024-06-18',
    images: [],
  },
  {
    slug:          'askim-bostadsratt-2025-01',
    title:         'Komplett dödsbohantering i Askim',
    area:          'Askim',
    city:          'Göteborg',
    propertyType:  'Bostadsrätt',
    size:          89,
    durationDays:  3,
    services:      ['dodsbotomning', 'vardering', 'dodsbostadning', 'bortforsling'],
    summary:
      'Fyrarummare med stor mängd bohag. Familjen önskade hjälp med hela processen — inventering, värdering, tömning, bortforsling och slutstädning. Allt genomfördes inom en vecka.',
    completedDate: '2025-01-22',
    images: [],
  },
]
