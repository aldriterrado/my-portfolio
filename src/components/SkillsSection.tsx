import { useState } from 'react'
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
  const techStack = [
    {
      name: 'HTML5',
      icon: html,
      color: 'from-orange-400 to-red-500',
    },
    {
      name: 'CSS3',
      icon: css,
      color: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Tailwind CSS',
      icon: tailwindcss,
      color: 'from-cyan-400 to-blue-500',
    },
    {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      name: 'React',
      icon: react,
      color: 'from-blue-400 to-cyan-500',
    },
    {
      name: 'JavaScript',
      icon: javascript,
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: 'from-green-500 to-green-700',
    },
    {
      name: 'SQL Server',
      icon: sql,
      color: 'from-red-500 to-red-700',
    },
    {
      name: 'PostgreSQL',
      icon: postgre,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      name: 'Typescript',
      icon: typescript,
      color: 'from-blue-500 to-indigo-600',
    },
  ]
  // Create a repeated array for the continuous marquee effect
  const fullTechStack = [...techStack, ...techStack, ...techStack]
  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden bg-transparent"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gray-900/95">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxNDE4MjEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0iIzE1MTkyMyIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
        {/* Static gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl bg-blue-500/10 opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl bg-violet-500/10 opacity-20"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="relative">
              <span className="absolute -inset-1 rounded-lg blur-xl bg-gradient-to-r from-blue-600/20 to-violet-600/20"></span>
              <span className="relative bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            These are the technologies I work with to build modern, responsive,
            and scalable applications.
          </p>
        </div>
        {/* Tech stack showcase with improved layout */}
        <div className="relative mt-16">
          {/* Marquee container with enhanced styling */}
          <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm bg-gradient-to-r from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/50 shadow-2xl">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
            {/* Single marquee track - always animating */}
            <div
              className="flex py-12 marquee-track"
              style={{
                minWidth: '300%',
              }}
            >
              {fullTechStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center mx-5"
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div
                    className={`
                      w-32 h-32 rounded-2xl flex items-center justify-center mb-3
                      bg-gray-800/70 border border-gray-700/50
                      shadow-lg transition-all duration-200 overflow-hidden
                      hover:border-blue-500/30 hover:shadow-blue-500/20 hover:scale-105
                      group relative
                      ${hoveredTech === tech.name ? 'scale-105 z-10' : ''}
                    `}
                  >
                    {/* Background gradient effect */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${tech.color} rounded-2xl transition-opacity duration-200`}
                    ></div>
                    {/* Icon */}
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-20 h-20 object-contain transition-transform duration-200 group-hover:scale-110 relative z-10"
                    />
                  </div>
                  {/* Tech name with gradient on hover */}
                  <div className="relative">
                    <span
                      className={`text-gray-300 font-medium transition-all duration-200 ${hoveredTech === tech.name ? 'bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent' : ''}`}
                    >
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-blue-500/5 blur-xl"></div>
          <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-violet-500/5 blur-xl"></div>
        </div>
      </div>
      {/* CSS for animations */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .marquee-track {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
