import type { ReactNode } from 'react'
import clsx from 'clsx'

/**
 * Concrete tag union instead of `ElementType` — with @react-three/fiber in
 * the project, its global JSX.IntrinsicElements augmentation makes a fully
 * generic ElementType collapse `children` to `never` for dynamic tags.
 */
type SectionTag = 'section' | 'div' | 'article'

interface SectionProps {
  id?: string
  as?: SectionTag
  children: ReactNode
  className?: string
}

export function Section({ id, as: Tag = 'section', children, className }: SectionProps) {
  return (
    <Tag id={id} className={clsx('relative py-24 md:py-36', className)}>
      {children}
    </Tag>
  )
}
