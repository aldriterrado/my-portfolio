import { useState, useEffect } from 'react'
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, MessageSquareIcon, ZapIcon } from 'lucide-react'

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  const contactInfo = [
    {
      icon: MailIcon,
      title: 'Email',
      value: 'aldriterrado30@gmail.com',
      color: 'from-blue-400 to-cyan-500',
      delay: 0,
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      value: '+65 8938 8219',
      color: 'from-purple-400 to-pink-500',
      delay: 100,
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      value: 'Tampines, Singapore',
      color: 'from-orange-400 to-red-500',
      delay: 200,
    },
  ]

  const socialLinks = [
    {
      name: 'facebook',
      url: '#',
      delay: 0,
    },
    {
      name: 'twitter',
      url: '#',
      delay: 100,
    },
    {
      name: 'instagram',
      url: '#',
      delay: 200,
    },
    {
      name: 'github',
      url: '#',
      delay: 300,
    },
    {
      name: 'linkedin',
      url: '#',
      delay: 400,
    },
  ]

  return (
    <section
      id="contact"
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
              Get In <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
            </span>
           
          </h2>
          
          <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed font-light">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out and let's create something 
            <span className="text-blue-400 font-medium"> amazing</span> together!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/30 backdrop-blur-xl shadow-2xl transition-all duration-700 hover:scale-105"
                 onMouseEnter={() => setHoveredItem('contactInfo')}
                 onMouseLeave={() => setHoveredItem(null)}>
              
              {/* Animated background gradient */}
              <div className="absolute inset-0 rounded-3xl opacity-0 transition-all duration-700 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 group-hover:opacity-100"></div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-3xl transition-all duration-700 shadow-blue-500/20 blur-2xl ${hoveredItem === 'contactInfo' ? 'opacity-30 scale-110' : 'opacity-0 group-hover:opacity-10'}`}></div>

              {/* Floating particles effect */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className={`absolute top-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-0 transition-all duration-700 ${hoveredItem === 'contactInfo' ? 'opacity-100 animate-bounce' : 'group-hover:opacity-50'}`}></div>
                <div className={`absolute top-8 right-6 w-1 h-1 bg-cyan-400 rounded-full opacity-0 transition-all duration-700 delay-200 ${hoveredItem === 'contactInfo' ? 'opacity-100 animate-bounce delay-200' : 'group-hover:opacity-50'}`}></div>
                <div className={`absolute bottom-6 left-8 w-1 h-1 bg-purple-400 rounded-full opacity-0 transition-all duration-700 delay-400 ${hoveredItem === 'contactInfo' ? 'opacity-100 animate-bounce delay-400' : 'group-hover:opacity-50'}`}></div>
              </div>

              <div className="relative z-10 p-10">
                <div className="flex items-center gap-3 mb-10">
                  <MessageSquareIcon size={28} className="text-blue-400" />
                  <h3 className="text-3xl font-bold text-white">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Contact Information
                    </span>
                  </h3>
                </div>

                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <div 
                      key={index}
                      className="group/item flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/30 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-blue-500/30"
                      onMouseEnter={() => setHoveredItem(`contact${index}`)}
                      onMouseLeave={() => setHoveredItem(null)}
                      style={{ animationDelay: `${item.delay}ms` }}
                    >
                      <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${item.color} transition-all duration-500 group-hover/item:scale-110`}>
                        <div className={`absolute inset-0 rounded-2xl transition-all duration-500 blur-xl ${hoveredItem === `contact${index}` ? 'opacity-30 scale-110' : 'opacity-0 group-hover/item:opacity-10'}`}></div>
                        <item.icon size={24} className="relative z-10 text-white" />
                      </div>
                      <div>
                        <h4 className={`text-xl font-bold mb-2 transition-all duration-500 ${hoveredItem === `contact${index}` ? 'bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent scale-110' : 'text-white group-hover/item:text-blue-300'}`}>
                          {item.title}
                        </h4>
                        <p className="text-gray-400 font-medium">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700/30">
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Connect With Me
                    </span>
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((platform, index) => (
                      <a
                        key={platform.name}
                        href={platform.url}
                        className="group relative p-4 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden"
                        onMouseEnter={() => setHoveredItem(`social${index}`)}
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{ animationDelay: `${platform.delay}ms` }}
                      >
                        {/* Background gradient */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 transition-all duration-500 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:opacity-100"></div>
                        
                        {/* Glow effect */}
                        <div className={`absolute inset-0 rounded-2xl transition-all duration-500 blur-xl ${hoveredItem === `social${index}` ? 'opacity-30 scale-110' : 'opacity-0 group-hover:opacity-10'}`}></div>
                        
                        {/* Icon */}
                        <div className={`relative z-10 transition-all duration-500 ${hoveredItem === `social${index}` ? 'text-white scale-125' : 'text-blue-400 group-hover:text-white group-hover:scale-110'}`}>
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            {platform.name === 'facebook' && (
                              <path
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clipRule="evenodd"
                              ></path>
                            )}
                            {platform.name === 'twitter' && (
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            )}
                            {platform.name === 'instagram' && (
                              <path
                                fillRule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clipRule="evenodd"
                              ></path>
                            )}
                            {platform.name === 'github' && (
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              ></path>
                            )}
                            {platform.name === 'linkedin' && (
                              <path
                                fillRule="evenodd"
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                clipRule="evenodd"
                              ></path>
                            )}
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/30 backdrop-blur-xl shadow-2xl transition-all duration-700 hover:scale-105"
                 onMouseEnter={() => setHoveredItem('contactForm')}
                 onMouseLeave={() => setHoveredItem(null)}>
              
              {/* Animated background gradient */}
              <div className="absolute inset-0 rounded-3xl opacity-0 transition-all duration-700 bg-gradient-to-br from-violet-500/10 to-purple-500/10 group-hover:opacity-100"></div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-3xl transition-all duration-700 shadow-violet-500/20 blur-2xl ${hoveredItem === 'contactForm' ? 'opacity-30 scale-110' : 'opacity-0 group-hover:opacity-10'}`}></div>

              {/* Floating particles effect */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className={`absolute top-4 left-4 w-1 h-1 bg-violet-400 rounded-full opacity-0 transition-all duration-700 ${hoveredItem === 'contactForm' ? 'opacity-100 animate-bounce' : 'group-hover:opacity-50'}`}></div>
                <div className={`absolute top-8 right-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 transition-all duration-700 delay-200 ${hoveredItem === 'contactForm' ? 'opacity-100 animate-bounce delay-200' : 'group-hover:opacity-50'}`}></div>
                <div className={`absolute bottom-6 left-8 w-1 h-1 bg-pink-400 rounded-full opacity-0 transition-all duration-700 delay-400 ${hoveredItem === 'contactForm' ? 'opacity-100 animate-bounce delay-400' : 'group-hover:opacity-50'}`}></div>
              </div>

              <div className="relative z-10 p-10">
                <div className="flex items-center gap-3 mb-10">
                  <ZapIcon size={28} className="text-violet-400" />
                  <h3 className="text-3xl font-bold text-white">
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Send Me a Message
                    </span>
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="group/input">
                    <label
                      htmlFor="name"
                      className="block text-lg font-bold text-gray-300 mb-3 group-hover/input:text-blue-300 transition-colors duration-300"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900/50 border border-gray-700/50 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-300 placeholder-gray-500 font-medium backdrop-blur-sm hover:border-violet-500/30"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="group/input">
                    <label
                      htmlFor="email"
                      className="block text-lg font-bold text-gray-300 mb-3 group-hover/input:text-blue-300 transition-colors duration-300"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900/50 border border-gray-700/50 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-300 placeholder-gray-500 font-medium backdrop-blur-sm hover:border-violet-500/30"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="group/input">
                    <label
                      htmlFor="message"
                      className="block text-lg font-bold text-gray-300 mb-3 group-hover/input:text-blue-300 transition-colors duration-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-gray-900/50 border border-gray-700/50 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-300 placeholder-gray-500 font-medium backdrop-blur-sm hover:border-violet-500/30 resize-none"
                      placeholder="Hello, I'd like to discuss a project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-5 rounded-2xl font-bold hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-500 flex items-center justify-center hover:scale-105"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-violet-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                    <span className="relative flex items-center">
                      Send Message
                      <SendIcon
                        size={20}
                        className="ml-3 group-hover:translate-x-2 transition-transform duration-500"
                      />
                    </span>
                  </button>
                </form>
              </div>
            </div>
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
