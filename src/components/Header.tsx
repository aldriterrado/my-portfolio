import { useEffect, useState } from 'react'
import { MenuIcon, XIcon, SunIcon, MoonIcon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      })
      setIsMenuOpen(false)
    }
  }
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}
    >
      <div
        className={`mx-auto px-6 md:px-8 max-w-7xl ${isScrolled ? 'bg-gray-900/85 backdrop-blur-md shadow-lg rounded-full md:rounded-full mt-2' : 'bg-transparent'} transition-all duration-300`}
      >
        <div className="flex justify-between items-center py-2 px-2 md:px-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            AT<span className="text-white">Portfolio</span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {['home', 'about', 'skills', 'my work', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white transition-colors capitalize relative group"
              >
                {item}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            ))}
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <SunIcon size={20} className="text-amber-400" />
              ) : (
                <MoonIcon size={20} className="text-blue-600" />
              )}
            </button>
          </nav>
          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <SunIcon size={18} className="text-amber-400" />
              ) : (
                <MoonIcon size={18} className="text-blue-600" />
              )}
            </button>
            <button
              className="text-gray-300 hover:text-white transition-colors p-1"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 mx-4 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transition-all duration-300">
          <nav className="py-3">
            <div className="flex flex-col space-y-1">
              {['home', 'about', 'skills', 'my work', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors capitalize py-3 px-6"
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
