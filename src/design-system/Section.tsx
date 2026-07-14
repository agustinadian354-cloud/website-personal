import type { ElementType, ReactNode } from 'react'
import clsx from 'clsx'

interface SectionProps {
  id?: string
  as?: ElementType
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
