import { useEffect, useRef, useState, type ReactNode } from "react"

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className = "" }: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [unveiled, setUnveiled] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      setUnveiled(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setUnveiled(true)
          observer.disconnect()
        }
      },
      { threshold: 0.22, rootMargin: "0px 0px -6% 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id={id}
      className={`section relative scroll-mt-24 ${className}`.trim()}
    >
      <div className={`section-unveil ${unveiled ? "is-unveiled" : ""}`}>
        {children}
      </div>
    </section>
  )
}
