import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { Link } from "react-router-dom"
import { Icon } from "./Icon"

type SharedProps = {
  children: ReactNode
  variant?: "primary" | "outline"
  icon?: "arrow-right" | "arrow-up-right" | "arrow-down"
  className?: string
}

type ButtonProps =
  | (SharedProps & { to: string; href?: undefined })
  | (SharedProps &
      Omit<ComponentPropsWithoutRef<"a">, "className" | "children" | "href"> & {
        href: string
        to?: undefined
      })

const variants = {
  primary:
    "bg-accent text-on-accent hover:bg-primary-text hover:text-surface",
  outline:
    "border border-line-strong text-primary-text hover:border-primary-text hover:bg-primary-text hover:text-surface",
}

/** Pill call to action. Wrap in Magnetic for the hero and contact CTAs. */
export function Button({
  children,
  variant = "primary",
  icon = "arrow-up-right",
  className = "",
  ...props
}: ButtonProps) {
  const classes =
    `group inline-flex min-h-13 items-center gap-3 rounded-full pr-2 pl-6 text-[15px] font-medium tracking-[-0.01em] transition-colors duration-300 ${variants[variant]} ${className}`.trim()

  const content = (
    <>
      <span>{children}</span>
      <span className="grid size-9 place-items-center overflow-hidden rounded-full bg-current/10 transition-transform duration-500 ease-out-expo group-hover:rotate-45">
        <Icon name={icon} size={16} />
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

  const { href, ...rest } = props as Extract<ButtonProps, { href: string }>
  return (
    <a href={href} className={classes} {...rest}>
      {content}
    </a>
  )
}
