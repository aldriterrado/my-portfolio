import type { ReactNode } from "react"

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  labelledBy?: string
}

export function Section({ id, children, className = "", labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`section relative ${className}`.trim()}
    >
      {children}
    </section>
  )
}
