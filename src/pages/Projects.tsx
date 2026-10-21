import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Container } from "../components/layout/Container"
import { Icon } from "../components/ui/Icon"
import { ProjectCover } from "../components/ui/ProjectCover"
import { projects } from "../data/projects"
import { site } from "../data/site"
import { useSeo } from "../hooks/useSeo"
import { useSplitReveal } from "../hooks/useSplitReveal"
import { gsap, useGSAP } from "../lib/gsap"
import { padIndex, POINTER_MOTION_OK } from "../lib/motion"

export function Projects() {
  const ref = useRef<HTMLElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number | null>(null)
  useSplitReveal(ref)

  useSeo({
    title: `Work — ${site.name}`,
    description: `Internal platforms, workflow systems and infrastructure tools built by ${site.name}.`,
    path: "/projects",
  })

  // A floating cover follows the pointer over the list (desktop, motion only).
  useGSAP(
    () => {
      const preview = previewRef.current
      const list = ref.current?.querySelector("[data-list]")
      if (!preview || !list) return
      const mm = gsap.matchMedia()

      mm.add(`${POINTER_MOTION_OK} and (min-width: 768px)`, () => {
        gsap.set(preview, { scale: 0.85 })
        const xTo = gsap.quickTo(preview, "x", { duration: 0.7, ease: "power3" })
        const yTo = gsap.quickTo(preview, "y", { duration: 0.7, ease: "power3" })
        const onMove = (event: Event) => {
          const { clientX, clientY } = event as PointerEvent
          xTo(clientX)
          yTo(clientY)
        }
        const onEnter = () => gsap.to(preview, { autoAlpha: 1, scale: 1, duration: 0.5, ease: "expo.out" })
        const onLeave = () => gsap.to(preview, { autoAlpha: 0, scale: 0.85, duration: 0.35, ease: "power3.out" })

        list.addEventListener("pointermove", onMove)
        list.addEventListener("pointerenter", onEnter)
        list.addEventListener("pointerleave", onLeave)
        return () => {
          list.removeEventListener("pointermove", onMove)
          list.removeEventListener("pointerenter", onEnter)
          list.removeEventListener("pointerleave", onLeave)
        }
      })

      return () => mm.revert()
    },
    { scope: ref },
  )

  return (
    <section ref={ref} aria-labelledby="index-title" className="pt-36 pb-24 md:pt-48 md:pb-40">
      <Container>
        <p data-fade className="eyebrow flex items-center gap-3">
          <span className="text-accent-text">Index</span>
          {padIndex(projects.length)} projects
        </p>
        <h1
          id="index-title"
          data-split="chars"
          className="mt-8 text-[clamp(4rem,15vw,14rem)] leading-[0.85] font-semibold tracking-[-0.06em] text-primary-text"
        >
          Work<span className="text-accent">.</span>
        </h1>
        <p
          data-fade
          data-delay="0.3"
          className="mt-10 max-w-[44ch] text-[clamp(1.125rem,1.6vw,1.375rem)] leading-[1.45] text-secondary-text"
        >
          Internal platforms, workflow systems and infrastructure tools. {site.intros.work}
        </p>

        <ol data-list className="mt-20 border-b border-line md:mt-28">
          {projects.map((project, index) => (
            <li key={project.slug} className="border-t border-line">
              <Link
                to={`/projects/${project.slug}`}
                onPointerEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className="group grid gap-5 py-8 md:grid-cols-12 md:items-center md:gap-8 md:py-10"
              >
                <ProjectCover project={project} className="aspect-[16/10] md:hidden" />
                <span className="eyebrow text-accent-text md:col-span-1">{padIndex(index + 1)}</span>
                <h2 className="text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] font-medium tracking-[-0.045em] text-primary-text transition-transform duration-700 ease-out-expo md:col-span-6 md:group-hover:translate-x-4">
                  {project.title}
                </h2>
                <p className="text-[15px] leading-[1.5] text-secondary-text md:col-span-3">
                  {project.subtitle}
                </p>
                <div className="flex items-center justify-between gap-4 md:col-span-2 md:justify-end">
                  <span className="eyebrow">{project.year}</span>
                  <span className="grid size-11 place-items-center rounded-full border border-line-strong text-primary-text transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
                    <Icon name="arrow-up-right" size={17} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </Container>

      <div
        ref={previewRef}
        aria-hidden="true"
        className="pointer-events-none invisible fixed top-0 left-0 z-40 -mt-[150px] -ml-[200px] hidden w-[400px] opacity-0 md:block"
      >
        <div className="relative aspect-[4/3]">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className={`absolute inset-0 transition-opacity duration-500 ${
                active === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <ProjectCover project={project} className="size-full shadow-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
