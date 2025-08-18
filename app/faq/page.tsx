import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FAQSection from '@/components/faq/faq-section'
import FAQHero from '@/components/faq/faq-hero'

export const metadata: Metadata = {
  title: 'FAQ — Suite Displays',
  description:
    'Frequently asked questions about Suite Displays: customization, connectivity, content management, security, support, and more.',
}

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <FAQHero />
        <FAQSection />
        <Footer />
      </main>
    </>
  )
}
