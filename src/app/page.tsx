"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Video,
  MapPin,
  ClipboardCheck,
  Lightbulb,
  Rocket,
  Star,
  Shield,
  Heart,
  Target,
  Sparkles,
  Quote,
  X,
  Check,
  Phone,
  Clock,
  Zap,
  Moon,
  Activity,
  TrendingUp,
  Users,
  Hand,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

/* ─────────────────────── HERO ─────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-charcoal-900 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&q=80"
          alt="Holistic healing session"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/95 to-charcoal-900/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 lg:pt-32">
        <div className="max-w-3xl">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 text-gold-400 text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4" />
              For people with stubborn chronic pain who want real relief
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight">
              Real relief in
              <br />
              <span className="text-gold-400">30 days or less.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="mt-6 text-lg sm:text-xl text-ivory-200/80 max-w-2xl leading-relaxed">
              Without meds, surgery, or endless appointments &mdash; even if pain
              has dragged on for years. A simple, common-sense plan built for
              people with stubborn chronic pain.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/book?tab=zoom">
                  <Video className="mr-2 h-5 w-5" />
                  Book a Consultation
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-ivory-200/30 text-ivory-100 hover:bg-ivory-100/10 hover:text-white"
              >
                <Link href="/book?tab=inperson">
                  <MapPin className="mr-2 h-5 w-5" />
                  Book In-Person (AZ)
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.65}>
            <p className="mt-6 text-sm text-ivory-200/50">
              Virtual evaluations available nationwide. In-person sessions &amp;
              massage in Arizona.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── INTRO ─────────────────────── */
function IntroSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-600 text-sm font-medium mb-6">
            Introducing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal-900 mb-6">
            Pain Is Illegal&trade;
          </h2>
          <p className="text-lg sm:text-xl text-charcoal-700/80 leading-relaxed max-w-3xl mx-auto">
            A simple, common-sense plan built for people with stubborn chronic
            pain. Get real relief in 30 days or less,{" "}
            <span className="font-semibold text-charcoal-900">without</span>{" "}
            meds, surgery, or endless appointments, so you can sleep, move, and
            live again &mdash; even if every test said &ldquo;you&apos;re
            fine.&rdquo;
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────────── IMAGINE THIS ─────────────────────── */
function ImagineSection() {
  const outcomes = [
    {
      icon: Moon,
      title: "Sleep is deep again",
      description:
        "No 2 a.m. pain spikes. Your body finally remembers how to rest.",
    },
    {
      icon: Zap,
      title: "Energy is back",
      description:
        "You're not dragging or glued to the couch. Errands, workouts, life — on your terms.",
    },
    {
      icon: Activity,
      title: "Moving without fear",
      description:
        "Walking, lifting, sitting — normal stuff — no longer feels like a brutal obstacle course.",
    },
    {
      icon: Shield,
      title: "Flares are rare and short",
      description:
        "You know the simple moves that shut them down fast.",
    },
    {
      icon: Heart,
      title: "Mornings are quiet again",
      description:
        "You wake up without that vicious, nagging ache. Shoes on. Day started.",
    },
    {
      icon: Users,
      title: "Friends notice the change",
      description:
        "\"You look different — lighter.\" You smile because it's true.",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-ivory-100/50 bg-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              Imagine This&hellip;
            </h2>
            <p className="mt-4 text-charcoal-700/70 leading-relaxed">
              No pill panic, no surgery talk &mdash; just a clear, common-sense
              plan that actually works.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="h-full p-8 hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="h-12 w-12 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-5">
                    <item.icon className="h-6 w-6 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-700/70 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

/* ─────────────────────── OLD WAY vs NEW WAY ─────────────────────── */
function ComparisonSection() {
  const oldWay = [
    "Chasing symptoms with pills, ice, and \"rest more\" while nothing actually changes",
    "Five specialists, normal tests, zero answers — just bigger bills",
    "Generic exercise sheets you hate (and skip) because they flare you up",
    "Food fads, gadgets, and Google rabbit holes that drain time and cash",
    "Living scared of flares, moving less, feeling older by the week",
  ]

  const newWay = [
    "Find the real cause first, then use simple daily moves that calm pain fast",
    "A clear, common-sense plan that fits real life — no gym grind, no pricey gear",
    "Relief in 30 days or less — track wins so progress is obvious, not guesswork",
    "Sleep deeper, move easier, get energy back without meds or surgery",
    "Know exactly what to do when a flare tries to start — and shut it down quick",
  ]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              This has never existed before
            </h2>
            <p className="mt-4 text-charcoal-700/70 leading-relaxed">
              An unfair advantage over pain.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Old Way */}
          <FadeIn delay={0.1}>
            <Card className="h-full border-red-200/50 bg-red-50/30">
              <CardContent className="p-8 lg:p-10">
                <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-2">
                  The Old Way
                </h3>
                <p className="text-sm text-charcoal-700/60 mb-6">
                  What you&apos;ve been sold
                </p>
                <ul className="space-y-4">
                  {oldWay.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-charcoal-700/80"
                    >
                      <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="h-3 w-3 text-red-500" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          {/* New Way */}
          <FadeIn delay={0.25}>
            <Card className="h-full border-green-200/50 bg-green-50/30">
              <CardContent className="p-8 lg:p-10">
                <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-2">
                  The New Way
                </h3>
                <p className="text-sm text-charcoal-700/60 mb-6">
                  What Pain Is Illegal&trade; makes possible
                </p>
                <ul className="space-y-4">
                  {newWay.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-charcoal-700/80"
                    >
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── HOW IT WORKS ─────────────────────── */
function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: Target,
      title: "Find the Real Cause",
      description:
        "A short, simple check to spot what's actually driving the pain. No fluff. No guesswork. Just the real problem — so fixes stick.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Calm It Fast",
      description:
        "Use easy daily moves that fit real life — simple routines that lower pain, help sleep, and bring energy back. No meds. No surgery. No pricey gear.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Lock It In",
      description:
        "Track wins so progress is obvious. Get a quick \"flare plan\" so spikes shrink fast. Keep the gains. Get your life back.",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-ivory-100/50 bg-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              How it works
            </h2>
            <p className="mt-4 text-charcoal-700/70 leading-relaxed">
              More relief. More life. Less fear.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="h-20 w-20 rounded-full bg-gold-500/10 flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-gold-500" />
                  </div>
                  <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-charcoal-900 text-ivory-100 text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-charcoal-700/70 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/book">Book a Consultation</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────────── SERVICES ─────────────────────── */
function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              Two ways to begin
            </h2>
            <p className="mt-4 text-charcoal-700/70 leading-relaxed">
              Choose the format that suits you. Both paths lead to a clear,
              personalized plan for relief.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Zoom Card */}
          <FadeIn delay={0.1}>
            <Card className="relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600" />
              <CardContent className="p-8 lg:p-10">
                <div className="h-14 w-14 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-6">
                  <Video className="h-7 w-7 text-gold-500" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-3">
                  1-on-1 Zoom Evaluation
                </h3>
                <p className="text-charcoal-700/70 leading-relaxed mb-6">
                  A comprehensive virtual assessment where Ethelyn evaluates your
                  pain patterns and creates a personalized treatment framework.
                  Available to clients nationwide.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "In-depth pain assessment",
                    "Personalized treatment plan",
                    "Follow-up guidance included",
                    "Convenient from anywhere",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-charcoal-700/80"
                    >
                      <div className="h-5 w-5 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link href="/book?tab=zoom">Book a Zoom Evaluation</Link>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>

          {/* In-Person Card */}
          <FadeIn delay={0.25}>
            <Card className="relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-charcoal-700 to-charcoal-900" />
              <CardContent className="p-8 lg:p-10">
                <div className="h-14 w-14 rounded-2xl bg-charcoal-800/10 flex items-center justify-center mb-6">
                  <Hand className="h-7 w-7 text-charcoal-800" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-3">
                  In-Person Consultation + Massage
                </h3>
                <p className="text-charcoal-700/70 leading-relaxed mb-4">
                  Hands-on evaluation and therapeutic massage at our Arizona
                  location. Experience personalized, attentive bodywork combined
                  with holistic assessment.
                </p>
                <div className="bg-ivory-100 rounded-2xl p-4 mb-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm font-medium text-charcoal-800">
                      60-minute session
                    </span>
                    <span className="text-xl font-serif font-bold text-charcoal-900">
                      $90
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-charcoal-800">
                      90-minute session
                    </span>
                    <span className="text-xl font-serif font-bold text-charcoal-900">
                      $120
                    </span>
                  </div>
                </div>
                <p className="text-xs text-charcoal-700/50 mb-4">
                  Availability is limited. Location details provided after booking.
                </p>
                <div className="flex flex-col gap-3">
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/book?tab=inperson">Book an In-Person Session</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/massage">View Full Massage Menu</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── CASE STUDIES ─────────────────────── */
function CaseStudiesSection() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-100/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              Real People. Real Relief.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Case Study 1 */}
          <FadeIn delay={0.1}>
            <Card className="h-full">
              <CardContent className="p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-600 text-xs font-medium mb-4">
                  Case Study #1
                </div>
                <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-4">
                  &ldquo;Back on my feet in weeks.&rdquo;
                </h3>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-charcoal-800 mb-2">Before:</p>
                  <p className="text-sm text-charcoal-700/70 leading-relaxed">
                    Maria, 42, lived with brutal low back pain for 3 years. Mornings
                    were a fight. Sitting hurt. Sleep was broken. She&apos;d tried pills,
                    PT, and &ldquo;rest more.&rdquo; Nothing stuck.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal-800 mb-3">After (30 days):</p>
                  <div className="space-y-2">
                    {[
                      { label: "Pain dropped from 8", result: "2" },
                      { label: "Sleep: 4 hours", result: "7+ hours (no 2 a.m. spikes)" },
                      { label: "Daily steps: 2k", result: "7k without flares" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 text-sm"
                      >
                        <TrendingUp className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-charcoal-700/70">{item.label} &rarr;</span>
                        <span className="font-semibold text-charcoal-900">{item.result}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-charcoal-700/60">
                    Back to driving kids, light workouts, and cooking dinner — no meds, no surgery.
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Case Study 2 */}
          <FadeIn delay={0.25}>
            <Card className="h-full">
              <CardContent className="p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-600 text-xs font-medium mb-4">
                  Case Study #2
                </div>
                <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-4">
                  &ldquo;Knee pain stopped bossing me around.&rdquo;
                </h3>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-charcoal-800 mb-2">Before:</p>
                  <p className="text-sm text-charcoal-700/70 leading-relaxed">
                    James, 55, had nagging knee pain for 18 months. Stairs were
                    vicious. He skipped golf and stood up slow. Every test was
                    &ldquo;normal,&rdquo; but nothing felt normal.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal-800 mb-3">After (28 days):</p>
                  <div className="space-y-2">
                    {[
                      { label: "Pain dropped from 7", result: "1-2" },
                      { label: "Stairs", result: "without holding the rail" },
                      { label: "9 holes walking", result: "felt steady the next day" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 text-sm"
                      >
                        <TrendingUp className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-charcoal-700/70">{item.label} &rarr;</span>
                        <span className="font-semibold text-charcoal-900">{item.result}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-charcoal-700/60">
                    No ice, no injections, no pricey gadgets.
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── TESTIMONIALS ─────────────────────── */
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Lena R.",
      location: "Phoenix, AZ",
      text: "It felt like someone finally found the switch. I stopped living scared of my next flare. The steps were simple, and the wins showed up fast.",
    },
    {
      name: "Chris T.",
      location: "Austin, TX",
      text: "I sleep. I move. I'm me again. I tried everything. This was the first time the plan actually fit my life — and it worked.",
    },
    {
      name: "Ava S.",
      location: "San Diego, CA",
      text: "No meds. No surgery talk. Just relief. The daily moves were easy. The results were loud. My family noticed before I did.",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              What clients are saying
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <Card className="h-full p-8">
                <CardContent className="p-0">
                  <Quote className="h-8 w-8 text-gold-400/30 mb-4" />
                  <p className="text-charcoal-700/80 leading-relaxed mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold-400 text-gold-400"
                      />
                    ))}
                  </div>
                  <p className="font-semibold text-sm text-charcoal-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-charcoal-700/50">{t.location}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

/* ─────────────────────── ABOUT ─────────────────────── */
function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-100/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-charcoal-800 to-charcoal-900 flex items-center justify-center overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                  alt="Ethelyn Schaeffer — Chronic Pain Specialist"
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-gold-500/10 -z-10" />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-600 text-sm font-medium mb-6">
                Meet your guide
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900 mb-6">
                Ethelyn Schaeffer
              </h2>
              <div className="space-y-4 text-charcoal-700/80 leading-relaxed">
                <p>
                  I know what it&apos;s like to wake up every morning wondering if today
                  will hurt worse than yesterday. The doctors said, &ldquo;Everything
                  looks normal.&rdquo; But nothing about it felt normal.
                </p>
                <p>
                  I reached a breaking point. I was tired of{" "}
                  <span className="italic">managing</span> pain &mdash; I wanted to{" "}
                  <span className="font-semibold text-charcoal-900">end</span> it.
                  That&apos;s when I stopped treating pain like the problem and started
                  asking why it kept showing up.
                </p>
                <p>
                  What I found was shockingly simple, and completely ignored by most
                  professionals. The body wasn&apos;t broken; it was misfiring. The pain
                  wasn&apos;t random &mdash; it was a message. Once I decoded that message,
                  things changed fast.
                </p>
                <p>
                  With over 28 years of experience and a background in physical therapy,
                  I built Pain Is Illegal&trade; so no one else has to go through the same
                  brutal, lonely cycle I did.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline">
                  <Link href="/about">Learn more about Ethelyn</Link>
                </Button>
                <Button asChild>
                  <Link href="/book">
                    <Phone className="mr-2 h-4 w-4" />
                    Book a Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── PAIN POINTS ─────────────────────── */
function PainPointsSection() {
  const painPoints = [
    "No more waking up to that vicious morning ache",
    "Say goodbye to sitting, standing, or driving that turns into a pain trap",
    "No more 2 a.m. spikes that wreck sleep",
    "Say goodbye to \"normal tests\" but zero answers",
    "No more living scared of stairs, groceries, or picking things up",
    "No more popping pills that only numb it for a minute",
    "No more flare roulette after simple workouts or long walks",
    "Say goodbye to endless appointments that drain time, cash, and hope",
  ]

  return (
    <section className="py-24 lg:py-32 bg-charcoal-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Tired of Feeling This Way?
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {painPoints.map((point) => (
            <StaggerItem key={point}>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-ivory-100/5 border border-ivory-200/10">
                <Check className="h-5 w-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-ivory-200/80">{point}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

/* ─────────────────────── URGENCY ─────────────────────── */
function UrgencySection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900 mb-8">
            Imagine if You Waited&hellip;
          </h2>
          <div className="space-y-6 text-charcoal-700/80 leading-relaxed text-lg">
            <p>
              A few weeks from now, you&apos;ll either be moving through your day
              without that vicious ache&hellip; <span className="font-semibold text-charcoal-900">or still guarding every step</span>,
              praying today isn&apos;t another flare.
            </p>
            <p>
              You&apos;ll either be sleeping straight through the night&hellip;{" "}
              <span className="font-semibold text-charcoal-900">or staring at the clock at 2 a.m.</span>,
              again, with that familiar burn.
            </p>
            <p>
              You&apos;ll either know the simple moves that shut pain down fast&hellip;{" "}
              <span className="font-semibold text-charcoal-900">or still bouncing between pills, appointments,
              and Google rabbit holes.</span>
            </p>
            <p className="text-xl font-semibold text-charcoal-900 pt-4">
              Time will pass either way.
            </p>
            <p className="text-gold-600 font-medium">
              Why spend more months stuck in the same loop when a clear,
              common-sense plan can break it &mdash; fast?
            </p>
          </div>
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/book">
                <Sparkles className="mr-2 h-5 w-5" />
                Book a Consultation Today
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────────── FAQ ─────────────────────── */
function FAQSection() {
  const faqs = [
    {
      question: "I've tried everything. Why would this work?",
      answer:
        "Because we don't chase symptoms — we find the real cause. Then we use simple daily moves that calm it fast. No guesswork. No fancy gear. You'll track wins so progress is obvious, not wishful thinking. Most people feel a clear shift in 30 days or less.",
    },
    {
      question: "Do I have to quit my meds or cancel surgery?",
      answer:
        "No. This isn't medical advice, and you should always work with your doctor. This program is education + action you can run alongside your current care. Many clients use it to feel better now while making smarter choices with their provider.",
    },
    {
      question: "What if I flare, or I'm crazy busy?",
      answer:
        "You'll get a quick \"flare plan\" to shut spikes down fast. Daily work is short and simple (think minutes, not hours). No gym grind. No pricey gadgets. Miss a day? You're not \"behind.\" Just pick up the next step and keep stacking easy wins.",
    },
    {
      question: "What is the difference between a Zoom evaluation and an in-person session?",
      answer:
        "A Zoom evaluation is a comprehensive virtual consultation where Ethelyn assesses your pain patterns and develops a personalized treatment plan. It's ideal for clients outside Arizona or those who prefer the convenience of a virtual session. An in-person session in Arizona includes hands-on assessment and therapeutic massage in addition to the evaluation.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Zoom evaluations are priced upon consultation. In-person sessions in Arizona are $90 for 60 minutes or $120 for 90 minutes. These include both the holistic evaluation and therapeutic massage. Visit our massage page for more details.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We ask that you provide at least 24 hours' notice for cancellations or rescheduling. This allows us to offer the time slot to another client in need. Late cancellations may be subject to a fee.",
    },
    {
      question: "Is this medical advice?",
      answer:
        "No. Pain Is Illegal provides holistic, educational guidance and support — not medical advice, diagnosis, or treatment. Ethelyn is a holistic healer and licensed massage therapist, not a licensed medical professional. We always recommend consulting with your healthcare provider for medical concerns.",
    },
    {
      question: "Where are in-person sessions held?",
      answer:
        "In-person sessions are held at 6700 N Oracle Rd STE 236, Tucson, AZ 85704. Availability is limited.",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-ivory-100/50 bg-grid">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              Frequently asked questions
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────────── CTA BANNER ─────────────────────── */
function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
            Ready to take pain
            <br />
            <span className="text-gold-400">seriously?</span>
          </h2>
          <p className="mt-6 text-ivory-200/70 text-lg max-w-xl mx-auto leading-relaxed">
            Your journey toward relief starts with a single conversation. Book your
            consultation today and discover what&apos;s possible.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/book?tab=zoom">
                <Video className="mr-2 h-5 w-5" />
                Book a Zoom Evaluation
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-ivory-200/30 text-ivory-100 hover:bg-ivory-100/10 hover:text-white"
            >
              <Link href="/book?tab=inperson">
                <MapPin className="mr-2 h-5 w-5" />
                Book In-Person (AZ)
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-ivory-200/50 text-sm">
            Call or text: 480-549-7188
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────────── PAGE ─────────────────────── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ImagineSection />
      <ComparisonSection />
      <ProcessSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <AboutSection />
      <PainPointsSection />
      <UrgencySection />
      <FAQSection />
      <CTASection />
    </>
  )
}
