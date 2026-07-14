import { useEffect, useRef } from 'react'

/**
 * Tracks page scroll progress (0-1) in a ref instead of state so the R3F
 * render loop can read it every frame without triggering React re-renders.
 */
export function useScrollProgressRef() {
  const progress = useRef(0)

  useEffect(() => {
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight
      progress.current = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return progress
}
