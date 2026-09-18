import { Navigate, Route, Routes, useParams } from "react-router-dom"
import { Footer } from "./components/layout/Footer"
import { Header } from "./components/layout/Header"
import { CaseStudy } from "./pages/CaseStudy"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"

function LegacyWorkRedirect() {
  const { slug } = useParams<{ slug: string }>()
  return <Navigate to={slug ? `/projects/${slug}` : "/projects"} replace />
}

const App = () => {
  return (
    <div className="min-h-screen bg-base text-primary-text">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<CaseStudy />} />
          <Route path="/work/:slug" element={<LegacyWorkRedirect />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
