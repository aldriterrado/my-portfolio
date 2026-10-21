import { site } from "../../data/site"

type DocHeaderProps = {
  sheet: string
  title: string
  code?: string
}

/** The metadata strip at the top of every page: document id, revision, sheet. */
export function DocHeader({ sheet, title, code }: DocHeaderProps) {
  return (
    <div className="flex items-baseline gap-3 border-b border-line py-3 font-mono text-[11px] tracking-[0.06em] text-muted uppercase">
      <span className="text-primary-text">{code ?? site.doc.id}</span>
      <span className="hidden sm:inline">Rev {site.doc.rev}</span>
      <span className="hidden md:inline">
        {site.location === "Singapore" ? "SG" : site.location} · {site.timezone}
      </span>
      <span aria-hidden="true" className="leader" />
      <span className="shrink-0">
        Sheet {sheet} <span className="text-line-strong">·</span>{" "}
        <span className="text-primary-text">{title}</span>
      </span>
    </div>
  )
}
