import type { Project } from "../../data/projects"

type ProjectCardProps = {
  project: Project
  index: number
  total: number
  active?: boolean
}

function padIndex(index: number) {
  return String(index).padStart(2, "0")
}

export function ProjectCard({
  project,
  index,
  total,
  active = false,
}: ProjectCardProps) {
  const chips = project.stack.slice(0, 3)

  return (
    <article className="card-surface rounded-[20px] border border-line bg-surface p-5 transition-[border-color,background-color,box-shadow] duration-300 group-hover:border-line-strong group-hover:bg-surface-hover group-hover:shadow-[var(--card-shadow)]">
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-line bg-base font-mono text-[12px] font-semibold tracking-[0.06em] text-primary-text">
          {project.monogram}
        </span>
        <p className="min-w-0 truncate font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
          {project.kind}
        </p>
        <p className="ml-auto font-mono text-[11px] tabular-nums text-muted">
          {project.year}
        </p>
      </div>

      <h3 className="mt-4 text-[18px] leading-[1.2] font-semibold tracking-[-0.03em] text-primary-text md:text-[20px]">
        {project.title}
      </h3>
      <p className="mt-1.5 text-[13px] leading-[1.45] text-secondary-text">
        {project.subtitle}
      </p>

      <p className="mt-3 line-clamp-2 text-[13px] leading-[1.55] text-muted">
        {project.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {chips.map((item) => (
          <span
            key={item}
            className="rounded-full border border-line bg-base/60 px-2.5 py-1 font-mono text-[11px] text-secondary-text"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-hairline pt-3.5">
        <span
          className={`flex items-center gap-1.5 text-[13px] transition-colors duration-300 ${
            active
              ? "text-primary-text group-hover:text-accent"
              : "text-secondary-text group-hover:text-primary-text"
          }`}
        >
          View case study
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
        <span className="font-mono text-[11px] text-muted tabular-nums">
          {padIndex(index + 1)} / {padIndex(total)}
        </span>
      </div>
    </article>
  )
}
