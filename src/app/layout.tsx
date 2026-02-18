import type { Metadata } from "next"
import "./globals.css"
import { ClientLayout } from "@/components/client-layout"

export const metadata: Metadata = {
  title: {
    default: "Pain Is Illegal | Holistic Pain Relief with Ethelyn",
    template: "%s | Pain Is Illegal",
  },
  description:
    "Revolutionary holistic guidance for pain relief. Book a personalized Zoom evaluation or in-person consultation with Ethelyn in Arizona. Relief is possible.",
  keywords: [
    "holistic pain relief",
    "pain management",
    "holistic healer",
    "Arizona massage",
    "pain evaluation",
    "holistic consultation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Pain Is Illegal",
    title: "Pain Is Illegal | Holistic Pain Relief with Ethelyn",
    description:
      "Revolutionary holistic guidance for pain relief. Book a personalized evaluation or in-person session in Arizona.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pain Is Illegal | Holistic Pain Relief with Ethelyn",
    description:
      "Revolutionary holistic guidance for pain relief. Book a personalized evaluation or in-person session in Arizona.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
