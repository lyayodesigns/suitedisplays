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
                <svg
                  viewBox="0 0 1600 1000"
                  role="img"
                  aria-label="Abstract brand-aligned hardware illustration"
                  className="h-full w-full bg-white"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="brand" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#25A4FF" />
                      <stop offset="100%" stopColor="#D4AF37" />
                    </linearGradient>
                    <radialGradient id="soft" cx="70%" cy="20%" r="80%">
                      <stop offset="0%" stopColor="#25A4FF" stopOpacity="0.10" />
                      <stop offset="100%" stopColor="#25A4FF" stopOpacity="0" />
                    </radialGradient>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                    </pattern>
                  </defs>

                  {/* Subtle grid background */}
                  <rect x="0" y="0" width="1600" height="1000" fill="url(#grid)" />
                  {/* Soft gradient glow */}
                  <ellipse cx="1200" cy="180" rx="700" ry="420" fill="url(#soft)" />

                  {/* Device frame mockup */}
                  <g transform="translate(180,160)">
                    <rect x="0" y="0" width="1240" height="720" rx="32" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                    <rect x="24" y="24" width="1192" height="672" rx="20" fill="#F8FAFC" stroke="#E2E8F0" />

                    {/* Brand bar */}
                    <rect x="24" y="24" width="380" height="12" rx="6" fill="url(#brand)" />

                    {/* Content blocks */}
                    <rect x="24" y="64" width="520" height="320" rx="16" fill="#FFFFFF" stroke="#E2E8F0" />
                    <rect x="24" y="404" width="520" height="92" rx="12" fill="#FFFFFF" stroke="#E2E8F0" />
                    <rect x="24" y="508" width="520" height="92" rx="12" fill="#FFFFFF" stroke="#E2E8F0" />

                    <rect x="568" y="64" width="648" height="180" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />
                    <rect x="568" y="260" width="648" height="180" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />
                    <rect x="568" y="456" width="648" height="180" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />

                    {/* Accent chips */}
                    <circle cx="60" cy="452" r="10" fill="#25A4FF" opacity="0.15" />
                    <circle cx="60" cy="556" r="10" fill="#D4AF37" opacity="0.2" />
                    <circle cx="604" cy="98" r="10" fill="#25A4FF" opacity="0.15" />
                    <circle cx="604" cy="294" r="10" fill="#D4AF37" opacity="0.2" />
                    <circle cx="604" cy="490" r="10" fill="#25A4FF" opacity="0.15" />
                  </g>
                </svg>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">Example configuration shown with placeholder imagery.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

