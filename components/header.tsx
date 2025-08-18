'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Monitor } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Platform', href: '/platform' },
  { name: 'Use Cases', href: '/use-cases' },
  { name: 'FAQ', href: '/faq' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" aria-label="Suite Displays Home" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] rounded-lg flex items-center justify-center">
              <Monitor className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-light text-slate-900">
              Suite <span className="font-semibold text-[#25A4FF]">Displays</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-[#25A4FF] transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="/contact-us" className="inline-block">
              <Button 
                className="bg-[#25A4FF] hover:bg-[#1E8FE6] text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Contact Us
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-700 hover:text-[#25A4FF] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-slate-200">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-slate-700 hover:text-[#25A4FF] hover:bg-slate-50 rounded-lg transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            
            <div className="pt-4 space-y-2 border-t border-slate-200">
              <a href="/contact-us" className="block">
                <Button 
                  className="w-full bg-[#25A4FF] hover:bg-[#1E8FE6] text-white font-medium"
                >
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
