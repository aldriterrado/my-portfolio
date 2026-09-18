import type { CSSProperties } from "react"
import { featuredProjects } from "../../data/projects"
import { site } from "../../data/site"
import { ProjectDeck } from "../ui/ProjectDeck"
import { TextLink } from "../ui/TextLink"

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties

export function Hero() {
  return (
    <section
      id="home"
      className="grid scroll-mt-24 grid-cols-1 content-center gap-8 md:grid-cols-2 md:items-start md:gap-10 lg:gap-16"
    >
      <div>
        <p
          className="hero-rise flex items-center gap-3.5 text-[12px] font-medium tracking-[0.18em] text-secondary-text uppercase"
          style={delay(80)}
        >
          {site.role}
          <span aria-hidden="true" className="h-px w-7 bg-line" />
          {site.location}
        </p>

        <h1
          className="hero-rise mt-4 -ml-[0.02em] max-w-[14em] text-[clamp(1.85rem,4.4vw,3.15rem)] leading-[1.12] font-medium tracking-[-0.02em] text-pretty text-primary-text sm:tracking-[-0.026em] md:text-balance md:leading-[1.08] lg:tracking-[-0.032em]"
          style={delay(180)}
        >
          {site.headline.lead}{" "}
          <span className="text-secondary-text">{site.headline.trail}</span>
        </h1>

        <p
          className="hero-rise mt-4 max-w-[46ch] text-[16px] leading-[1.6] text-secondary-text md:text-[17px]"
          style={delay(300)}
        >
          {site.supporting}
        </p>

        <div
          className="hero-rise mt-6 flex items-center gap-7"
          style={delay(400)}
        >
          <TextLink to="/projects" className="font-medium">
            Projects
          </TextLink>
          <TextLink
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
          >
            GitHub
          </TextLink>
          <TextLink
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
          >
            LinkedIn
          </TextLink>
          <TextLink href={site.resume} className="font-medium">
            Resume
          </TextLink>
        </div>
      </div>

      <div className="hero-rise" style={delay(280)}>
        <ProjectDeck projects={featuredProjects} />
      </div>
    </section>
  )
}
