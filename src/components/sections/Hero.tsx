import { useRef } from "react"
import { projects } from "../../data/projects"
import { roles } from "../../data/experience"
import { site } from "../../data/site"
import { useHeroIntro } from "../../hooks/useHeroIntro"
import { padIndex } from "../../lib/motion"
import { DocHeader } from "../ui/DocHeader"
import { FootnoteRef, Footnotes } from "../ui/Footnote"
import { Rule } from "../ui/Rule"
import { TextLink } from "../ui/TextLink"

const firstYear = Math.min(
  ...roles.map((role) => Number.parseInt(role.range, 10)).filter(Number.isFinite),
)

const keyFigures = [
  { label: "Systems documented", value: padIndex(projects.length) },
  { label: "Working in IT since", value: String(firstYear) },
  { label: "Core stack", value: "React · TS · Postgres" },
  { label: "Based in", value: `SG · ${site.timezone}` },
]

export function Hero() {
  const scope = useRef<HTMLElement>(null)
  useHeroIntro(scope)

  return (
    <section ref={scope} aria-labelledby="hero-title" className="relative pt-14">
      <DocHeader sheet="01" title="Overview" />

      <div className="relative isolate pt-14 pb-12 md:pt-20 md:pb-16 lg:pt-24">
        <div
          aria-hidden="true"
          className="graph-paper pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        />
        <p className="mb-6 flex items-baseline gap-3 font-mono text-[12px] text-muted">
          <span className="text-accent-text">§0</span>
          <span>Title block</span>
        </p>
        <h1
          id="hero-title"
          className="text-[clamp(2.1rem,5.1vw,4rem)] leading-[1.04] font-medium tracking-[-0.035em] text-primary-text"
        >
          {site.hero.lines.map((line) => (
            <span key={line} className="line-mask">
              <span data-hero-line="">{line}</span>
            </span>
          ))}
        </h1>
      </div>

      <Rule variant="strong" />

      <div className="grid gap-12 py-10 md:py-12 lg:grid-cols-12 lg:gap-0">
        <div className="lg:col-span-7 lg:pr-12" data-hero-fade="">
          <p className="max-w-[60ch] text-[17px] leading-[1.65] text-secondary-text">
            {site.hero.abstract}
          </p>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
            <TextLink to="/projects" glyph="→">
              Systems index
            </TextLink>
            <TextLink href={site.resume} glyph="↓">
              Résumé
            </TextLink>
            <TextLink
              href={site.github}
              glyph="↗"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </TextLink>
            <TextLink
              href={site.linkedin}
              glyph="↗"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </TextLink>
          </div>
        </div>

        <div className="lg:col-span-5 lg:border-l lg:border-line lg:pl-10" data-hero-fade="">
          <dl className="border-t border-primary-text">
            {site.titleBlock.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 border-b border-line py-2.5"
              >
                <dt className="font-mono text-[11px] leading-[1.9] tracking-[0.06em] text-muted uppercase">
                  {row.label}
                </dt>
                <dd className="text-[14px] text-primary-text">
                  {row.value}
                  {"note" in row ? <FootnoteRef n={row.note} /> : null}
                </dd>
              </div>
            ))}
          </dl>
          <Footnotes items={site.footnotes} className="mt-3" />
        </div>
      </div>

      <dl className="grid grid-cols-2 border-y border-line md:grid-cols-4" data-hero-fade="">
        {keyFigures.map((figure, index) => (
          <div
            key={figure.label}
            className={`flex flex-col-reverse gap-1 py-5 pr-4 ${
              index % 2 === 1 ? "border-l border-line pl-4" : ""
            } ${index > 0 ? "md:border-l md:border-line md:pl-5" : ""} ${
              index > 1 ? "border-t border-line md:border-t-0" : ""
            }`}
          >
            <dt className="font-mono text-[11px] tracking-[0.06em] text-muted uppercase">
              {figure.label}
            </dt>
            <dd className="text-[20px] font-medium tracking-[-0.02em] text-primary-text tabular-nums md:text-[24px]">
              {figure.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
