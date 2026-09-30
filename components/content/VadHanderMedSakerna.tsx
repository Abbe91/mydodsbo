import { Fragment } from 'react'
import {
  vadHanderMedSakernaHeading,
  vadHanderMedSakernaId,
  vadHanderMedSakernaSections,
  type VadHanderMedSakernaKey,
} from '@/content/vad-hander-med-sakerna'

type Props = {
  // Render only these subsections, in canonical order. Omit for all of them.
  only?: VadHanderMedSakernaKey[]
  // Skip the shared h2 — use when nesting a subset under a page's own heading.
  hideHeading?: boolean
}

export function VadHanderMedSakerna({ only, hideHeading = false }: Props) {
  const sections = only
    ? vadHanderMedSakernaSections.filter(s => only.includes(s.key))
    : vadHanderMedSakernaSections

  return (
    <>
      {!hideHeading && <h2 id={vadHanderMedSakernaId}>{vadHanderMedSakernaHeading}</h2>}
      {sections.map(s => (
        <Fragment key={s.key}>
          <h3>{s.heading}</h3>
          <p>{s.body}</p>
        </Fragment>
      ))}
    </>
  )
}
