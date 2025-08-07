'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown, Menu, X, Monitor } from 'lucide-react'

const navigation = [
  { name: 'Platform', href: '#platform' },
  { 
    name: 'Solutions', 
    href: '#solutions',
    dropdown: [
      { name: 'Luxury Hotels', href: '#hotels' },
      { name: 'Private Residences', href: '#residences' },
      { name: 'Event Venues', href: '#venues' },
      { name: 'Corporate Suites', href: '#corporate' }
    ]
  },
  { name: 'Features', href: '#features' },
  { 
    name: 'Resources', 
    href: '#resources',
    dropdown: [
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Documentation', href: '#docs' },
      { name: 'Blog', href: '#blog' },
      { name: 'Support Center', href: '#support' }
    ]
  },
  { name: 'Pricing', href: '#pricing' }
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

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
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] rounded-lg flex items-center justify-center">
              <Monitor className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-light text-slate-900">
              Suite <span className="font-semibold text-[#25A4FF]">Displays</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 text-slate-700 hover:text-[#25A4FF] transition-colors duration-200 font-medium">
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 transition-all duration-200 ${
                      activeDropdown === item.name 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-slate-700 hover:text-[#25A4FF] hover:bg-slate-50 transition-colors duration-150"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-slate-700 hover:text-[#25A4FF] transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-slate-700 hover:text-[#25A4FF] hover:bg-slate-50 font-medium"
            >
              Sign In
            </Button>
            <Button 
              className="bg-[#25A4FF] hover:bg-[#1E8FE6] text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Book Demo
            </Button>
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
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block px-4 py-3 text-slate-700 hover:text-[#25A4FF] hover:bg-slate-50 rounded-lg transition-colors font-medium"
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="ml-4 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-slate-600 hover:text-[#25A4FF] hover:bg-slate-50 rounded-lg transition-colors"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 space-y-2 border-t border-slate-200">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-slate-700 hover:text-[#25A4FF] hover:bg-slate-50 font-medium"
              >
                Sign In
              </Button>
              <Button 
                className="w-full bg-[#25A4FF] hover:bg-[#1E8FE6] text-white font-medium"
              >
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
