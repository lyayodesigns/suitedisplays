'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
              Introducing a <span className="text-[#25A4FF] font-medium">New Standard</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
                Nothing About the Suite Experience Should Be Static.
              </h3>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Luxury suites are evolving. Until now, there's been no digital platform designed exclusively for premium spaces. We've built the first — purposefully engineered to elevate the suite experience with touch-enabled storytelling, dynamic content, and tailored branding.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                This is not signage. This is a suite experience, reimagined.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#25A4FF]/10 to-[#D4AF37]/10 rounded-3xl p-8 flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    <p className="text-slate-600 font-medium">Innovation Meets Elegance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
