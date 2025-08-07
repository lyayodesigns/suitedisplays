import { Metadata } from 'next'
import Hero from '@/components/hero'
import About from '@/components/about'
import WhyBuilt from '@/components/why-built'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'Suite Displays - The First Interactive Touchscreen Platform for Luxury Suites',
  description: 'Interactive touchscreen displays designed exclusively for luxury suites. Elevate the premium seating experience with dynamic content and tailored branding.',
  keywords: 'luxury suites, interactive displays, touchscreen, premium seating, sports venues, fan experience',
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero />
        <About />
        <WhyBuilt />
        <Features />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
