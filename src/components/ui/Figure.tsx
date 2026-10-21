import type { ReactNode } from "react"

type FigureProps = {
  id: string
  title: string
  meta?: ReactNode
  caption?: ReactNode
  notes?: readonly string[]
  children: ReactNode
  className?: string
  frameClassName?: string
}

/** A numbered figure: "FIG.01 — Title" bar, a ticked graph-paper frame, notes. */
export function Figure({
  id,
  title,
  meta,
  caption,
  notes,
  children,
  className = "",
  frameClassName = "",
}: FigureProps) {
  return (
    <figure className={className}>
      <div className="mb-3 flex items-baseline gap-3 font-mono text-[11px] tracking-[0.06em] uppercase">
        <span className="shrink-0 text-accent-text">{id}</span>
        <span className="truncate text-primary-text">{title}</span>
        <span aria-hidden="true" className="leader" />
        {meta ? <span className="shrink-0 text-muted">{meta}</span> : null}
      </div>
      <div
        className={`ticks graph-paper border border-line bg-surface/60 ${frameClassName}`.trim()}
      >
        {children}
      </div>
      {caption || notes?.length ? (
        <figcaption className="mt-3 space-y-1.5 font-mono text-[12px] leading-[1.6] text-muted">
          {caption ? <p className="text-secondary-text">{caption}</p> : null}
          {notes?.map((note, index) => (
            <p key={note} className="flex gap-2">
              <span className="shrink-0 text-accent-text">
                N{index + 1}
              </span>
              <span>{note}</span>
            </p>
          ))}
        </figcaption>
      ) : null}
    </figure>
  )
}
