import Link from "next/link"
import { MapPin, Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-ivory-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white">
              Pain Is <span className="text-gold-400">Illegal</span>
            </h3>
            <p className="text-ivory-200/70 text-sm leading-relaxed max-w-xs">
              Revolutionary guidance for pain relief. A personalized, holistic
              approach to help you reclaim comfort and vitality.
            </p>
            <div className="flex items-center gap-2 text-sm text-ivory-200/60">
              <MapPin className="h-4 w-4 text-gold-400" />
              <span>Tucson, Arizona</span>
            </div>
            <p className="text-sm text-ivory-200/60">
              Call/Text: 480-549-7188
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/massage", label: "Ethelyn's Massage" },
                { href: "/about", label: "About Ethelyn" },
                { href: "/book", label: "Book a Session" },
                { href: "/legal", label: "Legal & Disclaimers" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ivory-200/60 hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="h-10 w-10 rounded-xl bg-charcoal-800 flex items-center justify-center text-ivory-200/60 hover:text-gold-400 hover:bg-charcoal-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="h-10 w-10 rounded-xl bg-charcoal-800 flex items-center justify-center text-ivory-200/60 hover:text-gold-400 hover:bg-charcoal-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="h-10 w-10 rounded-xl bg-charcoal-800 flex items-center justify-center text-ivory-200/60 hover:text-gold-400 hover:bg-charcoal-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-ivory-200/40 leading-relaxed">
              This website provides educational information and holistic guidance.
              It is not a substitute for professional medical advice, diagnosis,
              or treatment.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-charcoal-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-ivory-200/40">
              &copy; {new Date().getFullYear()} Pain Is Illegal. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/legal"
                className="text-xs text-ivory-200/40 hover:text-gold-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal"
                className="text-xs text-ivory-200/40 hover:text-gold-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
