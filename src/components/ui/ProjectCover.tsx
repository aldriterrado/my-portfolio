import type { CSSProperties } from "react"
import type { Project } from "../../data/projects"
import { ScrollTrigger } from "../../lib/scrollTrigger"

type ProjectCoverProps = {
  project: Project
  /** Alt text for a screenshot; leave empty when the title is next to it. */
  alt?: string
  priority?: boolean
  className?: string
}

/**
 * The project's screenshot, or a typographic cover (monogram on a tinted
 * panel) when there isn't one yet. `data-cover` hooks into useScrubCover.
 */
export function ProjectCover({
  project,
  alt = "",
  priority = false,
  className = "",
}: ProjectCoverProps) {
  return (
    <div
      data-cover
      className={`@container relative overflow-hidden rounded-lg bg-surface ${className}`.trim()}
      style={{ "--tint": project.tint } as CSSProperties}
    >
      <div data-cover-media className="absolute inset-0">
        <div className="absolute inset-0 transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.04]">
          {project.image ? (
            <img
              src={project.image}
              alt={alt}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              onLoad={() => ScrollTrigger.refresh()}
              className="size-full object-cover object-top"
            />
          ) : (
            <TypeCover project={project} />
          )}
        </div>
      </div>
    </div>
  )
}

function TypeCover({ project }: { project: Project }) {
  return (
    <div aria-hidden="true" className="cover-art absolute inset-0 flex flex-col justify-between p-5 md:p-8">
      <div className="flex items-start justify-between font-mono text-[11px] tracking-[0.08em] text-primary-text/70 uppercase md:text-[12px]">
        <span>{project.kind}</span>
        <span>{project.year}</span>
      </div>
      <div className="flex items-end justify-between gap-6">
        <span className="text-[34cqw] leading-[0.78] font-semibold tracking-[-0.07em] text-primary-text/90">
          {project.monogram}
        </span>
        <ul className="hidden shrink-0 pb-2 text-right font-mono text-[11px] leading-[1.9] tracking-[0.06em] text-primary-text/70 uppercase sm:block md:text-[12px]">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
