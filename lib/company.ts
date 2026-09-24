// Single source of truth for all company data.
// Replace every placeholder value before setting SITE_LAUNCHED=true —
// the prebuild script will fail the build if any XXX remains.

export const company = {
  name:      'Trygg Dödsbo',
  legalName: 'Trygg Dödsbo AB',
  orgNr:     'XXXXXX-XXXX',

  address: {
    street: 'Gatunamn XXX',
    zip:    'XXX XX',
    city:   'Göteborg',
  },

  phone:        'XXX-XXX XX XX',   // display format, e.g. "031-XXX XX XX"
  phoneTel:     '+46XXXXXXXXX',    // href="tel:..." format, e.g. "+463XXXXXXXXX"
  email:        'info@tryggdodsbo.se',
  whatsapp:     '46XXXXXXXXX',     // wa.me/ format, e.g. "467XXXXXXXXX"

  siteUrl:      'https://www.tryggdodsbo.se',

  // Google Tag Manager container ID — set up at tagmanager.google.com
  // ▶ EDIT HERE when you create your GTM container (e.g. 'GTM-XXXXXXX')
  gtmId:        '' as string,

  // CookieYes site ID — set up at app.cookieyes.com
  // ▶ EDIT HERE when you create your CookieYes account (the ID in the script src URL)
  cookieYesId:  '' as string,

  openingHours: [
    { days: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
    { days: ['Saturday'], opens: '09:00', closes: '14:00' },
  ],

  // Displayed in footer and structured data
  serviceArea: 'Hela Västra Götaland',
} as const

export type Company = typeof company
