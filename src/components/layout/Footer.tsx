import { site } from "../../data/site"
import { Container } from "./Container"

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[14px] text-secondary-text">
          {site.name}
          <span className="text-muted">
            {" "}
            · {site.location} · 2026
          </span>
        </p>
        <div className="flex items-center gap-5">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-secondary-text transition-colors duration-200 hover:text-primary-text"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-secondary-text transition-colors duration-200 hover:text-primary-text"
          >
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  )
}
