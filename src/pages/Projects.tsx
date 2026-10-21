import { useEffect } from "react"
import { Container } from "../components/layout/Container"
import { SystemsIndex } from "../components/sections/SystemsIndex"
import { DocHeader } from "../components/ui/DocHeader"
import { projects } from "../data/projects"
import { site } from "../data/site"
import { useSeo } from "../hooks/useSeo"
import { padIndex } from "../lib/motion"

export function Projects() {
  useSeo({
    title: `Systems index — ${site.name}`,
    description: `Internal platforms, workflow systems and infrastructure tools built by ${site.name}, each documented with its architecture.`,
    path: "/projects",
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <section aria-labelledby="index-title" className="pb-20 md:pb-28">
      <Container>
        <div className="pt-14">
          <DocHeader sheet="02" title="Index" />
        </div>

        <header className="grid gap-8 pt-14 pb-12 md:pt-20 lg:grid-cols-12 lg:gap-0 lg:pb-16">
          <div className="lg:col-span-8">
            <p className="mb-6 flex items-baseline gap-3 font-mono text-[12px] text-muted">
              <span className="text-accent-text">§1</span>
              <span>{padIndex(projects.length)} entries</span>
            </p>
            <h1
              id="index-title"
              className="text-[clamp(2.4rem,6vw,4.5rem)] leading-[1] font-medium tracking-[-0.04em] text-primary-text"
            >
              Systems index
            </h1>
          </div>
          <p className="max-w-[52ch] self-end text-[16px] leading-[1.6] text-secondary-text lg:col-span-4">
            {site.intros.systems}
          </p>
        </header>

        <SystemsIndex items={projects} headingLevel="h2" />
      </Container>
    </section>
  )
}
