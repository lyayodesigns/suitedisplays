'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight, Play, ChevronDown } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blue glow */}
        <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-40 bg-[#25A4FF] animate-glow-slow"></div>
        {/* Gold glow */}
        <div className="absolute -bottom-52 -right-52 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-30 bg-[#D4AF37] animate-glow-medium"></div>
        {/* Subtle animation overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/10 to-blue-50/10 animate-opacity-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-slate-900 mb-8 leading-tight">
            The First Interactive
            <span className="block bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] bg-clip-text text-transparent font-medium">
              Touchscreen Platform
            </span>
            for Luxury Suites
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We're redefining what premium seating means—one screen at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[#25A4FF] hover:bg-[#1E8FE6] text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              Schedule a Demo
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-slate-300 text-slate-700 hover:border-[#D4AF37] hover:text-[#D4AF37] px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 group"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <ChevronDown className="h-6 w-6 text-slate-400 stroke-2" />
          <ChevronDown className="h-5 w-5 text-slate-300 -mt-2 stroke-2" />
        </div>
      </div>
    </section>
  )
}
