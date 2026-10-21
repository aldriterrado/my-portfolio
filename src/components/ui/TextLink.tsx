import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { Link } from "react-router-dom"

type SharedProps = {
  children: ReactNode
  className?: string
  /** A mono glyph shown before the label, e.g. "→", "↗", "↓". */
  glyph?: string
}

type TextLinkProps =
  | (SharedProps & { to: string; href?: undefined })
  | (SharedProps &
      Omit<ComponentPropsWithoutRef<"a">, "className" | "children" | "href"> & {
        href: string
        to?: undefined
      })

export function TextLink({
  children,
  className = "",
  glyph,
  ...props
}: TextLinkProps) {
  const classes =
    `group inline-flex items-baseline gap-2 text-[15px] text-primary-text transition-colors duration-200 hover:text-accent-text ${className}`.trim()

  const content = (
    <>
      {glyph ? (
        <span
          aria-hidden="true"
          className="font-mono text-[13px] text-accent-text"
        >
          {glyph}
        </span>
      ) : null}
      <span className="underline decoration-line-strong decoration-1 underline-offset-[5px] transition-colors duration-200 group-hover:decoration-accent">
        {children}
      </span>
    </>
  )

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {content}
      </Link>
    )
  }

  const { href, ...rest } = props as Extract<TextLinkProps, { href: string }>
  return (
    <a href={href} className={classes} {...rest}>
      {content}
    </a>
  )
}
