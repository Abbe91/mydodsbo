// Posts to the same "kontakt" Netlify form as ContactForm — field names must
// stay in sync with public/__forms.html. Only a subset of fields are shown here;
// Netlify treats missing fields as absent, not an error.
export function HeroContactForm() {
  return (
    <form
      name="kontakt"
      method="POST"
      action="/tack"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-3"
    >
      <input type="hidden" name="form-name" value="kontakt" />

      <p className="hidden" aria-hidden="true">
        <label>
          Fyll inte i detta fält:{' '}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div>
        <label htmlFor="hero-namn" className="block text-sm font-medium text-stone-700 mb-1">
          Namn <span className="text-warm-600" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="hero-namn"
          name="namn"
          required
          autoComplete="name"
          className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
          placeholder="Ditt namn"
        />
      </div>

      <div>
        <label htmlFor="hero-telefon" className="block text-sm font-medium text-stone-700 mb-1">
          Telefon <span className="text-warm-600" aria-hidden="true">*</span>
        </label>
        <input
          type="tel"
          id="hero-telefon"
          name="telefon"
          required
          autoComplete="tel"
          className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
          placeholder="070-123 45 67"
        />
      </div>

      <div>
        <label htmlFor="hero-meddelande" className="block text-sm font-medium text-stone-700 mb-1">
          Vad gäller det?
        </label>
        <textarea
          id="hero-meddelande"
          name="meddelande"
          rows={3}
          className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-none"
          placeholder="Beskriv kort vad du behöver hjälp med."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-warm-600 hover:bg-warm-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        Få kostnadsfri bedömning
      </button>
    </form>
  )
}
