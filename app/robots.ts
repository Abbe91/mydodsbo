import type { MetadataRoute } from 'next'
import { company } from '@/lib/company'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  if (process.env.SITE_LAUNCHED !== 'true') {
    return {
      rules: { userAgent: '*', disallow: '/' },
    }
  }

  return {
    // /__forms.html is a static Netlify Forms detection stub (see public/__forms.html) — never meant to be crawled.
    rules:   { userAgent: '*', allow: '/', disallow: ['/tack', '/__forms.html'] },
    sitemap: `${company.siteUrl}/sitemap.xml`,
  }
}
