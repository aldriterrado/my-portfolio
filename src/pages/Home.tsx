import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Container } from "../components/layout/Container"
import { Section } from "../components/layout/Section"
import { Capabilities } from "../components/sections/Capabilities"
import { Contact } from "../components/sections/Contact"
import { Experience } from "../components/sections/Experience"
import { Hero } from "../components/sections/Hero"
import { SystemsIndex } from "../components/sections/SystemsIndex"
import { SpecLabel } from "../components/ui/SpecLabel"
import { TextLink } from "../components/ui/TextLink"
import { featuredProjects, projects } from "../data/projects"
import { site } from "../data/site"
import { useSeo } from "../hooks/useSeo"
import { padIndex, scrollToId } from "../lib/motion"

export function Home() {
  const { hash } = useLocation()

  useSeo({
    title: `${site.name} — ${site.role}`,
    description: site.description,
    path: "/",
  })

  useEffect(() => {
    if (!hash) return

    const frame = window.requestAnimationFrame(() => scrollToId(hash.slice(1)))
    return () => window.cancelAnimationFrame(frame)
  }, [hash])

  return (
    <>
      <Container>
        <Hero />
      </Container>

      <Section id="systems" labelledBy="systems-title">
        <Container>
          <SpecLabel
            n="1"
            id="systems-title"
            title="Selected systems"
            meta={`${padIndex(featuredProjects.length)} of ${padIndex(projects.length)}`}
          />
          <p className="mt-6 mb-12 max-w-[60ch] text-[16px] leading-[1.6] text-secondary-text">
            {site.intros.systems}
          </p>
          <SystemsIndex items={featuredProjects} />
          <p className="mt-8">
            <TextLink to="/projects" glyph="→">
              Full systems index ({padIndex(projects.length)})
            </TextLink>
          </p>
        </Container>
      </Section>

      <Experience />
      <Capabilities />
      <Contact />
    </>
  )
}
