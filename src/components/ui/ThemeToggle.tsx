import { useTheme } from "../../theme/context"

type ThemeToggleProps = {
  className?: string
}

const options = [
  { value: "light", label: "Paper", description: "Light theme" },
  { value: "dark", label: "Carbon", description: "Dark theme" },
] as const

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  return (
    <div
      role="group"
      aria-label="Theme"
      className={`inline-flex border border-line font-mono text-[11px] tracking-[0.06em] uppercase ${className}`.trim()}
    >
      {options.map((option) => {
        const active = theme === option.value
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            title={option.description}
            onClick={() => setTheme(option.value)}
            className={`px-2.5 py-1.5 transition-colors duration-200 ${
              active
                ? "bg-primary-text text-surface"
                : "text-muted hover:text-primary-text"
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
