import { site } from "../../data/site"
import { Container } from "../layout/Container"
import { Section } from "../layout/Section"
import { Reveal } from "../ui/Reveal"
import { SectionLabel } from "../ui/SectionLabel"

export function About() {
  return (
    <Section id="about">
      <Container>
        <Reveal>
          <SectionLabel>About</SectionLabel>
          <div className="max-w-2xl space-y-5">
            {site.about.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[18px] leading-[1.6] text-secondary-text"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
