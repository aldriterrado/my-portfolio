import { useEffect, useRef, useState } from "react"
import { CheckIcon, CopyIcon, MailIcon } from "lucide-react"
import { site } from "../../data/site"
import { Container } from "../layout/Container"
import { Section } from "../layout/Section"
import { Reveal } from "../ui/Reveal"
import { SectionLabel } from "../ui/SectionLabel"

const handle = (url: string) => url.replace(/\/+$/, "").split("/").pop() ?? url

const channels = [
  {
    label: "LinkedIn",
    value: `in/${handle(site.linkedin)}`,
    href: site.linkedin,
    external: true,
    arrow: "↗",
    motion: "group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
  },
  {
    label: "GitHub",
    value: `@${handle(site.github)}`,
    href: site.github,
    external: true,
    arrow: "↗",
    motion: "group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
  },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s+/g, "")}`,
    external: false,
    arrow: "→",
    motion: "group-hover:translate-x-0.5",
  },
  {
    label: "Resume",
    value: "PDF",
    href: site.resume,
    external: false,
    arrow: "↓",
    motion: "group-hover:translate-y-0.5",
  },
]

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
    <Section id="contact">
      <Container>
        <Reveal>
          <SectionLabel>Contact</SectionLabel>

          <div className="card-surface rounded-[24px] border border-line bg-surface p-7 md:p-10 lg:p-12">
            <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,15rem)] md:gap-10">
              <div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-base/60 px-2.5 py-1 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-accent shadow-[0_0_0_3px] shadow-accent/15"
                  />
                  {site.contact.status}
                </span>

                <h2 className="mt-6 max-w-xl text-[clamp(1.9rem,3.6vw,2.75rem)] leading-[1.12] font-semibold tracking-[-0.035em] text-primary-text">
                  {site.contact.headline}
                </h2>
                <p className="mt-4 max-w-md text-[16px] leading-[1.6] text-secondary-text">
                  {site.contact.body}
                </p>

                <div className="mt-8 inline-flex max-w-full items-stretch overflow-hidden rounded-[14px] border border-line bg-base/60">
                  <a
                    href={`mailto:${site.email}`}
                    className="group flex min-w-0 items-center gap-2.5 px-4 py-3 transition-colors duration-200 hover:bg-surface-hover"
                  >
                    <MailIcon
                      size={15}
                      aria-hidden="true"
                      className="shrink-0 text-muted transition-colors duration-200 group-hover:text-primary-text"
                    />
                    <span className="truncate font-mono text-[13px] text-primary-text sm:text-[14px]">
                      {site.email}
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="flex shrink-0 items-center gap-2 border-l border-line px-3.5 text-muted transition-colors duration-200 hover:bg-surface-hover hover:text-primary-text"
                  >
                    {copied ? (
                      <CheckIcon
                        size={15}
                        aria-hidden="true"
                        className="text-primary-text"
                      />
                    ) : (
                      <CopyIcon size={15} aria-hidden="true" />
                    )}
                  </button>
                </div>
                <p
                  aria-live="polite"
                  className="mt-2.5 font-mono text-[11px] tracking-[0.1em] text-muted uppercase"
                >
                  {copied ? "Copied to clipboard" : "\u00a0"}
                </p>
              </div>

              <dl className="flex h-full flex-col md:border-l md:border-hairline md:pl-10">
                {channels.map((channel) => (
                  <div
                    key={channel.label}
                    className="border-b border-hairline last:border-0 md:flex-1"
                  >
                    <a
                      href={channel.href}
                      {...(channel.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex h-full items-center justify-between gap-6 py-3.5"
                    >
                      <dt className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
                        {channel.label}
                      </dt>
                      <dd className="flex items-baseline gap-1.5 text-[14px] text-secondary-text transition-colors duration-200 group-hover:text-primary-text">
                        <span className="truncate">{channel.value}</span>
                        <span
                          aria-hidden="true"
                          className={`text-[12px] transition-transform duration-200 ${channel.motion}`}
                        >
                          {channel.arrow}
                        </span>
                      </dd>
                    </a>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-hairline pt-6">
              <p className="font-mono text-[12px] text-muted">
                {site.location} · GMT+8
              </p>
              <p className="font-mono text-[12px] text-muted">
                {site.contact.note}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
