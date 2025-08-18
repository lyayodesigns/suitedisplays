'use client'

import { useEffect, useState } from 'react'

export default function FAQHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blue glow */}
        <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40 bg-[#25A4FF] animate-glow-slow"></div>
        {/* Gold glow */}
        <div className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-30 bg-[#D4AF37] animate-glow-medium"></div>
        {/* Subtle animation overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/10 to-blue-50/10 animate-opacity-pulse"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 leading-tight">
            Frequently Asked
            <span className="block bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] bg-clip-text text-transparent font-medium">Questions</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Learn how Suite Displays works — customization, connectivity, CMS, security, support, and more.
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] mx-auto rounded-full" />
        </div>
      </div>
    </section>
  )
}
