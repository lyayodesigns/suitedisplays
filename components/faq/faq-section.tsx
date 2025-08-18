"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      q: "Is this just digital signage?",
      a:
        "No, this is much more than traditional digital signage. Our platform is a fully interactive, custom-built solution designed specifically for luxury suites. It enables dynamic content experiences that engage guests through touch interaction, personalized messaging, and rich multimedia — not just static or looped ads.",
    },
    {
      q: "Can we customize branding per suite?",
      a:
        "Absolutely. Every suite can be individually branded to reflect your team’s identity, suite owner preferences, and sponsor partnerships. This includes custom logos, color schemes, typography, and tailored messaging — ensuring a unique and immersive experience for every guest.",
    },
    {
      q: "Does it require internet access?",
      a:
        "No, our platform is designed to work reliably even without constant internet connectivity. Content is cached locally on each display, allowing for uninterrupted operation. Updates and new content sync securely to the displays whenever a stable connection is available, ensuring smooth performance at all times.",
    },
    {
      q: "How is content updated?",
      a:
        "Content is managed through a secure, cloud-based content management system (CMS) built for ease of use. Authorized users can update suite displays in real time or schedule content in advance, all through an intuitive drag-and-drop interface. This system supports multiple users with customizable permissions to keep content fresh and relevant.",
    },
    {
      q: "Is this platform currently in use at any venues?",
      a:
        "We are currently launching a limited pilot program with select partners. This exclusive opportunity allows early adopters to help shape the future of the platform and be the first to deliver truly interactive luxury suite experiences. If you’re interested in joining the pilot, please reach out through our contact page.",
    },
    {
      q: "What hardware do we need for this platform?",
      a:
        "Our platform is compatible with a wide range of premium touchscreen displays and integrates smoothly with existing AV systems in luxury suites. We work closely with leading vendors to source top-tier hardware optimized for your venue.",
    },
    {
      q: "Can sponsors update their own content?",
      a:
        "Yes, we offer role-based permissions that allow sponsors to manage their content within set guidelines, enabling dynamic, timely, and relevant sponsor activations.",
    },
    {
      q: "How secure is the platform?",
      a:
        "Security is a top priority. Our system employs enterprise-grade encryption, access controls, and regular security updates to protect your data and ensure compliance with venue standards.",
    },
    {
      q: "What kind of support is available?",
      a:
        "We provide dedicated technical support, remote monitoring, and software updates to keep your suite displays running flawlessly throughout the season and beyond.",
    },
  ]

  return (
    <section className="relative py-24 bg-white" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900">
            Frequently Asked <span className="text-[#25A4FF] font-medium">Questions</span>
          </h2>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] mx-auto rounded-full" />
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about Suite Displays — from customization to security and support.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 sm:p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full divide-y divide-slate-200">
            {faqs.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left text-slate-900 text-lg md:text-xl font-semibold py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
