import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { Link } from "react-router-dom"
import { Icon } from "./Icon"

type SharedProps = {
  children: ReactNode
  className?: string
  icon?: "arrow-right" | "arrow-up-right" | "arrow-down" | "arrow-left"
}

type TextLinkProps =
  | (SharedProps & { to: string; href?: undefined })
  | (SharedProps &
      Omit<ComponentPropsWithoutRef<"a">, "className" | "children" | "href"> & {
        href: string
        to?: undefined
      })

/** Inline link whose underline draws in from the left on hover. */
export function TextLink({ children, className = "", icon, ...props }: TextLinkProps) {
  const classes =
    `group inline-flex items-center gap-2 text-primary-text transition-colors duration-300 hover:text-accent-text ${className}`.trim()

  const content = (
    <>
      {icon === "arrow-left" ? <Icon name={icon} size={16} /> : null}
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-out-expo group-hover:bg-[length:100%_1px]">
        {children}
      </span>
      {icon && icon !== "arrow-left" ? (
        <Icon
          name={icon}
          size={16}
          className="transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      ) : null}
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
