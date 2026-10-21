import { useRef, type ReactNode } from "react"
import { gsap, useGSAP } from "../../lib/gsap"
import { POINTER_MOTION_OK } from "../../lib/motion"

type MagneticProps = {
  children: ReactNode
  /** How far the element follows the pointer, as a fraction of the offset. */
  strength?: number
  className?: string
}

/** Pulls its child toward the pointer. Precise pointers with motion only. */
export function Magnetic({ children, strength = 0.3, className = "" }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      const mm = gsap.matchMedia()

      mm.add(POINTER_MOTION_OK, () => {
        const xTo = gsap.quickTo(el, "x", { duration: 0.8, ease: "elastic.out(1, 0.4)" })
        const yTo = gsap.quickTo(el, "y", { duration: 0.8, ease: "elastic.out(1, 0.4)" })

        const onMove = (event: PointerEvent) => {
          const rect = el.getBoundingClientRect()
          const x = Number(gsap.getProperty(el, "x"))
          const y = Number(gsap.getProperty(el, "y"))
          xTo((event.clientX - (rect.left - x + rect.width / 2)) * strength)
          yTo((event.clientY - (rect.top - y + rect.height / 2)) * strength)
        }
        const onLeave = () => {
          xTo(0)
          yTo(0)
        }

        el.addEventListener("pointermove", onMove)
        el.addEventListener("pointerleave", onLeave)
        return () => {
          el.removeEventListener("pointermove", onMove)
          el.removeEventListener("pointerleave", onLeave)
        }
      })

      return () => mm.revert()
    },
    { scope: ref },
  )

  return (
    <span ref={ref} className={`inline-block ${className}`.trim()}>
      {children}
    </span>
  )
}
