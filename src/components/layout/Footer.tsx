import { site } from "../../data/site"
import { Container } from "./Container"

const links = [
  { label: "GitHub", href: site.github, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "Résumé", href: site.resume, external: false },
  { label: "Email", href: `mailto:${site.email}`, external: false },
]

export function Footer() {
  return (
    <footer className="relative">
      <Container>
        <div className="flex flex-col gap-4 border-t border-primary-text py-6 font-mono text-[11px] tracking-[0.06em] text-muted uppercase md:flex-row md:items-baseline md:gap-6">
          <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-primary-text">End of document</span>
            <span>{site.doc.id}</span>
            <span>Rev {site.doc.rev}</span>
            <span>
              © {new Date().getFullYear()} {site.name}
            </span>
          </p>
          <span aria-hidden="true" className="leader hidden md:block" />
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="transition-colors duration-200 hover:text-accent-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
