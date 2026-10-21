import { roles } from "../../data/experience"
import { site } from "../../data/site"
import { Container } from "../layout/Container"
import { Section } from "../layout/Section"
import { AccentTitle } from "../ui/AccentTitle"
import { Reveal } from "../ui/Reveal"
import { SectionHeading } from "../ui/SectionHeading"

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-title">
      <Container>
        <SectionHeading
          index="03"
          label="Experience"
          id="experience-title"
          title={<AccentTitle text={site.headings.experience} />}
          intro={site.intros.experience}
        />

        <ol className="mt-16 md:mt-24">
          {roles.map((role) => (
            <li key={role.id}>
              <Reveal>
                <article className="group relative grid gap-6 border-t border-line py-10 md:grid-cols-12 md:gap-8 md:py-14">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-accent transition-transform duration-1000 ease-out-expo group-hover:scale-x-100"
                  />
                  <div className="md:col-span-3">
                    <p className="eyebrow">{role.range}</p>
                    {role.current ? (
                      <p className="eyebrow mt-3 flex items-center gap-2.5 text-primary-text">
                        <span aria-hidden="true" className="pulse-dot" />
                        Current
                      </p>
                    ) : null}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.05] font-medium tracking-[-0.035em] text-primary-text">
                      {role.title}
                    </h3>
                    <p className="mt-2 text-[16px] text-secondary-text">{role.company}</p>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-[16px] leading-[1.6] text-primary-text">{role.summary}</p>
                    <ul className="mt-5 space-y-2.5">
                      {role.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-[15px] leading-[1.55] text-secondary-text"
                        >
                          <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
