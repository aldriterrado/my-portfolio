type SectionLabelProps = {
  children: string
  number?: string
  className?: string
}

export function SectionLabel({
  children,
  number,
  className = "",
}: SectionLabelProps) {
  return (
    <p
      className={`mb-8 flex items-center gap-3 text-[13px] font-medium tracking-[0.14em] text-muted uppercase ${className}`.trim()}
    >
      {number ? (
        <span className="tabular-nums text-secondary-text">{number}</span>
      ) : null}
      {number ? <span className="text-line">/</span> : null}
      <span>{children}</span>
    </p>
  )
}
