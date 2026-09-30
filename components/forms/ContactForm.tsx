// Plain HTML POST form — Netlify's build bot detects data-netlify="true"
// in the pre-rendered static HTML and wires up the forms endpoint.
// On success, Netlify redirects to /tack.
//
// Field names are the Swedish labels below (namn, telefon, ...) so Netlify
// Forms dashboard entries and email notifications are readable without a
// lookup table. Keep public/__forms.html's field names in sync with this
// file exactly — Netlify's scanner and submission handling both key on name.
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
          <label htmlFor="namn" className="block text-sm font-medium text-stone-700 mb-1">
            Namn <span className="text-warm-600" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="namn"
            name="namn"
            required
            autoComplete="name"
            className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
            placeholder="Ditt namn"
          />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-medium text-stone-700 mb-1">
            Telefon <span className="text-warm-600" aria-hidden="true">*</span>
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            required
            autoComplete="tel"
            className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
            placeholder="070-123 45 67"
          />
        </div>
      </div>

      <fieldset className="border border-stone-200 rounded-lg p-4">
        <legend className="text-sm font-semibold text-stone-700 px-1">
          Om bostaden (valfritt)
        </legend>
        <p className="text-xs text-stone-400 mb-4">
          Hjälper oss förbereda inför hembesöket — inget av detta är obligatoriskt.
        </p>

        <div className="space-y-4">
          <div>
            <label htmlFor="epost" className="block text-sm font-medium text-stone-700 mb-1">
              E-post
            </label>
            <input
              type="email"
              id="epost"
              name="epost"
              autoComplete="email"
              className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              placeholder="namn@exempel.se"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="adress" className="block text-sm font-medium text-stone-700 mb-1">
                Adress
              </label>
              <input
                type="text"
                id="adress"
                name="adress"
                autoComplete="street-address"
                className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                placeholder="Gatuadress"
              />
            </div>
            <div>
              <label htmlFor="postnummer" className="block text-sm font-medium text-stone-700 mb-1">
                Postnummer
              </label>
              <input
                type="text"
                id="postnummer"
                name="postnummer"
                inputMode="numeric"
                autoComplete="postal-code"
                className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                placeholder="412 34"
              />
            </div>
          </div>

          <div>
            <label htmlFor="stad" className="block text-sm font-medium text-stone-700 mb-1">
              Stad / Stadsdel
            </label>
            <input
              type="text"
              id="stad"
              name="stad"
              autoComplete="address-level2"
              className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              placeholder="t.ex. Majorna, Hisingen…"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="bostadstyp" className="block text-sm font-medium text-stone-700 mb-1">
                Bostadstyp
              </label>
              <select
                id="bostadstyp"
                name="bostadstyp"
                defaultValue=""
                className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              >
                <option value="">Välj bostadstyp</option>
                <option value="Lägenhet">Lägenhet</option>
                <option value="Villa">Villa</option>
                <option value="Radhus">Radhus</option>
                <option value="Bostadsrätt">Bostadsrätt</option>
                <option value="Annat">Annat</option>
              </select>
            </div>
            <div>
              <label htmlFor="antal_rum" className="block text-sm font-medium text-stone-700 mb-1">
                Antal rum
              </label>
              <select
                id="antal_rum"
                name="antal_rum"
                defaultValue=""
                className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              >
                <option value="">Välj antal rum</option>
                <option value="1 rum">1 rum</option>
                <option value="2 rum">2 rum</option>
                <option value="3 rum">3 rum</option>
                <option value="4 rum">4 rum</option>
                <option value="5+ rum">5+ rum</option>
                <option value="Vet ej">Vet ej</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="hiss" className="block text-sm font-medium text-stone-700 mb-1">
                Hiss
              </label>
              <select
                id="hiss"
                name="hiss"
                defaultValue=""
                className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              >
                <option value="">Välj</option>
                <option value="Ja">Ja</option>
                <option value="Nej">Nej</option>
                <option value="Vet ej">Vet ej</option>
              </select>
            </div>
            <div>
              <label htmlFor="vaning" className="block text-sm font-medium text-stone-700 mb-1">
                Våningsplan
              </label>
              <input
                type="text"
                id="vaning"
                name="vaning"
                className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                placeholder="t.ex. 3"
              />
            </div>
          </div>

          <fieldset>
            <legend className="block text-sm font-medium text-stone-700 mb-1">
              Vad behöver du hjälp med?
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Dödsbotömning',
                'Dödsbostädning',
                'Värdering & uppköp',
                'Bortforsling',
                'Flytt eller magasinering',
                'Hela processen',
              ].map(tjanst => (
                <label key={tjanst} className="flex items-center gap-2 text-sm text-stone-700">
                  <input
                    type="checkbox"
                    name="tjanster"
                    value={tjanst}
                    className="h-4 w-4 accent-brand-600"
                  />
                  {tjanst}
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="onskat_datum" className="block text-sm font-medium text-stone-700 mb-1">
              Önskat datum
            </label>
            <input
              type="date"
              id="onskat_datum"
              name="onskat_datum"
              className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
            />
            <p className="text-xs text-stone-400 mt-1">Om du har ett datum i åtanke</p>
          </div>
        </div>
      </fieldset>

      <div>
        <label htmlFor="meddelande" className="block text-sm font-medium text-stone-700 mb-1">
          Meddelande
        </label>
        <textarea
          id="meddelande"
          name="meddelande"
          rows={4}
          className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-none"
          placeholder="Beskriv kort vad det gäller, eller annat du vill att vi ska veta inför besöket."
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
