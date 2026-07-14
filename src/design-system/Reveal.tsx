import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const

interface RevealProps {
  children: ReactNode
  /** Stagger index — multiplied by a fixed delay step so groups reveal in rhythm. */
  index?: number
  y?: number
  className?: string
  as?: 'div' | 'span' | 'li'
}

/**
 * Reusable scroll-reveal primitive. Every section composes from this
 * instead of hand-rolling its own IntersectionObserver + animation, so
 * every reveal in the site shares one easing curve and timing rhythm.
 */
export function Reveal({ children, index = 0, y = 24, className, as = 'div' }: RevealProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })
  const reducedMotion = usePrefersReducedMotion()
  const Tag = motion[as]

  if (reducedMotion) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  return (
    <Tag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: EASE_PREMIUM,
      }}
    >
      {children}
    </Tag>
  )
}
