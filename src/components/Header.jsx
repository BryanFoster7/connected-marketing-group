import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/information')
  }

  return (
    <header className="bg-dark-lighter backdrop-blur-sm bg-opacity-80 fixed w-full top-0 z-50 border-b border-dark-lightest">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary via-primary-light to-accent-teal bg-clip-text text-transparent">
              Connected
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-light/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-light/80 hover:text-primary transition-colors">
              Services
            </Link>
            <a href="#features" className="text-light/80 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#about" className="text-light/80 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-light/80 hover:text-primary transition-colors">
              Contact
            </a>
            <Link to="/information" className="text-light/80 hover:text-primary transition-colors">
              Information
            </Link>
            <Link to="/admin" className="text-light/80 hover:text-primary transition-colors">
              Admin
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button 
              onClick={handleGetStarted}
              className="bg-primary text-dark px-6 py-2 rounded-lg hover:bg-primary-light transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-light/80 hover:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-lighter border-t border-dark-lightest">
              <Link to="/" className="block px-3 py-2 text-light/80 hover:text-primary">
                Home
              </Link>
              <Link to="/services" className="block px-3 py-2 text-light/80 hover:text-primary">
                Services
              </Link>
              <a href="#features" className="block px-3 py-2 text-light/80 hover:text-primary">
                Features
              </a>
              <a href="#about" className="block px-3 py-2 text-light/80 hover:text-primary">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-light/80 hover:text-primary">
                Contact
              </a>
              <Link to="/information" className="block px-3 py-2 text-light/80 hover:text-primary">
                Information
              </Link>
              <Link to="/admin" className="block px-3 py-2 text-light/80 hover:text-primary">
                Admin
              </Link>
              <button 
                onClick={handleGetStarted}
                className="w-full mt-2 bg-primary text-dark px-6 py-2 rounded-lg hover:bg-primary-light transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header