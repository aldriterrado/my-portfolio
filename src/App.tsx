import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectSection'
import { ContactSection } from './components/ContactSection'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-gray-900 text-white min-h-screen transition-colors duration-300">
        <Header />
        <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App