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
const DARK_QUERY = "(prefers-color-scheme: dark)"
const ANIM_DURATION = 220

function readStored(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === "light" || value === "dark" ? value : null
  } catch {
    return null
  }
}

function systemTheme(): Theme {
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light"
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [stored, setStored] = useState<Theme | null>(() => readStored())
  const [system, setSystem] = useState<Theme>(() => systemTheme())
  const animTimeout = useRef<number | undefined>(undefined)

  const theme = stored ?? system

  useEffect(() => {
    if (stored) return

    const media = window.matchMedia(DARK_QUERY)
    const onChange = (event: MediaQueryListEvent) =>
      setSystem(event.matches ? "dark" : "light")

    setSystem(media.matches ? "dark" : "light")
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [stored])

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

    setStored(next)
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
      isSystem: stored === null,
      setTheme,
      toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
    }),
    [theme, stored, setTheme],
  )

  return <ThemeContext value={value}>{children}</ThemeContext>
}
