import { z } from "zod"

export const bookingSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number"),
  cityState: z
    .string()
    .min(2, "Please enter your city and state"),
  preferredDates: z
    .string()
    .min(3, "Please provide your preferred dates and times"),
  painDescription: z
    .string()
    .min(20, "Please describe your pain in at least 20 characters so we can prepare for your session"),
  service: z.enum(["zoom-evaluation", "in-person-60", "in-person-90"]),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must acknowledge the disclaimer to proceed",
    }),
})

export type BookingFormData = z.infer<typeof bookingSchema>
