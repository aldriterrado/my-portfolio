import { useEffect, useState, useRef } from 'react'
import {
  BriefcaseIcon,
  UserIcon,
  CalendarIcon,
  AwardIcon,
} from 'lucide-react'
export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
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
  // Simplified timeline with just position, company and year
  const timeline = [
    {
      year: '2024 - Present',
      position: 'IT Support Engineer | Web Developer',
      company: 'Singapore Engineering & Construction Pte Ltd',
      isActive: true,
      isFuture: false,
    },
    {
      year: '2021 - 2024',
      position: 'Associate Software Engineer',
      company: 'Accenture in the Philippines',
      isActive: false,
      isFuture: false,
    },
    {
      year: '2019 - 2021',
      position: 'IT Staff',
      company: 'City Government of Lipa',
      isActive: false,
      isFuture: false,
    },
  ]
  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-transparent"
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
        {/* Section title */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              transitionDelay: '100ms',
            }}
          >
            <span className="relative">
              <span className="absolute -inset-1 rounded-lg blur-xl bg-gradient-to-r from-blue-600/20 to-violet-600/20"></span>
              <span className="relative bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
                About Me
              </span>
            </span>
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
            style={{
              transitionDelay: '200ms',
            }}
          ></div>
          <p
            className={`text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              transitionDelay: '250ms',
            }}
          >
            Combining IT expertise with web development skills to create
            innovative solutions
          </p>
        </div>
        {/* New layout structure */}
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{
            transitionDelay: '300ms',
          }}
        >
          {/* Content cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* About me card - takes 7/12 of the space */}
            <div className="lg:col-span-7">
              <div className="backdrop-blur-sm bg-gray-800/40 rounded-2xl p-8 border border-gray-700/40 shadow-xl relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl bg-blue-500/10"></div>
                <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full blur-2xl bg-violet-500/10"></div>
                {/* Section title with icon */}
                <div className="flex items-center mb-6 space-x-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-violet-500/20 backdrop-blur-sm">
                    <UserIcon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                    My Background
                  </h3>
                </div>
                {/* Content with cards */}
                <div className="space-y-6">
                  {/* First paragraph */}
                  <div className="group backdrop-blur-sm bg-gray-800/40 rounded-xl p-6 border border-gray-700/40 shadow-lg transform hover:scale-[1.01] transition-all duration-200 relative overflow-hidden">
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <p className="text-gray-300 leading-relaxed relative z-10">
                      Hi! I'm Aldri, an IT Support Engineer with over 5 years of
                      experience in technical support, network administration,
                      and system troubleshooting. Recently, I've expanded my
                      skill set into web development, creating responsive,
                      user-friendly web applications using technologies like
                      React, Node.js, Express, SQL Server, and Tailwind CSS.
                    </p>
                  </div>
                  {/* Second paragraph */}
                  <div className="group backdrop-blur-sm bg-gray-800/40 rounded-xl p-6 border border-gray-700/40 shadow-lg transform hover:scale-[1.01] transition-all duration-200 relative overflow-hidden">
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <p className="text-gray-300 leading-relaxed relative z-10">
                      I'm passionate about leveraging technology to solve
                      real-world problems — whether it's maintaining seamless IT
                      operations or developing custom web tools that enhance
                      productivity and streamline workflows. My dual expertise
                      in IT support and web development allows me to bridge the
                      gap between technical requirements and user-friendly
                      implementations.
                    </p>
                  </div>
                  {/* Quote section */}
                  <div className="my-8 relative">
                    <div className="absolute top-0 left-0 text-gray-700 opacity-20 text-6xl font-serif">
                      "
                    </div>
                    <p className="text-lg italic text-gray-300 pl-8 pr-8 py-4 border-l-4 border-blue-500/50 bg-gray-800/20 rounded-r-lg">
                      I believe in creating technology that empowers users and
                      makes complex tasks simple and intuitive.
                      <span className="absolute bottom-0 right-0 text-gray-700 opacity-20 text-6xl font-serif">
                        "
                      </span>
                    </p>
                  </div>
                  {/* Key qualities */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    {[
                      {
                        title: 'Problem Solver',
                        desc: 'Analytical approach to technical challenges',
                      },
                      {
                        title: 'Detail Oriented',
                        desc: 'Meticulous attention to code quality',
                      },
                      {
                        title: 'User Focused',
                        desc: 'Prioritizing intuitive experiences',
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="backdrop-blur-sm bg-gray-800/30 rounded-xl p-4 border border-gray-700/30 shadow-lg text-center hover:scale-105 transition-transform duration-200"
                      >
                        <h4 className="text-blue-300 font-medium mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-400">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Timeline card - takes 5/12 of the space */}
            <div className="lg:col-span-5">
              <div className="backdrop-blur-smbg-gray-800/40 rounded-2xl p-8 border border-gray-700/50 shadow-xl relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full blur-xl bg-blue-500/10"></div>
                {/* Section title with icon */}
                <div className="flex items-center mb-6 space-x-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-violet-500/20 backdrop-blur-sm">
                    <CalendarIcon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                    Career Journey
                  </h3>
                </div>
                {/* Timeline with connecting line */}
                <div className="relative pl-8 space-y-0 mt-8">
                  {/* Vertical timeline line */}
                  <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500"></div>
                  {/* Timeline items */}
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className={`relative pb-10 last:pb-0 group ${item.isActive ? 'opacity-100' : item.isFuture ? 'opacity-60' : 'opacity-90'}`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-[-29px] mt-1.5">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${item.isActive ? 'border-blue-400 bg-blue-500/30' : item.isFuture ? 'border-violet-400 bg-violet-500/20' : 'border-gray-500 bg-gray-800'} group-hover:scale-110 transition-transform`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${item.isActive ? 'bg-blue-400' : item.isFuture ? 'bg-violet-400' : 'bg-gray-400'}`}
                          ></div>
                        </div>
                      </div>
                      {/* Timeline content */}
                      <div
                        className={`backdrop-blur-sm bg-gray-800/30 rounded-xl p-5 border border-gray-700/30 shadow-lg group-hover:border-blue-500/20 transition-colors ${item.isActive ? 'border-blue-500/30' : item.isFuture ? 'border-violet-500/20' : ''}`}
                      >
                        {/* Year badge */}
                        <div
                          className={`inline-block text-xs font-semibold px-2 py-1 rounded-full mb-3 ${item.isActive ? 'bg-blue-500/30 text-blue-300' : item.isFuture ? 'bg-violet-500/20 text-violet-300' : 'bg-gray-700 text-gray-300'}`}
                        >
                          {item.year}
                        </div>
                        {/* Position & company */}
                        <h4
                          className={`text-base font-medium ${item.isActive ? 'text-white' : 'text-gray-300'}`}
                        >
                          {item.position}
                        </h4>
                        <div className="flex items-center mt-2">
                          <BriefcaseIcon className="w-4 h-4 text-gray-400 mr-2" />
                          <p className="text-sm text-gray-400">
                            {item.company}
                          </p>
                        </div>
                        {/* Active indicator */}
                        {item.isActive && (
                          <div className="absolute top-5 right-5">
                            <span className="flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Future goals */}
                <div className="mt-10 backdrop-blur-sm bg-gray-800/30 rounded-xl p-5 border border-gray-700/30 shadow-lg">
                  <div className="flex items-center mb-3 space-x-2">
                    <AwardIcon className="w-5 h-5 text-violet-400" />
                    <h4 className="text-lg font-medium text-violet-300">
                      Future Goals
                    </h4>
                  </div>
                  <p className="text-sm text-gray-300">
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
    </section>
  )
}
