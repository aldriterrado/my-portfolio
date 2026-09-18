import { useEffect, useId, useRef, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { MenuIcon, XIcon } from "lucide-react"
import { navLinks, site } from "../../data/site"
import { ThemeToggle } from "../ui/ThemeToggle"
import { Container } from "./Container"

function hashFromHref(href: string) {
  const hashIndex = href.indexOf("#")
  return hashIndex >= 0 ? href.slice(hashIndex) : ""
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <div
        className={`border-b transition-[background-color,border-color] duration-300 ${
          isScrolled
            ? "border-line bg-base/80"
            : "border-transparent bg-transparent"
        }`}
      >
        {isScrolled ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 backdrop-blur-md"
          />
        ) : null}
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link
              to="/"
              className="text-[15px] font-medium tracking-[-0.02em] text-primary-text"
            >
              {site.name}
            </Link>

            <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
              {navLinks.map((item) =>
                item.href.includes("#") ? (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => goToSection(item.href)}
                    className="text-[14px] text-secondary-text transition-colors duration-200 hover:text-primary-text"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-[14px] text-secondary-text transition-colors duration-200 hover:text-primary-text"
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <a
                href={site.resume}
                className="text-[14px] text-secondary-text transition-colors duration-200 hover:text-primary-text"
              >
                Resume
              </a>
              <button
                type="button"
                onClick={() => goToSection("/#contact")}
                className="text-[14px] text-primary-text transition-colors duration-200 hover:text-accent"
              >
                Contact →
              </button>
              <ThemeToggle />
            </nav>

            <div className="flex items-center gap-1 md:hidden">
              <ThemeToggle className="p-2" />
              <button
                ref={menuButtonRef}
                type="button"
                className="p-2 text-primary-text"
                aria-expanded={isMenuOpen}
                aria-controls={menuId}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMenuOpen((open) => !open)}
              >
                {isMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
              </button>
            </div>
          </div>
        </Container>
      </div>

      {isMenuOpen ? (
        <div
          id={menuId}
          ref={panelRef}
          className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-4rem)] bg-base md:hidden"
        >
          <nav
            className="container-page flex flex-col gap-1 pt-6"
            aria-label="Mobile"
          >
            {navLinks.map((item) =>
              item.href.includes("#") ? (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => goToSection(item.href)}
                  className="rounded-[10px] px-3 py-3 text-left text-[17px] text-primary-text hover:bg-surface"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="rounded-[10px] px-3 py-3 text-[17px] text-primary-text hover:bg-surface"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <a
              href={site.resume}
              className="rounded-[10px] px-3 py-3 text-[17px] text-primary-text hover:bg-surface"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={() => goToSection("/#contact")}
              className="rounded-[10px] px-3 py-3 text-left text-[17px] text-primary-text hover:bg-surface"
            >
              Contact →
            </button>
            <span aria-hidden="true" className="mt-2 h-px bg-line" />
            <ThemeToggle
              showLabel
              className="rounded-[10px] px-3 py-3 text-[17px] hover:bg-surface"
            />
          </nav>
        </div>
      ) : null}
    </header>
  )
}
