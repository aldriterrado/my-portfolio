import { useRef } from "react"
import { gsap, useGSAP } from "../../lib/gsap"
import { POINTER_MOTION_OK } from "../../lib/motion"

/**
 * A lime disc that follows the pointer over any element with `data-cursor`
 * and shows that attribute's text ("View", "Next"). Decorative only; the
 * links underneath keep their own accessible names. Mount once.
 */
export function CursorLabel() {
  const ref = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return
    const mm = gsap.matchMedia()

    mm.add(POINTER_MOTION_OK, () => {
      const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" })
      const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" })
      let active: Element | null = null

      const onMove = (event: PointerEvent) => {
        xTo(event.clientX)
        yTo(event.clientY)

        const target =
          event.target instanceof Element ? event.target.closest("[data-cursor]") : null
        if (target === active) return
        active = target

        if (target && textRef.current) {
          textRef.current.textContent = target.getAttribute("data-cursor")
          gsap.to(el, { scale: 1, duration: 0.5, ease: "expo.out", overwrite: "auto" })
        } else {
          gsap.to(el, { scale: 0, duration: 0.35, ease: "power3.out", overwrite: "auto" })
        }
      }

      window.addEventListener("pointermove", onMove, { passive: true })
      return () => window.removeEventListener("pointermove", onMove)
    })

    return () => mm.revert()
  })

  return (
    <div ref={ref} aria-hidden="true" className="cursor-label">
      <span ref={textRef} />
    </div>
  )
}
