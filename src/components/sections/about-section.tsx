"use client"

import { Section } from "@/components/section"
import { Timeline } from "@/components/sections/timeline"
import { Skills } from "@/components/sections/skills"
import { Code2, Megaphone, GraduationCap, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export function AboutSection() {
    const whatIDo = [
        {
            title: "Web Development",
            icon: Code2,
            description: "Building fast, SEO-friendly, and scalable websites using modern technologies. Creating immersive digital experiences.",
            stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "DevOps", "Azure"]
        },
        {
            title: "Digital Marketing",
            icon: Megaphone,
            description: "Driving growth through strategic SEO, content marketing, and paid advertising. Turning clicks into loyal customers.",
            stack: ["SEO", "Google Ads", "Meta Ads", "Analytics", "Content Strategy"]
        },
        {
            title: "Training & Mentorship",
            icon: GraduationCap,
            description: "Empowering the next generation of developers through practical training and real-world project experience.",
            stack: ["Web Development", "Digital Marketing", "Career Guidance", "1-on-1 Coaching"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div id="about" className="pb-20 overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-40 left-[-10%] w-[40%] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-40 right-[-10%] w-[40%] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

            {/* Profile Section */}
            <Section className="py-20 md:py-32 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-5/12 flex justify-center md:justify-end relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent rounded-[2.5rem] transform rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-6 -z-10 blur-xl"></div>
                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-sm shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[#D4AF37]/10">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                            <Image
                                src="/images/joseph-bassey-profile.jpg"
                                alt="Joseph Bassey"
                                fill
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-full md:w-7/12 space-y-8 text-center md:text-left"
                    >
                        <div>
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-6"
                            >
                                About Me
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-200">Joseph Bassey</span>
                            </h2>
                        </div>
                        
                        <div className="text-zinc-400 space-y-5 text-lg leading-relaxed relative">
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37]/50 to-transparent hidden md:block" />
                            <div className="md:pl-8 space-y-5">
                                <p className="text-xl font-medium text-zinc-200">
                                    Businesses today struggle with slow websites, poor user experience, and marketing strategies that don’t convert.
                                </p>
                                <p>
                                    I bridge the gap between development and <span className="text-[#D4AF37] font-medium">growth marketing</span>. I build high-performance web applications that are fast, scalable, and conversion-focused. Beyond writing clean code, I design digital systems that attract users through SEO, engage them with targeted marketing, and turn them into loyal customers using data-driven strategies.
                                </p>
                                <p>
                                    My expertise spans performance advertising, content strategy, and aggressive SEO optimization. I combine this with technical development to build growth engines that don't just look good but deliver measurable business results.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* What I Do */}
            <Section background="secondary" className="py-24 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I Do</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Delivering end-to-end digital solutions that drive real business growth.</p>
                </motion.div>
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
                >
                    {whatIDo.map((item, index) => (
                        <motion.div key={index} variants={itemVariants} className="h-full">
                            <Card className="border border-white/5 bg-zinc-900/40 backdrop-blur-xl hover:bg-zinc-800/60 transition-all duration-500 h-full flex flex-col relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <CardHeader className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#D4AF37]/50 transition-all duration-500">
                                        <item.icon className="h-7 w-7 text-[#D4AF37]" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-white">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col justify-between relative z-10">
                                    <p className="text-zinc-400 mb-8 leading-relaxed">{item.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.stack.map((tech) => (
                                            <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-black/50 text-zinc-300 border border-white/5 backdrop-blur-md group-hover:border-white/10 transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </Section>

            {/* Tech Stack */}
            <div className="relative z-10 py-12">
                <Skills />
            </div>

            {/* Timeline */}
            <Section className="py-24 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-6">
                        Experience
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Journey</h2>
                </motion.div>
                <div className="max-w-4xl mx-auto">
                    <Timeline />
                </div>
            </Section>
        </div>
    )
}

