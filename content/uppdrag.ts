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

// Populate with real, completed jobs only. No invented case studies.
export const uppdrag: Uppdrag[] = []
