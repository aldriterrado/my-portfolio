import { useEffect, useId, useRef, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { navLinks, site } from "../../data/site"
import { ThemeToggle } from "../ui/ThemeToggle"
import { Container } from "./Container"

function hashFromHref(href: string) {
  const hashIndex = href.indexOf("#")
  return hashIndex >= 0 ? href.slice(hashIndex) : ""
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!isMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const panel = panelRef.current
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    )
    focusable?.[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key !== "Tab" || !focusable || focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [isMenuOpen])

  const goToSection = (href: string) => {
    const hash = hashFromHref(href)
    setIsMenuOpen(false)

    if (location.pathname !== "/") {
      void navigate({ pathname: "/", hash: hash.slice(1) })
      return
    }

    if (!hash) return
    const section = document.getElementById(hash.slice(1))
    section?.scrollIntoView({ behavior: "smooth" })
  }

  const isCurrent = (href: string) =>
    !href.includes("#") && location.pathname.startsWith(href)

  const navItem = (item: (typeof navLinks)[number], mobile: boolean) => {
    const className = mobile
      ? "flex w-full items-baseline gap-4 border-b border-line py-4 text-left text-[20px] text-primary-text"
      : `group flex items-baseline gap-1.5 text-[14px] transition-colors duration-200 hover:text-primary-text ${
          isCurrent(item.href) ? "text-primary-text" : "text-secondary-text"
        }`
    const content = (
      <>
        <span
          className={`font-mono text-muted transition-colors duration-200 group-hover:text-accent-text ${
            mobile ? "w-8 text-[12px]" : "text-[11px]"
          }`}
        >
          {item.n}
        </span>
        {item.label}
      </>
    )

    if (item.href.includes("#")) {
      return (
        <button
          key={item.href}
          type="button"
          onClick={() => goToSection(item.href)}
          className={className}
        >
          {content}
        </button>
      )
    }

    return (
      <Link
        key={item.href}
        to={item.href}
        aria-current={isCurrent(item.href) ? "page" : undefined}
        className={className}
        onClick={() => setIsMenuOpen(false)}
      >
        {content}
      </Link>
    )
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-line bg-base">
      <Container>
        <div className="flex h-14 items-center gap-6">
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-2.5 text-primary-text"
          >
            <span
              aria-hidden="true"
              className="size-2.5 bg-accent transition-transform duration-300 group-hover:rotate-45"
            />
            <span className="text-[15px] font-medium tracking-[-0.01em]">
              {site.name}
            </span>
            <span className="hidden font-mono text-[11px] text-muted lg:inline">
              {site.doc.id}
            </span>
          </Link>

          <span aria-hidden="true" className="leader hidden md:block" />

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {navLinks.map((item) => navItem(item, false))}
            <a
              href={site.resume}
              className="text-[14px] text-secondary-text transition-colors duration-200 hover:text-primary-text"
            >
              Résumé <span aria-hidden="true" className="font-mono text-[12px]">↓</span>
            </a>
            <ThemeToggle />
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className="-mr-2 ml-auto flex h-11 items-center gap-2 px-2 font-mono text-[12px] tracking-[0.06em] text-primary-text uppercase md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? "Close" : "Menu"}
            <span aria-hidden="true" className="relative block h-2.5 w-4">
              <span
                className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-200 ${
                  isMenuOpen ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-200 ${
                  isMenuOpen ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      {isMenuOpen ? (
        <div
          id={menuId}
          ref={panelRef}
          className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-3.5rem)] overflow-y-auto bg-base md:hidden"
        >
          <nav
            className="container-page flex flex-col pt-4 pb-10"
            aria-label="Mobile"
          >
            {navLinks.map((item) => navItem(item, true))}
            <a
              href={site.resume}
              className="flex items-baseline gap-4 border-b border-line py-4 text-[20px] text-primary-text"
            >
              <span className="w-8 font-mono text-[12px] text-muted">↓</span>
              Résumé
            </a>
            <div className="mt-8 flex items-center justify-between font-mono text-[11px] tracking-[0.06em] text-muted uppercase">
              <span>Theme</span>
              <ThemeToggle className="[&_button]:min-h-11 [&_button]:px-4" />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
