import { useState } from "react"
import { Link } from "react-router-dom"
import { kindTags } from "../../data/diagrams"
import type { Project } from "../../data/projects"
import { diagramSize } from "../../lib/diagramLayout"
import { padIndex } from "../../lib/motion"
import { Figure } from "../ui/Figure"
import { SystemDiagram } from "../ui/SystemDiagram"

type SystemsIndexProps = {
  items: Project[]
  /** Heading level for each row's title. */
  headingLevel?: "h2" | "h3"
}

function figureMeta(project: Project) {
  return `${project.diagram.nodes.length} components · ${project.diagram.edges.length} connections`
}

/**
 * A ruled index of systems. At lg and up, a sticky panel previews the
 * architecture of the hovered or focused row. The panel repeats what the row
 * links to, so it is hidden from assistive technology.
 */
export function SystemsIndex({ items, headingLevel = "h3" }: SystemsIndexProps) {
  const [activeSlug, setActiveSlug] = useState(items[0]?.slug)
  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.slug === activeSlug),
  )
  const active = items[activeIndex]
  const Heading = headingLevel
  const size = active ? diagramSize(active.diagram) : null

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-0">
      <ol className="border-t border-primary-text lg:col-span-7 lg:pr-10">
        {items.map((project, index) => {
          const isActive = project.slug === active?.slug
          return (
            <li key={project.slug} className="border-b border-line">
              <Link
                to={`/projects/${project.slug}`}
                onMouseEnter={() => setActiveSlug(project.slug)}
                onFocus={() => setActiveSlug(project.slug)}
                data-active={isActive || undefined}
                className="group relative grid grid-cols-[2.25rem_minmax(0,1fr)_auto] gap-x-4 py-6 pr-1 transition-colors duration-200 before:absolute before:top-0 before:-left-px before:h-full before:w-[2px] before:origin-top before:scale-y-0 before:bg-accent before:transition-transform before:duration-300 hover:bg-surface/70 md:grid-cols-[3rem_minmax(0,1fr)_auto] md:py-7 lg:data-[active]:before:scale-y-100"
              >
                <span className="pt-1.5 pl-2 font-mono text-[12px] text-muted tabular-nums">
                  {padIndex(index + 1)}
                </span>
                <div className="min-w-0">
                  <Heading className="text-[22px] leading-tight font-medium tracking-[-0.025em] text-primary-text md:text-[26px]">
                    {project.title}
                  </Heading>
                  <p className="mt-2 max-w-[58ch] text-[15px] leading-[1.55] text-secondary-text">
                    {project.summary}
                  </p>
                  <p className="mt-3 font-mono text-[12px] leading-[1.6] text-muted">
                    {project.kind}
                    <span className="text-line-strong"> / </span>
                    {project.stack.slice(0, 4).join(" · ")}
                  </p>
                  <p className="mt-1 font-mono text-[12px] text-muted lg:hidden">
                    FIG.{padIndex(index + 1)} · {figureMeta(project)}
                  </p>
                </div>
                <div className="flex flex-col items-end justify-between gap-4 pt-1.5 font-mono text-[12px] text-muted">
                  <span className="tabular-nums">{project.year}</span>
                  <span
                    aria-hidden="true"
                    className="text-[15px] text-primary-text transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent-text"
                  >
                    →
                  </span>
                </div>
              </Link>
            </li>
          )
        })}
      </ol>

      {active ? (
        <div className="hidden lg:col-span-5 lg:block lg:border-l lg:border-line lg:pl-10">
          <div className="sticky top-24" aria-hidden="true">
            <Figure
              id={`FIG.${padIndex(activeIndex + 1)}`}
              title={active.title}
              meta="Architecture"
            >
              <div
                className="relative"
                style={size ? { aspectRatio: `${size.width} / ${size.height}` } : undefined}
              >
                {items.map((project) => (
                  <div
                    key={project.slug}
                    className={`absolute inset-0 p-3 transition-opacity duration-300 ${
                      project.slug === active.slug ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <SystemDiagram
                      diagram={project.diagram}
                      variant="compact"
                      fit
                    />
                  </div>
                ))}
              </div>
            </Figure>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1.5 font-mono text-[11px] text-muted">
              {active.diagram.nodes.map((node) => (
                <li key={node.id} className="flex gap-2 truncate">
                  <span className="w-7 shrink-0 text-accent-text">
                    {kindTags[node.kind]}
                  </span>
                  <span className="truncate text-secondary-text">{node.label}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-mono text-[11px] text-muted">
              {figureMeta(active)}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  )
}
