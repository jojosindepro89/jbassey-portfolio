"use client"

import { Section } from "@/components/section"
import { ProjectsGrid } from "@/components/sections/projects-grid"

export function ProjectsSection() {
    return (
        <div id="projects" className="pb-20">
            <Section className="py-20 md:py-32">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">My <span className="text-[#D4AF37]">Projects</span></h2>
                <p className="text-xl text-zinc-400 max-w-2xl mb-12">
                    A showcase of my recent work in web development and designs.
                </p>
                <ProjectsGrid />
            </Section>
        </div>
    )
}
