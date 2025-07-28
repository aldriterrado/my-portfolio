import {
  ExternalLinkIcon,
  GithubIcon,
  AwardIcon,
  BookOpenIcon,
  ArrowRightIcon,
  CodeIcon,
} from 'lucide-react'
import thelinq from '../assets/photo/project/thelinq.png'
import reqtracker from '../assets/photo/project/rftracker.png'
import portfolio from '../assets/photo/project/portfolio.png'
import frontend from '../assets/photo/certificate/frontend.jpg'

export const ProjectsSection = () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: 'The Linq Website',
      description:
        'A responsive web application that serves as a digital directory for a shopping mall. The platform allows users to easily browse stores by category, search for specific brands, and view store details such as location, operating hours, and contact information.',
      image:
        thelinq,
      category: 'Frontend',
      technologies: ['HTML5', 'CSS', 'Javascript', 'Bootstrap'],
      liveLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description:
        'A responsive portfolio website showcasing projects and skills with a modern design.',
      image:
        portfolio,
      category: 'Frontend',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Requistion Tracker',
      description:
        'A web application that tracks the status of requisitions from the start to the end of the process.',
      image:
        reqtracker,
      category: 'Fullstack',
      technologies: ['React', 'Typescript', 'Node JS', 'Tailwind CSS', 'SQL Server', 'Express'],
      liveLink: '#',
      githubLink: '#',
      featured: true,
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
    },
    {
      id: 2,
      title: 'Frontend Development by Meta',
      issuer: 'Coursera',
      date: 'July 2025',
      image:
        frontend,
      credentialLink:
        'https://coursera.org/share/3c8cfef20c5bdb8c764b71d935f8c305',
      featured: true,
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
      className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxNDE4MjEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0iIzE1MTkyMyIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
        {/* Animated blobs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl bg-blue-500/5 opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl bg-violet-500/5 opacity-20 animate-float animation-delay-2000"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="relative">
              <span className="absolute -inset-1 rounded-lg blur-xl bg-gradient-to-r from-blue-600/20 to-violet-600/20"></span>
              <span className="relative bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
                My Work
              </span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of projects and professional certifications
            that showcase my expertise and continuous learning.
          </p>
        </div>
        {/* Projects Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/20 max-w-xs"></div>
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <CodeIcon
                size={18}
                className="text-blue-400"
              />
              <h3 className="text-xl font-semibold text-white">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
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
                className="group relative h-full flex flex-col overflow-hidden rounded-xl bg-gray-900/80 backdrop-blur-sm border border-gray-800 shadow-xl transition-all duration-300 hover:border-blue-500/30 hover:shadow-blue-500/10 hover:translate-y-[-5px]"
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Image container with gradient overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500/20 backdrop-blur-sm text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/30">
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
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-grow overflow-hidden text-ellipsis" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {project.description}
                  </p>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-800/80 text-blue-400 text-xs px-3 py-1 rounded-full backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Links */}
                  <div className="flex justify-between mt-auto pt-4 border-t border-gray-800/50">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors group/link"
                    >
                      <ExternalLinkIcon size={16} />
                      <span className="relative">
                        Live Demo
                        <span className="absolute left-0 right-0 bottom-0 h-px bg-blue-400/50 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left"></span>
                      </span>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors group/link"
                    >
                      <GithubIcon size={16} />
                      <span className="relative">
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
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-500/10 hover:from-blue-500/20 hover:to-blue-500/20 text-blue-400 hover:text-blue-300 px-6 py-3 rounded-lg font-medium border border-blue-500/20 hover:border-blue-500/30 transition-all"
            >
              View All Projects
              <ArrowRightIcon
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
        {/* Certifications Section */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-violet-500/20 max-w-xs"></div>
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
              <AwardIcon
                size={18}
                className="text-violet-400"
              />
              <h3 className="text-xl font-semibold text-white">
                <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
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
                className="group relative h-full flex flex-col overflow-hidden rounded-xl bg-gray-900/80 backdrop-blur-sm border border-gray-800 shadow-xl transition-all duration-300 hover:border-violet-500/30 hover:shadow-violet-500/10 hover:translate-y-[-5px]"
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Image container with gradient overlay */}
                <div className="relative h-48 overflow-hidden">
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
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <AwardIcon
                      size={18}
                      className="text-violet-400"
                    />
                    <span className="text-violet-400 text-sm font-medium">
                      {cert.issuer}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white group-hover:text-violet-300 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Issued: {cert.date}
                  </p>
                  {/* View credential button */}
                  <div className="mt-auto pt-4 border-t border-gray-800/50">
                    <a
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full justify-center relative z-10 cursor-pointer"
                    >
                      <BookOpenIcon size={16} />
                      <span>View Credential</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View All Certifications CTA */}
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/10 to-violet-500/10 hover:from-violet-500/20 hover:to-violet-500/20 text-violet-400 hover:text-violet-300 px-6 py-3 rounded-lg font-medium border border-violet-500/20 hover:border-violet-500/30 transition-all"
            >
              View All Certifications
              <ArrowRightIcon
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
      {/* CSS for animations and utilities */}
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
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
      `}</style>
    </section>
  )
}
