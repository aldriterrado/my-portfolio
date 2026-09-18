import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "../../theme/context"

type ThemeToggleProps = {
  className?: string
  showLabel?: boolean
}

export function ThemeToggle({
  className = "",
  showLabel = false,
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"
  const label = isDark ? "Switch to light mode" : "Switch to dark mode"
  const tone = showLabel
    ? "text-primary-text"
    : "text-secondary-text hover:text-primary-text"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={showLabel ? undefined : label}
      aria-pressed={isDark}
      title={label}
      className={`inline-flex items-center gap-3 transition-colors duration-200 ${tone} ${className}`.trim()}
    >
      {isDark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
      {showLabel ? <span>{isDark ? "Light mode" : "Dark mode"}</span> : null}
    </button>
  )
}
