import type { RefObject } from "react"
import { gsap, useGSAP } from "../lib/gsap"
import { MOTION_OK } from "../lib/motion"

/**
 * Hero intro: each headline line rises from behind its mask, the rules draw
 * in from the left, then the supporting blocks fade up. The markup renders in
 * its final state; GSAP only applies the "from" states, and only when the
 * visitor allows motion.
 */
export function useHeroIntro(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(MOTION_OK, () => {
        gsap
          .timeline({ defaults: { ease: "expo.out" } })
          .from("[data-hero-line]", { yPercent: 105, duration: 1.1, stagger: 0.09 })
          .from(
            "[data-rule]",
            { scaleX: 0, duration: 1, ease: "power3.inOut" },
            0.2,
          )
          .from(
            "[data-hero-fade]",
            { autoAlpha: 0, y: 14, duration: 0.8, stagger: 0.08 },
            0.5,
          )
      })

      return () => mm.revert()
    },
    { scope },
  )
}
