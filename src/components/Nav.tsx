import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

/** Nav morphs from transparent to a bordered glass bar once the hero is scrolled past. */
export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center"
    >
      <nav
        className={clsx(
          'mt-3 flex w-[calc(100%-1.5rem)] max-w-[1400px] items-center justify-between rounded-full px-5 py-3 transition-all duration-500 md:mx-10',
          scrolled
            ? 'border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)]/80 backdrop-blur-md'
            : 'border border-transparent bg-transparent',
        )}
        style={{ transitionTimingFunction: 'var(--ease-premium)' }}
      >
        <a href="#top" className="font-display text-sm tracking-tight text-text">
          Ads by Dian
        </a>
        <ul className="hidden gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text-muted transition-colors duration-300 hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-[var(--color-border-strong)] px-4 py-1.5 text-sm text-text transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          Let's talk
        </a>
      </nav>
    </motion.header>
  )
}
