"use client"

import { Mail, Phone, Clock, Send, Linkedin, Twitter } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="relative py-16 md:py-24 bg-white">
      {/* background softness */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.05),_transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro copy */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900">Reach out today</h2>
          <p className="mt-4 text-slate-600">
            We’d love to hear from you. Whether you’re interested in learning more about our luxury suite digital platform,
            exploring pilot opportunities, or have questions about tailoring the experience for your venue, our team is here to help.
          </p>
        </div>

        {/* Layout */}
        <div className="mt-12 grid lg:grid-cols-12 gap-8">
          {/* Contact methods */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur p-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#25A4FF]/15 to-[#D4AF37]/15 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-[#25A4FF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600">Replace with your real address</p>
                  <a href="mailto:info@yourcompany.com" className="mt-1 inline-block text-[#25A4FF] hover:underline">info@yourcompany.com</a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur p-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#25A4FF]/15 to-[#D4AF37]/15 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-[#25A4FF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Phone</h3>
                  <p className="text-slate-600">Replace with your real number</p>
                  <a href="tel:1234567890" className="mt-1 inline-block text-[#25A4FF] hover:underline">(123) 456-7890</a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur p-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#25A4FF]/15 to-[#D4AF37]/15 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-[#25A4FF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Office Hours</h3>
                  <p className="text-slate-600">Monday – Friday, 9:00 AM – 6:00 PM ET</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur p-5">
              <h3 className="font-semibold text-slate-900">Follow Us</h3>
              <p className="mt-1 text-slate-600">Stay connected and get the latest updates</p>
              <div className="mt-3 flex items-center gap-3">
                <a href="#" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:text-[#25A4FF]">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Twitter" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:text-[#25A4FF]">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form placeholder */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-[1px] bg-gradient-to-br from-[#25A4FF]/40 to-[#D4AF37]/40">
              <div className="rounded-3xl bg-white/90 backdrop-blur shadow-sm">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#25A4FF]/15 to-[#D4AF37]/15 flex items-center justify-center">
                      <Send className="h-5 w-5 text-[#25A4FF]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Request a Demo or Pilot Access</h3>
                  </div>
                  <p className="mt-3 text-slate-600">Fill out the form below and we’ll get back to you promptly.</p>

                  {/* Placeholder (non-functional form) */}
                  <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-sm text-slate-600">Full Name</label>
                      <input className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#25A4FF]/30" placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-600">Email</label>
                      <input type="email" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#25A4FF]/30" placeholder="jane@example.com" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm text-slate-600">Company / Organization</label>
                      <input className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#25A4FF]/30" placeholder="Suite Displays" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm text-slate-600">Message</label>
                      <textarea rows={5} className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#25A4FF]/30" placeholder="Tell us about your venue and goals" />
                    </div>
                    <div className="md:col-span-2 flex items-center gap-3">
                      <button disabled className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#25A4FF] to-[#D4AF37] px-5 py-2.5 text-white shadow disabled:opacity-70 disabled:pointer-events-none">Submit (placeholder)</button>
                      <span className="text-sm text-slate-500">This form is a placeholder. Email us at <a className="text-[#25A4FF] hover:underline" href="mailto:info@yourcompany.com">info@yourcompany.com</a>.</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
