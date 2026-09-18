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
    <article className="relative overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,background-color] duration-300 group-hover:border-line-strong group-hover:bg-surface-hover">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] bg-primary-text"
      />

      <div className="p-5 pt-6">
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
            {project.kind}
          </p>
          <p className="font-mono text-[11px] tabular-nums text-muted">
            {project.year}
          </p>
        </div>

        <div className="mt-5 flex items-start gap-3.5">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-line bg-base font-mono text-[12px] font-semibold tracking-[0.06em] text-primary-text">
            {project.monogram}
          </div>
          <div className="min-w-0">
            <h3 className="text-[18px] leading-[1.2] font-semibold tracking-[-0.03em] text-primary-text md:text-[20px]">
              {project.title}
            </h3>
            <p className="mt-1 text-[13px] leading-[1.45] text-secondary-text">
              {project.subtitle}
            </p>
          </div>
        </div>

        <p className="mt-4 line-clamp-2 text-[13px] leading-[1.55] text-secondary-text">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {chips.map((item) => (
            <span
              key={item}
              className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-secondary-text"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-line pt-3">
          <span
            className={`text-[13px] transition-colors duration-300 ${
              active
                ? "text-primary-text group-hover:text-accent"
                : "text-secondary-text group-hover:text-primary-text"
            }`}
          >
            View case study <span aria-hidden="true">→</span>
          </span>
          <span className="font-mono text-[11px] text-muted tabular-nums">
            {padIndex(index + 1)} / {padIndex(total)}
          </span>
        </div>
      </div>
    </article>
  )
}
