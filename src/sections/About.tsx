import { Container } from '../design-system/Container'
import { Section } from '../design-system/Section'
import { Eyebrow } from '../design-system/Eyebrow'
import { Reveal } from '../design-system/Reveal'

const SKILLS = [
  'AI Video Generation',
  'Cinematic Direction',
  'Ad Storytelling',
  'Performance Editing',
]

export function About() {
  return (
    <Section id="about" className="bg-[var(--color-bg-elevated)]">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>About</Eyebrow>
              <h2 className="mt-5 text-[length:var(--text-2xl)] leading-[1.05] tracking-tight text-text">
                Direction is the difference between AI video and an ad.
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal index={1}>
              <p className="text-lg leading-relaxed text-text-muted">
                I'm Dian, working under the name Ads by Dian. I direct
                AI-generated video ads with a cinematic eye — pacing,
                framing, and sound treated the same way they would be on a
                real set. The goal is never "impressive AI footage." It's an
                ad that converts.
              </p>
            </Reveal>

            <Reveal index={2} className="mt-10">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-2">
                {SKILLS.map((skill) => (
                  <li
                    key={skill}
                    className="border-l border-[var(--color-border-strong)] pl-3 text-sm text-text"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}
