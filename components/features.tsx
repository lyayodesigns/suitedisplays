'use client'

import { useEffect, useRef, useState } from 'react'
import { Monitor, BarChart3, Palette, Headphones, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Monitor,
    title: 'Ultra-Crisp Touchscreen Displays',
    description: 'Premium 4K touchscreen technology designed specifically for luxury suite environments with responsive, intuitive interaction that feels natural and effortless.',
    highlight: '4K Resolution'
  },
  {
    icon: Palette,
    title: 'Custom-Branded for Each Venue',
    description: 'Fully customizable branding and design elements that seamlessly integrate with your venue\'s identity and sponsor requirements, creating a cohesive luxury experience.',
    highlight: 'Fully Customizable'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Stats & Team History',
    description: 'Showcase live game statistics, team championships, player profiles, and historical moments that create engaging fan experiences and lasting memories.',
    highlight: 'Live Updates'
  },
  {
    icon: Headphones,
    title: 'Built-In Content Control',
    description: 'Update content in seconds with our intuitive management system. No technical expertise required—just point, click, and publish with enterprise-grade reliability.',
    highlight: 'Instant Updates'
  },
  {
    icon: Sparkles,
    title: 'Sleek Design That Enhances',
    description: 'Thoughtfully designed to complement luxury suite aesthetics while providing powerful functionality that never distracts from the premium experience.',
    highlight: 'Premium Design'
  }
]

export default function Features() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#25A4FF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#D4AF37] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="text-center mb-24">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
                What It <span className="text-[#25A4FF] font-medium">Does</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] mx-auto mb-12"></div>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-8 max-w-4xl mx-auto leading-tight">
              Interactive Displays for the Modern Suite
            </h3>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Five core capabilities that transform luxury suites into dynamic, engaging spaces that captivate your most valued guests.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* First two features - larger cards */}
            {features.slice(0, 2).map((feature, index) => (
              <div 
                key={feature.title}
                className={`group relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-slate-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#25A4FF]/5 to-[#D4AF37]/5 rounded-3xl transition-opacity duration-500 ${
                  hoveredFeature === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#25A4FF]/10 to-[#D4AF37]/10 rounded-full text-sm font-semibold text-[#25A4FF]">
                        {feature.highlight}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-[#25A4FF] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom three features - smaller cards in a row */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.slice(2).map((feature, index) => (
              <div 
                key={feature.title}
                className={`group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 2) * 200}ms` }}
                onMouseEnter={() => setHoveredFeature(index + 2)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#25A4FF]/5 to-[#D4AF37]/5 rounded-2xl transition-opacity duration-500 ${
                  hoveredFeature === index + 2 ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#25A4FF]/10 to-[#D4AF37]/10 rounded-full text-xs font-semibold text-[#25A4FF] mb-3">
                      {feature.highlight}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#25A4FF] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  )
}
