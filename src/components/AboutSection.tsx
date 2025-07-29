import { useEffect, useState, useRef } from 'react'
import {
  BriefcaseIcon,
  UserIcon,
  CalendarIcon,
  AwardIcon,
  CodeIcon,
  ZapIcon,
  TargetIcon,
} from 'lucide-react'

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
      },
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Enhanced timeline with more details
  const timeline = [
    {
      year: '2024 - Present',
      position: 'IT Support Engineer | Web Developer',
      company: 'Singapore Engineering & Construction Pte Ltd',
      isActive: true,
      isFuture: false,
      delay: 0,
      icon: CodeIcon,
    },
    {
      year: '2021 - 2024',
      position: 'Associate Software Engineer',
      company: 'Accenture in the Philippines',
      isActive: false,
      isFuture: false,
      delay: 200,
      icon: BriefcaseIcon,
    },
    {
      year: '2019 - 2021',
      position: 'IT Staff',
      company: 'City Government of Lipa',
      isActive: false,
      isFuture: false,
      delay: 400,
      icon: UserIcon,
    },
  ]

  const qualities = [
    {
      title: 'Problem Solver',
      desc: 'Analytical approach to technical challenges',
      icon: TargetIcon,
      color: 'from-blue-400 to-cyan-500',
      delay: 600,
    },
    {
      title: 'Detail Oriented',
      desc: 'Meticulous attention to code quality',
      icon: CodeIcon,
      color: 'from-purple-400 to-pink-500',
      delay: 700,
    },
    {
      title: 'User Focused',
      desc: 'Prioritizing intuitive experiences',
      icon: ZapIcon,
      color: 'from-orange-400 to-red-500',
      delay: 800,
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
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
              About <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
            </span>
           
          </h2>
          
          <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed font-light">
            From IT support to full-stack development — bridging the gap between 
            <span className="text-blue-400 font-medium"> infrastructure</span> and 
            <span className="text-purple-400 font-medium"> innovation</span>.
          </p>
        </div>

        {/* Main content grid */}
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{
            transitionDelay: '300ms',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* About me card - takes 7/12 of the space */}
            <div className="lg:col-span-7">
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/30 backdrop-blur-xl shadow-2xl overflow-hidden group">
                {/* Animated background gradient */}
                <div className="absolute inset-0 rounded-3xl opacity-0 transition-all duration-700 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:opacity-100"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl transition-all duration-700 shadow-blue-500/20 blur-2xl opacity-0 group-hover:opacity-30"></div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute top-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-0 transition-all duration-700 group-hover:opacity-100 animate-bounce"></div>
                  <div className="absolute top-8 right-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 transition-all duration-700 delay-200 group-hover:opacity-100 animate-bounce delay-200"></div>
                  <div className="absolute bottom-6 left-8 w-1 h-1 bg-cyan-400 rounded-full opacity-0 transition-all duration-700 delay-400 group-hover:opacity-100 animate-bounce delay-400"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Section title with icon */}
                  <div className="flex items-center mb-8 space-x-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500/20 to-violet-500/20 backdrop-blur-sm border border-blue-500/30">
                      <UserIcon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      My Background
                    </h3>
                  </div>

                  {/* Content with enhanced cards */}
                  <div className="space-y-8">
                    {/* First paragraph */}
                    <div 
                      className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/30 backdrop-blur-sm shadow-xl transform hover:scale-[1.02] transition-all duration-500 overflow-hidden"
                      onMouseEnter={() => setHoveredItem('paragraph1')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 shadow-blue-500/20 blur-xl ${hoveredItem === 'paragraph1' ? 'opacity-30 scale-110' : 'opacity-0 group-hover:opacity-10'}`}></div>
                      
                      <p className="text-gray-300 leading-relaxed relative z-10 text-lg">
                        Hi, I'm <span className="text-blue-400 font-semibold">Aldri</span> — IT Support Engineer turned full-stack
                        debugger of chaos. With over 5 years of uptime in tech
                        support, network admin, and system troubleshooting, I've
                        been the go-to patch for crashed systems and lost
                        connections.
                        <br />
                        <br />
                        Recently, I've recompiled my skill set and booted into web development mode — deploying responsive, user-friendly web apps built with <span className="text-purple-400 font-medium">React</span>, <span className="text-cyan-400 font-medium">Node.js</span>, <span className="text-blue-400 font-medium">Express</span>, <span className="text-orange-400 font-medium">SQL Server</span>, and styled with the elegance of <span className="text-teal-400 font-medium">Tailwind CSS</span>.
                      </p>
                    </div>

                    {/* Second paragraph */}
                    <div 
                      className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/30 backdrop-blur-sm shadow-xl transform hover:scale-[1.02] transition-all duration-500 overflow-hidden"
                      onMouseEnter={() => setHoveredItem('paragraph2')}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 shadow-purple-500/20 blur-xl ${hoveredItem === 'paragraph2' ? 'opacity-30 scale-110' : 'opacity-0 group-hover:opacity-10'}`}></div>
                      
                      <p className="text-gray-300 leading-relaxed relative z-10 text-lg">
                        I'm passionate about using tech to debug real-world
                        inefficiencies — whether I'm keeping the IT backbone
                        stable or scripting custom web solutions that optimize
                        workflows. With dual-core processing power in both IT
                        support and web dev, I specialize in translating tech-speak
                        into user-friendly UX — bridging backend logic with
                        front-end joy.
                        <br />
                        <br />
                        Let's connect — no firewall between us.
                      </p>
                    </div>

                    {/* Enhanced quote section */}
                    <div className="my-12 relative group">
                      <div className="absolute top-0 left-0 text-gray-700 opacity-20 text-8xl font-serif group-hover:opacity-30 transition-opacity duration-500">
                        "
                      </div>
                      <div className="relative p-8 border-l-4 border-gradient-to-b from-blue-500 to-purple-500 bg-gradient-to-r from-gray-800/40 to-gray-900/40 rounded-r-2xl backdrop-blur-sm border border-gray-700/30 shadow-xl">
                        <p className="text-xl italic text-gray-300 pl-8 pr-8 leading-relaxed">
                          I believe in creating technology that empowers users and
                          makes complex tasks simple and intuitive.
                        </p>
                        <div className="absolute bottom-0 right-0 text-gray-700 opacity-20 text-8xl font-serif group-hover:opacity-30 transition-opacity duration-500">
                          "
                        </div>
                      </div>
                    </div>

                    {/* Enhanced qualities grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                      {qualities.map((item, i) => (
                        <div
                          key={i}
                          className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/30 backdrop-blur-sm shadow-xl text-center hover:scale-105 transition-all duration-500 overflow-hidden"
                          onMouseEnter={() => setHoveredItem(`quality${i}`)}
                          onMouseLeave={() => setHoveredItem(null)}
                          style={{ animationDelay: `${item.delay}ms` }}
                        >
                          {/* Background gradient */}
                          <div className={`absolute inset-0 rounded-2xl opacity-0 transition-all duration-500 bg-gradient-to-br ${item.color} group-hover:opacity-10`}></div>
                          
                          {/* Glow effect */}
                          <div className={`absolute inset-0 rounded-2xl transition-all duration-500 blur-xl ${hoveredItem === `quality${i}` ? 'opacity-30 scale-110' : 'opacity-0 group-hover:opacity-10'}`}></div>
                          
                          {/* Icon */}
                          <div className="relative z-10 mb-4">
                            <div className={`w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br ${item.color} p-3 flex items-center justify-center`}>
                              <item.icon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          
                          <h4 className={`text-lg font-bold mb-3 transition-all duration-500 ${hoveredItem === `quality${i}` ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent scale-110' : 'text-blue-300'}`}>
                            {item.title}
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline card - takes 5/12 of the space */}
            <div className="lg:col-span-5">
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/30 backdrop-blur-xl shadow-2xl overflow-hidden group">
                {/* Animated background gradient */}
                <div className="absolute inset-0 rounded-3xl opacity-0 transition-all duration-700 bg-gradient-to-br from-purple-500/10 to-blue-500/10 group-hover:opacity-100"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl transition-all duration-700 shadow-purple-500/20 blur-2xl opacity-0 group-hover:opacity-30"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Section title with icon */}
                  <div className="flex items-center mb-8 space-x-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30">
                      <CalendarIcon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Career Journey
                    </h3>
                  </div>

                  {/* Enhanced timeline */}
                  <div className="relative pl-8 space-y-0 mt-8">
                    {/* Vertical timeline line */}
                    <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>
                    
                    {/* Timeline items */}
                    {timeline.map((item, index) => (
                      <div
                        key={index}
                        className={`relative pb-12 last:pb-0 group ${item.isActive ? 'opacity-100' : item.isFuture ? 'opacity-60' : 'opacity-90'}`}
                        style={{ animationDelay: `${item.delay}ms` }}
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-[-29px] mt-1.5">
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${item.isActive ? 'border-blue-400 bg-blue-500/30 shadow-lg shadow-blue-500/30' : item.isFuture ? 'border-purple-400 bg-purple-500/20 shadow-lg shadow-purple-500/30' : 'border-gray-500 bg-gray-800'} group-hover:scale-110`}
                          >
                            <div
                              className={`w-2 h-2 rounded-full transition-all duration-500 ${item.isActive ? 'bg-blue-400 animate-pulse' : item.isFuture ? 'bg-purple-400 animate-pulse' : 'bg-gray-400'}`}
                            ></div>
                          </div>
                        </div>
                        
                        {/* Timeline content */}
                        <div
                          className={`relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/30 backdrop-blur-sm shadow-xl group-hover:border-blue-500/30 transition-all duration-500 hover:scale-105 ${item.isActive ? 'border-blue-500/30 shadow-blue-500/20' : item.isFuture ? 'border-purple-500/20 shadow-purple-500/20' : ''}`}
                        >
                          {/* Background gradient on hover */}
                          <div className={`absolute inset-0 rounded-2xl opacity-0 transition-all duration-500 ${item.isActive ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10' : item.isFuture ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10' : 'bg-gradient-to-br from-gray-500/10 to-gray-600/10'} group-hover:opacity-100`}></div>
                          
                          {/* Content */}
                          <div className="relative z-10">
                            {/* Year badge */}
                            <div
                              className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 transition-all duration-500 ${item.isActive ? 'bg-blue-500/30 text-blue-300 border border-blue-500/30' : item.isFuture ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-gray-700 text-gray-300 border border-gray-600'}`}
                            >
                              {item.year}
                            </div>
                            
                            {/* Position & company */}
                            <h4
                              className={`text-lg font-bold mb-3 transition-all duration-500 ${item.isActive ? 'text-white' : 'text-gray-300'}`}
                            >
                              {item.position}
                            </h4>
                            <div className="flex items-center mt-3">
                              <BriefcaseIcon className="w-4 h-4 text-gray-400 mr-2" />
                              <p className="text-sm text-gray-400">
                                {item.company}
                              </p>
                            </div>
                            
                            {/* Active indicator */}
                            {item.isActive && (
                              <div className="absolute top-6 right-6">
                                <span className="flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced future goals */}
                  <div className="mt-12 relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/30 backdrop-blur-sm shadow-xl group hover:scale-105 transition-all duration-500 overflow-hidden">
                    {/* Background gradient */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 transition-all duration-500 bg-gradient-to-br from-violet-500/10 to-purple-500/10 group-hover:opacity-100"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-4 space-x-3">
                        <AwardIcon className="w-6 h-6 text-violet-400" />
                        <h4 className="text-xl font-bold text-violet-300">
                          Future Goals
                        </h4>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Continuing to expand my expertise in cloud technologies and
                        AI integration for web applications, while pursuing advanced
                        certifications in both IT infrastructure and modern web
                        development frameworks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute -top-16 -left-16 w-32 h-32 border border-blue-500/10 rotate-45 animate-spin-slow"></div>
        <div className="absolute -bottom-16 -right-16 w-24 h-24 border border-purple-500/10 -rotate-45 animate-spin-slow-reverse"></div>
      </div>

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
