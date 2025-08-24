import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-light mb-4">
              Suite <span className="text-[#25A4FF] font-medium">Displays</span>
            </h3>
            <p className="text-slate-400 mb-6 max-w-md">
              The premier digital platform for luxury suite management and presentation. 
              Elevating premium experiences through innovative technology.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#25A4FF] to-[#D4AF37]"></div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">Platform</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">Contact</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[#25A4FF]" />
                hello@suitedisplays.com
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[#25A4FF]" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-[#25A4FF]" />
                New York, NY
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Suite Display. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
