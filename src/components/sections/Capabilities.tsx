import { capabilities } from "../../data/experience"
import { site } from "../../data/site"
import { Container } from "../layout/Container"
import { Section } from "../layout/Section"
import { Reveal } from "../ui/Reveal"
import { SectionLabel } from "../ui/SectionLabel"

const capabilityTitles = new Map(
  capabilities.map((group) => [group.id, group.title]),
)

export function Capabilities() {
  return (
    <Section id="capabilities">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
          <Reveal className="flex h-full flex-col">
            <SectionLabel>Capabilities</SectionLabel>

            <ol className="relative">
              <span
                aria-hidden="true"
                className="absolute top-4 bottom-4 left-[13px] w-px bg-gradient-to-b from-line via-line to-transparent"
              />

              {capabilities.map((group, index) => (
                <li
                  key={group.id}
                  className="group relative pb-10 pl-11 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 flex h-[27px] w-[27px] items-center justify-center rounded-full border border-line bg-base font-mono text-[11px] text-muted transition-colors duration-200 group-hover:border-accent/40 group-hover:text-accent"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2 className="text-[20px] leading-tight font-semibold tracking-[-0.02em] text-primary-text">
                    {group.title}
                  </h2>
                  <p className="mt-2.5 max-w-lg text-[16px] leading-[1.6] text-secondary-text">
                    {group.focus}
                  </p>
                  <p className="mt-4 font-mono text-[12px] leading-[1.9] text-muted">
                    {group.stack.join("  ·  ")}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="flex h-full flex-col">
            <SectionLabel>Currently Exploring</SectionLabel>

            <div className="card-surface flex h-full flex-col rounded-[20px] border border-line bg-surface p-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-base/60 px-2.5 py-1 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-accent shadow-[0_0_0_3px] shadow-accent/15"
                />
                In progress
              </span>

              <h2 className="mt-5 text-[22px] leading-tight font-semibold tracking-[-0.02em] text-primary-text">
                {site.exploring.title}
              </h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-secondary-text">
                {site.exploring.body}
              </p>

              <ul className="mt-7 space-y-4 border-t border-hairline pt-6">
                {site.exploring.track.map((item) => (
                  <li key={item.title} className="flex gap-3.5">
                    <span
                      aria-hidden="true"
                      className={`mt-[7px] size-1.5 shrink-0 rounded-full ${
                        item.active
                          ? "bg-accent shadow-[0_0_0_3px] shadow-accent/15"
                          : "border border-line-strong"
                      }`}
                    />
                    <div>
                      <p className="text-[15px] leading-snug text-primary-text">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[13px] leading-[1.5] text-muted">
                        {item.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <div className="border-t border-hairline pt-5">
                  <p className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                    Builds on
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {site.exploring.builtOn.map((id) => (
                      <span
                        key={id}
                        className="rounded-full border border-line bg-base/60 px-2.5 py-1 font-mono text-[11px] text-secondary-text"
                      >
                        {capabilityTitles.get(id) ?? id}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
