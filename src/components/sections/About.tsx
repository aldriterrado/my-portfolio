import { useRef } from "react"
import { roles } from "../../data/experience"
import { projects } from "../../data/projects"
import { site } from "../../data/site"
import { useWordHighlight } from "../../hooks/useWordHighlight"
import { padIndex } from "../../lib/motion"
import { Container } from "../layout/Container"
import { Section } from "../layout/Section"
import { Reveal } from "../ui/Reveal"
import { TextLink } from "../ui/TextLink"

const stats = [
  { value: site.about.years, label: site.about.stats.years },
  { value: padIndex(projects.length), label: site.about.stats.projects },
  { value: padIndex(roles.length), label: site.about.stats.roles },
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  useWordHighlight(ref)

  return (
    <Section id="about" labelledBy="about-title">
      <Container>
        <div className="flex items-center justify-between gap-6 border-t border-line pt-5">
          <h2 id="about-title" className="eyebrow flex items-center gap-3">
            <span className="text-accent-text">(02)</span>
            About
          </h2>
        </div>

        <div ref={ref} className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-12">
          <p
            data-highlight
            className="text-[clamp(1.75rem,3.6vw,3.4rem)] leading-[1.12] font-medium tracking-[-0.035em] text-primary-text lg:col-span-10"
          >
            {site.about.statement}
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-12">
          <dl className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3 lg:col-span-9">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 90} className="bg-base p-6 md:p-8">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-[clamp(3rem,6vw,5.5rem)] leading-none font-semibold tracking-[-0.06em] text-primary-text">
                    {stat.value}
                  </span>
                  <span aria-hidden="true" className="mt-4 block max-w-[24ch] text-[15px] leading-[1.45] text-secondary-text">
                    {stat.label}
                  </span>
                </dd>
              </Reveal>
            ))}
          </dl>
          <div className="flex flex-col justify-end gap-6 lg:col-span-3">
            <p className="text-[16px] leading-[1.6] text-secondary-text">
              These days I build with {site.about.stack}.
            </p>
            <ul className="flex flex-col gap-2 text-[16px]">
              <li>
                <TextLink href={site.github} icon="arrow-up-right" target="_blank" rel="noreferrer">
                  GitHub
                </TextLink>
              </li>
              <li>
                <TextLink href={site.linkedin} icon="arrow-up-right" target="_blank" rel="noreferrer">
                  LinkedIn
                </TextLink>
              </li>
              <li>
                <TextLink href={site.resume} icon="arrow-down">
                  Résumé
                </TextLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
