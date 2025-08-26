import { Menu, X, Phone, Home } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Home className="text-primary-500" size={28} />
            <span className="text-2xl font-bold text-gray-900">SummitHomes</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Services</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Portfolio</Link>
            <Link to="/process" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Process</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Contact</Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+15125551234" className="flex items-center gap-2 text-gray-700 hover:text-primary-500 transition-colors">
              <Phone size={18} />
              <span>(512) 555-1234</span>
            </a>
            <Link to="/contact" className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-6 rounded-lg transition-colors">
              Free Estimate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="md:hidden bg-white border-t border-gray-200 shadow-sm"
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col gap-4">
              <Link to="/" onClick={closeMobileMenu} className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Home</Link>
              <Link to="/services" onClick={closeMobileMenu} className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Services</Link>
              <Link to="/portfolio" onClick={closeMobileMenu} className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Portfolio</Link>
              <Link to="/process" onClick={closeMobileMenu} className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Process</Link>
              <Link to="/about" onClick={closeMobileMenu} className="text-gray-700 hover:text-primary-500 font-medium transition-colors">About</Link>
              <Link to="/contact" onClick={closeMobileMenu} className="text-gray-700 hover:text-primary-500 font-medium transition-colors">Contact</Link>
              <a href="tel:+15125551234" className="flex items-center gap-2 text-gray-700 hover:text-primary-500 transition-colors">
                <Phone size={18} />
                <span>(512) 555-1234</span>
              </a>
              <Link to="/contact" onClick={closeMobileMenu} className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-6 rounded-lg text-center transition-colors">
                Free Estimate
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
