import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

// Import gsap from here so the plugin is registered once. Signature moments
// only; small scroll-ins use components/ui/Reveal.
export { gsap, useGSAP }
