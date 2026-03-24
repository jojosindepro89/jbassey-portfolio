"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"

export function Hero() {

    return (
        <Section className="relative flex flex-col items-center justify-center text-center min-h-[calc(100vh-4rem)] pt-0 overflow-hidden">
            {/* Background Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 max-w-4xl mx-auto"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium border border-[#D4AF37]/30 rounded-full text-[#D4AF37] bg-[#D4AF37]/5 shadow-[0_0_15px_-3px_rgba(212,175,55,0.15)]">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
                    </span>
                    Available for Freelance & Training
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                    Full-Stack Developer <br className="hidden md:block" />
                    <span className="text-[#D4AF37]">Digital Marketing Strategist</span>
                </h1>

                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
                    I engineer fast, scalable web applications and design data-driven digital marketing strategies that deliver real growth.
                    Committed to building systems that attract, engage, and convert.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link href="#projects">
                        <Button variant="gold" size="lg" className="w-full sm:w-auto">
                            View Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <Link href="#contact">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                            Hire Me
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </Section>
    )
}
