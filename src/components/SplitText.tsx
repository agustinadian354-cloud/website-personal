import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const

interface SplitTextProps {
  text: string
  className?: string
  /** Base delay before this line starts staggering in, for multi-line orchestration. */
  delay?: number
}

/** Reveals a headline word-by-word on mount — the entrance motion for above-the-fold copy. */
export function SplitText({ text, className, delay = 0 }: SplitTextProps) {
  const words = text.split(' ')
  const reducedMotion = usePrefersReducedMotion()

  if (reducedMotion) {
    return <span className={className}>{text}</span>
  }

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-top">
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.06,
              ease: EASE_PREMIUM,
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
