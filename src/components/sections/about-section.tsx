"use client"

import { Section } from "@/components/section"
import { Timeline } from "@/components/sections/timeline"
import { Skills } from "@/components/sections/skills"
import { Code2, Megaphone, GraduationCap } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutSection() {
    const whatIDo = [
        {
            title: "Web Development",
            icon: Code2,
            description: "Building fast, SEO-friendly, and scalable websites using modern technologies.",
            stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Supabase"]
        },

        {
            title: "Digital Marketing",
            icon: Megaphone,
            description: "Driving growth through strategic SEO, content marketing, and paid advertising.",
            stack: ["SEO", "Google Ads", "Meta Ads", "Analytics", "Content Strategy"]
        },
        {
            title: "Training & Mentorship",
            icon: GraduationCap,
            description: "Empowering the next generation of developers through practical training.",
            stack: ["Web Development", "Digital Marketing", "Career Guidance", "1-on-1 Coaching"]
        }
    ];

    return (
        <div id="about" className="pb-20">
            {/* Profile Section */}
            <Section className="py-20 md:py-32">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/3 flex justify-center">
                        {/* Placeholder for Profile Image */}
                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-[#D4AF37]/20 bg-zinc-800/50 shadow-2xl">
                            <Image
                                src="/images/profile.png"
                                alt="Joseph Bassey"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Hi, I'm <span className="text-[#D4AF37]">Joseph Bassey</span>
                        </h2>
                        <p className="text-xl text-zinc-400">
                            Businesses today struggle with slow websites, poor user experience, and marketing strategies that don’t convert. Many brands build digital products that look good but fail to generate real growth.
                        </p>
                        <div className="text-zinc-300 space-y-4">
                            <p className="font-bold text-[#D4AF37]">
                                I bridge the gap between development and growth marketing.
                            </p>
                            <p>
                                I build high-performance web applications that are fast, scalable, and conversion-focused. Beyond writing clean code, I design digital systems that attract users through SEO, engage them with targeted marketing, and turn them into loyal customers using data-driven strategies.
                            </p>
                            <p>
                                My digital marketing expertise spans performance advertising, content strategy, and aggressive SEO optimization. I combine this with technical development to build growth engines that don't just look good but deliver measurable business results.
                            </p>
                            <p>
                                And as an instructor, I pass these real-world principles to the next generation of tech talent — teaching not just theory, but execution.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* What I Do */}
            <Section background="secondary">
                <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {whatIDo.map((item, index) => (
                        <Card key={index} className="border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors h-full flex flex-col">
                            <CardHeader>
                                <item.icon className="h-8 w-8 text-[#D4AF37] mb-4" />
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col justify-between">
                                <p className="text-zinc-400 mb-6">{item.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.stack.map((tech) => (
                                        <span key={tech} className="px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Tech Stack */}
            <Skills />

            {/* Timeline */}
            <Section>
                <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
                <div className="max-w-4xl mx-auto">
                    <Timeline />
                </div>
            </Section>
        </div>
    )
}
