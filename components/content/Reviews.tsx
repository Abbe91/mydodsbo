// Reviews collected in person — no JSON-LD, no aggregate rating markup.
const reviews = [
  { name: 'Britta',  text: 'Väldigt professionella och trevliga. Allt gick smidigt!' },
  { name: 'Görgen',  text: 'Snabb service och ett riktigt bra bemötande. Rekommenderas!' },
  { name: 'Hasse',   text: 'De tog hand om allt på ett tryggt och respektfullt sätt.' },
  { name: 'Matilda', text: 'Mycket nöjd med tömningen och städningen. Tack för hjälpen!' },
  { name: 'Yasmina', text: 'Enkelt, smidigt och professionellt från början till slut.' },
  { name: 'Sara',    text: 'Bra kommunikation och pålitlig service. Kan varmt rekommendera!' },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-2" aria-label="Fem stjärnor av fem">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <div className="border-t border-stone-200 pt-10 pb-16 md:pb-24">
      <h2 className="text-xl font-semibold text-stone-900 mb-8">
        Så säger våra kunder
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-10">
        {reviews.map((review, i) => {
          // Mobile:  separator above every item except the first.
          // Desktop: separator only above the second row (i >= 3);
          //          items 1 and 2 get their mobile border removed.
          const borderClass =
            i === 0 ? '' :
            i < 3   ? 'border-t border-stone-200 md:border-t-0' :
                      'border-t border-stone-200'

          return (
            <div key={review.name} className={`${borderClass} pt-5 pb-5`}>
              <Stars />
              <p className="text-sm font-semibold text-stone-800 mb-1">{review.name}</p>
              <p className="text-sm text-stone-600 leading-relaxed">{review.text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
