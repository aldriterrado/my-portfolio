import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "./gsap"

// Only the lazily loaded case-study route imports this, which keeps
// ScrollTrigger out of the home page bundle.
gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({ ignoreMobileResize: true })

if (typeof document !== "undefined" && "fonts" in document) {
  void document.fonts.ready.then(() => ScrollTrigger.refresh())
}

export { ScrollTrigger }
