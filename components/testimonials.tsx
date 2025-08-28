'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, Trophy, GraduationCap, Building } from 'lucide-react'

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section ref={sectionRef} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
              Who It's <span className="text-[#25A4FF] font-medium">For</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] mx-auto mb-8"></div>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8 max-w-3xl mx-auto">
              Built for Teams, Venues, & Partners Who Lead.
            </h3>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xl text-slate-600 leading-relaxed">
              This platform was built for organizations who want to create the next great fan experience—not repeat yesterday's. Whether you're a pro team, university, or ownership group, our software gives you a new way to impress the most important people in the building.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Professional Teams</h4>
              <p className="text-slate-600">Elevate your premium seating with interactive experiences that showcase your legacy and engage your most valued fans.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] rounded-full mx-auto mb-4 flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Universities</h4>
              <p className="text-slate-600">Transform your premium seating areas with dynamic content that celebrates school spirit and athletic achievements.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] rounded-full mx-auto mb-4 flex items-center justify-center">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Ownership Groups</h4>
              <p className="text-slate-600">Differentiate your venues with cutting-edge technology that creates memorable experiences for your premium guests.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
