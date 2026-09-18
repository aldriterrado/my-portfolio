import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Container } from "../components/layout/Container"
import { Capabilities } from "../components/sections/Capabilities"
import { Contact } from "../components/sections/Contact"
import { Experience } from "../components/sections/Experience"
import { Hero } from "../components/sections/Hero"
import { site } from "../data/site"
import { useSeo } from "../hooks/useSeo"

export function Home() {
  const { hash } = useLocation()

  useSeo({
    title: `${site.name} — ${site.role}`,
    description: site.description,
    path: "/",
  })

  useEffect(() => {
    if (!hash) return

    const id = hash.slice(1)
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [hash])

  return (
    <>
      <div className="relative isolate min-h-svh">
        <div
          aria-hidden="true"
          className="hero-glow pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[720px]"
        />
        <Container className="grid min-h-svh content-center pt-20 pb-8">
          <Hero />
        </Container>
      </div>
      <Experience />
      <Capabilities />
      <Contact />
    </>
  )
}
