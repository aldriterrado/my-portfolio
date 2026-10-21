type RuleProps = {
  variant?: "hairline" | "strong" | "accent"
  className?: string
}

const tones = {
  hairline: "bg-line",
  strong: "bg-primary-text",
  accent: "bg-accent",
}

export function Rule({ variant = "hairline", className = "" }: RuleProps) {
  return (
    <span
      aria-hidden="true"
      data-rule=""
      className={`block h-px w-full ${tones[variant]} ${className}`.trim()}
    />
  )
}
