"use client"

import { skills } from "@/data/skills"
import { Section } from "@/components/section"

export function Skills() {
    return (
        <Section background="secondary" className="border-y border-zinc-900">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">My Expertise</h2>
                <p className="text-zinc-400">Tools and technologies I use to build digital products</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="group flex flex-col items-center p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-[#D4AF37]/50 hover:bg-zinc-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_-5px_rgba(212,175,55,0.1)]"
                    >
                        <div className="p-3 rounded-full bg-[#D4AF37]/5 mb-4 group-hover:bg-[#D4AF37]/10 transition-colors">
                            <skill.icon className="h-8 w-8 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <span className="font-medium text-zinc-200 group-hover:text-white transition-colors">{skill.name}</span>
                    </div>
                ))}
            </div>
        </Section>
    )
}
