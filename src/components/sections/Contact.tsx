import { useEffect, useRef, useState, type ReactNode } from "react"
import { site } from "../../data/site"
import { Container } from "../layout/Container"
import { Section } from "../layout/Section"
import { Reveal } from "../ui/Reveal"
import { SpecLabel } from "../ui/SpecLabel"

const handle = (url: string) => url.replace(/\/+$/, "").split("/").pop() ?? url

const channels = [
  {
    label: "LinkedIn",
    value: `in/${handle(site.linkedin)}`,
    href: site.linkedin,
    external: true,
    arrow: "↗",
  },
  {
    label: "GitHub",
    value: `@${handle(site.github)}`,
    href: site.github,
    external: true,
    arrow: "↗",
  },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s+/g, "")}`,
    external: false,
    arrow: "→",
  },
  {
    label: "Résumé",
    value: "PDF",
    href: site.resume,
    external: false,
    arrow: "↓",
  },
]

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1.5 border-b border-line px-6 py-4 last:border-b-0 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-4 md:px-10">
      <dt className="font-mono text-[11px] leading-[1.9] tracking-[0.06em] text-muted uppercase">
        {label}
      </dt>
      <dd className="min-w-0 text-[15px] text-primary-text">{children}</dd>
    </div>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)
  const resetRef = useRef<number | null>(null)

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

  return (
    <Section id="contact" labelledBy="contact-title">
      <Container>
        <SpecLabel n="4" id="contact-title" title="Request for work" meta="RFW-01" />

        <Reveal className="mt-12">
          <div className="ticks border border-primary-text bg-surface">
            <div className="grid lg:grid-cols-12">
              <div className="border-b border-line p-6 md:p-10 lg:col-span-5 lg:border-r lg:border-b-0">
                <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.06em] text-muted uppercase">
                  <span aria-hidden="true" className="size-2 bg-accent" />
                  RFW-01 · Open
                </p>
                <p className="mt-6 text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.08] font-medium tracking-[-0.03em] text-primary-text">
                  {site.contact.headline}
                </p>
                <p className="mt-4 max-w-[42ch] text-[16px] leading-[1.6] text-secondary-text">
                  {site.contact.body}
                </p>
              </div>

              <dl className="lg:col-span-7">
                <Field label="To">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <a
                      href={`mailto:${site.email}`}
                      className="truncate font-mono text-[14px] underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-accent-text hover:decoration-accent"
                    >
                      {site.email}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="min-h-9 border border-line px-3 font-mono text-[11px] tracking-[0.06em] text-secondary-text uppercase transition-colors duration-200 hover:border-primary-text hover:text-primary-text"
                    >
                      {copied ? "Copied" : "Copy"}
                      <span className="sr-only"> email address</span>
                    </button>
                    <span aria-live="polite" className="sr-only">
                      {copied ? "Email address copied to clipboard" : ""}
                    </span>
                  </div>
                </Field>
                <Field label="Re">{site.contact.regarding}</Field>
                <Field label="Channels">
                  <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    {channels.map((channel) => (
                      <li key={channel.label}>
                        <a
                          href={channel.href}
                          {...(channel.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="group inline-flex items-baseline gap-1.5 transition-colors duration-200 hover:text-accent-text"
                        >
                          <span className="font-mono text-[11px] tracking-[0.06em] text-muted uppercase">
                            {channel.label}
                          </span>
                          <span className="underline decoration-line-strong underline-offset-4 group-hover:decoration-accent">
                            {channel.value}
                          </span>
                          <span aria-hidden="true" className="font-mono text-[12px]">
                            {channel.arrow}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </Field>
                <Field label="Availability">{site.contact.availability}</Field>
                <Field label="Location">
                  {site.location} · {site.timezone}
                </Field>
              </dl>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
