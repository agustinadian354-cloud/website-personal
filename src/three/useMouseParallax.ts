import { useEffect, useRef } from 'react'

/**
 * Tracks pointer position (normalized -1..1) in a ref via a window-level
 * listener rather than R3F's built-in pointer state — the canvas sits behind
 * the page with pointer-events disabled, so it never receives pointer
 * events directly.
 */
export function useMouseParallax() {
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    function onMove(e: PointerEvent) {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1
      target.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return target
}
