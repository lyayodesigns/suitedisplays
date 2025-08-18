import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PlatformHero from '@/components/platform/platform-hero'
import PlatformSection from '@/components/platform/platform-section'
import PlatformFeatures from '@/components/platform/platform-features'
import PlatformHardware from '@/components/platform/platform-hardware'
import PlatformVenues from '@/components/platform/platform-venues'
import PlatformCTA from '@/components/platform/platform-cta'

export const metadata: Metadata = {
  title: 'Platform | Suite Displays',
  description:
    'The first digital platform purpose-built for luxury suites: interactive touchscreens, legacy showcases, sponsor branding, live data, and reliable performance.',
}

export default function PlatformPage() {
  return (
    <>
      <Header />
      <main>
        <PlatformHero />
        <PlatformSection />
        <PlatformFeatures />
        <PlatformHardware />
        <PlatformVenues />
        <PlatformCTA />
      </main>
      <Footer />
    </>
  )
}
