"use client"

import Link from "next/link"
import {
  Heart,
  Shield,
  Leaf,
  Award,
  MapPin,
  Clock,
  Phone,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

/* ─────────────────────── TYPES ─────────────────────── */
interface MassageService {
  category: string
  name: string
  price: number
  duration: string
  description: string
}

/* ─────────────────────── DATA ─────────────────────── */
const services: MassageService[] = [
  {
    category: "Massage",
    name: "Therapeutic Massage",
    price: 90,
    duration: "60 Minutes",
    description:
      "A personalized 60-minute massage session combining relaxation and therapeutic techniques to alleviate stress, tension, and pain. This treatment uses intuitive therapy to gently release tension, stimulate circulation, and promote overall well-being. Hot towels included.",
  },
  {
    category: "Massage",
    name: "Therapeutic Massage",
    price: 120,
    duration: "90 Minutes",
    description:
      "An extended 90-minute massage session blending deep tissue work, gentle kneading, and flowing strokes to melt away tension and address chronic pain. This soothing treatment improves circulation, reduces stress, and fosters a renewed sense of well-being, ensuring you leave feeling revitalized.",
  },
]

const whyChooseUs = [
  {
    icon: Heart,
    title: "Pain Relief",
    description:
      "Expert techniques to alleviate chronic pain, muscle tension, and discomfort.",
  },
  {
    icon: Shield,
    title: "Stress Reduction",
    description:
      "Calm your mind and body with therapeutic relaxation techniques.",
  },
  {
    icon: Leaf,
    title: "Natural Healing",
    description:
      "Holistic approach to wellness using proven massage therapy methods.",
  },
  {
    icon: Award,
    title: "Professional Care",
    description:
      "Licensed therapist with 28+ years of expertise in various massage modalities.",
  },
]

/* ─────────────────────── HERO ─────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-pattern">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 lg:pt-32">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-600 text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4" />
              Ethelyn&apos;s Massage
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-charcoal-900 leading-[1.1] tracking-tight">
              Find Your{" "}
              <span className="text-gold-500">Balance</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="mt-6 text-lg sm:text-xl text-charcoal-700/80 max-w-2xl mx-auto leading-relaxed">
              Professional massage therapy to restore your body and calm your mind.
              Choose from our comprehensive range of therapies tailored to your needs.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/book?tab=inperson">Book a Session</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#services">View Services</Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.65}>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-charcoal-700/60">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold-500" />
                <span>9819 N 95th St, Scottsdale, AZ</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold-500" />
                <span>480-549-7188</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────── WHY CHOOSE US ─────────────────────── */
function WhyChooseUsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              Why Choose Us
            </h2>
            <p className="mt-4 text-charcoal-700/70 leading-relaxed">
              Experience the healing power of professional massage therapy
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="h-full p-8 hover:shadow-md transition-shadow text-center">
                <CardContent className="p-0">
                  <div className="h-14 w-14 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-5 mx-auto">
                    <item.icon className="h-7 w-7 text-gold-500" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-charcoal-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal-700/70 leading-relaxed">
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
    <section id="services" className="py-24 lg:py-32 bg-ivory-100/50 bg-grid scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900">
              Our Services
            </h2>
            <p className="mt-4 text-charcoal-700/70 leading-relaxed">
              Choose from our comprehensive range of massage therapies tailored
              to your needs
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <StaggerItem key={`${service.name}-${service.duration}`}>
              <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-600" />
                <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold-500/10 text-gold-600 text-xs font-medium">
                      {service.category}
                    </span>
                    <span className="text-2xl font-serif font-bold text-charcoal-900">
                      ${service.price}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-charcoal-900 mb-2">
                    {service.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4 text-charcoal-700/50" />
                    <span className="text-sm text-charcoal-700/60">{service.duration}</span>
                  </div>
                  <p className="text-sm text-charcoal-700/70 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <Button asChild className="w-full" size="sm">
                      <Link href="/book?tab=inperson">Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

/* ─────────────────────── CTA ─────────────────────── */
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
            Ready to feel{" "}
            <span className="text-gold-400">better?</span>
          </h2>
          <p className="mt-6 text-ivory-200/70 text-lg max-w-xl mx-auto leading-relaxed">
            Book your massage session today and experience the healing power of
            professional, personalized care.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/book?tab=inperson">
                Book a Session
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-ivory-200/30 text-ivory-100 hover:bg-ivory-100/10 hover:text-white"
            >
              <Link href="/">
                Learn About Pain Is Illegal
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-ivory-200/50">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold-400" />
              <span>9819 N 95th St, Scottsdale, AZ</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold-400" />
              <span>480-549-7188</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

/* ─────────────────────── PAGE ─────────────────────── */
export default function MassagePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <CTASection />
    </>
  )
}
