"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"
import { projects } from "@/data/projects"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function FeaturedProjects() {
    // Show only first 3 web projects
    const featured = projects.filter(p => p.category === "Web Development").slice(0, 3)

    return (
        <Section>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
                    <p className="text-zinc-400">Recent web and mobile applications I've built</p>
                </div>
                <Link href="/projects">
                    <Button variant="ghost" className="group">
                        View All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featured.map((project) => (
                    <Card key={project.id} className="overflow-hidden group flex flex-col">
                        <div className="relative aspect-video bg-zinc-900">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="text-xs font-mono text-[#D4AF37] mb-2 block">{project.subCategory}</span>
                                    <CardTitle>{project.title}</CardTitle>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="flex-1">
                            <CardDescription className="mb-4">{project.description}</CardDescription>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="px-2 py-1 text-xs rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </CardContent>

                        <CardFooter className="gap-2 mt-auto">
                            <Button variant="outline" size="sm" className="w-full" asChild>
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-3 w-3" /> Visit Website
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
