import { useRef } from "react"
import { useLocation } from "react-router-dom"
import { gsap, useGSAP } from "../../lib/gsap"
import { MOTION_OK } from "../../lib/motion"

/**
 * A sheet that slides off the screen when the route changes, like turning to
 * the next page of a document. Skipped on first load and for reduced motion.
 */
export function RouteWipe() {
  const { pathname } = useLocation()
  const sheet = useRef<HTMLDivElement>(null)
  const lastPath = useRef(pathname)

  useGSAP(
    () => {
      if (lastPath.current === pathname) return
      lastPath.current = pathname

      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          sheet.current,
          { scaleX: 1 },
          { scaleX: 0, duration: 0.6, ease: "expo.inOut" },
        )
      })
      return () => mm.revert()
    },
    { dependencies: [pathname] },
  )

  return <div ref={sheet} aria-hidden="true" className="route-wipe" />
}
