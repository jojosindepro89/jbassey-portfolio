"use client"

import { Suspense } from "react"
import Link from "next/link"
import { Mail, Phone, MessageCircle } from "lucide-react"
import { Section } from "@/components/section"
import { ContactForm } from "@/components/sections/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

export function ContactSection() {
    return (
        <div id="contact" className="pb-20">
            <Section className="py-20 md:py-32 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work <span className="text-[#D4AF37]">Together</span></h2>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                    Have a project in mind or want to book a training session? Fill out the form below or reach out directly.
                </p>
            </Section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <h3 className="text-xl font-bold mb-4">Contact Information</h3>

                        <Card className="bg-zinc-900/50 border-zinc-800">
                            <CardContent className="p-6 flex items-start gap-4">
                                <Mail className="h-6 w-6 text-[#D4AF37] mt-1" />
                                <div>
                                    <h4 className="font-bold text-white">Email</h4>
                                    <a href={`mailto:${siteConfig.contact.email}`} className="text-zinc-400 hover:text-[#D4AF37]">
                                        {siteConfig.contact.email}
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-zinc-900/50 border-zinc-800">
                            <CardContent className="p-6 flex items-start gap-4">
                                <Phone className="h-6 w-6 text-[#D4AF37] mt-1" />
                                <div>
                                    <h4 className="font-bold text-white">Phone</h4>
                                    <a href={`tel:${siteConfig.contact.phone}`} className="text-zinc-400 hover:text-[#D4AF37]">
                                        {siteConfig.contact.phone}
                                    </a>
                                </div>
                            </CardContent>
                        </Card>



                        {/* WhatsApp Button */}
                        <Link
                            href={`https://wa.me/${siteConfig.contact.phone.replace(/\+/g, "")}`}
                            target="_blank"
                            className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-black font-bold rounded-xl hover:bg-[#128C7E] transition-colors"
                        >
                            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
                        </Link>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 md:p-8">
                            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                            <Suspense fallback={<div>Loading form...</div>}>
                                <ContactForm />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}
