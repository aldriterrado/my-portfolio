import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP, SplitText)

// Import gsap from here so plugins are registered once. Signature moments
// only; small scroll-ins use components/ui/Reveal.
export { gsap, SplitText, useGSAP }
