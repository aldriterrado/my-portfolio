import { useRef } from "react"
import { Link } from "react-router-dom"
import type { Project } from "../../data/projects"
import { useScrubCover } from "../../hooks/useScrubCover"
import { padIndex } from "../../lib/motion"
import { Icon } from "../ui/Icon"
import { ProjectCover } from "../ui/ProjectCover"

type WorkProps = {
  items: Project[]
}

/**
 * Featured projects: the first full width, the rest in an offset two-column
 * grid. Each cover opens from an inset frame as it scrolls in.
 */
export function Work({ items }: WorkProps) {
  const ref = useRef<HTMLOListElement>(null)
  useScrubCover(ref)

  return (
    <ol ref={ref} className="grid gap-x-8 gap-y-20 md:grid-cols-2 md:gap-y-28 lg:gap-x-12">
      {items.map((project, index) => (
        <li
          key={project.slug}
          className={
            index === 0
              ? "md:col-span-2"
              : index % 2 === 0
                ? "md:mt-40"
                : ""
          }
        >
          <WorkItem project={project} index={index} wide={index === 0} />
        </li>
      ))}
    </ol>
  )
}

function WorkItem({ project, index, wide }: { project: Project; index: number; wide: boolean }) {
  return (
    <Link to={`/projects/${project.slug}`} data-cursor="View" className="group block">
      <ProjectCover
        project={project}
        className={wide ? "aspect-[4/3] md:aspect-[2/1]" : "aspect-[4/3] md:aspect-[4/5]"}
      />
      <div className="mt-6 flex items-start justify-between gap-6">
        <div className="min-w-0">
          <p className="eyebrow flex gap-3">
            <span className="text-accent-text">{padIndex(index + 1)}</span>
            <span>
              {project.kind} · {project.year}
            </span>
          </p>
          <h3 className="mt-3 text-[clamp(1.75rem,3.2vw,3rem)] leading-[1] font-medium tracking-[-0.04em] text-primary-text">
            {project.title}
          </h3>
          <p className="mt-3 max-w-[52ch] text-[16px] leading-[1.55] text-secondary-text">
            {project.summary}
          </p>
        </div>
        <span className="mt-1 grid size-12 shrink-0 place-items-center rounded-full border border-line-strong text-primary-text transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
          <Icon
            name="arrow-up-right"
            size={18}
            className="transition-transform duration-500 ease-out-expo group-hover:rotate-45"
          />
        </span>
      </div>
    </Link>
  )
}
