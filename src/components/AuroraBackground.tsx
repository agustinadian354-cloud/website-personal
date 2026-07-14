/**
 * Background layer for the hero: three blurred, animated color blobs.
 * Pure CSS transform animation — no canvas/WebGL — so it stays GPU-composited
 * and cheap, while still reading as a dynamic, alive backdrop.
 */
export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--color-bg)_70%)]" />
    </div>
  )
}
