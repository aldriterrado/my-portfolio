import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { Link } from "react-router-dom"

type SharedProps = {
  children: ReactNode
  className?: string
  arrow?: boolean
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
  arrow = false,
  ...props
}: TextLinkProps) {
  const classes =
    `inline-flex items-center gap-1.5 text-[15px] text-primary-text transition-colors duration-200 hover:text-accent ${className}`.trim()

  const content = (
    <>
      {children}
      {arrow ? <span aria-hidden="true">↗</span> : null}
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
