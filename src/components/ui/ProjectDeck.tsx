import {
  useCallback,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react"
import { Link } from "react-router-dom"
import type { Project } from "../../data/projects"
import { ProjectCard } from "./ProjectCard"

type ProjectDeckProps = {
  projects: Project[]
}

const SWIPE_THRESHOLD = 48

export function ProjectDeck({ projects }: ProjectDeckProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const pointerStart = useRef<{ x: number; y: number } | null>(null)
  const didSwipe = useRef(false)
  const total = projects.length
  const lastIndex = Math.max(total - 1, 0)

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(Math.max(0, Math.min(lastIndex, index)))
    },
    [lastIndex],
  )

  const onKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault()
      goTo(activeIndex + 1)
    } else if (event.key === "ArrowLeft") {
      event.preventDefault()
      goTo(activeIndex - 1)
    } else if (event.key === "Home") {
      event.preventDefault()
      goTo(0)
    } else if (event.key === "End") {
      event.preventDefault()
      goTo(lastIndex)
    }
  }

  const onPointerDown = (event: PointerEvent<HTMLUListElement>) => {
    pointerStart.current = { x: event.clientX, y: event.clientY }
    didSwipe.current = false
  }

  const onPointerMove = (event: PointerEvent<HTMLUListElement>) => {
    if (!pointerStart.current) return

    const dx = event.clientX - pointerStart.current.x
    const dy = event.clientY - pointerStart.current.y
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      didSwipe.current = true
      if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.setPointerCapture(event.pointerId)
      }
    }
  }

  const onPointerUp = (event: PointerEvent<HTMLUListElement>) => {
    const start = pointerStart.current
    pointerStart.current = null

    if (!start) return

    const dx = event.clientX - start.x
    const dy = event.clientY - start.y

    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      didSwipe.current = true
      goTo(activeIndex + (dx < 0 ? 1 : -1))
    }
  }

  const onActiveClick = (event: { preventDefault: () => void }) => {
    if (didSwipe.current) {
      event.preventDefault()
    }
  }

  if (total === 0) return null

  return (
    <div>
      <ul
        className="relative mx-auto h-[340px] max-w-full touch-pan-y select-none overflow-visible outline-none sm:h-[360px] lg:h-[380px]"
        role="group"
        aria-roledescription="carousel"
        aria-label="Featured projects"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          pointerStart.current = null
        }}
      >
        {projects.map((project, index) => {
          let offset = index - activeIndex
          if (offset > total / 2) offset -= total
          if (offset < -total / 2) offset += total
          const isActive = offset === 0

          return (
            <li
              key={project.slug}
              className={`deck-card absolute inset-x-0 top-0 mx-auto w-[min(100%,360px)] ${
                isActive ? "is-active" : "is-side"
              }`}
              style={{ "--i": offset } as CSSProperties}
            >
              {isActive ? (
                <Link
                  to={`/projects/${project.slug}`}
                  className="deck-card-face group block rounded-[20px]"
                  onClick={onActiveClick}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    total={total}
                    active
                  />
                </Link>
              ) : (
                <button
                  type="button"
                  className="deck-card-face group block w-full rounded-[20px] text-left"
                  aria-label={`Show ${project.title}`}
                  onClick={() => {
                    if (didSwipe.current) return
                    goTo(index)
                  }}
                >
                  <ProjectCard project={project} index={index} total={total} />
                </button>
              )}
            </li>
          )
        })}
      </ul>

      <div className="mt-5 flex items-center justify-center gap-2">
        {projects.map((project, index) => {
          const isActive = index === activeIndex

          return (
            <button
              key={project.slug}
              type="button"
              aria-label={`Show ${project.title}`}
              aria-current={isActive ? "true" : undefined}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 motion-reduce:transition-none ${
                isActive ? "w-6 bg-primary-text" : "w-1.5 bg-line hover:bg-muted"
              }`}
              onClick={() => goTo(index)}
            />
          )
        })}
      </div>
    </div>
  )
}
