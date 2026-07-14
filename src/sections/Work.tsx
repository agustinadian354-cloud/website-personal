import { Container } from '../design-system/Container'
import { Section } from '../design-system/Section'
import { Eyebrow } from '../design-system/Eyebrow'
import { Reveal } from '../design-system/Reveal'
import { projects } from '../data/projects'

export function Work() {
  return (
    <Section id="work">
      <Container>
        <Reveal>
          <Eyebrow>Selected Work</Eyebrow>
          <h2 className="mt-5 max-w-2xl text-[length:var(--text-2xl)] leading-[1.05] tracking-tight text-text">
            Beberapa proyek yang mencerminkan cara saya berpikir.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
          {projects.map((project, i) => (
            <Reveal key={project.title} index={i}>
              <a
                href="#"
                className="group grid grid-cols-1 items-center gap-4 py-8 transition-colors duration-500 md:grid-cols-12 md:gap-6"
              >
                <span className="font-mono text-sm text-text-faint md:col-span-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-2xl font-medium tracking-tight text-text transition-transform duration-500 group-hover:translate-x-2 md:col-span-4 md:text-3xl">
                  {project.title}
                </span>
                <span className="text-sm text-text-muted md:col-span-4">
                  {project.description}
                </span>
                <span className="text-sm text-text-faint md:col-span-2">{project.category}</span>
                <span className="flex items-center justify-between text-sm text-text-faint md:col-span-1 md:justify-end md:gap-3">
                  {project.year}
                  <span className="hidden text-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:inline">
                    →
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
