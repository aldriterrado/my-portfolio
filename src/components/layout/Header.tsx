import { useEffect, useId, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { navLinks, site } from "../../data/site"
import { scrollToId, scrollToTop, setScrollLocked } from "../../lib/smoothScroll"
import { Icon } from "../ui/Icon"
import { LocalTime } from "../ui/LocalTime"
import { ThemeToggle } from "../ui/ThemeToggle"
import { Container } from "./Container"
import { usePageTransition } from "./pageTransitionContext"

function idFromHref(href: string) {
  const hashIndex = href.indexOf("#")
  return hashIndex >= 0 ? href.slice(hashIndex + 1) : ""
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const go = usePageTransition()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Hide while scrolling down, show again on the way up.
  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      if (Math.abs(y - lastY) < 6) return
      setHidden(y > lastY && y > 160)
      lastY = y
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    setScrollLocked(true)

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

      if (event.shiftKey && (active === first || active === menuButtonRef.current)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      setScrollLocked(false)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [isMenuOpen])

  const goToSection = (href: string) => {
    const id = idFromHref(href)
    setIsMenuOpen(false)

    if (location.pathname !== "/") {
      go(`/#${id}`)
      return
    }
    scrollToId(id)
  }

  const onLogoClick = () => {
    if (location.pathname === "/") scrollToTop()
  }

  const showBar = !hidden || isMenuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out-expo ${
        showBar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`transition-colors duration-500 ${
          scrolled || isMenuOpen
            ? "border-b border-line bg-base/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <Container>
          <div className="flex h-18 items-center gap-6">
            <Link
              to="/"
              onClick={onLogoClick}
              aria-label={`${site.name}, home`}
              className="group flex shrink-0 items-center gap-3 text-primary-text"
            >
              <span className="relative grid size-10 place-items-center rounded-full border border-line-strong text-[13px] font-semibold tracking-[-0.02em] transition-colors duration-300 group-hover:border-primary-text">
                AT
                <span
                  aria-hidden="true"
                  className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-accent"
                />
              </span>
              <span className="hidden text-[15px] font-medium tracking-[-0.02em] sm:inline">
                {site.name}
              </span>
            </Link>

            <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Primary">
              {navLinks.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => goToSection(item.href)}
                  className="rounded-full px-4 py-2.5 text-[14px] text-secondary-text transition-colors duration-300 hover:bg-surface-hover hover:text-primary-text"
                >
                  {item.label}
                </button>
              ))}
              <Link
                to="/projects"
                aria-current={location.pathname === "/projects" ? "page" : undefined}
                className="rounded-full px-4 py-2.5 text-[14px] text-secondary-text transition-colors duration-300 hover:bg-surface-hover hover:text-primary-text aria-[current=page]:text-primary-text"
              >
                Index
              </Link>
            </nav>

            <div className="ml-auto flex items-center gap-2 md:ml-4">
              <ThemeToggle />
              <a
                href={`mailto:${site.email}`}
                className="hidden min-h-11 items-center gap-2 rounded-full bg-primary-text px-5 text-[14px] font-medium text-surface transition-colors duration-300 hover:bg-accent hover:text-on-accent sm:inline-flex"
              >
                {site.contact.cta}
                <Icon name="arrow-up-right" size={15} />
              </a>
              <button
                ref={menuButtonRef}
                type="button"
                className="grid size-11 place-items-center rounded-full border border-line text-primary-text md:hidden"
                aria-expanded={isMenuOpen}
                aria-controls={menuId}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMenuOpen((open) => !open)}
              >
                <span aria-hidden="true" className="relative block h-2.5 w-4">
                  <span
                    className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300 ${
                      isMenuOpen ? "translate-y-[5px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300 ${
                      isMenuOpen ? "-translate-y-[4px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {isMenuOpen ? (
        <div
          id={menuId}
          ref={panelRef}
          className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-4.5rem)] overflow-y-auto bg-base md:hidden"
        >
          <nav className="container-page flex min-h-full flex-col pt-6 pb-10" aria-label="Mobile">
            <ul>
              {[...navLinks, { label: "Index", href: "/projects" }].map((item, index) => (
                <li key={item.href} className="border-b border-line">
                  {item.href.includes("#") ? (
                    <button
                      type="button"
                      onClick={() => goToSection(item.href)}
                      className="flex w-full items-baseline gap-4 py-5 text-left text-[clamp(2.25rem,10vw,3.5rem)] leading-none font-medium tracking-[-0.04em] text-primary-text"
                    >
                      <span className="font-mono text-[12px] tracking-normal text-accent-text">
                        0{index + 1}
                      </span>
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex w-full items-baseline gap-4 py-5 text-[clamp(2.25rem,10vw,3.5rem)] leading-none font-medium tracking-[-0.04em] text-primary-text"
                    >
                      <span className="font-mono text-[12px] tracking-normal text-accent-text">
                        0{index + 1}
                      </span>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-6 pt-12">
              <a
                href={`mailto:${site.email}`}
                className="text-[20px] text-primary-text underline decoration-line-strong underline-offset-4"
              >
                {site.email}
              </a>
              <div className="eyebrow flex items-center justify-between">
                <span>{site.location}</span>
                <LocalTime />
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
