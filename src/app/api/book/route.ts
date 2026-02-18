import { NextResponse } from "next/server"
import { bookingSchema } from "@/lib/booking-schema"

// Simple in-memory store for demo purposes
const bookings: Array<Record<string, unknown>> = []

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate with zod
    const result = bookingSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      )
    }

    // Store in memory
    const booking = {
      ...result.data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    }

    bookings.push(booking)

    console.log("New booking received:", booking)
    console.log("Total bookings in memory:", bookings.length)

    return NextResponse.json(
      { success: true, message: "Booking request received" },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    )
  }
}
