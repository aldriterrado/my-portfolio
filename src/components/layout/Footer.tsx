import { site } from "../../data/site"
import { scrollToTop } from "../../lib/smoothScroll"
import { Icon } from "../ui/Icon"
import { LocalTime } from "../ui/LocalTime"
import { TextLink } from "../ui/TextLink"
import { Container } from "./Container"

const links = [
  { label: "GitHub", href: site.github, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "Résumé", href: site.resume, external: false },
  { label: "Email", href: `mailto:${site.email}`, external: false },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <Container>
        <div className="grid gap-10 pt-12 pb-10 md:grid-cols-12 md:pt-16">
          <div className="eyebrow flex flex-col gap-2 md:col-span-4">
            <span>Based in {site.location}</span>
            <LocalTime className="text-primary-text" />
          </div>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px] md:col-span-6">
            {links.map((link) => (
              <li key={link.label}>
                <TextLink
                  href={link.href}
                  icon={link.external ? "arrow-up-right" : undefined}
                  {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {link.label}
                </TextLink>
              </li>
            ))}
          </ul>
          <div className="md:col-span-2 md:justify-self-end">
            <button
              type="button"
              onClick={() => scrollToTop()}
              className="group inline-flex items-center gap-3 text-[15px] text-secondary-text transition-colors duration-300 hover:text-primary-text"
            >
              Back to top
              <span className="grid size-10 place-items-center rounded-full border border-line transition-colors duration-300 group-hover:border-primary-text">
                <Icon name="arrow-up" size={16} />
              </span>
            </button>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="text-[clamp(3.5rem,16.4vw,15.5rem)] leading-[0.8] font-semibold tracking-[-0.065em] whitespace-nowrap text-primary-text select-none"
        >
          {site.name}
          <span className="text-accent">.</span>
        </p>

        <div className="eyebrow flex flex-wrap justify-between gap-4 border-t border-line py-6">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>Designed & built by hand</span>
        </div>
      </Container>
    </footer>
  )
}
