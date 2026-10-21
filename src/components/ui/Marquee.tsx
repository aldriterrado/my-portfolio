type MarqueeProps = {
  items: readonly string[]
  label: string
}

/** Infinite ticker. Pauses on hover; under reduced motion it wraps and stays still. */
export function Marquee({ items, label }: MarqueeProps) {
  const track = (hidden: boolean) => (
    <ul
      aria-label={hidden ? undefined : label}
      aria-hidden={hidden || undefined}
      className={`marquee-track ${hidden ? "motion-reduce:hidden" : ""}`}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-8 pr-8 text-[clamp(1.75rem,4vw,3.5rem)] leading-none font-medium tracking-[-0.04em] whitespace-nowrap text-primary-text md:gap-12 md:pr-12"
        >
          {item}
          <span aria-hidden="true" className="size-2.5 rounded-full bg-accent md:size-3" />
        </li>
      ))}
    </ul>
  )

  return (
    <div className="marquee py-8 md:py-10">
      {track(false)}
      {track(true)}
    </div>
  )
}
