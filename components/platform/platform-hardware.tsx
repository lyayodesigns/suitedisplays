// Inline SVG graphic used for a brand-aligned placeholder visual

export default function PlatformHardware() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 grid items-center gap-12 lg:grid-cols-12">
          {/* Content */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Hardware compatibility, without the <span className="text-[#25A4FF] font-medium">guesswork</span>
            </h2>
            <div className="mt-3 w-24 h-1 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37]"></div>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Our platform works seamlessly with standard and premium displays, integrating cleanly with existing AV systems. We focus on reliability and effortless setup so you can focus on the experience.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="text-sm md:text-base">• Works with leading display and AV vendors</li>
              <li className="text-sm md:text-base">• Simple inputs, cabling, and mounting guidance</li>
              <li className="text-sm md:text-base">• Optimized for 24/7 venues and suites</li>
            </ul>
          </div>

          {/* Visual */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-xl ring-1 ring-slate-200">
              <div className="aspect-[16/10] w-full">
                <img
                  src="/images/platform.webp"
                  alt="Platform hardware illustration"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">Example configuration shown with placeholder imagery.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

