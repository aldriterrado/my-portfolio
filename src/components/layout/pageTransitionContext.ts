import { createContext, useContext } from "react"

/** Navigate to an in-app path behind the page curtain. */
export type TransitionNavigate = (to: string) => void

export const PageTransitionContext = createContext<TransitionNavigate | null>(null)

export function usePageTransition() {
  const context = useContext(PageTransitionContext)
  if (!context) {
    throw new Error("usePageTransition must be used within a PageTransition")
  }
  return context
}
