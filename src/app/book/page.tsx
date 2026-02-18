"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { Video, MapPin } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeIn } from "@/components/motion"
import { BookingForm } from "@/components/booking-form"

function BookingContent() {
  const searchParams = useSearchParams()
  const tab = searchParams.get("tab")
  const defaultTab = tab === "inperson" ? "inperson" : "zoom"

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16 bg-pattern">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal-900">
              Book your session
            </h1>
            <p className="mt-4 text-charcoal-700/70 max-w-lg mx-auto leading-relaxed">
              Choose your preferred format and tell us about your situation.
              We&apos;ll respond within 24 hours to confirm your appointment.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="zoom" className="gap-2">
                <Video className="h-4 w-4" />
                Zoom Evaluation
              </TabsTrigger>
              <TabsTrigger value="inperson" className="gap-2">
                <MapPin className="h-4 w-4" />
                In-Person (AZ)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="zoom">
              <div className="mt-6">
                <div className="bg-gold-500/5 border border-gold-500/10 rounded-2xl p-6 mb-8">
                  <h3 className="font-serif font-semibold text-charcoal-900 mb-2">
                    1-on-1 Zoom Evaluation
                  </h3>
                  <p className="text-sm text-charcoal-700/70 leading-relaxed">
                    A comprehensive virtual assessment where Ethelyn evaluates your
                    pain patterns and creates a personalized treatment framework.
                    Available nationwide — all you need is a quiet space and a
                    stable internet connection.
                  </p>
                </div>
                <BookingForm defaultService="zoom-evaluation" />
              </div>
            </TabsContent>

            <TabsContent value="inperson">
              <div className="mt-6">
                <div className="bg-charcoal-800/5 border border-charcoal-800/10 rounded-2xl p-6 mb-8">
                  <h3 className="font-serif font-semibold text-charcoal-900 mb-2">
                    In-Person Consultation + Massage
                  </h3>
                  <p className="text-sm text-charcoal-700/70 leading-relaxed mb-3">
                    Hands-on evaluation and therapeutic massage at our Arizona
                    location. Includes holistic assessment and personalized bodywork.
                  </p>
                  <div className="flex gap-6 text-sm">
                    <div>
                      <span className="text-charcoal-700/50">60 min:</span>{" "}
                      <span className="font-semibold text-charcoal-900">$100</span>
                    </div>
                    <div>
                      <span className="text-charcoal-700/50">90 min:</span>{" "}
                      <span className="font-semibold text-charcoal-900">$130</span>
                    </div>
                  </div>
                  <p className="text-xs text-charcoal-700/50 mt-3">
                    Availability is limited. Location details provided after booking
                    confirmation.
                  </p>
                </div>
                <BookingForm defaultService="in-person-60" />
              </div>
            </TabsContent>
          </Tabs>
        </FadeIn>
      </div>
    </div>
  )
}

export default function BookPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-24 lg:pt-32 pb-16 flex items-center justify-center">
          <p className="text-charcoal-700/50">Loading...</p>
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  )
}
