import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Container } from "../components/layout/Container"
import { Section } from "../components/layout/Section"
import { About } from "../components/sections/About"
import { Capabilities } from "../components/sections/Capabilities"
import { Contact } from "../components/sections/Contact"
import { Experience } from "../components/sections/Experience"
import { Hero } from "../components/sections/Hero"
import { Work } from "../components/sections/Work"
import { AccentTitle } from "../components/ui/AccentTitle"
import { Button } from "../components/ui/Button"
import { Magnetic } from "../components/ui/Magnetic"
import { Marquee } from "../components/ui/Marquee"
import { SectionHeading } from "../components/ui/SectionHeading"
import { featuredProjects, projects } from "../data/projects"
import { site } from "../data/site"
import { useSeo } from "../hooks/useSeo"
import { padIndex } from "../lib/motion"
import { scrollToId } from "../lib/smoothScroll"

export function Home() {
  const { hash } = useLocation()

  useSeo({
    title: `${site.name} — ${site.role}, ${site.direction.toLowerCase()}`,
    description: site.description,
    path: "/",
  })

  useEffect(() => {
    if (!hash) return

    // Arriving from another page: jump while the page curtain still covers it.
    const frame = window.requestAnimationFrame(() => scrollToId(hash.slice(1), true))
    return () => window.cancelAnimationFrame(frame)
  }, [hash])

  return (
    <>
      <Hero />

      <div className="border-y border-line">
        <Marquee items={site.marquee} label="Stack and skills" />
      </div>

      <Section id="work" labelledBy="work-title">
        <Container>
          <SectionHeading
            index="01"
            label="Selected work"
            id="work-title"
            aside={`${padIndex(featuredProjects.length)} / ${padIndex(projects.length)}`}
            title={<AccentTitle text={site.headings.work} />}
            intro={site.intros.work}
          />
          <div className="mt-16 md:mt-24">
            <Work items={featuredProjects} />
          </div>
          <div className="mt-20 flex justify-center md:mt-28">
            <Magnetic>
              <Button to="/projects" variant="outline" icon="arrow-right">
                All projects ({padIndex(projects.length)})
              </Button>
            </Magnetic>
          </div>
        </Container>
      </Section>

      <About />
      <Experience />
      <Capabilities />
      <Contact />
    </>
  )
}
