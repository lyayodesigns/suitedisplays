'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { CheckCircle2, Trophy, GraduationCap, Landmark, Crown, MapPinned } from 'lucide-react'

export default function UseCasesSection() {
  const blocks = [
    {
      title: 'Luxury Suites in Professional Sports',
      description:
        'Transform your suites into immersive hubs that celebrate team pride and enhance the live experience. Our platform showcases championship banners, player profiles, and real-time game data — creating an engaging atmosphere that keeps guests connected and entertained throughout the event.',
      bullets: [
        'Interactive timelines of championship wins and historic moments',
        'Detailed player and coach profiles with career highlights',
        'Live game stats, scoring updates, and instant replays',
        'Rotating sponsor messages that align with the game-day experience',
      ],
    },
    {
      title: 'University Athletics',
      description:
        'Elevate your collegiate suites by honoring your school’s legacy and recognizing valued donors. Use dynamic digital displays to highlight academic achievements, athletic milestones, and team traditions that inspire pride and foster community.',
      bullets: [
        'Donor walls featuring interactive recognition and personalized messaging',
        'Celebrations of academic honors alongside athletic accomplishments',
        'Displays of team histories, rivalries, and Hall of Fame inductees',
        'Custom content for special events like homecoming or graduation',
      ],
    },
    {
      title: 'Sponsor Integration',
      description:
        'Maximize hospitality value with dynamic sponsor content that feels integrated and authentic. Rotate branded messaging seamlessly throughout suites to ensure sponsors receive premium visibility without disrupting the guest experience.',
      bullets: [
        'Automated scheduling of sponsor promotions and interactive activations',
        'Custom-branded visuals, videos, and social media feeds tailored per sponsor',
        'Real-time analytics to measure sponsor engagement and impressions',
        'Opportunities for sponsors to directly engage suite guests via digital touchpoints',
      ],
    },
    {
      title: 'Ownership & Executive Boxes',
      description:
        'Create a sophisticated, personalized environment for owners and VIPs. Deliver curated content such as welcome messages, exclusive team insights, and tailored visuals that reflect the prestige of these spaces.',
      bullets: [
        'Personalized greetings for suite owners and distinguished guests',
        'Exclusive behind-the-scenes content and team news',
        'Customized visuals that align with ownership branding and preferences',
        'Integration with private event announcements and exclusive offers',
      ],
    },
    {
      title: 'Stadium Tours & Sales Suites',
      description:
        'Use digital displays to enrich stadium tours and sales efforts with compelling, interactive content that highlights amenities, history, and availability — helping prospects visualize the premium experience.',
      bullets: [
        'Interactive maps showcasing suite locations and features',
        'Highlight reels of amenities, catering options, and exclusive access benefits',
        'Digital brochures and pricing information easily accessible on-screen',
        'Testimonials and video stories from satisfied suite owners and guests',
      ],
    },
  ]

  const icons = [Trophy, GraduationCap, Landmark, Crown, MapPinned]

  const slugify = (s: string) =>
    s
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

  const itemRefs = useRef<(HTMLElement | null)[]>([])
  const ids = useMemo(() => blocks.map((b) => slugify(b.title)), [blocks])
  const [activeId, setActiveId] = useState<string>(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return (
    <section id="use-cases" className="relative py-24 bg-white">
      {/* Subtle background pattern and glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,164,255,0.06),_transparent_60%)]" />
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#25A4FF]/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm tracking-widest uppercase text-slate-500">Solutions</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
            Where Suite Displays <span className="text-[#25A4FF] font-medium">Shines</span>
          </h2>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] mx-auto rounded-full" />
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Tailored experiences across sports, universities, sponsors, executive boxes, and more.
          </p>
        </div>

        {/* Sticky index + vertical list layout */}
        <div className="relative grid lg:grid-cols-12 gap-8">
          {/* Sticky sidebar index */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 space-y-2 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur px-5 py-5">
              {blocks.map((b, i) => {
                const id = ids[i]
                const isActive = activeId === id
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base transition-colors ${
                      isActive ? 'bg-gradient-to-r from-[#25A4FF]/10 to-[#D4AF37]/10 text-slate-900' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span className={`inline-flex h-8 w-8 text-[13px] font-medium items-center justify-center rounded-xl border ${
                      isActive ? 'border-[#25A4FF]/40 text-[#25A4FF] bg-white' : 'border-slate-200 text-slate-500'
                    }`}>{String(i + 1).padStart(2, '0')}</span>
                    <span className="whitespace-normal leading-snug">{b.title}</span>
                  </a>
                )
              })}
            </div>
          </aside>

          {/* Content list */}
          <div className="lg:col-span-8 relative space-y-8">
            {/* subtle vertical accent line */}
            <div className="pointer-events-none hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#25A4FF]/20 via-slate-200 to-[#D4AF37]/20" />

            {blocks.map((b, idx) => {
              const Icon = icons[idx % icons.length]
              const id = ids[idx]
              return (
                <article
                  key={b.title}
                  id={id}
                  ref={(el) => {
                    itemRefs.current[idx] = el
                  }}
                  className="group relative pl-4 md:pl-16 scroll-mt-24"
                >
                  {/* Marker on the accent line: gradient diamond */}
                  <div className="hidden md:block absolute left-4 top-10 -translate-x-1/2">
                    <div className="h-3.5 w-3.5 rotate-45 bg-gradient-to-br from-[#25A4FF] to-[#D4AF37] rounded-sm shadow-md ring-2 ring-white" />
                  </div>

                  <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-[#25A4FF]/40 to-[#D4AF37]/40 transition-transform duration-300 group-hover:scale-[1.005]">
                    <div className="rounded-3xl bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-xl transition-shadow">
                      <div className="p-6 md:p-8">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 shrink-0 rounded-2xl bg-gradient-to-br from-[#25A4FF]/15 to-[#D4AF37]/15 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-[#25A4FF]" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">{b.title}</h3>
                            <p className="mt-3 text-slate-600 text-base leading-relaxed">{b.description}</p>
                            <ul className="mt-5 space-y-3">
                              {b.bullets.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-700">
                                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#25A4FF]" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
