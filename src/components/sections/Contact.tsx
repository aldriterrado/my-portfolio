import { useEffect, useRef, useState } from "react"
import { site } from "../../data/site"
import { useSplitReveal } from "../../hooks/useSplitReveal"
import { Container } from "../layout/Container"
import { Section } from "../layout/Section"
import { Button } from "../ui/Button"
import { Icon } from "../ui/Icon"
import { Magnetic } from "../ui/Magnetic"
import { TextLink } from "../ui/TextLink"

const channels = [
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "GitHub", href: site.github, external: true },
  { label: site.phone, href: `tel:${site.phone.replace(/\s+/g, "")}`, external: false },
  { label: "Résumé", href: site.resume, external: false },
]

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)
  const resetRef = useRef<number | null>(null)
  useSplitReveal(ref)

  useEffect(
    () => () => {
      if (resetRef.current) window.clearTimeout(resetRef.current)
    },
    [],
  )

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
    } catch {
      return
    }

    setCopied(true)
    if (resetRef.current) window.clearTimeout(resetRef.current)
    resetRef.current = window.setTimeout(() => setCopied(false), 2000)
  }

  const { headline } = site.contact

  return (
    <Section id="contact" labelledBy="contact-title" className="overflow-hidden">
      <Container>
        <div ref={ref}>
          <p className="eyebrow flex items-center gap-3 border-t border-line pt-5">
            <span className="text-accent-text">(05)</span>
            Contact
          </p>

          <h2
            id="contact-title"
            data-split="lines"
            data-scroll
            className="mt-12 text-[clamp(3.25rem,11vw,11rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-balance text-primary-text md:mt-16"
          >
            {headline.before} <span className="accent-serif font-normal">{headline.accent}</span>{" "}
            {headline.after}
          </h2>

          <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-12 lg:items-end">
            <div data-fade data-scroll className="lg:col-span-7">
              <p className="max-w-[44ch] text-[18px] leading-[1.55] text-secondary-text">
                {site.contact.body}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="text-[clamp(1.35rem,3.2vw,2.75rem)] leading-tight font-medium tracking-[-0.035em] break-all text-primary-text underline decoration-line-strong decoration-2 underline-offset-[0.2em] transition-colors duration-300 hover:text-accent-text hover:decoration-accent"
                >
                  {site.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong px-4 text-[13px] text-secondary-text transition-colors duration-300 hover:border-primary-text hover:text-primary-text"
                >
                  <Icon name={copied ? "check" : "copy"} size={15} />
                  {copied ? "Copied" : "Copy"}
                  <span className="sr-only"> email address</span>
                </button>
                <span aria-live="polite" className="sr-only">
                  {copied ? "Email address copied to clipboard" : ""}
                </span>
              </div>
            </div>

            <div data-fade data-scroll data-delay="0.15" className="flex flex-col gap-8 lg:col-span-5 lg:items-end">
              <Magnetic>
                <Button href={`mailto:${site.email}`} className="min-h-16 pl-8 text-[17px]">
                  {site.contact.cta}
                </Button>
              </Magnetic>
              <p className="eyebrow flex items-center gap-2.5">
                <span aria-hidden="true" className="pulse-dot" />
                {site.contact.availability}
              </p>
              <p className="max-w-[40ch] text-[14px] leading-[1.5] text-muted lg:text-right">
                {site.contact.note}
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] lg:justify-end">
                {channels.map((channel) => (
                  <li key={channel.label}>
                    <TextLink
                      href={channel.href}
                      icon={channel.external ? "arrow-up-right" : undefined}
                      {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                      {channel.label}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
