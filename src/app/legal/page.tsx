"use client"

import { FadeIn } from "@/components/motion"

export default function LegalPage() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-900 mb-4">
            Legal & Disclaimers
          </h1>
          <p className="text-charcoal-700/60 mb-12">
            Last updated: January 2025
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-12">
            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">
                Disclaimer
              </h2>
              <div className="space-y-4 text-charcoal-700/80 leading-relaxed text-sm">
                <p>
                  The information provided by Pain Is Illegal (&ldquo;we,&rdquo;
                  &ldquo;us,&rdquo; or &ldquo;our&rdquo;) on this website and
                  through our services is for{" "}
                  <strong>general educational and informational purposes only</strong>
                  . All information on the site and through our services is provided
                  in good faith; however, we make no representation or warranty of
                  any kind, express or implied, regarding the accuracy, adequacy,
                  validity, reliability, availability, or completeness of any
                  information.
                </p>
                <p>
                  <strong>
                    Our services are not a substitute for professional medical
                    advice, diagnosis, or treatment.
                  </strong>{" "}
                  Ethelyn is a holistic healer, not a licensed medical professional.
                  Always seek the advice of your physician or other qualified health
                  provider with any questions you may have regarding a medical
                  condition. Never disregard professional medical advice or delay in
                  seeking it because of something you have read on this website or
                  received through our services.
                </p>
                <p>
                  Individual results may vary. Pain relief outcomes depend on many
                  factors unique to each individual, and we cannot guarantee specific
                  results. Our approach is holistic and educational in nature —
                  focused on identifying potential contributors to discomfort and
                  creating personalized frameworks for support.
                </p>
                <p>
                  If you are experiencing a medical emergency, call your doctor or
                  911 immediately. Pain Is Illegal does not recommend or endorse any
                  specific tests, physicians, products, procedures, opinions, or
                  other information that may be mentioned on this website.
                </p>
              </div>
            </section>

            {/* Privacy Policy */}
            <section>
              <h2 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">
                Privacy Policy
              </h2>
              <div className="space-y-4 text-charcoal-700/80 leading-relaxed text-sm">
                <p>
                  Your privacy is important to us. This privacy policy explains how
                  Pain Is Illegal collects, uses, and protects your personal
                  information.
                </p>

                <h3 className="font-semibold text-charcoal-900 text-base">
                  Information We Collect
                </h3>
                <p>
                  When you submit a booking request, we collect the following
                  information: your name, email address, phone number, city and
                  state, preferred appointment times, and a description of your pain
                  or situation. This information is provided voluntarily by you and
                  is used solely to process your booking request and provide our
                  services.
                </p>

                <h3 className="font-semibold text-charcoal-900 text-base">
                  How We Use Your Information
                </h3>
                <p>
                  We use your personal information to: respond to your booking
                  requests, communicate with you about your appointments, provide our
                  holistic evaluation and guidance services, and improve our services.
                  We do not sell, trade, or rent your personal information to third
                  parties.
                </p>

                <h3 className="font-semibold text-charcoal-900 text-base">
                  Data Security
                </h3>
                <p>
                  We implement reasonable measures to protect your personal
                  information. However, no method of transmission over the Internet
                  or electronic storage is 100% secure, and we cannot guarantee
                  absolute security.
                </p>

                <h3 className="font-semibold text-charcoal-900 text-base">
                  Contact
                </h3>
                <p>
                  If you have questions about this privacy policy, please contact us
                  through our booking form or social media channels.
                </p>
              </div>
            </section>

            {/* Terms of Service */}
            <section>
              <h2 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">
                Terms of Service
              </h2>
              <div className="space-y-4 text-charcoal-700/80 leading-relaxed text-sm">
                <p>
                  By accessing and using this website and our services, you agree to
                  the following terms:
                </p>

                <h3 className="font-semibold text-charcoal-900 text-base">
                  Nature of Services
                </h3>
                <p>
                  Pain Is Illegal provides holistic guidance, educational support,
                  and therapeutic massage services. Our services are not medical
                  treatment and should not be considered as such. By booking a
                  session, you acknowledge that you understand the holistic and
                  educational nature of our services.
                </p>

                <h3 className="font-semibold text-charcoal-900 text-base">
                  Booking & Cancellation
                </h3>
                <p>
                  All bookings are subject to availability. We require at least 24
                  hours&apos; notice for cancellations or rescheduling. Late
                  cancellations or no-shows may be subject to a cancellation fee.
                  Payment details and policies will be communicated during the
                  booking confirmation process.
                </p>

                <h3 className="font-semibold text-charcoal-900 text-base">
                  Limitation of Liability
                </h3>
                <p>
                  To the fullest extent permitted by law, Pain Is Illegal shall not
                  be liable for any indirect, incidental, special, consequential, or
                  punitive damages arising out of or related to your use of our
                  services. Our total liability shall not exceed the amount paid for
                  the specific service in question.
                </p>

                <h3 className="font-semibold text-charcoal-900 text-base">
                  Intellectual Property
                </h3>
                <p>
                  All content on this website — including text, design, and branding
                  — is the property of Pain Is Illegal and is protected by
                  applicable intellectual property laws. You may not reproduce,
                  distribute, or create derivative works without our written
                  permission.
                </p>

                <h3 className="font-semibold text-charcoal-900 text-base">
                  Changes to Terms
                </h3>
                <p>
                  We reserve the right to update these terms at any time. Changes
                  will be posted on this page with an updated date. Continued use of
                  our services after changes constitutes acceptance of the revised
                  terms.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-ivory-200/50 rounded-2xl p-6">
              <p className="text-sm text-charcoal-700/70 leading-relaxed">
                <strong className="text-charcoal-900">Questions?</strong> If you
                have any questions about these legal documents or our practices,
                please reach out through our{" "}
                <a href="/book" className="text-gold-600 hover:underline">
                  booking page
                </a>{" "}
                or contact us on social media. We&apos;re happy to clarify anything.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
