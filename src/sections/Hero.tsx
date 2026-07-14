import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Container } from '../design-system/Container'
import { AuroraBackground } from '../components/AuroraBackground'
import { GrainOverlay } from '../components/GrainOverlay'
import { SplitText } from '../components/SplitText'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reducedMotion = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, 160])
  const contentY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [0, 80])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-bg"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <AuroraBackground />
      </motion.div>
      <GrainOverlay />

      <motion.div style={{ y: contentY, opacity: contentOpacity }}>
        <Container className="relative pt-[var(--nav-height)]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent"
          >
            <span className="h-px w-8 bg-accent" />
            Product &amp; Software Designer
          </motion.p>

          <h1 className="max-w-5xl text-[length:var(--text-display)] leading-[0.95] font-medium tracking-tight text-text">
            <SplitText text="Membangun pengalaman digital yang" delay={0.15} />{' '}
            <SplitText text="terasa hidup." delay={0.5} className="text-text-muted italic" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: EASE_PREMIUM }}
            className="mt-8 max-w-xl text-lg text-text-muted"
          >
            Saya Agustina Dian — merancang dan membangun produk dengan detail,
            gerakan, dan hierarki yang intentional. Bukan sekadar berfungsi,
            tapi terasa premium.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: EASE_PREMIUM }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-transform duration-300 hover:scale-[1.03]"
            >
              Lihat karya
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="text-sm text-text-muted underline decoration-[var(--color-border-strong)] underline-offset-4 transition-colors duration-300 hover:text-text"
            >
              Hubungi saya
            </a>
          </motion.div>
        </Container>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-text-faint">
          Scroll
        </span>
        <span className="h-10 w-px animate-pulse bg-[var(--color-border-strong)]" />
      </motion.div>
    </section>
  )
}
