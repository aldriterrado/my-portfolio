import { lazy, Suspense } from "react"
import { Navigate, Route, Routes, useParams } from "react-router-dom"
import { Footer } from "./components/layout/Footer"
import { Header } from "./components/layout/Header"
import { RouteWipe } from "./components/layout/RouteWipe"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"

// Case studies carry ScrollTrigger; loading them lazily keeps it off the home page.
const CaseStudy = lazy(() =>
  import("./pages/CaseStudy").then((module) => ({ default: module.CaseStudy })),
)

function LegacyWorkRedirect() {
  const { slug } = useParams<{ slug: string }>()
  return <Navigate to={slug ? `/projects/${slug}` : "/projects"} replace />
}

const App = () => {
  return (
    <div className="relative min-h-screen bg-base text-primary-text">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 hidden lg:block"
      >
        <div className="container-page h-full">
          <div className="-mx-px h-full border-x border-hairline" />
        </div>
      </div>
      <Header />
      <main className="relative">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<CaseStudy />} />
            <Route path="/work/:slug" element={<LegacyWorkRedirect />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <RouteWipe />
    </div>
  )
}

export default App
