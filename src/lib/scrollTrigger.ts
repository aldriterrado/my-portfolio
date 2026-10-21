import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "./gsap"

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({ ignoreMobileResize: true })

if (typeof document !== "undefined" && "fonts" in document) {
  void document.fonts.ready.then(() => ScrollTrigger.refresh())
}

export { ScrollTrigger }
