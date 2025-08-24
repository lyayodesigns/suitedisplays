import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactHero from '@/components/contact/contact-hero'
import ContactSection from '@/components/contact/contact-section'

export const metadata: Metadata = {
  title: 'Contact Us | Suite Display',
  description:
    'Get in touch to learn more about Suite Display, explore pilot opportunities, or request a personalized demo for your venue.',
}

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
