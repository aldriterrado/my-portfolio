import type { RefObject } from "react"
import { gsap, SplitText, useGSAP } from "../lib/gsap"
import { MOTION_OK } from "../lib/motion"
import "../lib/scrollTrigger"

/**
 * Words in `[data-highlight]` start dim and brighten one by one as the
 * paragraph scrolls through the viewport.
 */
export function useWordHighlight(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = scope.current
      if (!root) return
      const mm = gsap.matchMedia()

      mm.add(MOTION_OK, () => {
        root.querySelectorAll<HTMLElement>("[data-highlight]").forEach((el) => {
          SplitText.create(el, {
            type: "words",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.words, {
                opacity: 0.16,
                stagger: 0.1,
                ease: "none",
                scrollTrigger: {
                  trigger: el,
                  start: "top 80%",
                  end: "bottom 50%",
                  scrub: true,
                },
              }),
          })
        })
      })

      return () => mm.revert()
    },
    { scope },
  )
}
