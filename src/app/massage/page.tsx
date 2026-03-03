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
    category: "Relaxation",
    name: "Relaxation & Relief Massage",
    price: 85,
    duration: "60 Minutes",
    description:
      "Experience a soothing 60-minute relaxation massage designed to alleviate stress and tension in the body. This treatment uses intuitive therapy to gently release tension and promote relaxation, enhancing your overall well-being. Hot towels are added to melt your cares away.",
  },
  {
    category: "Relaxation",
    name: "Relaxation Massage",
    price: 105,
    duration: "90 Minutes",
    description:
      "Blends long, flowing strokes with gentle kneading techniques to melt away tension and induce profound relaxation. This soothing treatment improves circulation, reduces stress, and fosters a renewed sense of well-being, ensuring you leave feeling revitalized and invigorated.",
  },
  {
    category: "Therapeutic",
    name: "Therapeutic Massage to Address Pain & Relaxation",
    price: 85,
    duration: "60 Minutes",
    description:
      "Manipulation of the body's soft tissue to help heal by stimulating circulation and promoting relaxation.",
  },
  {
    category: "Therapeutic",
    name: "Therapeutic Massage for Pain Relief & Relaxation",
    price: 125,
    duration: "90 Minutes",
    description:
      "Focuses on the manipulation of soft tissues to alleviate discomfort and enhance circulation. This 90-minute session is designed to promote relaxation and support overall well-being, helping to release tension and improve mobility.",
  },
  {
    category: "Lymphatic",
    name: "Lymphatic Massage",
    price: 100,
    duration: "60 Minutes",
    description:
      "Deeper Lymphatic FLUSH to RELEASE Toxins for Weight Loss and Post Surgery. Lymphatic Massage is VERY life-giving because it releases toxins if done deep enough. Certain conditions need more specific massage from a practiced therapist.",
  },
  {
    category: "Sports",
    name: "Sports Massage for Agility, Endurance & Pain Relief",
    price: 100,
    duration: "60 Minutes",
    description:
      "Specifically designed to address the unique needs of athletes by releasing muscle tension and enhancing overall performance. This targeted treatment not only alleviates discomfort but also promotes recovery, helping athletes achieve optimal balance and agility.",
  },
  {
    category: "Sports",
    name: "Sport Massage for Agility, Endurance & Pain Relief",
    price: 150,
    duration: "90 Minutes",
    description:
      "Targets the specific needs of athletes by effectively releasing muscle tension and improving overall flexibility. This 90-minute session aims to enhance performance and aid recovery, ensuring you feel balanced and rejuvenated.",
  },
  {
    category: "Hot Stone",
    name: "Hot Stone Massage",
    price: 100,
    duration: "60 Minutes",
    description:
      "A delightful warm treatment using heated stones to rub away tension.",
  },
  {
    category: "Hot Stone",
    name: "Hot Stone & Hot Towel Massage",
    price: 125,
    duration: "90 Minutes",
    description:
      "A delightful warm treatment using warm stones to melt away tension and hot towels to buff the body.",
  },
  {
    category: "Medical",
    name: "Medical Massage: Fibromyalgia, Oncology, Chronic Pain Syndrome",
    price: 105,
    duration: "60 Minutes",
    description:
      "Focuses on alleviating pain and discomfort associated with specific conditions and pathologies. This specialized therapy combines targeted techniques to promote healing, enhance mobility, and improve overall well-being. Specific doctor's instructions will be applied to health concerns.",
  },
  {
    category: "Medical",
    name: "Medical Massage: Fibromyalgia, Oncology, Chronic Pain Syndrome",
    price: 150,
    duration: "90 Minutes",
    description:
      "Specifically designed to alleviate symptoms associated with fibromyalgia, oncology treatments, and chronic pain syndromes. This 90-minute session focuses on therapeutic techniques tailored to enhance recovery and overall well-being.",
  },
  {
    category: "Foot Reflexology",
    name: "Foot Reflexology with Hot Towel, Shoulder & Scalp Massage",
    price: 80,
    duration: "60 Minutes",
    description:
      "Acupressure and massage to the feet, toes & ankles after a foot hot towel wrap and a shoulder, face & scalp massage. Reflexology helps stimulate internal organs that the outward musculature cannot address. This is a real and life-giving therapy.",
  },
  {
    category: "Pregnancy",
    name: "Pregnancy Massage for Relaxation & Relief",
    price: 85,
    duration: "60 Minutes",
    description:
      "Offers a soothing experience designed to alleviate common aches and pains associated with pregnancy. This specialized therapy promotes relaxation, reduces stress, and enhances overall well-being for expectant mothers.",
  },
  {
    category: "Migraine",
    name: "Migraine Massage for Scalp, Face, Neck & Shoulders, Plus TMJ and Sinuses",
    price: 90,
    duration: "60 Minutes",
    description:
      "Hot towel treatment plus gentle aroma therapy for sinuses. Expert care to help with headaches and migraines through intuitive technique — gently but firmly releasing neck muscles and inflamed areas on the scalp and jaw.",
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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
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
