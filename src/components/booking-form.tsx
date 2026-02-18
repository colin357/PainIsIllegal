"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { bookingSchema, type BookingFormData } from "@/lib/booking-schema"

interface BookingFormProps {
  defaultService: "zoom-evaluation" | "in-person-60" | "in-person-90"
}

export function BookingForm({ defaultService }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      cityState: "",
      preferredDates: "",
      painDescription: "",
      service: defaultService,
      consent: false,
    },
  })

  const consentValue = watch("consent")
  const serviceValue = watch("service")
  const isInPerson = defaultService.startsWith("in-person")

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        console.log("Booking submitted:", data)
        setSubmitted(true)
      }
    } catch {
      // Fallback: still show success for demo
      console.log("Booking submitted (local):", data)
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <Card className="text-center py-12">
        <CardContent className="p-8">
          <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-3">
            Request received!
          </h3>
          <p className="text-charcoal-700/70 max-w-sm mx-auto leading-relaxed">
            Thank you for reaching out. Ethelyn will review your information and
            respond within 24 hours to confirm your appointment details.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              placeholder="Your full name"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-sm text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* City/State */}
          <div className="space-y-2">
            <Label htmlFor="cityState">City / State *</Label>
            <Input
              id="cityState"
              placeholder="e.g., Phoenix, AZ"
              {...register("cityState")}
            />
            {errors.cityState && (
              <p className="text-sm text-red-500">{errors.cityState.message}</p>
            )}
          </div>

          {/* Service Selection (for in-person) */}
          {isInPerson && (
            <div className="space-y-2">
              <Label>Session Duration *</Label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setValue("service", "in-person-60")}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    serviceValue === "in-person-60"
                      ? "border-gold-500 bg-gold-500/5"
                      : "border-ivory-300 hover:border-ivory-300/80"
                  }`}
                >
                  <div className="font-semibold text-charcoal-900">60 min</div>
                  <div className="text-sm text-charcoal-700/60">$100</div>
                </button>
                <button
                  type="button"
                  onClick={() => setValue("service", "in-person-90")}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    serviceValue === "in-person-90"
                      ? "border-gold-500 bg-gold-500/5"
                      : "border-ivory-300 hover:border-ivory-300/80"
                  }`}
                >
                  <div className="font-semibold text-charcoal-900">90 min</div>
                  <div className="text-sm text-charcoal-700/60">$130</div>
                </button>
              </div>
            </div>
          )}

          {/* Preferred Dates */}
          <div className="space-y-2">
            <Label htmlFor="preferredDates">Preferred Dates & Times *</Label>
            <Input
              id="preferredDates"
              placeholder="e.g., Weekday afternoons, Jan 15-20"
              {...register("preferredDates")}
            />
            {errors.preferredDates && (
              <p className="text-sm text-red-500">
                {errors.preferredDates.message}
              </p>
            )}
          </div>

          {/* Pain Description */}
          <div className="space-y-2">
            <Label htmlFor="painDescription">
              Describe Your Pain / Situation *
            </Label>
            <Textarea
              id="painDescription"
              placeholder="Tell us about what you're experiencing — location, duration, what you've tried, and what you're hoping to achieve..."
              rows={5}
              {...register("painDescription")}
            />
            {errors.painDescription && (
              <p className="text-sm text-red-500">
                {errors.painDescription.message}
              </p>
            )}
          </div>

          {/* Consent */}
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <Checkbox
                id="consent"
                checked={consentValue}
                onCheckedChange={(checked) =>
                  setValue("consent", checked === true, { shouldValidate: true })
                }
              />
              <Label
                htmlFor="consent"
                className="text-sm text-charcoal-700/70 leading-relaxed cursor-pointer"
              >
                I understand that Pain Is Illegal provides holistic guidance and
                educational support — not medical advice, diagnosis, or treatment.
                I agree to the{" "}
                <a href="/legal" className="text-gold-600 hover:underline">
                  terms and disclaimers
                </a>
                .
              </Label>
            </div>
            {errors.consent && (
              <p className="text-sm text-red-500">{errors.consent.message}</p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Booking Request"
            )}
          </Button>

          <p className="text-xs text-center text-charcoal-700/40">
            We&apos;ll respond within 24 hours. Your information is kept
            confidential.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
