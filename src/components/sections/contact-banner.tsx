"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"

export function ContactBanner() {
    return (
        <Section className="py-24">
            <div className="relative rounded-3xl bg-zinc-900 border border-zinc-800 p-8 md:p-16 text-center overflow-hidden">
                {/* Decorative glows */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.1),transparent_50%)]" />

                <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Ready to start your next project?
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        Whether you need a modern website, a mobile app, or want to level up your skills,
                        I'm here to help you achieve your goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link href="/contact">
                            <Button variant="gold" size="lg">
                                Get in Touch
                            </Button>
                        </Link>
                        <Link href="/projects">
                            <Button variant="outline" size="lg">
                                View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    )
}
