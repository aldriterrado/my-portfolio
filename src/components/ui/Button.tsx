import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { Link } from "react-router-dom"

const variants = {
  primary:
    "bg-primary-text text-base hover:bg-primary-text-hover",
  secondary:
    "border border-line bg-transparent text-primary-text hover:bg-surface-hover hover:border-line-strong",
} as const

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 text-[15px] font-medium leading-none transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50"

type Variant = keyof typeof variants

type SharedProps = {
  children: ReactNode
  variant?: Variant
  className?: string
}

type ButtonAsButton = SharedProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined
    to?: undefined
  }

type ButtonAsAnchor = SharedProps &
  Omit<ComponentPropsWithoutRef<"a">, "className" | "children" | "href"> & {
    href: string
    to?: undefined
  }

type ButtonAsLink = SharedProps & {
  to: string
  href?: undefined
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${baseClass} ${variants[variant]} ${className}`.trim()

  if ("to" in props && props.to) {
    const { to, ...rest } = props
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if ("href" in props && props.href) {
    const { href, ...rest } = props
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
