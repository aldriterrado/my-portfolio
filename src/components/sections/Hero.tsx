import { useRef } from "react"
import { site } from "../../data/site"
import { useSplitReveal } from "../../hooks/useSplitReveal"
import { scrollToId } from "../../lib/smoothScroll"
import { Container } from "../layout/Container"
import { Icon } from "../ui/Icon"
import { LocalTime } from "../ui/LocalTime"

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  useSplitReveal(ref)
  const { hero } = site

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pt-32 pb-8 md:pb-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[30%] -right-[20%] -z-10 size-[80vw] max-w-[1100px] rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--color-accent)_16%,transparent),transparent)] max-md:-top-[10%] max-md:size-[140vw]"
      />

      <Container>
        <p data-fade data-delay="0.6" className="eyebrow mb-8 flex items-center gap-3 md:mb-12">
          <span aria-hidden="true" className="pulse-dot" />
          <span className="text-primary-text">{hero.availability}</span>
          <span aria-hidden="true" className="max-sm:hidden">—</span>
          <span className="max-sm:hidden">
            {site.role} → software
          </span>
        </p>

        <h1 id="hero-title" aria-label={site.name} className="display-xl">
          <span data-split="chars" className="block">
            {hero.first}
          </span>
          <span data-split="chars" data-delay="0.12" className="block md:pl-[0.75em]">
            {hero.last}
            <span className="text-accent">.</span>
          </span>
        </h1>

        <div className="mt-12 grid gap-10 border-t border-line pt-8 md:mt-16 md:grid-cols-12 md:items-end">
          <p
            data-fade
            data-delay="0.75"
            className="max-w-[34ch] text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.25] tracking-[-0.02em] text-secondary-text md:col-span-7"
          >
            {hero.tagline.before}{" "}
            <span className="accent-serif text-[1.15em] text-primary-text">
              {hero.tagline.accent}
            </span>{" "}
            {hero.tagline.after}
          </p>

          <div
            data-fade
            data-delay="0.9"
            className="flex items-end justify-between gap-6 md:col-span-5"
          >
            <dl className="eyebrow grid gap-1.5">
              <div className="flex gap-3">
                <dt>Based in</dt>
                <dd className="text-primary-text">{site.location}</dd>
              </div>
              <div className="flex gap-3">
                <dt>Local</dt>
                <dd className="text-primary-text">
                  <LocalTime />
                </dd>
              </div>
            </dl>
            <button
              type="button"
              onClick={() => scrollToId("work")}
              aria-label="Scroll to selected work"
              className="group grid size-14 shrink-0 place-items-center rounded-full border border-line-strong text-primary-text transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-on-accent"
            >
              <Icon
                name="arrow-down"
                size={20}
                className="transition-transform duration-500 ease-out-expo group-hover:translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
