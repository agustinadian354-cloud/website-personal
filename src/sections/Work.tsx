import { Container } from '../design-system/Container'
import { Section } from '../design-system/Section'
import { Eyebrow } from '../design-system/Eyebrow'
import { Reveal } from '../design-system/Reveal'

export function Work() {
  return (
    <Section id="work">
      <Container>
        <Reveal>
          <Eyebrow>Selected Work</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-[length:var(--text-2xl)] leading-[1.05] tracking-tight text-text">
            Case studies are being curated.
          </h2>
        </Reveal>

        <Reveal index={1} className="mt-10 max-w-xl">
          <p className="text-lg text-text-muted">
            The reel up top is a taste of the direction and craft. Full case
            studies — brand, brief, and results — are being put together for
            this space. In the meantime, reach out directly and I'll walk
            you through examples.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 text-sm text-accent transition-transform duration-300 hover:translate-x-1"
          >
            Get in touch →
          </a>
        </Reveal>
      </Container>
    </Section>
  )
}
