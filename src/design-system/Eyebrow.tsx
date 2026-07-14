import clsx from 'clsx'

interface EyebrowProps {
  children: React.ReactNode
  className?: string
}

/** Small label above a heading — establishes hierarchy before the eye hits the headline. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={clsx(
        'flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent',
        className,
      )}
    >
      <span className="h-px w-8 bg-accent" aria-hidden="true" />
      {children}
    </span>
  )
}
