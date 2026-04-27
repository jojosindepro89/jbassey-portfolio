"use client"

import { Suspense } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MessageCircle } from "lucide-react"
import { Section } from "@/components/section"
import { ContactForm } from "@/components/sections/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

export function ContactSection() {
    return (
        <div id="contact" className="pb-20 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none -z-10" />

            <Section className="py-20 md:py-32 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-6">
                        Get In Touch
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                        Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-amber-200">Together</span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind or want to book a training session? Fill out the form below or reach out directly.
                    </p>
                </motion.div>
            </Section>

            <Section className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="lg:col-span-1 space-y-6"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>

                        <Card className="bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:bg-zinc-800/60 hover:border-white/10 transition-all duration-300 group">
                            <CardContent className="p-6 flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/50 group-hover:scale-110 transition-all duration-300">
                                    <Mail className="h-5 w-5 text-[#D4AF37]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-1">Email</h4>
                                    <a href={`mailto:${siteConfig.contact.email}`} className="text-zinc-400 hover:text-[#D4AF37] transition-colors">
                                        {siteConfig.contact.email}
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:bg-zinc-800/60 hover:border-white/10 transition-all duration-300 group">
                            <CardContent className="p-6 flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/50 group-hover:scale-110 transition-all duration-300">
                                    <Phone className="h-5 w-5 text-[#D4AF37]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-1">Phone</h4>
                                    <a href={`tel:${siteConfig.contact.phone}`} className="text-zinc-400 hover:text-[#D4AF37] transition-colors">
                                        {siteConfig.contact.phone}
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        {/* WhatsApp Button */}
                        <Link
                            href={`https://wa.me/${siteConfig.contact.phone.replace(/\+/g, "")}`}
                            target="_blank"
                            className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-black font-bold rounded-2xl transition-all duration-300 group shadow-[0_0_20px_-5px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_-5px_rgba(37,211,102,0.4)]"
                        >
                            <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" /> Chat on WhatsApp
                        </Link>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-zinc-900/40 border border-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-8 text-white">Send a Message</h3>
                                <Suspense fallback={<div className="animate-pulse flex space-x-4">Loading form...</div>}>
                                    <ContactForm />
                                </Suspense>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    )
}
