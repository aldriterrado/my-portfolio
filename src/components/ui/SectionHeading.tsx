import { useRef, type ReactNode } from "react"
import { useSplitReveal } from "../../hooks/useSplitReveal"

type SectionHeadingProps = {
  /** Two-digit section number, e.g. "01". */
  index: string
  label: string
  id: string
  title: ReactNode
  intro?: string
  /** Small text on the right of the eyebrow row, e.g. a count. */
  aside?: string
  as?: "h1" | "h2"
}

/** Eyebrow row "(01) Work", then a display headline that rises line by line. */
export function SectionHeading({
  index,
  label,
  id,
  title,
  intro,
  aside,
  as: Heading = "h2",
}: SectionHeadingProps) {
  const ref = useRef<HTMLElement>(null)
  useSplitReveal(ref)

  return (
    <header ref={ref}>
      <div className="flex items-center justify-between gap-6 border-t border-line pt-5">
        <p className="eyebrow flex items-center gap-3">
          <span className="text-accent-text">({index})</span>
          {label}
        </p>
        {aside ? <p className="eyebrow">{aside}</p> : null}
      </div>
      <div className="mt-10 grid gap-8 md:mt-14 lg:grid-cols-12 lg:items-end">
        <Heading
          id={id}
          data-split="lines"
          data-scroll
          className="display-lg text-balance lg:col-span-8"
        >
          {title}
        </Heading>
        {intro ? (
          <p
            data-fade
            data-scroll
            data-delay="0.2"
            className="max-w-[38ch] text-[17px] leading-[1.6] text-secondary-text lg:col-span-4 lg:justify-self-end"
          >
            {intro}
          </p>
        ) : null}
      </div>
    </header>
  )
}
