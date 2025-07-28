import  { useEffect, useState, useRef } from 'react'
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  ArrowDownIcon,
  ChevronRightIcon,
  CodeIcon,
  MonitorIcon,
  ServerIcon,
} from 'lucide-react'
import Aldri from '../assets/photo/hero/Aldri.jpg'
export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })
  const heroRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen pt-24 flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0bg-gray-900">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black"></div>
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxNDE4MjEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0iIzE1MTkyMyIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
        {/* Animated blobs */}
        <div
          className="absolute opacity-20 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(56,189,248,0.8) 0%, rgba(59,130,246,0.4) 25%, rgba(139,92,246,0.3) 50%, rgba(0,0,0,0) 70%)',
            top: `calc(50% - 400px + ${mousePosition.y * -30}px)`,
            left: `calc(50% - 400px + ${mousePosition.x * -30}px)`,
            transition: 'transform 0.2s ease-out',
            transform: 'translate3d(0, 0, 0)',
          }}
        ></div>
        <div
          className="absolute opacity-10 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(139,92,246,0.8) 0%, rgba(91,33,182,0.4) 25%, rgba(147,51,234,0.3) 50%, rgba(0,0,0,0) 70%)',
            bottom: `calc(30% - 300px + ${mousePosition.y * 20}px)`,
            right: `calc(30% - 300px + ${mousePosition.x * 20}px)`,
            transition: 'transform 0.3s ease-out',
            transform: 'translate3d(0, 0, 0)',
          }}
        ></div>
        {/* Particle effect elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({
            length: 20,
          }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-500 dark:bg-white opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.2)',
                animation: `float ${3 + Math.random() * 8}s linear infinite`,
              }}
            ></div>
          ))}
        </div>
        {/* Code-like lines */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({
            length: 10,
          }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
              style={{
                top: `${10 + i * 10}%`,
                left: 0,
                right: 0,
                transform: `translateY(${mousePosition.y * 10}px)`,
                opacity: 0.1 + (i % 3) * 0.1,
              }}
            ></div>
          ))}
        </div>
      </div>
      {/* Main content */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left max-w-6xl mx-auto">
          <div className="flex-1">
            {/* Status badge */}
                          <div
                className={`inline-flex items-center px-4 py-1.5 rounded-full backdrop-blur-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: '100ms',
              }}
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for freelance work
            </div>
            {/* Main heading */}
            <h1
              className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: '200ms',
              }}
            >
              <span className="relative">
                <span className="absolute -inset-1 rounded-lg blur-xl bg-gradient-to-r from-blue-600/20 to-violet-600/20"></span>
                <span className="relative bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
                  Aldri Terrado
                </span>
              </span>
            </h1>
            {/* Animated text reveal */}
            <div
              className={`relative overflow-hidden h-16 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{
                transitionDelay: '300ms',
              }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 absolute inset-0 flex items-center md:justify-start justify-center animate-slideUp1">
                IT Professional
              </h2>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 absolute inset-0 flex items-center md:justify-start justify-center animate-slideUp2">
                Web Developer
              </h2>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 absolute inset-0 flex items-center md:justify-start justify-center animate-slideUp3">
                UX Designer
              </h2>
            </div>
            {/* Description */}
            <p
              className={`text-gray-300 text-lg mb-10 max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: '400ms',
              }}
            >
              I create exceptional digital experiences with clean code and
              modern design. Specialized in building responsive web applications
              with cutting-edge technologies.
            </p>
            {/* Tech icons */}
            <div
              className={`flex justify-center md:justify-start gap-8 mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: '500ms',
              }}
            >
              {[
                {
                  icon: <CodeIcon size={24} />,
                  label: 'Frontend',
                },
                {
                  icon: <ServerIcon size={24} />,
                  label: 'Backend',
                },
                {
                  icon: <MonitorIcon size={24} />,
                  label: 'UI/UX',
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-lg group hover:border-blue-500/50 transition-all duration-300">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            {/* CTA buttons */}
            <div
              className={`flex flex-wrap justify-center md:justify-start gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: '600ms',
              }}
            >
              <button
                onClick={scrollToAbout}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-violet-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center">
                  Explore My Work
                  <ChevronRightIcon
                    size={18}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </button>
              <a
                href="#contact"
                className="relative overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 hover:border-blue-400/30 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300"
              >
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500/10 to-violet-500/10 group-hover:w-full transition-all duration-300"></span>
                <span className="relative">Contact Me</span>
              </a>
            </div>
            {/* Social links */}
            <div
              className={`flex gap-6 mt-12 justify-center md:justify-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: '700ms',
              }}
            >
              {[
                {
                  icon: <GithubIcon size={22} />,
                  url: 'https://github.com',
                },
                {
                  icon: <LinkedinIcon size={22} />,
                  url: 'https://linkedin.com',
                },
                {
                  icon: <TwitterIcon size={22} />,
                  url: 'https://twitter.com',
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white p-3 rounded-full bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/5"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Photo section - redesigned to be more prominent */}
          <div
            className={`relative mt-16 md:mt-0 md:ml-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              transitionDelay: '350ms',
            }}
          >
            <div className="hidden lg:block md:w-[320px] md:h-[400px] lg:w-[380px] lg:h-[480px] relative rounded-2xl overflow-hidden">
              {/* Decorative frame */}
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/30 z-10"></div>
              {/* Glowing corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 z-10">
                <div className="absolute top-0 left-0 w-px h-16 bg-gradient-to-b from-blue-500/80 to-transparent"></div>
                <div className="absolute top-0 left-0 h-px w-16 bg-gradient-to-r from-blue-500/80 to-transparent"></div>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 z-10">
                <div className="absolute top-0 right-0 w-px h-16 bg-gradient-to-b from-blue-500/80 to-transparent"></div>
                <div className="absolute top-0 right-0 h-px w-16 bg-gradient-to-l from-blue-500/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16 z-10">
                <div className="absolute bottom-0 left-0 w-px h-16 bg-gradient-to-t from-blue-500/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 h-px w-16 bg-gradient-to-r from-blue-500/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 z-10">
                <div className="absolute bottom-0 right-0 w-px h-16 bg-gradient-to-t from-blue-500/80 to-transparent"></div>
                <div className="absolute bottom-0 right-0 h-px w-16 bg-gradient-to-l from-blue-500/80 to-transparent"></div>
              </div>
              {/* Photo container */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm">
                {/* The actual photo - without fading effects */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      `url(${Aldri})`,
                    transform: `scale(1.05) translate3d(${mousePosition.x * -15}px, ${mousePosition.y * -15}px, 0px)`,
                    transition: 'transform 0.3s ease-out',
                  }}
                ></div>
                {/* Subtle tech overlay pattern */}
                <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC4yIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIiAvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIgNCIgLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iMiA4IiAvPjwvZz48L3N2Zz4=')]"></div>
              </div>
              {/* Tech frame elements */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-blue-400/40 rounded-tl-lg z-20"></div>
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-blue-400/40 rounded-tr-lg z-20"></div>
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-blue-400/40 rounded-bl-lg z-20"></div>
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-blue-400/40 rounded-br-lg z-20"></div>
              {/* Interactive glow effects */}
              <div
                className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 z-10 opacity-70"
                style={{
                  transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
                  transition: 'transform 0.3s ease-out',
                }}
              ></div>
              {/* Accent light */}
              <div
                className="absolute w-40 h-40 rounded-full blur-2xl bg-blue-500/20 z-0"
                style={{
                  top: `calc(20% + ${mousePosition.y * 15}px)`,
                  left: `calc(20% + ${mousePosition.x * 15}px)`,
                  transition: 'transform 0.3s ease-out',
                }}
              ></div>
            </div>
            {/* Tech decoration elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-500/20 z-20"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-50">
              <div className="relative w-full h-full">
                {Array.from({
                  length: 16,
                }).map((_, i) => {
                  const row = Math.floor(i / 4)
                  const col = i % 4
                  return (
                    <div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full bg-blue-400"
                      style={{
                        top: `${row * 33.33}%`,
                        left: `${col * 33.33}%`,
                        opacity: 0.4 + Math.random() * 0.6,
                      }}
                    ></div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{
          transitionDelay: '800ms',
        }}
      >
        <button
          onClick={scrollToAbout}
          className="text-gray-400 hover:text-white transition-colors p-4 rounded-full backdrop-blur-sm bg-gray-800/30 border border-gray-700/30 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5"
        >
          <ArrowDownIcon size={20} className="animate-bounce" />
        </button>
      </div>
      {/* Floating 3D-like elements */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -left-20 w-64 h-64 rounded-full bg-violet-500/5 blur-3xl animate-float animation-delay-2000"></div>
      {/* Add these keyframes to your CSS */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(10px);
          }
          50% {
            transform: translateY(15px) translateX(15px);
          }
          75% {
            transform: translateY(5px) translateX(-5px);
          }
        }
        @keyframes slideUp1 {
          0%,
          33.3% {
            transform: translateY(0);
            opacity: 1;
          }
          33.4%,
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        @keyframes slideUp2 {
          0%,
          33.3% {
            transform: translateY(100%);
            opacity: 0;
          }
          33.4%,
          66.6% {
            transform: translateY(0);
            opacity: 1;
          }
          66.7%,
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        @keyframes slideUp3 {
          0%,
          66.6% {
            transform: translateY(100%);
            opacity: 0;
          }
          66.7%,
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-slideUp1 {
          animation: slideUp1 9s infinite;
        }
        .animate-slideUp2 {
          animation: slideUp2 9s infinite;
        }
        .animate-slideUp3 {
          animation: slideUp3 9s infinite;
        }
      `}</style>
    </section>
  )
}
