// GTM dataLayer helpers used in client components / event handlers.
// GTM triggers are configured in the GTM UI; these just push the raw events.

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export function pushEvent(
  event: string,
  params: Record<string, unknown> = {}
) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}

// Convenience wrappers for the three conversion events
export const gtm = {
  formSubmit: () => pushEvent('form_submit', { form_id: 'kontakt' }),
  telClick:   (label: string) => pushEvent('tel_click', { link_text: label }),
  waClick:    () => pushEvent('whatsapp_click'),
}
