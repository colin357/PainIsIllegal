"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar } from "lucide-react"

export function MobileBookButton() {
  const pathname = usePathname()

  // Don't show on the booking page itself
  if (pathname === "/book") return null

  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      <Link
        href="/book"
        className="flex items-center gap-2 bg-gold-500 text-white px-5 py-3 rounded-2xl shadow-lg hover:bg-gold-600 transition-all hover:shadow-xl active:scale-95"
      >
        <Calendar className="h-4 w-4" />
        <span className="text-sm font-medium">Book</span>
      </Link>
    </div>
  )
}
