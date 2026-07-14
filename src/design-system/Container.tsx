import type { ReactNode } from 'react'
import clsx from 'clsx'

/**
 * Concrete tag union instead of `ElementType` — with @react-three/fiber in
 * the project, its global JSX.IntrinsicElements augmentation makes a fully
 * generic ElementType collapse `children` to `never` for dynamic tags.
 */
type ContainerTag = 'div' | 'section' | 'article' | 'header' | 'footer'

interface ContainerProps {
  as?: ContainerTag
  children: ReactNode
  className?: string
}

export function Container({ as: Tag = 'div', children, className }: ContainerProps) {
  return (
    <Tag className={clsx('mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16', className)}>
      {children}
    </Tag>
  )
}
