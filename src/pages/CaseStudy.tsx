import { useEffect } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { Container } from "../components/layout/Container"
import { Screenshot } from "../components/ui/Screenshot"
import { TextLink } from "../components/ui/TextLink"
import { getAdjacentProjects, getProjectBySlug } from "../data/projects"
import { site } from "../data/site"
import { useSeo } from "../hooks/useSeo"

function padIndex(index: number) {
  return String(index).padStart(2, "0")
}

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  useSeo({
    title: project
      ? `${project.title} — ${site.name}`
      : `Project — ${site.name}`,
    description: project?.caseStudy.summary ?? site.description,
    path: project ? `/projects/${project.slug}` : "/projects",
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [slug])

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const { previous, next } = getAdjacentProjects(project.slug)

  return (
    <article className="pt-24 pb-20 md:pt-28 md:pb-28">
      <Container>
        <p className="mb-8">
          <Link
            to="/projects"
            className="text-[14px] text-secondary-text transition-colors duration-200 hover:text-primary-text"
          >
            ← Projects
          </Link>
        </p>

        <header className="max-w-3xl">
          <p className="mb-4 font-mono text-[13px] text-muted">Case study</p>
          <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.1] font-semibold tracking-[-0.04em] text-primary-text">
            {project.title}
          </h1>
          <p className="mt-4 text-[18px] text-secondary-text">
            {project.subtitle}
          </p>
          <p className="mt-6 text-[17px] leading-[1.6] text-secondary-text">
            {project.caseStudy.summary}
          </p>
        </header>

        <dl className="mt-10 grid gap-5 border-y border-line py-8 text-[13px] sm:grid-cols-3">
          <div>
            <dt className="mb-1 font-mono text-muted uppercase">Role</dt>
            <dd className="leading-relaxed text-secondary-text">{project.role}</dd>
          </div>
          <div>
            <dt className="mb-1 font-mono text-muted uppercase">Platform</dt>
            <dd className="leading-relaxed text-secondary-text">
              {project.platform}
            </dd>
          </div>
          <div>
            <dt className="mb-1 font-mono text-muted uppercase">Stack</dt>
            <dd className="leading-relaxed text-secondary-text">
              {project.stack.join(" / ")}
            </dd>
          </div>
        </dl>

        <figure className="mt-10">
          <Screenshot
            src={project.image}
            alt={
              project.imageCaption ??
              `${project.title} application screenshot`
            }
            hint={project.imageHint}
            priority
          />
          {project.image && project.imageCaption ? (
            <figcaption className="mt-3 font-mono text-[13px] text-muted">
              {project.imageCaption}
            </figcaption>
          ) : null}
        </figure>

        <div className="mt-16 max-w-3xl space-y-14">
          {project.caseStudy.sections.map((section, index) => (
            <section key={section.title}>
              <h2 className="mb-4 text-[20px] font-semibold tracking-[-0.02em] text-primary-text md:text-[24px]">
                <span className="mr-3 font-mono text-[13px] font-medium text-muted">
                  {padIndex(index + 1)} —
                </span>
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[16px] leading-[1.65] text-secondary-text"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <nav
          className="mt-20 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:justify-between"
          aria-label="More projects"
        >
          {previous ? (
            <TextLink to={`/projects/${previous.slug}`}>
              ← {previous.title}
            </TextLink>
          ) : (
            <span />
          )}
          {next ? (
            <TextLink to={`/projects/${next.slug}`}>{next.title} →</TextLink>
          ) : null}
        </nav>
      </Container>
    </article>
  )
}
