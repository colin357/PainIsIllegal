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
    <section className="relative min-h-[90vh] flex items-center bg-pattern">
      {/* Abstract decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-600 text-sm font-medium mb-8">
                <Sparkles className="h-4 w-4" />
                Revolutionary holistic guidance
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-charcoal-900 leading-[1.1] tracking-tight">
                Your pain is not
                <br />
                <span className="text-gold-500">something to accept.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="mt-6 text-lg sm:text-xl text-charcoal-700/80 max-w-xl leading-relaxed">
                Ethelyn offers personalized, holistic evaluations and treatment plans
                designed to help you understand the root contributors to your
                discomfort — and take decisive steps toward relief.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/book?tab=zoom">
                    <Video className="mr-2 h-5 w-5" />
                    Book a Zoom Evaluation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/book?tab=inperson">
                    <MapPin className="mr-2 h-5 w-5" />
                    Book an In-Person Session
                  </Link>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.65}>
              <p className="mt-6 text-sm text-charcoal-700/50">
                Virtual evaluations available nationwide. In-person sessions in
                Arizona.
              </p>
            </FadeIn>
          </div>

          {/* Hero image */}
          <FadeIn delay={0.3} direction="right">
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
                  alt="Holistic healing session — calm, professional wellness environment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Warm overlay for brand cohesion */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/20 via-transparent to-gold-400/5" />
              </div>
              {/* Decorative accents */}
              <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-2xl bg-gold-500/10 -z-10" />
              <div className="absolute -top-4 -right-4 h-20 w-20 rounded-2xl bg-gold-400/10 -z-10" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── TRUST / OUTCOMES ─────────────────────── */
function TrustSection() {
  const outcomes = [
    {
      icon: Target,
      title: "Root Contributor Analysis",
      description:
        "Go beyond surface-level symptoms. Ethelyn's framework identifies the underlying contributors to your pain pattern.",
    },
    {
      icon: ClipboardCheck,
      title: "Personalized Treatment Plan",
      description:
        "Receive a tailored plan built around your unique situation — not a one-size-fits-all approach.",
    },
    {
      icon: Shield,
      title: "Non-Invasive Approach",
      description:
        "A holistic, supportive methodology that works with your body's own capacity for balance and recovery.",
    },
    {
      icon: Heart,
      title: "Ongoing Guidance & Support",
      description:
        "Ethelyn partners with you through your journey, adjusting your plan as you progress toward relief.",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              What you&apos;ll experience
            </h2>
            <p className="mt-4 text-charcoal-700/70 leading-relaxed">
              A premium, personalized approach to understanding and addressing your
              pain — grounded in holistic principles and decisive expertise.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

/* ─────────────────────── SERVICES ─────────────────────── */
function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-100/50 bg-grid">
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
                  <MapPin className="h-7 w-7 text-charcoal-800" />
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
                      $100
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-charcoal-800">
                      90-minute session
                    </span>
                    <span className="text-xl font-serif font-bold text-charcoal-900">
                      $130
                    </span>
                  </div>
                </div>
                <p className="text-xs text-charcoal-700/50 mb-6">
                  Availability is limited. Location details are provided after your
                  booking request is confirmed.
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/book?tab=inperson">Book an In-Person Session</Link>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── PROCESS ─────────────────────── */
function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: ClipboardCheck,
      title: "Evaluate",
      description:
        "Begin with a thorough evaluation — either via Zoom or in-person. Ethelyn listens deeply and maps your unique pain landscape.",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Plan",
      description:
        "Receive a personalized, holistic treatment plan designed around the root contributors to your discomfort.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Implement",
      description:
        "Put your plan into action with ongoing guidance. Adjustments are made as your body responds and progress unfolds.",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              How it works
            </h2>
            <p className="mt-4 text-charcoal-700/70 leading-relaxed">
              A clear, three-step framework to move from pain to progress.
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
          {/* Image placeholder */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-ivory-200 to-ivory-300 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="h-24 w-24 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-serif font-bold text-gold-600">E</span>
                  </div>
                  <p className="text-sm text-charcoal-700/50">Ethelyn — Holistic Healer</p>
                </div>
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
                Ethelyn
              </h2>
              <div className="space-y-4 text-charcoal-700/80 leading-relaxed">
                <p>
                  Ethelyn is a dedicated holistic healer based in Arizona, driven by
                  a singular conviction: no one should have to accept pain as a
                  permanent part of life.
                </p>
                <p>
                  With years of experience studying the body&apos;s interconnected
                  systems and a deep commitment to understanding each client&apos;s
                  unique situation, Ethelyn brings a blend of warmth, expertise, and
                  revolutionary information to every session.
                </p>
                <p>
                  Her approach goes beyond temporary relief. By identifying root
                  contributors and building personalized frameworks for each client,
                  she empowers people to take decisive, informed steps toward lasting
                  comfort and vitality.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild variant="outline">
                  <Link href="/about">Learn more about Ethelyn</Link>
                </Button>
              </div>
            </div>
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
      name: "Sarah M.",
      location: "Scottsdale, AZ",
      text: "After years of searching for answers, Ethelyn's approach finally helped me understand what was contributing to my pain. The personalized plan made all the difference.",
    },
    {
      name: "James T.",
      location: "Phoenix, AZ",
      text: "The Zoom evaluation was thorough and deeply insightful. I felt genuinely heard for the first time. Ethelyn's guidance gave me a clear path forward.",
    },
    {
      name: "Maria L.",
      location: "Tucson, AZ",
      text: "The in-person session was transformative. Ethelyn's holistic approach and skilled massage helped me experience relief I hadn't felt in years. Truly premium care.",
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
            <p className="mt-4 text-xs text-charcoal-700/50 italic">
              These are example testimonials for demonstration purposes only.
            </p>
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

/* ─────────────────────── FAQ ─────────────────────── */
function FAQSection() {
  const faqs = [
    {
      question: "What is the difference between a Zoom evaluation and an in-person session?",
      answer:
        "A Zoom evaluation is a comprehensive virtual consultation where Ethelyn assesses your pain patterns and develops a personalized treatment plan. It's ideal for clients outside Arizona or those who prefer the convenience of a virtual session. An in-person session in Arizona includes hands-on assessment and therapeutic massage in addition to the evaluation.",
    },
    {
      question: "Who is this for?",
      answer:
        "This is for anyone experiencing chronic or recurring pain who is seeking a holistic, personalized approach. Whether you've tried traditional methods without success or want a fresh perspective on pain relief, Ethelyn's framework is designed to help you understand and address your unique situation.",
    },
    {
      question: "What should I expect during my first session?",
      answer:
        "During your first session, Ethelyn will listen to your full pain history, ask detailed questions about your lifestyle and daily patterns, and begin mapping the contributors to your discomfort. You'll leave with initial insights and a clear outline of next steps.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Zoom evaluations are priced upon consultation. In-person sessions in Arizona are $100 for 60 minutes or $130 for 90 minutes. These include both the holistic evaluation and therapeutic massage.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We ask that you provide at least 24 hours' notice for cancellations or rescheduling. This allows us to offer the time slot to another client in need. Late cancellations may be subject to a fee.",
    },
    {
      question: "Is this medical advice?",
      answer:
        "No. Pain Is Illegal provides holistic, educational guidance and support — not medical advice, diagnosis, or treatment. Ethelyn is a holistic healer, not a licensed medical professional. We always recommend consulting with your healthcare provider for medical concerns.",
    },
    {
      question: "Where are in-person sessions held?",
      answer:
        "In-person sessions are conducted at a private location in Arizona. Exact location details and directions are provided after your booking request is confirmed. Availability is limited.",
    },
    {
      question: "How do I prepare for my evaluation?",
      answer:
        "Come prepared to share your pain history openly. Note any patterns you've observed — times of day, activities, or positions that affect your discomfort. Wear comfortable clothing and have a quiet space if joining via Zoom.",
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
            evaluation today and discover what&apos;s possible.
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
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
