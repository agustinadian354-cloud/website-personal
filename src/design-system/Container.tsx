import type { ElementType, ReactNode } from 'react'
import clsx from 'clsx'

interface ContainerProps {
  as?: ElementType
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
