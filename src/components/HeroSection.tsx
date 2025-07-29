import { useEffect, useState, useRef } from 'react'
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
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
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

  const techCategories = [
    {
      icon: CodeIcon,
      label: 'Frontend',
      color: 'from-blue-400 to-cyan-500',
      delay: 0,
    },
    {
      icon: ServerIcon,
      label: 'Backend',
      color: 'from-purple-400 to-pink-500',
      delay: 100,
    },
    {
      icon: MonitorIcon,
      label: 'UI/UX',
      color: 'from-orange-400 to-red-500',
      delay: 200,
    },
  ]

  const socialLinks = [
    {
      icon: <GithubIcon size={22} />,
      url: 'https://github.com',
      label: 'GitHub',
      delay: 0,
    },
    {
      icon: <LinkedinIcon size={22} />,
      url: 'https://linkedin.com',
      label: 'LinkedIn',
      delay: 100,
    },
    {
      icon: <TwitterIcon size={22} />,
      url: 'https://twitter.com',
      label: 'Twitter',
      delay: 200,
    },
  ]

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen pt-24 flex items-center justify-center relative overflow-hidden"
    >
      {/* Ultra-modern background */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 bg-gray-900/95"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-500/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-500/20 -rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 border border-cyan-500/20 rotate-90 animate-pulse delay-500"></div>
        
        {/* Animated orbs with mouse tracking */}
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl bg-blue-500/10 animate-pulse transition-all duration-1000"
          style={{
            left: `${mousePosition.x * 0.1}px`,
            top: `${mousePosition.y * 0.1}px`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 rounded-full blur-3xl bg-purple-500/10 animate-pulse delay-1000 transition-all duration-1000"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
          }}
        ></div>
        
        {/* Grid pattern with animation */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxNDE4MjEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0iIzE1MTkyMyIvPjwvZz48L3N2Zz4=')] opacity-5 animate-pulse"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left max-w-6xl mx-auto">
          <div className="flex-1">
            {/* Ultra-modern status badge */}
            <div
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: '100ms',
              }}
            >
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-blue-400 text-sm font-medium tracking-wider">Available for freelance work</span>
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-300"></div>
            </div>

            {/* Ultra-modern main heading */}
            <h1
              className={`text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: '200ms',
              }}
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Aldri <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Terrado</span>
              </span>
            </h1>

            {/* Enhanced animated text reveal */}
            <div
              className={`relative overflow-hidden h-20 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{
                transitionDelay: '300ms',
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-200 absolute inset-0 flex items-center md:justify-start justify-center animate-slideUp1">
                IT Professional
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-200 absolute inset-0 flex items-center md:justify-start justify-center animate-slideUp2">
                Web Developer
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-200 absolute inset-0 flex items-center md:justify-start justify-center animate-slideUp3">
                UX Designer
              </h2>
            </div>

            {/* Enhanced description */}
            <p
              className={`text-gray-400 text-xl mb-12 max-w-3xl leading-relaxed font-light transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: '400ms',
              }}
            >
              I create exceptional digital experiences with clean code and
              modern design. Specialized in building responsive web applications
              with <span className="text-blue-400 font-medium">cutting-edge technologies</span> and 
              <span className="text-purple-400 font-medium"> innovative solutions</span>.
            </p>

            {/* Enhanced tech icons */}
            <div
              className={`flex justify-center md:justify-start gap-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: '500ms',
              }}
            >
              {techCategories.map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center group"
                  onMouseEnter={() => setHoveredItem(`tech${index}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{ animationDelay: `${item.delay}ms` }}
                >
                  <div className="relative w-20 h-20 rounded-3xl flex items-center justify-center mb-3 bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/30 backdrop-blur-xl shadow-xl group-hover:border-blue-500/50 transition-all duration-500 hover:scale-110 overflow-hidden">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 rounded-3xl opacity-0 transition-all duration-500 bg-gradient-to-br ${item.color} group-hover:opacity-20`}></div>
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-3xl transition-all duration-500 blur-xl ${hoveredItem === `tech${index}` ? 'opacity-30 scale-110' : 'opacity-0 group-hover:opacity-10'}`}></div>
                    
                    {/* Icon */}
                    <div className="relative z-10">
                      <div className={`text-blue-400 group-hover:text-white transition-all duration-500 ${hoveredItem === `tech${index}` ? 'scale-125' : 'group-hover:scale-110'}`}>
                        <item.icon size={28} />
                      </div>
                    </div>
                  </div>
                  <span className={`text-sm font-medium transition-all duration-500 ${hoveredItem === `tech${index}` ? 'text-blue-400 scale-110' : 'text-gray-400 group-hover:text-gray-300'}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Enhanced CTA buttons */}
            <div
              className={`flex flex-wrap justify-center md:justify-start gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: '600ms',
              }}
            >
              <button
                onClick={scrollToAbout}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-violet-600 text-white px-10 py-4 rounded-2xl font-bold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 flex items-center hover:scale-105"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-violet-700 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                <span className="relative flex items-center">
                  Explore My Work
                  <ChevronRightIcon
                    size={20}
                    className="ml-2 group-hover:translate-x-2 transition-transform duration-500"
                  />
                </span>
              </button>
              <a
                href="#contact"
                className="group relative overflow-hidden backdrop-blur-xl bg-gray-800/40 border border-gray-700/30 hover:border-blue-400/50 text-white px-10 py-4 rounded-2xl font-bold transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 group-hover:w-full transition-all duration-500"></span>
                <span className="relative">Contact Me</span>
              </a>
            </div>

            {/* Enhanced social links */}
            <div
              className={`flex gap-6 mt-16 justify-center md:justify-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: '700ms',
              }}
            >
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden"
                  onMouseEnter={() => setHoveredItem(`social${index}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{ animationDelay: `${item.delay}ms` }}
                >
                  {/* Background gradient */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 transition-all duration-500 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:opacity-100"></div>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-500 blur-xl ${hoveredItem === `social${index}` ? 'opacity-30 scale-110' : 'opacity-0 group-hover:opacity-10'}`}></div>
                  
                  {/* Icon */}
                  <div className={`relative z-10 transition-all duration-500 ${hoveredItem === `social${index}` ? 'text-white scale-125' : 'text-gray-400 group-hover:text-white group-hover:scale-110'}`}>
                    {item.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced photo section */}
          <div
            className={`relative mt-16 md:mt-0 md:ml-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              transitionDelay: '350ms',
            }}
          >
            <div className="hidden lg:block md:w-[320px] md:h-[400px] lg:w-[380px] lg:h-[480px] relative rounded-3xl overflow-hidden group">
              {/* Ultra-modern frame with enhanced effects */}
              <div className="absolute inset-0 rounded-3xl border-2 border-blue-500/30 z-10 group-hover:border-blue-500/50 transition-all duration-500"></div>
              
              {/* Enhanced glowing corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 z-10">
                <div className="absolute top-0 left-0 w-px h-20 bg-gradient-to-b from-blue-500/80 to-transparent group-hover:from-blue-400 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 h-px w-20 bg-gradient-to-r from-blue-500/80 to-transparent group-hover:from-blue-400 transition-all duration-500"></div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 z-10">
                <div className="absolute top-0 right-0 w-px h-20 bg-gradient-to-b from-purple-500/80 to-transparent group-hover:from-purple-400 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 h-px w-20 bg-gradient-to-l from-purple-500/80 to-transparent group-hover:from-purple-400 transition-all duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-20 h-20 z-10">
                <div className="absolute bottom-0 left-0 w-px h-20 bg-gradient-to-t from-cyan-500/80 to-transparent group-hover:from-cyan-400 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 h-px w-20 bg-gradient-to-r from-cyan-500/80 to-transparent group-hover:from-cyan-400 transition-all duration-500"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-20 h-20 z-10">
                <div className="absolute bottom-0 right-0 w-px h-20 bg-gradient-to-t from-violet-500/80 to-transparent group-hover:from-violet-400 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 h-px w-20 bg-gradient-to-l from-violet-500/80 to-transparent group-hover:from-violet-400 transition-all duration-500"></div>
              </div>

              {/* Enhanced photo container */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl bg-gray-800/50 backdrop-blur-xl">
                {/* The actual photo with enhanced effects */}
                <img
                  src={Aldri}
                  alt="Aldri Terrado"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  style={{
                    transform: `scale(1.05)`,
                  }}
                />
                
                {/* Enhanced tech overlay pattern */}
                <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC4yIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIiAvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIgNCIgLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iMiA4IiAvPjwvZz48L3N2Zz4=')] group-hover:opacity-20 transition-all duration-500"></div>
              </div>

              {/* Enhanced tech frame elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-blue-400/40 rounded-tl-lg z-20 group-hover:border-blue-400/60 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-400/40 rounded-tr-lg z-20 group-hover:border-purple-400/60 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/40 rounded-bl-lg z-20 group-hover:border-cyan-400/60 transition-all duration-500"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-violet-400/40 rounded-br-lg z-20 group-hover:border-violet-400/60 transition-all duration-500"></div>

              {/* Enhanced interactive glow effects */}
              <div
                className="absolute w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10 z-10 opacity-70 group-hover:opacity-100 transition-all duration-500"
                style={{
                  transform: `translate(${mousePosition.x * -5}px, ${mousePosition.y * -5}px)`,
                }}
              ></div>

              {/* Enhanced accent light */}
              <div
                className="absolute w-48 h-48 rounded-full blur-3xl bg-blue-500/20 z-0 group-hover:bg-blue-500/30 transition-all duration-500"
                style={{
                  top: `calc(20% + ${mousePosition.y * 10}px)`,
                  left: `calc(20% + ${mousePosition.x * 10}px)`,
                }}
              ></div>
            </div>

            {/* Enhanced tech decoration elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-xl border border-blue-500/20 z-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-50">
              <div className="relative w-full h-full">
                {Array.from({ length: 16 }).map((_, i) => {
                  const row = Math.floor(i / 4)
                  const col = i % 4
                  return (
                    <div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-blue-400 animate-pulse"
                      style={{
                        top: `${row * 33.33}%`,
                        left: `${col * 33.33}%`,
                        opacity: 0.4 + Math.random() * 0.6,
                        animationDelay: `${i * 100}ms`,
                      }}
                    ></div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 z-50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{
          transitionDelay: '800ms',
        }}
      >
        <button
          onClick={scrollToAbout}
          className="group relative text-gray-400 hover:text-white transition-all duration-500 p-4 rounded-2xl backdrop-blur-xl bg-gray-800/40 border border-gray-700/30 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-110 cursor-pointer z-50"
        >
          <ArrowDownIcon size={24} className="animate-bounce group-hover:animate-pulse" />
        </button>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute -top-16 -left-16 w-32 h-32 border border-blue-500/10 rotate-45 animate-spin-slow"></div>
      <div className="absolute -bottom-16 -right-16 w-24 h-24 border border-purple-500/10 -rotate-45 animate-spin-slow-reverse"></div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
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
          0%, 33.3% {
            transform: translateY(0);
            opacity: 1;
          }
          33.4%, 100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        
        @keyframes slideUp2 {
          0%, 33.3% {
            transform: translateY(100%);
            opacity: 0;
          }
          33.4%, 66.6% {
            transform: translateY(0);
            opacity: 1;
          }
          66.7%, 100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        
        @keyframes slideUp3 {
          0%, 66.6% {
            transform: translateY(100%);
            opacity: 0;
          }
          66.7%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
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
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  )
}
