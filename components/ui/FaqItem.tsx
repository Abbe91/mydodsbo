// Native <details>/<summary> — zero JS, accessible, Lighthouse-friendly.
type FaqItemProps = {
  question: string
  answer:   string
}

export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details className="group border-b border-stone-200 last:border-0">
      <summary className="flex cursor-pointer select-none list-none items-start justify-between gap-4 py-5 text-left font-medium text-stone-800 hover:text-brand-700 transition-colors [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <svg
          className="mt-0.5 w-5 h-5 shrink-0 text-stone-400 transition-transform duration-200 group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="pb-5 text-stone-600 leading-relaxed">
        {answer}
      </div>
    </details>
  )
}
