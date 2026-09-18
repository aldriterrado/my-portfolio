import { credentials, roles } from "../../data/experience"
import { Container } from "../layout/Container"
import { Section } from "../layout/Section"
import { Reveal } from "../ui/Reveal"
import { SectionLabel } from "../ui/SectionLabel"

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
        </Reveal>

        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute top-3 bottom-0 left-[5px] w-px bg-gradient-to-b from-line via-line to-transparent md:left-[137px]"
          />
          <ol>
            {roles.map((role) => {
              const [start, end] = role.range
                .split("—")
                .map((part) => part.trim())

              return (
                <li key={role.id} className="pb-16 last:pb-0">
                  <Reveal className="relative grid gap-2 pl-7 md:grid-cols-[132px_1fr] md:gap-x-10 md:pl-0">
                    <span
                      aria-hidden="true"
                      className={`absolute top-[7px] left-0 h-[11px] w-[11px] rounded-full border md:left-[132px] ${
                        role.current
                          ? "border-accent bg-accent shadow-[0_0_0_4px] shadow-accent/15"
                          : "border-line bg-base"
                      }`}
                    />

                    <p className="font-mono text-[13px] text-muted md:pt-1.5 md:pr-6 md:text-right">
                      {start}
                      {end ? (
                        <>
                          {" — "}
                          <span
                            className={role.current ? "text-accent" : undefined}
                          >
                            {end}
                          </span>
                        </>
                      ) : null}
                    </p>

                    <div>
                      <h2 className="text-[22px] leading-tight font-semibold tracking-[-0.02em] text-primary-text md:text-[26px]">
                        {role.title}
                      </h2>
                      <p className="mt-2 text-[15px] text-secondary-text">
                        {role.company}
                      </p>
                      <p className="mt-4 max-w-2xl text-[16px] leading-[1.6] text-secondary-text">
                        {role.summary}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {role.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-4 text-[15px] leading-[1.6] text-secondary-text"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[11px] h-px w-3 shrink-0 bg-line"
                            />
                            <span className="max-w-xl">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>

        <Reveal className="mt-16 border-t border-line pt-12">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-[13px] font-medium tracking-[0.08em] text-muted uppercase">
              Credentials
            </h3>
            <p className="font-mono text-[12px] text-muted tabular-nums">
              {String(credentials.length).padStart(2, "0")} certifications
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {credentials.map((credential) => {
              const [issuer, platform] = credential.issuer
                .split("·")
                .map((part) => part.trim())

              return (
                <a
                  key={credential.href}
                  href={credential.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-surface group flex flex-col rounded-[20px] border border-line bg-surface p-5 transition-[border-color,background-color,box-shadow] duration-300 hover:border-line-strong hover:bg-surface-hover hover:shadow-[var(--card-shadow)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="min-w-0 truncate font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                      {issuer}
                    </p>
                    <p className="shrink-0 rounded-full border border-line bg-base/60 px-2 py-0.5 font-mono text-[11px] text-muted tabular-nums">
                      {credential.year}
                    </p>
                  </div>

                  <h4 className="mt-5 text-[17px] leading-snug font-semibold tracking-[-0.02em] text-primary-text">
                    {credential.title}
                  </h4>

                  {platform ? (
                    <p className="mt-1.5 text-[13px] text-muted">
                      Issued via {platform}
                    </p>
                  ) : null}

                  <div className="mt-auto pt-6">
                    <span className="flex items-center justify-between gap-3 border-t border-hairline pt-3.5 text-[13px] text-secondary-text transition-colors duration-300 group-hover:text-primary-text">
                      View credential
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      >
                        ↗
                      </span>
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
