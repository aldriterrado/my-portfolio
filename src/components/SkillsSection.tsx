import { useState, useEffect } from 'react'
import html from '../assets/photo/techstack/html.png'
import tailwindcss from '../assets/photo/techstack/tailwindcss.png'
import css from '../assets/photo/techstack/css.png'
import javascript from '../assets/photo/techstack/javascript.png'
import react from '../assets/photo/techstack/react.png'
import sql from '../assets/photo/techstack/sql.png'
import postgre from '../assets/photo/techstack/postgre.png'
import typescript from '../assets/photo/techstack/typescript.png'

export const SkillsSection = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const techStack = [
    {
      name: 'HTML5',
      icon: html,
      color: 'from-orange-400 to-red-500',
      glow: 'shadow-orange-500/40',
      delay: 0,
    },
    {
      name: 'CSS3',
      icon: css,
      color: 'from-blue-400 to-blue-600',
      glow: 'shadow-blue-500/40',
      delay: 100,
    },
    {
      name: 'Tailwind CSS',
      icon: tailwindcss,
      color: 'from-cyan-400 to-blue-500',
      glow: 'shadow-cyan-500/40',
      delay: 200,
    },
    {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      color: 'from-purple-500 to-indigo-600',
      glow: 'shadow-purple-500/40',
      delay: 300,
    },
    {
      name: 'React',
      icon: react,
      color: 'from-blue-400 to-cyan-500',
      glow: 'shadow-blue-500/40',
      delay: 400,
    },
    {
      name: 'JavaScript',
      icon: javascript,
      color: 'from-yellow-400 to-yellow-600',
      glow: 'shadow-yellow-500/40',
      delay: 500,
    },
    {
      name: 'TypeScript',
      icon: typescript,
      color: 'from-blue-500 to-indigo-600',
      glow: 'shadow-blue-500/40',
      delay: 600,
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: 'from-green-500 to-green-700',
      glow: 'shadow-green-500/40',
      delay: 900,
    },
    {
      name: 'Express',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      color: 'from-gray-400 to-gray-600',
      glow: 'shadow-gray-500/40',
      delay: 1000,
    },
    {
      name: 'SQL Server',
      icon: sql,
      color: 'from-red-500 to-red-700',
      glow: 'shadow-red-500/40',
      delay: 1100,
    },
    {
      name: 'PostgreSQL',
      icon: postgre,
      color: 'from-blue-500 to-indigo-600',
      glow: 'shadow-blue-500/40',
      delay: 1200,
    },
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: 'from-orange-500 to-red-600',
      glow: 'shadow-orange-500/40',
      delay: 1400,
    },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="skills"
      className="py-15 relative overflow-hidden bg-transparent"
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
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Ultra-modern header */}
        <div className="text-center mb-15">          
          <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Frameworks <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">& Tools</span>
            </span>

          </h2>
          
          <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed font-light">
          These are the technologies I work with to build modern, responsive, and 
            <span className="text-blue-400 font-medium"> scalable</span> and 
            <span className="text-purple-400 font-medium"> applications</span>.
          </p>
        </div>

        {/* Innovative tech grid */}
        <div className="relative">
          {/* Main grid container */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 max-w-8xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                style={{ animationDelay: `${tech.delay}ms` }}
              >
                {/* Ultra-modern tech card */}
                <div
                  className={`
                    relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40
                    border border-gray-700/30 backdrop-blur-xl transition-all duration-700 ease-out
                    hover:border-gray-600/50 hover:from-gray-800/60 hover:to-gray-900/60
                    ${hoveredTech === tech.name 
                      ? 'scale-110 shadow-2xl shadow-blue-500/30 rotate-1' 
                      : 'hover:scale-105 hover:rotate-1'
                    }
                    animate-fadeInUp
                  `}
                >
                  {/* Animated background gradient */}
                  <div
                    className={`
                      absolute inset-0 rounded-3xl opacity-0 transition-all duration-700
                      bg-gradient-to-br ${tech.color}
                      ${hoveredTech === tech.name ? 'opacity-20 animate-pulse' : 'group-hover:opacity-10'}
                    `}
                  ></div>

                  {/* Glow effect with animation */}
                  <div
                    className={`
                      absolute inset-0 rounded-3xl transition-all duration-700
                      ${tech.glow} blur-2xl
                      ${hoveredTech === tech.name ? 'opacity-50 scale-125 animate-pulse' : 'opacity-0 group-hover:opacity-20'}
                    `}
                  ></div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className={`
                      absolute top-2 left-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 transition-all duration-700
                      ${hoveredTech === tech.name ? 'opacity-100 animate-bounce' : 'group-hover:opacity-50'}
                    `}></div>
                    <div className={`
                      absolute top-4 right-3 w-1 h-1 bg-purple-400 rounded-full opacity-0 transition-all duration-700 delay-200
                      ${hoveredTech === tech.name ? 'opacity-100 animate-bounce delay-200' : 'group-hover:opacity-50'}
                    `}></div>
                    <div className={`
                      absolute bottom-3 left-4 w-1 h-1 bg-cyan-400 rounded-full opacity-0 transition-all duration-700 delay-400
                      ${hoveredTech === tech.name ? 'opacity-100 animate-bounce delay-400' : 'group-hover:opacity-50'}
                    `}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon with advanced effects */}
                    <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center relative">
                      <div className={`
                        absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 transition-all duration-700
                        ${hoveredTech === tech.name ? 'opacity-20 scale-110' : 'group-hover:opacity-10'}
                      `}></div>
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className={`
                          w-14 h-14 object-contain transition-all duration-700 relative z-10
                          ${hoveredTech === tech.name ? 'scale-125 animate-pulse' : 'group-hover:scale-110'}
                        `}
                      />
                    </div>

                    {/* Name with gradient effect */}
                    <h4
                      className={`
                        text-sm font-bold transition-all duration-700 tracking-wide
                        ${hoveredTech === tech.name 
                          ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent scale-110' 
                          : 'text-gray-300 group-hover:text-gray-200'
                        }
                      `}
                    >
                      {tech.name}
                    </h4>
                  </div>

                  {/* Animated border effect */}
                  <div
                    className={`
                      absolute inset-0 rounded-3xl border-2 border-transparent
                      bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30
                      opacity-0 transition-all duration-700
                      ${hoveredTech === tech.name ? 'opacity-100 animate-pulse' : 'group-hover:opacity-50'}
                    `}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating decorative elements */}
          <div className="absolute -top-16 -left-16 w-32 h-32 border border-blue-500/10 rotate-45 animate-spin-slow"></div>
          <div className="absolute -bottom-16 -right-16 w-24 h-24 border border-purple-500/10 -rotate-45 animate-spin-slow-reverse"></div>
        </div>

        {/* Ultra-modern bottom section */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-6 px-10 py-6 rounded-3xl bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700/30 backdrop-blur-xl">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse delay-150"></div>
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse delay-300"></div>
            </div>
            <span className="text-gray-300 font-semibold tracking-wide">
              Continuously evolving with the latest technologies
            </span>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse delay-450"></div>
              <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse delay-600"></div>
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse delay-750"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
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
