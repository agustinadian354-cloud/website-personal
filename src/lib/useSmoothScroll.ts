import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Virtual smooth scroll replacing native scroll so scroll-linked motion
 * (parallax, pinning) reads at a consistent, premium easing instead of
 * whatever the OS/browser default happens to be. Skipped for
 * prefers-reduced-motion — native scroll is the accessible baseline.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    })

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])
}
