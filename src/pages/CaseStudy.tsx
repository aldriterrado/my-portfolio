import { useRef, useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { Container } from "../components/layout/Container"
import { Icon } from "../components/ui/Icon"
import { ProjectCover } from "../components/ui/ProjectCover"
import { ProjectVideo } from "../components/ui/ProjectVideo"
import { Reveal } from "../components/ui/Reveal"
import { TextLink } from "../components/ui/TextLink"
import {
  getAdjacentProjects,
  getProjectBySlug,
  projects,
  type CaseStudySection,
} from "../data/projects"
import { site } from "../data/site"
import { useScrubCover } from "../hooks/useScrubCover"
import { useSeo } from "../hooks/useSeo"
import { useSplitReveal } from "../hooks/useSplitReveal"
import { useGSAP } from "../lib/gsap"
import { padIndex } from "../lib/motion"
import { ScrollTrigger } from "../lib/scrollTrigger"
import { scrollToId } from "../lib/smoothScroll"
import { getYouTubeId } from "../lib/youtube"

// "Name: description" items become a numbered feature grid.
const FEATURE_PATTERN = /^([^:]{3,40}):\s+(.+)$/

const sectionId = (title: string) =>
  `cs-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="max-w-[64ch] space-y-5">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-[18px] leading-[1.7] text-secondary-text">
          {paragraph}
        </p>
      ))}
    </div>
  )
}

function Features({ items }: { items: string[] }) {
  const parsed = items.map((item) => item.match(FEATURE_PATTERN))

  if (parsed.every(Boolean)) {
    return (
      <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
        {parsed.map((match, index) => (
          <li key={match![1]} className="bg-base p-6 sm:last:odd:col-span-2 md:p-8">
            <span className="eyebrow text-accent-text">{padIndex(index + 1)}</span>
            <h3 className="mt-4 text-[19px] font-medium tracking-[-0.02em] text-primary-text">
              {match![1]}
            </h3>
            <p className="mt-2 text-[15px] leading-[1.6] text-secondary-text">
              {match![2].charAt(0).toUpperCase() + match![2].slice(1)}
            </p>
          </li>
        ))}
      </ol>
    )
  }

  return (
    <ol className="max-w-[64ch] space-y-4">
      {items.map((item, index) => (
        <li key={item} className="flex gap-5 text-[17px] leading-[1.6] text-secondary-text">
          <span className="eyebrow mt-1.5 text-accent-text">{padIndex(index + 1)}</span>
          {item}
        </li>
      ))}
    </ol>
  )
}

function SectionBody({ section }: { section: CaseStudySection }) {
  return section.title === "Key Features" ? (
    <Features items={section.body} />
  ) : (
    <Prose paragraphs={section.body} />
  )
}

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  // Remount per project so every scroll animation is rebuilt for its content.
  return <CaseStudyPage key={slug} slug={slug} />
}

function CaseStudyPage({ slug }: { slug: string | undefined }) {
  const project = slug ? getProjectBySlug(slug) : undefined
  const ref = useRef<HTMLElement>(null)
  const [activeId, setActiveId] = useState<string | null>(null)

  useSeo({
    title: project ? `${project.title} — ${site.name}` : `Project — ${site.name}`,
    description: project?.caseStudy.summary ?? site.description,
    path: project ? `/projects/${project.slug}` : "/projects",
  })

  useSplitReveal(ref)
  useScrubCover(ref)

  // Track which section is in view for the table of contents.
  useGSAP(
    () => {
      ref.current?.querySelectorAll<HTMLElement>("[data-toc-section]").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 45%",
          end: "bottom 45%",
          onToggle: (self) => {
            if (self.isActive) setActiveId(el.id)
          },
        })
      })
    },
    { scope: ref },
  )

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const number = projects.findIndex((item) => item.slug === project.slug) + 1
  const { next } = getAdjacentProjects(project.slug)
  const following = next ?? projects[0]
  const { sections } = project.caseStudy
  const videoId = project.video ? getYouTubeId(project.video) : null

  const specs = [
    { label: "Role", value: project.role },
    { label: "Platform", value: project.platform },
    { label: "Stack", value: project.stack.join(", ") },
    { label: "Year", value: project.year },
  ]

  return (
    <article ref={ref} aria-labelledby="cs-title">
      <header className="pt-32 md:pt-44">
        <Container>
          <div data-fade className="flex flex-wrap items-center justify-between gap-4">
            <TextLink to="/projects" icon="arrow-left" className="text-[15px]">
              All work
            </TextLink>
            <p className="eyebrow">
              <span className="text-accent-text">{padIndex(number)}</span> /{" "}
              {padIndex(projects.length)} · {project.kind}
            </p>
          </div>

          <h1
            id="cs-title"
            data-split="chars"
            className="mt-12 text-[clamp(3.25rem,12vw,12rem)] leading-[0.86] font-semibold tracking-[-0.06em] text-primary-text md:mt-16"
          >
            {project.title}
          </h1>

          <div className="mt-10 grid gap-8 md:mt-14 lg:grid-cols-12">
            <p
              data-fade
              data-delay="0.3"
              className="text-[clamp(1.375rem,2.4vw,2rem)] leading-[1.2] tracking-[-0.025em] text-primary-text lg:col-span-6"
            >
              {project.subtitle}
            </p>
            <p
              data-fade
              data-delay="0.4"
              className="max-w-[52ch] text-[17px] leading-[1.6] text-secondary-text lg:col-span-5 lg:col-start-8"
            >
              {project.caseStudy.summary}
            </p>
          </div>

          <dl
            data-fade
            data-delay="0.5"
            className="mt-14 grid gap-6 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {specs.map((spec) => (
              <div key={spec.label}>
                <dt className="eyebrow">{spec.label}</dt>
                <dd className="mt-2 text-[15px] leading-[1.5] text-primary-text">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </header>

      <Container className="mt-14 md:mt-20">
        {videoId ? (
          <ProjectVideo videoId={videoId} title={project.title} />
        ) : (
          <ProjectCover
            project={project}
            priority
            alt={project.imageCaption ?? `${project.title} interface`}
            className="aspect-[4/3] md:aspect-[16/9]"
          />
        )}
        {(videoId || project.image) && project.imageCaption ? (
          <p className="eyebrow mt-4">{project.imageCaption}</p>
        ) : null}
      </Container>

      <Container className="mt-20 md:mt-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <nav aria-label="Case study sections" className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <p className="eyebrow">Contents</p>
              <ol className="mt-5 space-y-1">
                {sections.map((section, index) => {
                  const id = sectionId(section.title)
                  const active = activeId === id
                  return (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        onClick={(event) => {
                          event.preventDefault()
                          scrollToId(id)
                        }}
                        aria-current={active ? "location" : undefined}
                        className={`group flex items-center gap-3 py-1.5 text-[15px] transition-colors duration-300 ${
                          active ? "text-primary-text" : "text-muted hover:text-primary-text"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`h-px transition-all duration-500 ease-out-expo ${
                            active ? "w-8 bg-accent" : "w-3 bg-line-strong group-hover:w-5"
                          }`}
                        />
                        <span className="font-mono text-[11px]">{padIndex(index + 1)}</span>
                        {section.title}
                      </a>
                    </li>
                  )
                })}
              </ol>
            </div>
          </nav>

          <div className="lg:col-span-8 lg:col-start-5">
            {sections.map((section, index) => (
              <section
                key={section.title}
                id={sectionId(section.title)}
                data-toc-section
                aria-labelledby={`${sectionId(section.title)}-title`}
                className="scroll-mt-28 border-t border-line py-14 first:border-t-0 first:pt-0 md:py-20"
              >
                <Reveal>
                  <p className="eyebrow text-accent-text">{padIndex(index + 1)}</p>
                  <h2
                    id={`${sectionId(section.title)}-title`}
                    className="mt-4 mb-8 text-[clamp(2rem,3.6vw,3rem)] leading-[1] font-medium tracking-[-0.04em] text-primary-text"
                  >
                    {section.title}
                  </h2>
                  <SectionBody section={section} />
                </Reveal>
              </section>
            ))}
          </div>
        </div>
      </Container>

      <Container className="mt-12 mb-24 md:mb-40">
        <Link
          to={`/projects/${following.slug}`}
          data-cursor="Next"
          className="group block border-t border-line pt-8"
        >
          <p className="eyebrow">{next ? "Next project" : "Back to the first project"}</p>
          <div className="mt-6 flex items-end justify-between gap-6">
            <span className="text-[clamp(3rem,10vw,9.5rem)] leading-[0.88] font-semibold tracking-[-0.06em] text-primary-text transition-colors duration-500 group-hover:text-accent-text">
              {following.title}
            </span>
            <span className="mb-2 grid size-14 shrink-0 place-items-center rounded-full border border-line-strong text-primary-text transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent md:size-20">
              <Icon
                name="arrow-right"
                size={24}
                className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1"
              />
            </span>
          </div>
        </Link>
      </Container>
    </article>
  )
}
