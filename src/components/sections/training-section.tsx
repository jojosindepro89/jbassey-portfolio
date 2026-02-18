"use client"

import { Section } from "@/components/section"
import { Pricing } from "@/components/sections/pricing"
import { FAQ } from "@/components/sections/faq"
import { Testimonials } from "@/components/sections/testimonials"

export function TrainingSection() {
    return (
        <div id="training" className="pb-20">
            <Section className="py-20 md:py-32 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Level Up Your <span className="text-[#D4AF37]">Skills</span>
                </h2>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                    Practical training and mentorship to help you break into tech or advance your career.
                </p>
            </Section>

            <Section>
                <Pricing />
            </Section>

            <Section background="secondary" className="py-20">
                <h2 className="text-3xl font-bold text-center mb-12">Student Success Stories</h2>
                <Testimonials />
            </Section>

            <Section className="py-20">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <FAQ />
            </Section>
        </div>
    )
}
