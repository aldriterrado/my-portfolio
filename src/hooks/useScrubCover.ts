import type { RefObject } from "react"
import { gsap, useGSAP } from "../lib/gsap"
import { MOTION_OK } from "../lib/motion"
import "../lib/scrollTrigger"

/**
 * Project covers (`[data-cover]` with a `[data-cover-media]` child) open from
 * an inset frame to full size while the image settles from a slight zoom,
 * scrubbed to the scroll position.
 */
export function useScrubCover(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = scope.current
      if (!root) return
      const mm = gsap.matchMedia()

      mm.add(MOTION_OK, () => {
        root.querySelectorAll<HTMLElement>("[data-cover]").forEach((cover) => {
          const scrollTrigger = {
            trigger: cover,
            start: "top bottom",
            end: "center 55%",
            scrub: 0.6,
          }

          gsap.fromTo(
            cover,
            { clipPath: "inset(9% 7% 9% 7% round 18px)" },
            { clipPath: "inset(0% 0% 0% 0% round 18px)", ease: "none", scrollTrigger },
          )

          const media = cover.querySelector("[data-cover-media]")
          if (media) {
            gsap.from(media, { scale: 1.18, ease: "none", scrollTrigger })
          }
        })
      })

      return () => mm.revert()
    },
    { scope },
  )
}
