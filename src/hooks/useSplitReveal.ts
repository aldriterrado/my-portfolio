import type { RefObject } from "react"
import { gsap, SplitText, useGSAP } from "../lib/gsap"
import { MOTION_OK } from "../lib/motion"
import "../lib/scrollTrigger"

type SplitType = "chars" | "words" | "lines"

/**
 * Text reveals inside `scope`, declared in markup:
 * - `data-split="chars|words|lines"`: each piece rises from behind its mask.
 * - `data-fade`: the element fades up.
 * Add `data-scroll` to play when the element enters the viewport (otherwise it
 * plays on mount) and `data-delay="0.2"` to offset it. The markup renders in its
 * final state; GSAP only sets "from" states, and only when motion is allowed.
 */
export function useSplitReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = scope.current
      if (!root) return
      const mm = gsap.matchMedia()

      mm.add(MOTION_OK, () => {
        const timing = (el: HTMLElement) => ({
          delay: Number(el.dataset.delay ?? 0),
          scrollTrigger:
            el.dataset.scroll !== undefined
              ? { trigger: el, start: "top 88%", once: true }
              : undefined,
        })

        root.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
          const type = (el.dataset.split as SplitType) || "lines"
          SplitText.create(el, {
            type,
            mask: type,
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self[type], {
                yPercent: 110,
                duration: type === "chars" ? 1.3 : 1.1,
                stagger: type === "chars" ? 0.035 : 0.08,
                ease: "expo.out",
                ...timing(el),
              }),
          })
        })

        root.querySelectorAll<HTMLElement>("[data-fade]").forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: 24,
            duration: 1,
            ease: "expo.out",
            ...timing(el),
          })
        })
      })

      return () => mm.revert()
    },
    { scope },
  )
}
