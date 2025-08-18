import { Monitor, Trophy, BadgeCheck, CalendarClock, LineChart, ShieldCheck } from 'lucide-react'

const capabilities = [
  {
    icon: Monitor,
    title: 'Interactive, high-resolution touchscreens',
    desc: 'Optimized for premium suite environments with fluid, responsive touch interactions.'
  },
  {
    icon: Trophy,
    title: 'Comprehensive team legacy showcases',
    desc: 'Rosters, coaches, championships, trophies, and retired jerseys presented beautifully.'
  },
  {
    icon: BadgeCheck,
    title: 'Fully customizable branding',
    desc: 'Tailor the look per suite or sponsor to align with premium brand standards.'
  },
  {
    icon: CalendarClock,
    title: 'Real-time content scheduling',
    desc: 'Effortless updates with precise timing to keep every suite current.'
  },
  {
    icon: LineChart,
    title: 'Seamless live data integrations',
    desc: 'Scores, highlights, stats, and more integrated directly into the experience.'
  },
  {
    icon: ShieldCheck,
    title: 'Reliable, uninterrupted performance',
    desc: 'Designed to adapt to network variability and keep running without disruption.'
  }
]

export default function PlatformSection() {
  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(37,164,255,0.05),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
          Core <span className="text-[#25A4FF] font-medium">Capabilities</span>
        </h2>
        <div className="mt-3 w-24 h-1 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37]"></div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-3xl p-[1px] bg-gradient-to-br from-[#25A4FF]/30 to-[#D4AF37]/30">
              <div className="rounded-3xl bg-white/90 backdrop-blur shadow-sm hover:shadow-xl transition-shadow h-full">
                <div className="p-7">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#25A4FF]/15 to-[#D4AF37]/15 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-[#25A4FF]" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-slate-600 text-base leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

