interface VideoBackgroundProps {
  src: string
}

/**
 * Hero backdrop using an actual reel instead of an abstract gradient —
 * for a director whose product IS motion, showing real footage reads far
 * more credible than a generic animation.
 */
export function VideoBackground({ src }: VideoBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <video
        className="h-full w-full object-cover opacity-70"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/40 to-[var(--color-bg)]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-[var(--color-bg)]/10 to-transparent" />
    </div>
  )
}
