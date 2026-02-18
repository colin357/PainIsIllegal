"use client"

import Link from "next/link"
import {
  Video,
  MapPin,
  Clock,
  Globe,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 lg:mb-24">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-600 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Our Services
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal-900">
              Two pathways to relief
            </h1>
            <p className="mt-4 text-lg text-charcoal-700/70 leading-relaxed">
              Whether virtual or in-person, every session begins with deep
              listening and ends with a clear, personalized plan.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Zoom Service */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 lg:mb-24">
        <FadeIn>
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-gold-500/5 to-gold-500/10 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="h-20 w-20 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-4">
                    <Video className="h-10 w-10 text-gold-500" />
                  </div>
                  <div className="flex items-center gap-2 justify-center text-sm text-charcoal-700/60 mt-4">
                    <Globe className="h-4 w-4" />
                    Available nationwide
                  </div>
                </div>
              </div>
              <CardContent className="p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 mb-4">
                  1-on-1 Zoom Evaluation
                </h2>
                <p className="text-charcoal-700/70 leading-relaxed mb-6">
                  A comprehensive virtual consultation designed to uncover the root
                  contributors to your pain. Ethelyn conducts an in-depth assessment
                  of your situation and develops a personalized treatment framework
                  tailored to your unique needs.
                </p>

                <h4 className="font-semibold text-charcoal-900 mb-3">
                  What&apos;s included:
                </h4>
                <ul className="space-y-3 mb-8">
                  {[
                    "Comprehensive pain and lifestyle assessment",
                    "Identification of root contributors",
                    "Personalized holistic treatment plan",
                    "Follow-up guidance and plan adjustments",
                    "Convenient — attend from anywhere with internet",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-700/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild size="lg">
                  <Link href="/book?tab=zoom">
                    Book a Zoom Evaluation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </FadeIn>
      </section>

      {/* In-Person Service */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 lg:mb-24">
        <FadeIn>
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <CardContent className="p-8 lg:p-12 order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-900 mb-4">
                  In-Person Consultation + Massage
                </h2>
                <p className="text-charcoal-700/70 leading-relaxed mb-6">
                  Experience the full depth of Ethelyn&apos;s holistic approach with
                  a hands-on session at our private Arizona location. Combines
                  thorough evaluation with therapeutic massage tailored to your
                  specific areas of concern.
                </p>

                <h4 className="font-semibold text-charcoal-900 mb-3">
                  What&apos;s included:
                </h4>
                <ul className="space-y-3 mb-6">
                  {[
                    "In-person holistic pain assessment",
                    "Therapeutic massage focused on your areas of concern",
                    "Personalized treatment plan",
                    "Hands-on guidance for at-home practices",
                    "Private, comfortable Arizona location",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal-700/80">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="bg-ivory-100 rounded-2xl p-6 mb-6">
                  <h4 className="font-semibold text-charcoal-900 mb-4">Pricing</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-charcoal-700/50" />
                        <span className="text-sm text-charcoal-800">
                          60-minute session
                        </span>
                      </div>
                      <span className="text-2xl font-serif font-bold text-charcoal-900">
                        $100
                      </span>
                    </div>
                    <div className="border-t border-ivory-300/50" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-charcoal-700/50" />
                        <span className="text-sm text-charcoal-800">
                          90-minute session
                        </span>
                      </div>
                      <span className="text-2xl font-serif font-bold text-charcoal-900">
                        $130
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-charcoal-700/50 mb-6">
                  Availability is limited. Location details are provided after your
                  booking request is confirmed.
                </p>

                <Button asChild variant="secondary" size="lg">
                  <Link href="/book?tab=inperson">
                    Book an In-Person Session
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
              <div className="bg-gradient-to-br from-charcoal-800/5 to-charcoal-800/10 p-8 lg:p-12 flex items-center justify-center order-1 lg:order-2">
                <div className="text-center">
                  <div className="h-20 w-20 rounded-full bg-charcoal-800/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-10 w-10 text-charcoal-800" />
                  </div>
                  <div className="flex items-center gap-2 justify-center text-sm text-charcoal-700/60 mt-4">
                    <MapPin className="h-4 w-4" />
                    Arizona location
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </FadeIn>
      </section>

      {/* What to expect */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 lg:mb-24">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-charcoal-900">
              What to expect
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              step: "1",
              title: "Book & Share",
              description:
                "Submit your booking request and describe your pain situation. This helps Ethelyn prepare for your session.",
            },
            {
              step: "2",
              title: "Evaluate & Discover",
              description:
                "During your session, Ethelyn conducts a thorough evaluation to identify the root contributors to your discomfort.",
            },
            {
              step: "3",
              title: "Plan & Progress",
              description:
                "Receive your personalized treatment plan and begin implementing it with Ethelyn's ongoing guidance and support.",
            },
          ].map((item) => (
            <StaggerItem key={item.step}>
              <div className="text-center p-6">
                <div className="h-12 w-12 rounded-full bg-gold-500 text-white font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-serif font-semibold text-charcoal-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-700/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="bg-charcoal-900 rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
              Ready to begin?
            </h2>
            <p className="text-ivory-200/70 max-w-md mx-auto mb-8">
              Take the first step toward understanding and addressing your pain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/book?tab=zoom">Book Zoom Evaluation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-ivory-200/30 text-ivory-100 hover:bg-ivory-100/10 hover:text-white"
              >
                <Link href="/book?tab=inperson">Book In-Person (AZ)</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
