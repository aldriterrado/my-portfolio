import { useEffect, useState, createContext, useContext } from 'react'
type Theme = 'dark' | 'light'
interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark')
  
  useEffect(() => {
    // Load theme from localStorage on initial render
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // If no theme is saved, default to dark mode
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    }
  }, [])
  
  useEffect(() => {
    // Update HTML element class when theme changes
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    // Save theme to localStorage
    localStorage.setItem('theme', theme)
  }, [theme])
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }
  
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
} 