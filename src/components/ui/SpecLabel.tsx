import type { ReactNode } from "react"

type SpecLabelProps = {
  n: string
  title: string
  meta?: ReactNode
  as?: "h1" | "h2" | "h3"
  id?: string
  className?: string
}

/** Section heading styled as a spec-sheet row: "§2  Revision log ........ 3 entries". */
export function SpecLabel({
  n,
  title,
  meta,
  as: Heading = "h2",
  id,
  className = "",
}: SpecLabelProps) {
  return (
    <div
      className={`flex items-baseline gap-3 border-t border-primary-text pt-3 ${className}`.trim()}
    >
      <span className="w-8 shrink-0 font-mono text-[12px] text-accent-text tabular-nums">
        §{n}
      </span>
      <Heading
        id={id}
        className="text-[20px] leading-tight font-medium tracking-[-0.015em] text-primary-text md:text-[24px]"
      >
        {title}
      </Heading>
      <span aria-hidden="true" className="leader hidden sm:block" />
      {meta ? (
        <span className="ml-auto hidden shrink-0 font-mono text-[12px] text-muted sm:block">
          {meta}
        </span>
      ) : null}
    </div>
  )
}
