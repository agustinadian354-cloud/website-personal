import { Container } from '../design-system/Container'
import { Section } from '../design-system/Section'
import { Reveal } from '../design-system/Reveal'

export function Contact() {
  return (
    <Section id="contact" className="pb-12">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Punya proyek dalam pikiran?
          </p>
          <a
            href="mailto:agustina.dian354@gmail.com"
            className="group mt-6 block max-w-3xl text-[length:var(--text-2xl)] leading-[1.05] tracking-tight text-text transition-colors duration-500 hover:text-accent"
          >
            Mari wujudkan bersama
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-3">
              &nbsp;→
            </span>
          </a>
          <span className="mt-6 block text-lg text-text-muted">
            agustina.dian354@gmail.com
          </span>
        </Reveal>

        <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-[var(--color-border)] pt-8 text-sm text-text-faint md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Agustina Dian. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="transition-colors duration-300 hover:text-text">
              LinkedIn
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-text">
              GitHub
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-text">
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
