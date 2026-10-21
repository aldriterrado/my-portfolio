import type { RefObject } from "react"
import { gsap, useGSAP } from "../lib/gsap"
import { MOTION_OK } from "../lib/motion"
import { ScrollTrigger } from "../lib/scrollTrigger"

type DiagramMotionOptions = {
  /**
   * play: draw once when the figure scrolls into view.
   * scrub: tie the drawing to scroll progress through `trigger`.
   */
  mode: "play" | "scrub"
  /** Media query the motion is limited to, on top of reduced-motion. */
  media?: string
  /** Element whose scroll range drives a scrub. Defaults to the scope. */
  trigger?: RefObject<HTMLElement | null>
}

/**
 * Builds a timeline that assembles a SystemDiagram column by column: groups
 * fade in, then for each column its components appear and its connections
 * draw (pathLength=1, so the dash offset runs from 1 to 0).
 */
function assemble(svg: SVGSVGElement) {
  const q = (selector: string) => Array.from(svg.querySelectorAll(selector))
  const columns = q("[data-sd='node']").map((node) =>
    Number((node as SVGElement).dataset.col ?? 0),
  )
  const lastColumn = Math.max(0, ...columns)

  const timeline = gsap.timeline()
  timeline.from(q("[data-sd='group']"), { autoAlpha: 0, duration: 0.4 })

  for (let col = 0; col <= lastColumn; col++) {
    const nodes = q(`[data-sd='node'][data-col='${col}']`)
    const paths = q(`[data-sd='edge'][data-col='${col}'] [data-sd-path]`)
    const arrows = q(`[data-sd='edge'][data-col='${col}'] [data-sd-arrow]`)
    const labels = q(`[data-sd='elabel'][data-col='${col}']`)

    if (nodes.length) {
      timeline.from(nodes, {
        autoAlpha: 0,
        y: 10,
        duration: 0.5,
        stagger: 0.07,
        ease: "power2.out",
      })
    }
    if (paths.length) {
      timeline.fromTo(
        paths,
        { strokeDasharray: 1, strokeDashoffset: 1 },
        { strokeDashoffset: 0, duration: 0.6, stagger: 0.06, ease: "power2.inOut" },
        "-=0.1",
      )
    }
    if (arrows.length || labels.length) {
      timeline.from([...arrows, ...labels], { autoAlpha: 0, duration: 0.3 }, "-=0.15")
    }
  }

  return timeline
}

export function useDiagramMotion(
  scope: RefObject<HTMLElement | null>,
  { mode, media, trigger }: DiagramMotionOptions,
) {
  useGSAP(
    () => {
      const root = scope.current
      const svg = root?.querySelector("svg")
      if (!root || !svg) return

      const mm = gsap.matchMedia()
      const query = media ? `${MOTION_OK} and ${media}` : MOTION_OK

      mm.add(query, () => {
        const timeline = assemble(svg)

        if (mode === "scrub") {
          ScrollTrigger.create({
            animation: timeline,
            trigger: trigger?.current ?? root,
            start: "top 65%",
            end: "bottom 75%",
            scrub: 0.6,
          })
        } else {
          timeline.pause()
          ScrollTrigger.create({
            trigger: root,
            start: "top 80%",
            once: true,
            onEnter: () => void timeline.play(),
          })
        }
      })

      return () => mm.revert()
    },
    { scope },
  )
}
