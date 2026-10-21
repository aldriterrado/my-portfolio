import { capabilities, credentials } from "../../data/experience"
import { site } from "../../data/site"
import { padIndex } from "../../lib/motion"
import { Container } from "../layout/Container"
import { Section } from "../layout/Section"
import { AccentTitle } from "../ui/AccentTitle"
import { Icon } from "../ui/Icon"
import { Reveal } from "../ui/Reveal"
import { SectionHeading } from "../ui/SectionHeading"

export function Capabilities() {
  const { exploring } = site

  return (
    <Section id="capabilities" labelledBy="capabilities-title">
      <Container>
        <SectionHeading
          index="04"
          label="Capabilities"
          id="capabilities-title"
          title={<AccentTitle text={site.headings.capabilities} />}
          intro={site.intros.capabilities}
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:mt-24 lg:grid-cols-3">
          {capabilities.map((group, index) => (
            <Reveal key={group.id} delay={index * 90} className="flex flex-col bg-base p-6 md:p-10">
              <p className="eyebrow text-accent-text">{padIndex(index + 1)}</p>
              <h3 className="mt-8 text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.05] font-medium tracking-[-0.035em] text-primary-text">
                {group.title}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.6] text-secondary-text">{group.focus}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-10" aria-label={`${group.title} stack`}>
                {group.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line-strong px-3.5 py-1.5 text-[13px] text-primary-text"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <Reveal className="rounded-lg bg-surface p-6 md:p-10 lg:col-span-7">
            <section aria-labelledby="exploring-title">
              <p className="eyebrow flex items-center gap-2.5">
                <span aria-hidden="true" className="pulse-dot" />
                Now learning
              </p>
              <h3
                id="exploring-title"
                className="mt-6 text-[clamp(2rem,4vw,3.25rem)] leading-[1] font-medium tracking-[-0.045em] text-primary-text"
              >
                {exploring.title}
              </h3>
              <p className="mt-4 max-w-[48ch] text-[16px] leading-[1.6] text-secondary-text">
                {exploring.body}
              </p>
              <ol className="mt-10 space-y-6">
                {exploring.track.map((step, index) => (
                  <li key={step.title} className="flex gap-5">
                    <span
                      aria-hidden="true"
                      className={`mt-1 grid size-7 shrink-0 place-items-center rounded-full font-mono text-[11px] ${
                        step.active
                          ? "bg-accent text-on-accent"
                          : "border border-line-strong text-muted"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p className="flex flex-wrap items-baseline gap-x-3 text-[17px] font-medium text-primary-text">
                        {step.title}
                        <span className="eyebrow">{step.active ? "In progress" : "Next"}</span>
                      </p>
                      <p className="mt-1 text-[15px] leading-[1.55] text-secondary-text">{step.note}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>

          <Reveal delay={90} className="rounded-lg border border-line p-6 md:p-10 lg:col-span-5">
            <section aria-labelledby="credentials-title">
              <h3 id="credentials-title" className="eyebrow">
                Certifications
              </h3>
              <ul className="mt-6">
                {credentials.map((credential) => (
                  <li key={credential.href} className="border-t border-line first:border-t-0">
                    <a
                      href={credential.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-4 py-5"
                    >
                      <span>
                        <span className="block text-[17px] font-medium tracking-[-0.01em] text-primary-text transition-colors duration-300 group-hover:text-accent-text">
                          {credential.title}
                        </span>
                        <span className="mt-1 block text-[14px] text-secondary-text">
                          {credential.issuer} · {credential.year}
                        </span>
                      </span>
                      <span className="flex items-center gap-2 text-[13px] text-muted transition-colors duration-300 group-hover:text-primary-text">
                        Verify
                        <span className="sr-only"> {credential.title} certificate (opens in a new tab)</span>
                        <Icon name="arrow-up-right" size={15} />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
