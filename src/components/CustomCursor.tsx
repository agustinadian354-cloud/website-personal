import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Ring cursor that trails the pointer with a spring and grows over
 * interactive elements. Desktop-only (pointer: fine) — on touch devices
 * this would just add dead weight.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 })
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 })

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(isFinePointer && !reducedMotion)
  }, [])

  useEffect(() => {
    if (!enabled) return

    function handleMove(e: PointerEvent) {
      x.set(e.clientX - 16)
      y.set(e.clientY - 16)
      const target = e.target as HTMLElement
      setHovering(Boolean(target.closest('a, button')))
    }

    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 rounded-full border border-accent mix-blend-difference"
      style={{ x: springX, y: springY }}
      animate={{ scale: hovering ? 1.8 : 1 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    />
  )
}
