"use client"

import Link from "next/link"
import { Heart, BookOpen, Users, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 lg:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-ivory-200 to-ivory-300 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="h-32 w-32 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-5xl font-serif font-bold text-gold-600">
                      E
                    </span>
                  </div>
                  <p className="text-sm text-charcoal-700/50">
                    Ethelyn — Holistic Healer
                  </p>
                  <p className="text-xs text-charcoal-700/40 mt-1">Arizona</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-3xl bg-gold-500/10 -z-10" />
              <div className="absolute -top-4 -left-4 h-20 w-20 rounded-2xl bg-gold-500/5 -z-10" />
            </div>
          </FadeIn>

          {/* Bio */}
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-600 text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                About Ethelyn
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal-900 mb-6">
                Healing starts with
                <br />
                <span className="text-gold-500">being heard.</span>
              </h1>
              <div className="space-y-4 text-charcoal-700/80 leading-relaxed">
                <p>
                  Ethelyn is a holistic healer based in Arizona with a singular
                  mission: to help people understand that living with chronic pain
                  is not something they have to accept.
                </p>
                <p>
                  Her journey into holistic healing began with a deep curiosity about
                  the body&apos;s interconnected systems — how physical discomfort
                  often has contributors that extend beyond the obvious. Years of
                  study, practice, and real-world experience have shaped her into an
                  intuitive, thorough, and deeply committed practitioner.
                </p>
                <p>
                  What sets Ethelyn apart is her ability to listen — truly listen.
                  Each client&apos;s story is unique, and she treats it that way.
                  There are no one-size-fits-all solutions. Instead, Ethelyn builds a
                  personalized framework for each individual, drawing on a broad
                  foundation of holistic knowledge to identify root contributors and
                  create actionable paths toward relief.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-serif font-bold text-charcoal-900">
                Philosophy & approach
              </h2>
              <p className="mt-4 text-charcoal-700/70 leading-relaxed">
                Ethelyn&apos;s work is guided by these core principles.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Whole-Person Focus",
                description:
                  "Pain rarely exists in isolation. Ethelyn evaluates the full picture — lifestyle, habits, stress, movement, and more — to uncover what truly contributes to your discomfort.",
              },
              {
                icon: BookOpen,
                title: "Education & Empowerment",
                description:
                  "Understanding your body is a powerful form of relief. Ethelyn ensures you leave every session with knowledge and tools, not just temporary comfort.",
              },
              {
                icon: Users,
                title: "Partnership, Not Prescription",
                description:
                  "Ethelyn works with you, not on you. Your input, feedback, and experience guide every adjustment to your plan. This is a collaboration.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className="h-full p-8">
                  <CardContent className="p-0">
                    <div className="h-12 w-12 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-5">
                      <item.icon className="h-6 w-6 text-gold-500" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-700/70 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Extended bio */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="space-y-6 text-charcoal-700/80 leading-relaxed">
              <h2 className="text-2xl font-serif font-bold text-charcoal-900">
                Why &ldquo;Pain Is Illegal&rdquo;?
              </h2>
              <p>
                The name reflects a bold stance: pain should not be normalized.
                Too many people are told to &ldquo;just live with it&rdquo; or that
                their discomfort is simply a part of aging, stress, or daily life.
                Ethelyn rejects that narrative.
              </p>
              <p>
                &ldquo;Pain Is Illegal&rdquo; is a declaration — a commitment to
                taking pain seriously and approaching it with the urgency and
                attention it deserves. It&apos;s not about quick fixes or empty
                promises. It&apos;s about a deep, informed, personalized approach
                that honors the complexity of each person&apos;s experience.
              </p>
              <p>
                Every client who walks through the door — or joins a Zoom call —
                deserves to feel that their pain matters and that relief is
                possible. That&apos;s the foundation everything is built on.
              </p>

              <div className="pt-4">
                <p className="text-xs text-charcoal-700/50 italic">
                  Note: Ethelyn is a holistic healer, not a licensed medical
                  professional. Her services provide educational guidance and
                  holistic support. They are not a substitute for professional
                  medical advice, diagnosis, or treatment. Please consult your
                  healthcare provider for medical concerns.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="bg-charcoal-900 rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
              Ready to work with Ethelyn?
            </h2>
            <p className="text-ivory-200/70 max-w-md mx-auto mb-8">
              Your path to relief starts with a conversation.
            </p>
            <Button asChild size="lg">
              <Link href="/book">
                Book a Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
