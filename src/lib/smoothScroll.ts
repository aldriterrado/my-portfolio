import Lenis from "lenis"
import { useEffect } from "react"
import { gsap } from "./gsap"
import { MOTION_OK, prefersReducedMotion } from "./motion"
import { ScrollTrigger } from "./scrollTrigger"

let lenis: Lenis | null = null

/**
 * Smooth scrolling for visitors who allow motion. Lenis is driven by the GSAP
 * ticker so ScrollTrigger and the scroll position never disagree. Mount once.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const media = window.matchMedia(MOTION_OK)

    const start = () => {
      if (lenis) return
      const instance = new Lenis({ lerp: 0.1, wheelMultiplier: 1 })
      instance.on("scroll", ScrollTrigger.update)
      lenis = instance
    }

    const stop = () => {
      lenis?.destroy()
      lenis = null
    }

    const tick = (time: number) => lenis?.raf(time * 1000)
    const onChange = () => (media.matches ? start() : stop())

    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    onChange()
    media.addEventListener("change", onChange)

    return () => {
      media.removeEventListener("change", onChange)
      gsap.ticker.remove(tick)
      stop()
    }
  }, [])
}

/** Pause scrolling, e.g. while the mobile menu is open. */
export function setScrollLocked(locked: boolean) {
  if (!lenis) return
  if (locked) lenis.stop()
  else lenis.start()
}

export function scrollToId(id: string, immediate = false) {
  const target = document.getElementById(id)
  if (!target) return

  if (lenis) {
    // The page may have just changed; measure it again before scrolling.
    lenis.resize()
    lenis.scrollTo(target, { immediate, duration: 1.4 })
    return
  }
  target.scrollIntoView({
    behavior: immediate || prefersReducedMotion() ? "auto" : "smooth",
  })
}

export function scrollToTop(immediate = false) {
  if (lenis) {
    lenis.resize()
    lenis.scrollTo(0, { immediate, duration: 1.4 })
    return
  }
  window.scrollTo({
    top: 0,
    behavior: immediate || prefersReducedMotion() ? "instant" : "smooth",
  })
}
