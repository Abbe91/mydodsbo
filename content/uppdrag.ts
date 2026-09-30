export type Uppdrag = {
  slug:          string
  title:         string
  city:          string
  propertyType:  string
  size?:         number   // m² — omit if not recorded
  durationDays?: number   // omit if not recorded
  services:      string[]
  summary:       string
  completedDate: string   // YYYY-MM-DD, or YYYY-MM if the exact day isn't known
  images:        Array<{ src: string; alt: string }>
}

// Populate with real, completed jobs only. No invented case studies.
export const uppdrag: Uppdrag[] = [
  {
    slug:          'villa-orkelljunga',
    title:         'Villa i Örkelljunga',
    city:          'Örkelljunga',
    propertyType:  'Villa',
    services:      ['Tömning', 'Sortering', 'Bortforsling', 'Återvinning', 'Slutstädning'],
    summary:
      'Ett dödsbo i en villa som skulle tömmas helt inför försäljning. Vi skötte tömning och sortering av hela bohaget, forslade bort och lämnade till återvinning, och avslutade med slutstädning så att bostaden kunde visas.',
    completedDate: '2026-07',
    images: [],
  },
  {
    slug:          'lagenhet-gotene',
    title:         'Lägenhet i Götene',
    city:          'Götene',
    propertyType:  'Lägenhet',
    services:      ['Sortering', 'Donation', 'Återvinning', 'Slutstädning'],
    summary:
      'Bostaden skulle tömmas inför försäljning. Brukbara möbler och husgeråd skänktes till välgörenhet, resten sorterades och lämnades till återvinning. Vi avslutade med slutstädning. Kontakten sköttes med anhöriga som bodde utomlands, vilket innebar att vi höll dem uppdaterade under hela arbetets gång.',
    completedDate: '2026-04',
    images: [],
  },
  {
    slug:          'bostad-angelholm',
    title:         'Bostad i Ängelholm',
    city:          'Ängelholm',
    propertyType:  'Lägenhet',
    services:      ['Transport', 'Tömning', 'Bortforsling', 'Återvinning', 'Slutstädning'],
    summary:
      'Ett dödsbo som skulle tömmas och forslas bort i sin helhet. Vi hanterade transport, tömning och återvinning, och bostaden slutstädades enligt överenskommelse med beställaren.',
    completedDate: '2026-07',
    images: [],
  },
]
