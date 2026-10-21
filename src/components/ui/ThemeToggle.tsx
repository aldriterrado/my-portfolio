import { useTheme } from "../../theme/context"
import { Icon } from "./Icon"

type ThemeToggleProps = {
  className?: string
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const next = theme === "dark" ? "light" : "dark"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className={`grid size-11 place-items-center rounded-full border border-line text-secondary-text transition-colors duration-300 hover:border-primary-text hover:text-primary-text ${className}`.trim()}
    >
      <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
    </button>
  )
}
