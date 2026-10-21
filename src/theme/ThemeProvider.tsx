import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { ThemeContext, type Theme, type ThemeContextValue } from "./context"

const STORAGE_KEY = "portfolio-theme"
const DEFAULT_THEME: Theme = "light"
const ANIM_DURATION = 220

function readStored(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === "light" || value === "dark" ? value : null
  } catch {
    return null
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(
    () => readStored() ?? DEFAULT_THEME,
  )
  const animTimeout = useRef<number | undefined>(undefined)

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme

    const meta = document.head.querySelector('meta[name="theme-color"]')
    if (meta) {
      const base = getComputedStyle(root).getPropertyValue("--color-base").trim()
      if (base) meta.setAttribute("content", base)
    }
  }, [theme])

  useEffect(() => {
    return () => {
      if (animTimeout.current !== undefined) {
        window.clearTimeout(animTimeout.current)
      }
    }
  }, [])

  const setTheme = useCallback((next: Theme) => {
    const root = document.documentElement
    root.dataset.themeAnim = ""

    if (animTimeout.current !== undefined) {
      window.clearTimeout(animTimeout.current)
    }
    animTimeout.current = window.setTimeout(() => {
      delete root.dataset.themeAnim
      animTimeout.current = undefined
    }, ANIM_DURATION)

    setThemeState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage can be unavailable (private mode, blocked cookies); the theme
      // still applies for this session.
    }
  }, [])

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
    }),
    [theme, setTheme],
  )

  return <ThemeContext value={value}>{children}</ThemeContext>
}
