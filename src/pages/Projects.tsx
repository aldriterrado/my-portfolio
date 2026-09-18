import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Container } from "../components/layout/Container"
import { projects } from "../data/projects"
import { site } from "../data/site"
import { useSeo } from "../hooks/useSeo"

function padIndex(index: number) {
  return String(index).padStart(2, "0")
}

export function Projects() {
  useSeo({
    title: `Projects — ${site.name}`,
    description: `Software, internal tools and operational systems built by ${site.name}.`,
    path: "/projects",
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <section className="pt-24 pb-20 md:pt-28 md:pb-28">
      <Container>
        <header className="max-w-3xl">
          <p className="mb-4 font-mono text-[13px] text-muted">Index</p>
          <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.1] font-semibold tracking-[-0.04em] text-primary-text">
            Projects
          </h1>
          <p className="mt-4 max-w-xl text-[17px] leading-[1.6] text-secondary-text">
            Internal platforms and operational tools, from asset management to
            document workflow.
          </p>
        </header>

        <ul className="mt-12 border-t border-line">
          {projects.map((project, index) => (
            <li key={project.slug} className="border-b border-line">
              <Link
                to={`/projects/${project.slug}`}
                className="group grid gap-3 py-8 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-start sm:gap-8"
              >
                <span className="pt-1 font-mono text-[13px] text-muted tabular-nums">
                  {padIndex(index + 1)}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h2 className="text-[20px] font-semibold tracking-[-0.03em] text-secondary-text transition-colors duration-200 group-hover:text-primary-text md:text-[22px]">
                      {project.title}
                    </h2>
                    {project.featured ? (
                      <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[11px] tracking-[0.06em] text-muted uppercase">
                        Featured
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-[15px] text-secondary-text">
                    {project.subtitle}
                  </p>
                  <p className="mt-3 font-mono text-[12px] text-muted">
                    {project.kind} · {project.year}
                  </p>
                  <p className="mt-2 font-mono text-[12px] text-muted">
                    {project.stack.join(" / ")}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="hidden text-[18px] text-muted transition-transform duration-200 group-hover:translate-x-1 sm:block"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
