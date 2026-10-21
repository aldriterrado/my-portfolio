type FootnoteRefProps = {
  n: number
}

export function FootnoteRef({ n }: FootnoteRefProps) {
  return (
    <sup className="ml-0.5 font-mono text-[10px]">
      <a
        href={`#fn-${n}`}
        id={`fnref-${n}`}
        aria-label={`Footnote ${n}`}
        className="text-accent-text hover:underline"
      >
        {n}
      </a>
    </sup>
  )
}

type FootnotesProps = {
  items: readonly { n: number; text: string }[]
  className?: string
}

export function Footnotes({ items, className = "" }: FootnotesProps) {
  return (
    <ol
      className={`space-y-1 font-mono text-[12px] leading-[1.6] text-muted ${className}`.trim()}
      aria-label="Footnotes"
    >
      {items.map((item) => (
        <li key={item.n} id={`fn-${item.n}`} className="flex gap-2">
          <span className="text-accent-text">{item.n}</span>
          <span>{item.text}</span>
          <a
            href={`#fnref-${item.n}`}
            aria-label={`Back to reference ${item.n}`}
            className="text-muted hover:text-primary-text"
          >
            ↩
          </a>
        </li>
      ))}
    </ol>
  )
}
