/** Subtle noise texture over the hero — the detail that reads as "premium" rather than "flat gradient". */
export function GrainOverlay() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05] mix-blend-overlay"
      aria-hidden="true"
    >
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  )
}
