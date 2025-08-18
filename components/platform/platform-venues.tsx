// Inline SVG graphic used for a brand-aligned venue visual

export default function PlatformVenues() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 grid items-center gap-12 lg:grid-cols-12">
          {/* Left: Image */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-xl ring-1 ring-slate-200">
              <div className="aspect-[16/10] w-full">
                <svg
                  viewBox="0 0 1600 1000"
                  role="img"
                  aria-label="Abstract brand-aligned venue illustration"
                  className="h-full w-full bg-white"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="venue-brand" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#25A4FF" />
                      <stop offset="100%" stopColor="#D4AF37" />
                    </linearGradient>
                    <radialGradient id="venue-soft" cx="30%" cy="20%" r="75%">
                      <stop offset="0%" stopColor="#25A4FF" stopOpacity="0.10" />
                      <stop offset="100%" stopColor="#25A4FF" stopOpacity="0" />
                    </radialGradient>
                    <pattern id="venue-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                    </pattern>
                  </defs>

                  {/* Subtle grid background */}
                  <rect x="0" y="0" width="1600" height="1000" fill="url(#venue-grid)" />
                  {/* Soft gradient glow */}
                  <ellipse cx="450" cy="200" rx="700" ry="420" fill="url(#venue-soft)" />

                  {/* Venue bowl silhouette */}
                  <g transform="translate(120,160)">
                    <path d="M0,420 C150,300 450,240 680,240 C910,240 1210,300 1360,420 L1360,520 L0,520 Z" fill="#F8FAFC" stroke="#E2E8F0"/>
                    {/* Seating tiers */}
                    <path d="M80,420 C220,320 440,280 680,280 C920,280 1140,320 1280,420" fill="none" stroke="#E2E8F0"/>
                    <path d="M120,460 C260,360 460,320 680,320 C900,320 1100,360 1240,460" fill="none" stroke="#E2E8F0"/>

                    {/* Center-hung display */}
                    <rect x="600" y="180" width="160" height="90" rx="10" fill="#FFFFFF" stroke="#CBD5E1" />
                    <rect x="610" y="190" width="140" height="70" rx="8" fill="#0F172A" />
                    <rect x="610" y="190" width="60" height="6" rx="3" fill="url(#venue-brand)" opacity="0.8" />

                    {/* Ribbon boards */}
                    <rect x="140" y="380" width="360" height="16" rx="8" fill="url(#venue-brand)" opacity="0.25" />
                    <rect x="860" y="380" width="360" height="16" rx="8" fill="url(#venue-brand)" opacity="0.25" />

                    {/* Suites blocks */}
                    <g>
                      <rect x="160" y="420" width="220" height="60" rx="10" fill="#FFFFFF" stroke="#E2E8F0" />
                      <rect x="410" y="420" width="220" height="60" rx="10" fill="#FFFFFF" stroke="#E2E8F0" />
                      <rect x="660" y="420" width="220" height="60" rx="10" fill="#FFFFFF" stroke="#E2E8F0" />
                      <rect x="910" y="420" width="220" height="60" rx="10" fill="#FFFFFF" stroke="#E2E8F0" />
                    </g>

                    {/* Accent chips */}
                    <circle cx="220" cy="450" r="10" fill="#25A4FF" opacity="0.15" />
                    <circle cx="470" cy="450" r="10" fill="#D4AF37" opacity="0.2" />
                    <circle cx="720" cy="450" r="10" fill="#25A4FF" opacity="0.15" />
                    <circle cx="970" cy="450" r="10" fill="#D4AF37" opacity="0.2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Built for <span className="text-[#25A4FF] font-medium">Venues</span>
            </h2>
            <div className="mt-3 w-24 h-1 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37]"></div>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Designed to scale across arenas, ballparks, and stadiums, our platform offers secure, stable performance that meets the demanding needs of premium venues.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
