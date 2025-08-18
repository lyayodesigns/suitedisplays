import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import UseCasesHero from '@/components/use-cases/use-cases-hero'
import UseCasesSection from '@/components/use-cases/use-cases-section'

export const metadata: Metadata = {
  title: 'Use Cases — Suite Displays',
  description:
    'Explore Suite Displays use cases across professional sports, universities, sponsors, executive boxes, and sales suites.'
}

export default function UseCasesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <UseCasesHero />
        <UseCasesSection />
        <Footer />
      </main>
    </>
  )
}
