import { CheckCircle2 } from 'lucide-react'

type Feature = {
  title: string
  desc: string
  bullets: string[]
}

// Minimalist list layout – no per-feature icon mapping for a cleaner look

const features: Feature[] = [
  {
    title: 'Interactive Touchscreen Displays',
    desc:
      'Designed specifically for luxury suites, our ultra-responsive touchscreens invite guests to explore rich, engaging content with ease.',
    bullets: [
      'Crisp, high-resolution displays optimized for suite lighting',
      'Multi-touch support for intuitive navigation',
      'ADA-compliant features for accessibility',
      "Customizable interface tailored to each venue’s style",
    ],
  },
  {
    title: 'Custom Suite Branding & Personalization',
    desc:
      'Make every suite feel truly exclusive. Reflect your brand’s identity, suite owner preferences, and sponsor partnerships with complete customization.',
    bullets: [
      'Personalized welcome messages for suite guests',
      'Dynamic sponsor content rotation with branded visuals and videos',
      'Custom color schemes, logos, and typography per suite or suite group',
      'Seasonal and event-based theme switching',
    ],
  },
  {
    title: 'Showcase Team History & Legacy',
    desc:
      'Celebrate your franchise’s or institution’s pride by bringing history to life with rich multimedia content.',
    bullets: [
      'Interactive timelines of team milestones and championship wins',
      'Digitized championship banners and trophy showcases',
      'Player profiles, retired jerseys, and Hall of Fame features',
      'Historical video highlights and photo galleries',
    ],
  },
  {
    title: 'Live Game & Event Data Integration',
    desc:
      'Keep your guests connected to the action with real-time updates that enhance the in-suite experience.',
    bullets: [
      'Live scoring and play-by-play feeds',
      'Player stats and game analytics',
      'Video highlights and instant replays',
      'Event schedules and announcements',
    ],
  },
  {
    title: 'Dynamic Sponsor Engagement',
    desc:
      'Maximize sponsor value with tailored, rotating content that aligns with your branding and hospitality goals.',
    bullets: [
      'Automated content scheduling for sponsor messaging',
      'Interactive sponsor activations and promotions',
      'Integration with sponsor digital assets and social media feeds',
      'Reporting dashboards to track engagement metrics',
    ],
  },
  {
    title: 'Content Management & Scheduling',
    desc:
      'Manage all suite displays from a simple, user-friendly dashboard designed for non-technical users.',
    bullets: [
      'Drag-and-drop content scheduling and updates',
      'Multi-user access with role-based permissions',
      'Preview mode before publishing changes',
      'Cloud-based platform with real-time sync and backup',
    ],
  },
  {
    title: 'Reliable Offline Operation',
    desc:
      'Ensure your displays are always active — even when connectivity fluctuates.',
    bullets: [
      'Local caching of content for uninterrupted display',
      'Automatic synchronization when the connection is restored',
      'Alerts and diagnostics to monitor display status remotely',
    ],
  },
  {
    title: 'Seamless Integration with Venue Systems',
    desc:
      'Our platform integrates smoothly with your existing infrastructure — no complex overhauls needed.',
    bullets: [
      'Compatibility with major display hardware brands',
      'Integration with venue data APIs and scoring systems',
      'Sync with lighting and audio control systems for immersive environments',
      'Support for third-party content feeds and streaming',
    ],
  },
  {
    title: 'Scalable, Secure & Support-Ready',
    desc:
      'From single suites to entire stadiums, our platform scales effortlessly while keeping data safe and support reliable.',
    bullets: [
      'Enterprise-grade encryption and access control',
      '24/7 monitoring and remote support',
      'Regular software updates and feature enhancements',
      'Flexible licensing tailored to venues of all sizes',
    ],
  },
]

export default function PlatformFeatures() {
  return (
    <section className="relative py-20 md:py-28 bg-slate-50">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500">3. Features (In-depth)</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            <span className="text-[#25A4FF] font-medium">Features</span> That Elevate Every Suite Experience
          </h2>
          <div className="mt-3 w-24 h-1 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] mx-auto"></div>
        </header>

        <ol role="list" className="mt-14 divide-y divide-slate-200/80 border-y border-slate-200">
          {features.map((f, i) => (
            <li key={f.title} className="relative py-6 sm:py-7">
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-slate-50 px-2 text-sm font-medium text-slate-500 ring-1 ring-slate-200">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg md:text-xl font-semibold text-slate-900">{f.title}</h3>
                    <span className="hidden sm:inline-block h-1 w-10 rounded-full bg-gradient-to-r from-[#25A4FF] to-[#D4AF37]" />
                  </div>
                  <p className="mt-2 text-slate-600 text-base md:text-lg leading-relaxed">{f.desc}</p>
                  <ul className="mt-4 space-y-3">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-slate-700 text-base leading-relaxed">
                        <CheckCircle2 className="h-5 w-5 mt-0.5 text-[#25A4FF]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
