import { Container } from '../design-system/Container'
import { Section } from '../design-system/Section'
import { Reveal } from '../design-system/Reveal'

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/adsby.dian' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adsby-dian-6489a541b/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@adsby.dian' },
]

export function Contact() {
  return (
    <Section id="contact" className="pb-12">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Got a brand that needs an ad?
          </p>
          <a
            href="mailto:adsbydian@gmail.com"
            className="group mt-6 block max-w-3xl text-[length:var(--text-2xl)] leading-[1.05] tracking-tight text-text transition-colors duration-500 hover:text-accent"
          >
            Let's make something that converts
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-3">
              &nbsp;→
            </span>
          </a>
          <span className="mt-6 block text-lg text-text-muted">adsbydian@gmail.com</span>
        </Reveal>

        <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-[var(--color-border)] pt-8 text-sm text-text-faint md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Ads by Dian. All rights reserved.</span>
          <div className="flex gap-6">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-text"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
