import { roles } from "../../data/experience"
import { site } from "../../data/site"
import { Container } from "../layout/Container"
import { Section } from "../layout/Section"
import { Reveal } from "../ui/Reveal"
import { SpecLabel } from "../ui/SpecLabel"

// Revisions count up from the oldest role: A, B, C…
const revision = (index: number) =>
  String.fromCharCode(65 + roles.length - 1 - index)

const columns =
  "lg:grid-cols-[4rem_10rem_minmax(0,1fr)_minmax(0,1.35fr)]"

export function Experience() {
  return (
    <Section id="log" labelledBy="log-title">
      <Container>
        <SpecLabel
          n="2"
          id="log-title"
          title="Revision log"
          meta={`${String(roles.length).padStart(2, "0")} entries`}
        />
        <p className="mt-6 max-w-[60ch] text-[16px] leading-[1.6] text-secondary-text">
          {site.intros.log}
        </p>

        <div
          aria-hidden="true"
          className={`mt-10 hidden gap-x-8 border-b border-primary-text pb-2 font-mono text-[11px] tracking-[0.06em] text-muted uppercase lg:grid ${columns}`}
        >
          <span>Rev</span>
          <span>Period</span>
          <span>Role / Organisation</span>
          <span>Changes</span>
        </div>

        <ol className="mt-8 border-t border-primary-text lg:mt-0 lg:border-t-0">
          {roles.map((role, index) => (
            <li key={role.id} className="border-b border-line">
              <Reveal className={`grid gap-x-8 gap-y-3 py-7 lg:py-9 ${columns}`}>
                <p className="flex items-baseline gap-3 font-mono text-[12px] text-muted lg:contents">
                  <span className="flex items-baseline gap-2 text-primary-text">
                    <span
                      aria-hidden="true"
                      className={`inline-block size-2 translate-y-[-1px] ${
                        role.current
                          ? "bg-accent"
                          : "border border-line-strong"
                      }`}
                    />
                    <span className="sr-only">Revision </span>
                    {revision(index)}
                  </span>
                  <span className="tabular-nums">
                    {role.range}
                    {role.current ? (
                      <span className="ml-3 text-accent-text lg:mt-1 lg:ml-0 lg:block">
                        Current
                      </span>
                    ) : null}
                  </span>
                </p>
                <div>
                  <h3 className="text-[20px] leading-tight font-medium tracking-[-0.02em] text-primary-text md:text-[22px]">
                    {role.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] text-secondary-text">
                    {role.company}
                  </p>
                </div>
                <div>
                  <p className="text-[15px] leading-[1.6] text-secondary-text">
                    {role.summary}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="grid grid-cols-[1.25rem_minmax(0,1fr)] text-[14px] leading-[1.55] text-secondary-text"
                      >
                        <span aria-hidden="true" className="font-mono text-muted">
                          +
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
