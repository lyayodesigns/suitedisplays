'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight } from 'lucide-react'

export default function CTA() {
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#25A4FF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#D4AF37] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
            Every Suite Is a
            <span className="block bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] bg-clip-text text-transparent font-medium">
              Canvas
            </span>
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-light text-slate-200 mb-6">
            Designed to Be Distinct
          </h3>

          <div className="space-y-6 text-lg text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            <p>
              Our platform turns each suite into a space for intentional storytelling. Whether it's honoring team history, celebrating sponsors, or showcasing live content — you control the experience. Consistent in design. Limitless in expression. Always interactive.
            </p>
            
            <p className="text-xl font-medium text-white">
              We're opening the platform to a limited number of partners through our pilot program. If you're ready to reimagine the suite experience — and help shape the future of it — now is the time to begin.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-slate-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              Join the Pilot
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
            >
              Talk to Our Team
            </Button>
          </div>

          <div className="mt-12 text-slate-400">
            <p>Trusted by 500+ luxury properties worldwide</p>
          </div>
        </div>
      </div>
    </section>
  )
}
