type AccentTitleProps = {
  text: { before: string; accent: string; after: string }
  accentClassName?: string
}

/** A headline from site data with its accent word set in italic serif. */
export function AccentTitle({ text, accentClassName = "" }: AccentTitleProps) {
  return (
    <>
      {text.before}{" "}
      <span className={`accent-serif ${accentClassName}`.trim()}>{text.accent}</span>
      {text.after ? ` ${text.after}` : null}
    </>
  )
}
