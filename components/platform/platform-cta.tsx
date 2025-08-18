"use client"

import { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"

type CTAProps = {
  headingFont?: string
}

export default function CallToAction({ headingFont = "" }: CTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.4 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-slate-50">
      <div className="container mx-auto px-6 py-16 sm:py-24">
        <div
          className={`relative overflow-hidden rounded-2xl border bg-white p-8 sm:p-12 shadow-sm transition-all duration-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{
            borderColor: "rgba(0,0,0,0.08)",
          }}
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[#D4AF37]/30" />
          <div className="absolute -right-16 -top-16 size-64 rounded-full bg-[#D4AF37]/10 blur-2xl animate-glow-medium" />
          <div className="absolute -left-20 -bottom-20 size-64 rounded-full bg-[#25A4FF]/10 blur-2xl animate-glow-slow" />

          <div className="mx-auto max-w-2xl text-center">
            <h3 className={`${headingFont} text-4xl md:text-5xl font-light text-slate-900 mb-6`}>
              Every Suite Is a <span className="text-[#25A4FF] font-medium">Canvas.</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] mx-auto mb-8"></div>
            <div className="mt-6 space-y-4 text-neutral-600">
              <p>
                Our platform turns each suite into a space for intentional storytelling. Whether it's honoring team 
                history, celebrating sponsors, or showcasing live content — you control the experience. Consistent in 
                design. Limitless in expression. Always interactive.
              </p>
              <p>
                We're opening the platform to a limited number of partners through our pilot program. If you're ready 
                to reimagine the suite experience — and help shape the future of it — now is the time to begin.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                className="h-11 rounded-full px-6 text-base font-medium bg-[#D4AF37] text-neutral-900 hover:bg-[#c09f32] transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="mailto:hello@suite-displays.com?subject=Suite%20Displays%20Demo" aria-label="Join the pilot">
                  → Join the Pilot
                </a>
              </Button>
              <Button
                variant="outline"
                className="h-11 rounded-full px-6 text-base border-[#25A4FF] text-[#25A4FF] hover:bg-[#25A4FF]/10 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="#about" aria-label="Talk to our team">
                  → Talk to Our Team
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
