import { Menu, Phone, Home } from 'lucide-react'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Home className="text-primary-500" size={28} />
            <span className="text-2xl font-bold text-gray-900">SummitHomes</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Services</a>
            <a href="#" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Portfolio</a>
            <a href="#" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Process</a>
            <a href="#" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Contact</a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+15125551234" className="flex items-center gap-2 text-gray-700 hover:text-primary-500 transition-colors">
              <Phone size={18} />
              <span>(512) 555-1234</span>
            </a>
            <button aria-label="Free Estimate" className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-6 rounded-lg transition-colors">
              Free Estimate
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            aria-label="Open mobile menu"
            aria-expanded="false"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}
