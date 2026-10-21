import { lazy, Suspense, useEffect, useRef } from "react"
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom"
import { Footer } from "./components/layout/Footer"
import { Header } from "./components/layout/Header"
import { PageTransition } from "./components/layout/PageTransition"
import { CursorLabel } from "./components/ui/CursorLabel"
import { scrollToTop, useSmoothScroll } from "./lib/smoothScroll"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"

const CaseStudy = lazy(() =>
  import("./pages/CaseStudy").then((module) => ({ default: module.CaseStudy })),
)

function LegacyWorkRedirect() {
  const { slug } = useParams<{ slug: string }>()
  return <Navigate to={slug ? `/projects/${slug}` : "/projects"} replace />
}

/** New pages start at the top; hash links are handled by the page itself. */
function useScrollReset() {
  const { pathname, hash } = useLocation()
  const lastPath = useRef(pathname)

  useEffect(() => {
    if (lastPath.current === pathname) return
    lastPath.current = pathname
    if (!hash) scrollToTop(true)
  }, [pathname, hash])
}

const App = () => {
  useSmoothScroll()
  useScrollReset()

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-base text-primary-text">
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
        <CursorLabel />
        <div aria-hidden="true" className="grain" />
      </div>
    </PageTransition>
  )
}

export default App
