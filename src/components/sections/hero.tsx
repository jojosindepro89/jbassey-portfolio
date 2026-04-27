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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-zinc-700/20 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="absolute top-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none -z-20" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8 max-w-4xl mx-auto relative z-10"
            >
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium border border-[#D4AF37]/30 rounded-full text-[#D4AF37] bg-[#D4AF37]/10 backdrop-blur-md shadow-[0_0_20px_-3px_rgba(212,175,55,0.2)]"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
                    </span>
                    Available for Freelance & Training
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]"
                >
                    Full-Stack Developer <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-amber-200 to-[#D4AF37] bg-[length:200%_auto] animate-gradient">
                        Digital Marketing Strategist
                    </span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                >
                    I engineer fast, scalable web applications and design data-driven digital marketing strategies that deliver real growth.
                    Committed to building systems that attract, engage, and convert.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
                >
                    <Link href="#projects">
                        <Button variant="gold" size="lg" className="w-full sm:w-auto text-base h-12 px-8 shadow-[0_0_20px_-5px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.6)] transition-all duration-300">
                            View Projects <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                    <Link href="#contact">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8 border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300 bg-black/50 backdrop-blur-sm">
                            Hire Me
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>
        </Section>
    )
}
