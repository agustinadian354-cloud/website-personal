export interface Project {
  title: string
  category: string
  year: string
  description: string
}

export const projects: Project[] = [
  {
    title: 'Northline',
    category: 'Product Design · Web App',
    year: '2025',
    description: 'Dashboard analitik real-time dengan sistem desain modular untuk tim fintech.',
  },
  {
    title: 'Verse Studio',
    category: 'Branding · Motion',
    year: '2024',
    description: 'Identitas visual dan micro-interaction untuk studio kreatif independen.',
  },
  {
    title: 'Cadence',
    category: 'Mobile App',
    year: '2024',
    description: 'Aplikasi kebiasaan harian dengan animasi transisi yang terasa personal.',
  },
  {
    title: 'Fieldnote',
    category: 'Web Experience',
    year: '2023',
    description: 'Situs editorial immersive dengan scroll storytelling untuk brand outdoor.',
  },
]
