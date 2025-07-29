import { useState, useEffect } from 'react'
import {
  ExternalLinkIcon,
  GithubIcon,
  AwardIcon,
  BookOpenIcon,
  ArrowRightIcon,
  CodeIcon,
  ZapIcon,
  TargetIcon,
} from 'lucide-react'
import thelinq from '../assets/photo/project/thelinq.png'
import reqtracker from '../assets/photo/project/rftracker.png'
import portfolio from '../assets/photo/project/portfolio.png'
import frontend from '../assets/photo/certificate/frontend.jpg'

export const ProjectsSection = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Project data
  const projects = [
    {
      id: 1,
      title: 'The Linq Website',
      description:
        'A responsive web application that serves as a digital directory for a shopping mall. The platform allows users to easily browse stores by category, search for specific brands, and view store details such as location, operating hours, and contact information.',
      image: thelinq,
      category: 'Frontend',
      technologies: ['HTML5', 'CSS', 'Javascript', 'Bootstrap'],
      liveLink: '#',
      githubLink: '#',
      featured: true,
      delay: 0,
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description:
        'A responsive portfolio website showcasing projects and skills with a modern design.',
      image: portfolio,
      category: 'Frontend',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveLink: '#',
      githubLink: '#',
      featured: true,
      delay: 100,
    },
    {
      id: 3,
      title: 'Requistion Tracker',
      description:
        'A web application that tracks the status of requisitions from the start to the end of the process.',
      image: reqtracker,
      category: 'Fullstack',
      technologies: ['React', 'Typescript', 'Node JS', 'Tailwind CSS', 'SQL Server', 'Express'],
      liveLink: '#',
      githubLink: '#',
      featured: true,
      delay: 200,
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description:
        'A weather application displaying forecasts and historical data with interactive charts.',
      image:
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80',
      category: 'frontend',
      technologies: ['React', 'Chart.js', 'OpenWeather API'],
      liveLink: '#',
      githubLink: '#',
      featured: false,
      delay: 300,
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description:
        'An analytics dashboard for tracking social media engagement and growth metrics.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      liveLink: '#',
      githubLink: '#',
      featured: false,
      delay: 400,
    },
    {
      id: 6,
      title: 'Content Management System',
      description:
        'A custom CMS for managing website content with user roles and permissions.',
      image:
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
      liveLink: '#',
      githubLink: '#',
      featured: false,
      delay: 500,
    },
  ]

  // Certification data
  const certifications = [
    {
      id: 1,
      title: 'Programming with Javascript by Meta',
      issuer: 'Coursera',
      date: 'July 2025',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      credentialLink: 'https://coursera.org/share/ae83984ff3f12fab94c8504a143c3a6a',
      featured: true,
      delay: 0,
    },
    {
      id: 2,
      title: 'Frontend Development by Meta',
      issuer: 'Coursera',
      date: 'July 2025',
      image: frontend,
      credentialLink:
        'https://coursera.org/share/3c8cfef20c5bdb8c764b71d935f8c305',
      featured: true,
      delay: 100,
    },
    {
      id: 3,
      title: 'Software Engineering by IBM',
      issuer: 'Coursera',
      date: 'July 2025',
      image:
        'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      credentialLink: 'https://coursera.org/share/677977416c78f6ed4ff0207230554a35',
      featured: true,
      delay: 200,
    },
    {
      id: 4,
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: 'October 2022',
      image:
        'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      credentialLink: '#',
      featured: false,
      delay: 300,
    },
    {
      id: 5,
      title: 'CompTIA Network+',
      issuer: 'CompTIA',
      date: 'July 2022',
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80',
      credentialLink:
        'https://www.comptia.org/certifications/verify/EXAMPLE202',
      featured: false,
      delay: 400,
    },
  ]

  // Get top 3 projects (prioritizing featured ones)
  const topProjects = [...projects]
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return 0
    })
    .slice(0, 3)

  // Get top 3 certifications (prioritizing featured ones)
  const topCertifications = [...certifications]
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return 0
    })
    .slice(0, 3)

  return (
    <section
      id="my work"
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
        <div className="text-center mb-24">      
          <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              My <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Work</span>
            </span>

          </h2>
          
          <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed font-light">
            Explore my portfolio of projects and professional certifications that showcase 
            <span className="text-blue-400 font-medium"> expertise</span> and 
            <span className="text-purple-400 font-medium"> continuous learning</span>.
          </p>
        </div>

        {/* Projects Section */}
        <div className="mb-32">
          <div className="flex items-center justify-center gap-3 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/20 max-w-xs"></div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm">
              <CodeIcon size={20} className="text-blue-400" />
              <h3 className="text-2xl font-bold text-white">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Recent Projects
                </span>
              </h3>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/20 max-w-xs"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topProjects.map((project) => (
              <div
                key={project.id}
                className="group relative h-full flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/30 backdrop-blur-xl shadow-2xl transition-all duration-700 hover:scale-105 hover:rotate-1"
                onMouseEnter={() => setHoveredItem(`project${project.id}`)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ animationDelay: `${project.delay}ms` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 rounded-3xl opacity-0 transition-all duration-700 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 group-hover:opacity-100"></div>
                
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-3xl transition-all duration-700 shadow-blue-500/20 blur-2xl ${hoveredItem === `project${project.id}` ? 'opacity-30 scale-110' : 'opacity-0 group-hover:opacity-10'}`}></div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className={`absolute top-2 left-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 transition-all duration-700 ${hoveredItem === `project${project.id}` ? 'opacity-100 animate-bounce' : 'group-hover:opacity-50'}`}></div>
                  <div className={`absolute top-4 right-3 w-1 h-1 bg-cyan-400 rounded-full opacity-0 transition-all duration-700 delay-200 ${hoveredItem === `project${project.id}` ? 'opacity-100 animate-bounce delay-200' : 'group-hover:opacity-50'}`}></div>
                  <div className={`absolute bottom-3 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 transition-all duration-700 delay-400 ${hoveredItem === `project${project.id}` ? 'opacity-100 animate-bounce delay-400' : 'group-hover:opacity-50'}`}></div>
                </div>

                {/* Image container with gradient overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500/20 backdrop-blur-sm text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/30 font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Featured indicator */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-1 bg-amber-500/20 backdrop-blur-sm text-amber-300 text-xs px-2 py-1 rounded-full border border-amber-500/30">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        <span>Featured</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-8 flex flex-col relative z-10">
                  <h3 className={`text-2xl font-bold mb-4 transition-all duration-700 ${hoveredItem === `project${project.id}` ? 'bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent scale-110' : 'text-white group-hover:text-blue-300'}`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 flex-grow leading-relaxed" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-800/80 text-blue-400 text-xs px-3 py-1 rounded-full backdrop-blur-sm border border-gray-700/50 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex justify-between mt-auto pt-6 border-t border-gray-700/50">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all duration-500 group/link hover:scale-105"
                    >
                      <ExternalLinkIcon size={18} />
                      <span className="relative font-medium">
                        Live Demo
                        <span className="absolute left-0 right-0 bottom-0 h-px bg-blue-400/50 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left"></span>
                      </span>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all duration-500 group/link hover:scale-105"
                    >
                      <GithubIcon size={18} />
                      <span className="relative font-medium">
                        Source Code
                        <span className="absolute left-0 right-0 bottom-0 h-px bg-blue-400/50 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left"></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-16">
            <a
              href="#"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 text-blue-400 hover:text-blue-300 px-8 py-4 rounded-2xl font-bold border border-blue-500/20 hover:border-blue-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <span>View All Projects</span>
              <ArrowRightIcon size={20} className="transition-transform duration-500 group-hover:translate-x-2" />
            </a>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-violet-500/20 max-w-xs"></div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 backdrop-blur-sm">
              <AwardIcon size={20} className="text-violet-400" />
              <h3 className="text-2xl font-bold text-white">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-600 bg-clip-text text-transparent">
                  Recent Certifications
                </span>
              </h3>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-violet-500/20 max-w-xs"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topCertifications.map((cert) => (
              <div
                key={cert.id}
                className="group relative h-full flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/30 backdrop-blur-xl shadow-2xl transition-all duration-700 hover:scale-105 hover:rotate-1"
                onMouseEnter={() => setHoveredItem(`cert${cert.id}`)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ animationDelay: `${cert.delay}ms` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 rounded-3xl opacity-0 transition-all duration-700 bg-gradient-to-br from-violet-500/10 to-purple-500/10 group-hover:opacity-100"></div>
                
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-3xl transition-all duration-700 shadow-violet-500/20 blur-2xl ${hoveredItem === `cert${cert.id}` ? 'opacity-30 scale-110' : 'opacity-0 group-hover:opacity-10'}`}></div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className={`absolute top-2 left-2 w-1 h-1 bg-violet-400 rounded-full opacity-0 transition-all duration-700 ${hoveredItem === `cert${cert.id}` ? 'opacity-100 animate-bounce' : 'group-hover:opacity-50'}`}></div>
                  <div className={`absolute top-4 right-3 w-1 h-1 bg-purple-400 rounded-full opacity-0 transition-all duration-700 delay-200 ${hoveredItem === `cert${cert.id}` ? 'opacity-100 animate-bounce delay-200' : 'group-hover:opacity-50'}`}></div>
                  <div className={`absolute bottom-3 left-4 w-1 h-1 bg-pink-400 rounded-full opacity-0 transition-all duration-700 delay-400 ${hoveredItem === `cert${cert.id}` ? 'opacity-100 animate-bounce delay-400' : 'group-hover:opacity-50'}`}></div>
                </div>

                {/* Image container with gradient overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                  
                  {/* Featured indicator */}
                  {cert.featured && (
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-1 bg-amber-500/20 backdrop-blur-sm text-amber-300 text-xs px-2 py-1 rounded-full border border-amber-500/30">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        <span>Featured</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-8 flex flex-col relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <AwardIcon size={20} className="text-violet-400" />
                    <span className="text-violet-400 text-sm font-bold">
                      {cert.issuer}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-4 transition-all duration-700 ${hoveredItem === `cert${cert.id}` ? 'bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent scale-110' : 'text-white group-hover:text-violet-300'}`}>
                    {cert.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-8 font-medium">
                    Issued: {cert.date}
                  </p>
                  
                  {/* View credential button */}
                  <div className="mt-auto pt-6 border-t border-gray-700/50">
                    <a
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-3 bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-500 w-full justify-center hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20"
                    >
                      <BookOpenIcon size={18} />
                      <span>View Credential</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Certifications CTA */}
          <div className="text-center mt-16">
            <a
              href="#"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-violet-500/10 to-purple-500/10 hover:from-violet-500/20 hover:to-purple-500/20 text-violet-400 hover:text-violet-300 px-8 py-4 rounded-2xl font-bold border border-violet-500/20 hover:border-violet-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20"
            >
              <span>View All Certifications</span>
              <ArrowRightIcon size={20} className="transition-transform duration-500 group-hover:translate-x-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute -top-16 -left-16 w-32 h-32 border border-blue-500/10 rotate-45 animate-spin-slow"></div>
      <div className="absolute -bottom-16 -right-16 w-24 h-24 border border-purple-500/10 -rotate-45 animate-spin-slow-reverse"></div>

      {/* Custom animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
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
