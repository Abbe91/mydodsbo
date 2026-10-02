// Single source of truth for all company data.
// Replace every placeholder value before setting SITE_LAUNCHED=true —
// the prebuild script will fail the build if any XXX remains.

// Enskild firma — intentionally empty. Never add "AB" anywhere on the site.
const legalForm = '' as string

export const company = {
  name:      'Trygg Dödsbo',
  legalForm,
  legalName: legalForm ? `Trygg Dödsbo ${legalForm}` : 'Trygg Dödsbo',
  fSkatt:    true,

  // orgNr intentionally empty. For an enskild firma the org.nr is the owner's
  // personal identity number — must never be published on the site.
  orgNr:     '' as string,

  address: {
    street: '' as string, // not published — confirm with owner before adding
    zip:    '' as string, // not published
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
