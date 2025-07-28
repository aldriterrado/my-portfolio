import { HeartIcon } from 'lucide-react'
export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
              AT<span className="text-white">Portfolio</span>
            </div>
          </div>
          <div className="text-gray-400 text-sm">
            <p className="flex items-center gap-1">
              Designed with <HeartIcon className="text-red-500" size={16} /> by
              Aldri Terrado
            </p>
            <p className="mt-1 text-center md:text-right">
              © {currentYear} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
