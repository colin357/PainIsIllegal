"use client"

import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileBookButton } from "@/components/mobile-book-button"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <MobileBookButton />
    </>
  )
}
