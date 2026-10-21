export const REDUCED_MOTION = "(prefers-reduced-motion: reduce)"
export const MOTION_OK = "(prefers-reduced-motion: no-preference)"

export function prefersReducedMotion() {
  return window.matchMedia(REDUCED_MOTION).matches
}

export function scrollToId(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" })
}

export function padIndex(index: number) {
  return String(index).padStart(2, "0")
}
