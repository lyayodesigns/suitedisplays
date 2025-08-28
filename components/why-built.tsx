'use client'

import { useEffect, useRef, useState } from 'react'

export default function WhyBuilt() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
              Why We <span className="text-[#25A4FF] font-medium">Built It</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8">
              Premium Seating Deserves Premium Tech.
            </h3>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                For decades, luxury suites have offered exclusivity, privacy, and top-tier service—but the digital experience has lagged behind. We saw an opportunity to create something no one else had: a display platform built exclusively for the luxury suite environment.
              </p>
              
              <p className="text-xl font-medium text-[#25A4FF]">
                Our mission: make every suite feel curated, modern, and alive.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#25A4FF] mb-2">55+</div>
                <div className="text-slate-600">Years Combined Experience</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">First</div>
                <div className="text-slate-600">Suite-Exclusive Platform</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#25A4FF] mb-2">100%</div>
                <div className="text-slate-600">Interactive Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
