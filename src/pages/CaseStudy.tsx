import { useEffect, useRef, type ReactNode } from "react"
import { Navigate, useParams } from "react-router-dom"
import { Container } from "../components/layout/Container"
import { DocHeader } from "../components/ui/DocHeader"
import { Figure } from "../components/ui/Figure"
import { Screenshot } from "../components/ui/Screenshot"
import { SpecTable } from "../components/ui/SpecTable"
import { SystemDiagram } from "../components/ui/SystemDiagram"
import { TextLink } from "../components/ui/TextLink"
import {
  getAdjacentProjects,
  getProjectBySlug,
  projects,
  type CaseStudySection,
  type Project,
} from "../data/projects"
import { site } from "../data/site"
import { useDiagramMotion } from "../hooks/useDiagramMotion"
import { useSeo } from "../hooks/useSeo"
import { padIndex } from "../lib/motion"
import { ScrollTrigger } from "../lib/scrollTrigger"

// "Name: description" items become a numbered features table.
const FEATURE_PATTERN = /^([^:]{3,40}):\s+(.+)$/

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="max-w-[68ch] space-y-4">
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className="text-[16px] leading-[1.7] text-secondary-text"
        >
          {paragraph}
        </p>
      ))}
    </div>
  )
}

function Features({ items }: { items: string[] }) {
  const parsed = items.map((item) => item.match(FEATURE_PATTERN))

  if (parsed.every(Boolean)) {
    const rows = parsed.map((match, index) => ({
      id: `F-${padIndex(index + 1)}`,
      name: match![1],
      text: match![2].charAt(0).toUpperCase() + match![2].slice(1),
    }))
    return (
      <SpecTable
        caption="Key features"
        rows={rows}
        rowKey={(row) => row.id}
        columns={[
          {
            key: "id",
            label: "Ref",
            mono: true,
            className: "md:w-16 !text-accent-text",
            render: (row) => row.id,
          },
          {
            key: "name",
            label: "Feature",
            className: "font-medium !text-primary-text md:w-[30%]",
            render: (row) => row.name,
          },
          { key: "text", label: "Description", render: (row) => row.text },
        ]}
      />
    )
  }

  return (
    <ol className="max-w-[68ch] border-t border-primary-text">
      {items.map((item, index) => (
        <li
          key={item}
          className="grid grid-cols-[3.5rem_minmax(0,1fr)] border-b border-line py-3.5 text-[16px] leading-[1.6] text-secondary-text"
        >
          <span className="pt-0.5 font-mono text-[12px] text-accent-text">
            F-{padIndex(index + 1)}
          </span>
          {item}
        </li>
      ))}
    </ol>
  )
}

function SheetSection({
  index,
  title,
  children,
}: {
  index: number
  title: string
  children: ReactNode
}) {
  const id = `section-${padIndex(index)}`
  return (
    <section
      aria-labelledby={id}
      className="grid gap-5 border-t border-line py-10 md:py-14 lg:grid-cols-12 lg:gap-0"
    >
      <h2
        id={id}
        className="flex items-baseline gap-3 lg:col-span-3 lg:pr-8"
      >
        <span className="font-mono text-[12px] text-accent-text">
          §{padIndex(index)}
        </span>
        <span className="text-[20px] leading-tight font-medium tracking-[-0.02em] text-primary-text md:text-[22px]">
          {title}
        </span>
      </h2>
      <div className="min-w-0 lg:col-span-9">{children}</div>
    </section>
  )
}

function ArchitectureSection({
  index,
  section,
  project,
}: {
  index: number
  section: CaseStudySection
  project: Project
}) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const figureRef = useRef<HTMLDivElement>(null)
  useDiagramMotion(figureRef, {
    mode: "scrub",
    media: "(min-width: 1024px)",
    trigger: sectionRef,
  })

  return (
    <SheetSection index={index} title={section.title}>
      <div ref={sectionRef} className="grid gap-8 xl:grid-cols-9 xl:gap-0">
        <div className="xl:col-span-4 xl:pr-10">
          <Prose paragraphs={section.body} />
          <p className="mt-6 font-mono text-[12px] text-muted lg:hidden">
            See FIG.01 above for the full architecture.
          </p>
        </div>
        <div className="hidden lg:block xl:col-span-5">
          <div ref={figureRef} className="sticky top-24">
            <Figure id="FIG.01a" title="Build sequence" meta="Schematic">
              <div className="p-4">
                <SystemDiagram diagram={project.diagram} variant="compact" />
              </div>
            </Figure>
          </div>
        </div>
      </div>
    </SheetSection>
  )
}

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  // Remount per project so every figure's motion is rebuilt for its diagram.
  return <CaseStudySheet key={slug} slug={slug} />
}

function CaseStudySheet({ slug }: { slug: string | undefined }) {
  const project = slug ? getProjectBySlug(slug) : undefined
  const figureRef = useRef<HTMLDivElement>(null)

  useSeo({
    title: project
      ? `${project.title} — ${site.name}`
      : `Project — ${site.name}`,
    description: project?.caseStudy.summary ?? site.description,
    path: project ? `/projects/${project.slug}` : "/projects",
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
    ScrollTrigger.refresh()
  }, [slug])

  useDiagramMotion(figureRef, { mode: "play" })

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const number = projects.findIndex((item) => item.slug === project.slug) + 1
  const { previous, next } = getAdjacentProjects(project.slug)
  const { diagram } = project
  const nodeLabel = new Map(diagram.nodes.map((node) => [node.id, node.label]))

  const specs = [
    { label: "Role", value: project.role },
    { label: "Platform", value: project.platform },
    { label: "Stack", value: project.stack.join(" · ") },
    { label: "Kind", value: project.kind },
    { label: "Year", value: project.year },
  ]

  return (
    <article className="pb-20 md:pb-28">
      <Container>
        <div className="pt-14">
          <DocHeader
            code={`CS-${project.monogram}`}
            sheet={`${padIndex(number)}/${padIndex(projects.length)}`}
            title="Case study"
          />
        </div>

        <p className="mt-6">
          <TextLink to="/projects" glyph="←">
            Systems index
          </TextLink>
        </p>

        <header className="grid gap-10 pt-10 pb-14 lg:grid-cols-12 lg:gap-0 lg:pt-14 lg:pb-16">
          <div className="lg:col-span-7 lg:pr-12">
            <p className="mb-5 flex flex-wrap gap-x-3 font-mono text-[12px] text-muted">
              <span className="text-accent-text">No. {padIndex(number)}</span>
              <span>{project.kind}</span>
              <span>{project.year}</span>
            </p>
            <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] leading-[1] font-medium tracking-[-0.04em] text-primary-text">
              {project.title}
            </h1>
            <p className="mt-4 max-w-[46ch] text-[19px] leading-[1.45] text-primary-text">
              {project.subtitle}
            </p>
            <p className="mt-6 max-w-[62ch] text-[16px] leading-[1.7] text-secondary-text">
              {project.caseStudy.summary}
            </p>
          </div>
          <dl className="self-start border-t border-primary-text lg:col-span-5 lg:ml-10">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 border-b border-line py-2.5"
              >
                <dt className="font-mono text-[11px] leading-[1.9] tracking-[0.06em] text-muted uppercase">
                  {spec.label}
                </dt>
                <dd className="text-[14px] leading-[1.55] text-primary-text">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <Figure
          id="FIG.01"
          title="System architecture"
          meta={`${diagram.nodes.length} components · ${diagram.edges.length} connections`}
          notes={diagram.notes}
        >
          <div
            ref={figureRef}
            className="overflow-x-auto"
            tabIndex={0}
            role="region"
            aria-label="FIG.01, system architecture diagram"
          >
            <div className="min-w-[760px] p-4 md:min-w-0 md:p-6">
              <SystemDiagram diagram={diagram} />
            </div>
          </div>
        </Figure>
        <p className="mt-2 font-mono text-[11px] text-muted md:hidden">
          ⟷ Scroll the figure sideways
        </p>

        <details className="group mt-6 border-y border-line">
          <summary className="flex cursor-pointer list-none items-baseline gap-3 py-3 font-mono text-[12px] text-secondary-text hover:text-primary-text [&::-webkit-details-marker]:hidden">
            <span
              aria-hidden="true"
              className="inline-block text-accent-text transition-transform duration-200 group-open:rotate-90"
            >
              ▸
            </span>
            Connections table ({diagram.edges.length})
          </summary>
          <div className="pb-6">
            <SpecTable
              caption="System connections"
              rows={diagram.edges}
              rowKey={(edge) => `${edge.from}-${edge.to}`}
              columns={[
                {
                  key: "from",
                  label: "From",
                  className: "!text-primary-text",
                  render: (edge) => nodeLabel.get(edge.from),
                },
                {
                  key: "to",
                  label: "To",
                  className: "!text-primary-text",
                  render: (edge) => (
                    <>
                      {edge.both ? "⇄ " : "→ "}
                      {nodeLabel.get(edge.to)}
                    </>
                  ),
                },
                {
                  key: "interface",
                  label: "Interface",
                  mono: true,
                  render: (edge) => edge.label ?? "—",
                },
              ]}
            />
          </div>
        </details>

        <div className="mt-16 border-b border-line">
          {project.caseStudy.sections.map((section, index) => {
            const n = index + 1

            if (section.title === "Architecture") {
              return (
                <ArchitectureSection
                  key={section.title}
                  index={n}
                  section={section}
                  project={project}
                />
              )
            }

            return (
              <div key={section.title}>
                <SheetSection index={n} title={section.title}>
                  {section.title === "Key Features" ? (
                    <Features items={section.body} />
                  ) : (
                    <Prose paragraphs={section.body} />
                  )}
                </SheetSection>
                {section.title === "Solution" && project.image ? (
                  <Figure
                    id="FIG.02"
                    title="Interface"
                    caption={project.imageCaption}
                    className="pb-14"
                  >
                    <Screenshot
                      src={project.image}
                      alt={project.imageCaption ?? `${project.title} interface`}
                      onLoad={() => ScrollTrigger.refresh()}
                    />
                  </Figure>
                ) : null}
              </div>
            )
          })}
        </div>

        {import.meta.env.DEV && !project.image ? (
          <div className="mt-10 border border-dashed border-line">
            <Screenshot
              src={null}
              alt={`${project.title} screenshot (FIG.02)`}
              hint={project.imageHint}
            />
          </div>
        ) : null}

        <nav
          className="mt-16 grid border-t border-primary-text sm:grid-cols-2"
          aria-label="More case studies"
        >
          {previous ? (
            <TextLinkSheet
              to={`/projects/${previous.slug}`}
              direction="Previous"
              title={previous.title}
            />
          ) : (
            <span />
          )}
          {next ? (
            <TextLinkSheet
              to={`/projects/${next.slug}`}
              direction="Next"
              title={next.title}
              alignEnd
            />
          ) : null}
        </nav>
      </Container>
    </article>
  )
}

function TextLinkSheet({
  to,
  direction,
  title,
  alignEnd = false,
}: {
  to: string
  direction: "Previous" | "Next"
  title: string
  alignEnd?: boolean
}) {
  return (
    <div
      className={`border-b border-line py-6 ${
        alignEnd ? "sm:border-l sm:pl-8 sm:text-right" : "sm:pr-8"
      }`}
    >
      <p className="mb-2 font-mono text-[11px] tracking-[0.06em] text-muted uppercase">
        {direction === "Previous" ? "← Previous sheet" : "Next sheet →"}
      </p>
      <TextLink to={to} className="text-[20px] font-medium tracking-[-0.02em]">
        {title}
      </TextLink>
    </div>
  )
}
