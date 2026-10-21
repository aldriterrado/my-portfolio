import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { getProjectBySlug } from "../../data/projects"
import { gsap } from "../../lib/gsap"
import { prefersReducedMotion } from "../../lib/motion"
import { PageTransitionContext } from "./pageTransitionContext"

function titleFor(pathname: string) {
  if (pathname === "/projects") return "Index"
  if (pathname.startsWith("/projects/")) {
    return getProjectBySlug(pathname.split("/")[2] ?? "")?.title ?? "Work"
  }
  return "Home"
}

// Case studies are lazy; load the chunk while the curtain closes so the
// reveal never uncovers an empty page.
function preload(pathname: string) {
  return pathname.startsWith("/projects/")
    ? import("../../pages/CaseStudy").then(() => undefined)
    : Promise.resolve()
}

/**
 * Page changes happen behind a curtain: it rises over the current page with
 * the destination's name, the route changes while it is covered, then it
 * lifts off the new page. In-app link clicks are routed through it; use
 * `usePageTransition()` for programmatic navigation. Back/forward start
 * covered and only lift. Reduced motion navigates instantly.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const curtain = useRef<HTMLDivElement>(null)
  const label = useRef<HTMLParagraphElement>(null)
  const lastPath = useRef(pathname)
  const covering = useRef(false)
  const reveal = useRef<gsap.core.Timeline | null>(null)

  const go = useCallback(
    (to: string) => {
      const target = new URL(to, window.location.origin)
      const samePage = target.pathname === window.location.pathname

      if (samePage || prefersReducedMotion()) {
        void navigate(to)
        return
      }
      if (covering.current) return
      covering.current = true
      // A click while the curtain is still lifting takes over from that reveal.
      reveal.current?.kill()

      if (label.current) label.current.textContent = titleFor(target.pathname)

      const closed = new Promise<void>((resolve) => {
        gsap
          .timeline({ onComplete: resolve })
          .set(curtain.current, { autoAlpha: 1, yPercent: 100 })
          .set(label.current, { yPercent: 100 })
          .to(curtain.current, { yPercent: 0, duration: 0.7, ease: "expo.inOut" })
          .to(label.current, { yPercent: 0, duration: 0.5, ease: "expo.out" }, "-=0.3")
      })

      void Promise.all([closed, preload(target.pathname)]).then(() => {
        void navigate(to)
      })
    },
    [navigate],
  )

  // Lift the curtain once the new route has rendered, before it paints.
  useLayoutEffect(() => {
    if (lastPath.current === pathname) return
    lastPath.current = pathname

    const wasCovering = covering.current
    covering.current = false
    if (prefersReducedMotion()) return

    if (!wasCovering) {
      reveal.current?.kill()
      // Back/forward: the route already changed, so start fully covered.
      if (label.current) label.current.textContent = titleFor(pathname)
      gsap.set(curtain.current, { autoAlpha: 1, yPercent: 0 })
      gsap.set(label.current, { yPercent: 0 })
    }

    const timeline = gsap
      .timeline({ delay: 0.1 })
      .to(label.current, { yPercent: -100, duration: 0.35, ease: "power3.in" })
      .to(curtain.current, { yPercent: -100, duration: 0.85, ease: "expo.inOut" }, "-=0.15")
      .set(curtain.current, { autoAlpha: 0 })

    reveal.current = timeline
  }, [pathname])

  // Send plain clicks on in-app links through the curtain. Capture phase, so
  // this runs before React Router's Link handler (which then stands down).
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const anchor =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>("a[href]")
          : null
      if (!anchor || anchor.hasAttribute("download")) return
      if (anchor.target && anchor.target !== "_self") return

      const url = new URL(anchor.href)
      if (url.origin !== window.location.origin) return
      // Files such as /resume.pdf are not routes.
      if (/\.[a-z0-9]+$/i.test(url.pathname)) return
      if (url.pathname === window.location.pathname) return

      event.preventDefault()
      go(url.pathname + url.search + url.hash)
    }

    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [go])

  return (
    <PageTransitionContext value={go}>
      {children}
      <div ref={curtain} aria-hidden="true" className="page-curtain">
        <div className="container-page overflow-clip pb-10 md:pb-16">
          <p ref={label} className="display-lg" />
        </div>
      </div>
    </PageTransitionContext>
  )
}
