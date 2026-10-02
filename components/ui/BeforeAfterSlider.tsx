'use client'

import { useState, useRef, useCallback } from 'react'

interface Props {
  beforeSrc:      string
  afterSrc:       string
  beforeAlt:      string
  afterAlt:       string
  beforeLabel?:   string
  afterLabel?:    string
  beforeAvifSrc?: string
  afterAvifSrc?:  string
  beforeWebpSrc?: string
  afterWebpSrc?:  string
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel   = 'Innan',
  afterLabel    = 'Efter',
  beforeAvifSrc,
  afterAvifSrc,
  beforeWebpSrc,
  afterWebpSrc,
}: Props) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging     = useRef(false)

  const move = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const { left, width } = el.getBoundingClientRect()
    setPosition(Math.min(100, Math.max(0, ((clientX - left) / width) * 100)))
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative select-none overflow-hidden rounded-xl aspect-[4/3] md:aspect-video cursor-col-resize touch-none"
      onMouseDown={(e) => { dragging.current = true; move(e.clientX) }}
      onMouseMove={(e) => { if (dragging.current) move(e.clientX) }}
      onMouseUp={() => { dragging.current = false }}
      onMouseLeave={() => { dragging.current = false }}
      onTouchStart={(e) => move(e.touches[0].clientX)}
      onTouchMove={(e) => { e.preventDefault(); move(e.touches[0].clientX) }}
    >
      {/* After (clean) image — base layer, always full width */}
      <picture>
        {afterAvifSrc && <source type="image/avif" srcSet={afterAvifSrc} />}
        {afterWebpSrc && <source type="image/webp" srcSet={afterWebpSrc} />}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterSrc}
          alt={afterAlt}
          draggable={false}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      {/* Before (dirty) image — clipped to left of the divider via clip-path */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <picture>
          {beforeAvifSrc && <source type="image/avif" srcSet={beforeAvifSrc} />}
          {beforeWebpSrc && <source type="image/webp" srcSet={beforeWebpSrc} />}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={beforeSrc}
            alt={beforeAlt}
            draggable={false}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* Divider line */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white/90 shadow-[0_0_8px_rgba(0,0,0,0.45)] pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center gap-0.5">
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" aria-hidden="true">
            <path d="M5 1L1 5L5 9" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" aria-hidden="true">
            <path d="M1 1L5 5L1 9" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Corner labels */}
      <span className="absolute top-3 left-3 bg-black/55 text-white text-xs font-semibold px-2.5 py-1 rounded-full pointer-events-none">
        {beforeLabel}
      </span>
      <span className="absolute top-3 right-3 bg-black/55 text-white text-xs font-semibold px-2.5 py-1 rounded-full pointer-events-none">
        {afterLabel}
      </span>

      {/* Drag hint */}
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-[11px] px-3 py-1 rounded-full pointer-events-none whitespace-nowrap">
        ← Dra för att jämföra →
      </span>
    </div>
  )
}
