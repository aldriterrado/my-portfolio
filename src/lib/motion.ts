export const REDUCED_MOTION = "(prefers-reduced-motion: reduce)"
export const MOTION_OK = "(prefers-reduced-motion: no-preference)"
/** Motion allowed and a precise pointer: cursor followers, magnetic buttons. */
export const POINTER_MOTION_OK = `${MOTION_OK} and (pointer: fine)`

export function prefersReducedMotion() {
  return window.matchMedia(REDUCED_MOTION).matches
}

export function padIndex(index: number) {
  return String(index).padStart(2, "0")
}
