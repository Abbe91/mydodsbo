// Plain HTML POST form — Netlify's build bot detects data-netlify="true"
// in the pre-rendered static HTML and wires up the forms endpoint.
// On success, Netlify redirects to /tack.
export function ContactForm() {
  return (
    <form
      name="kontakt"
      method="POST"
      action="/tack"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-4"
    >
      {/* Required hidden field for Netlify */}
      <input type="hidden" name="form-name" value="kontakt" />

      {/* Honeypot — hidden from real users, bots fill it in */}
      <p className="hidden" aria-hidden="true">
        <label>
          Fyll inte i detta fält:{' '}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
            Namn <span className="text-warm-600" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
            placeholder="Ditt namn"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">
            Telefon <span className="text-warm-600" aria-hidden="true">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
            placeholder="070-123 45 67"
          />
        </div>
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-stone-700 mb-1">
          Stad / Stadsdel
        </label>
        <input
          type="text"
          id="city"
          name="city"
          autoComplete="address-level2"
          className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
          placeholder="t.ex. Majorna, Hisingen…"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-none"
          placeholder="Beskriv kort vad det gäller — storlek på bostad, vad som behöver göras, önskat datum…"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-warm-600 hover:bg-warm-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        Skicka förfrågan
      </button>

      <p className="text-xs text-stone-400">
        Vi svarar normalt inom en arbetsdag. Dina uppgifter hanteras enligt vår{' '}
        <a href="/integritetspolicy" className="underline hover:text-stone-600">
          integritetspolicy
        </a>.
      </p>
    </form>
  )
}
