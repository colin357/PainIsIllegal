"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/massage", label: "Massage" },
  { href: "/about", label: "About" },
  { href: "/book", label: "Book" },
  { href: "/legal", label: "Legal" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-ivory-50/90 backdrop-blur-md shadow-sm border-b border-ivory-300/30"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl lg:text-2xl font-serif font-bold text-charcoal-900 tracking-tight">
              Pain Is{" "}
              <span className="text-gold-500 group-hover:text-gold-600 transition-colors">
                Illegal
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-xl transition-colors",
                  pathname === link.href
                    ? "text-gold-600 bg-gold-500/10"
                    : "text-charcoal-700 hover:text-charcoal-900 hover:bg-ivory-200"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-3">
              <Button asChild size="sm">
                <Link href="/book">Book a Session</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-charcoal-700 hover:text-charcoal-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-ivory-300/30 mt-2 pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-xl transition-colors",
                    pathname === link.href
                      ? "text-gold-600 bg-gold-500/10"
                      : "text-charcoal-700 hover:text-charcoal-900 hover:bg-ivory-200"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 px-4">
                <Button asChild className="w-full">
                  <Link href="/book">Book a Session</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
