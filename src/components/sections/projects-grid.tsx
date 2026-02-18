"use client"

import { useState } from "react"
import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const categories = ["All", "Web App", "Landing Page", "E-commerce"]

export function ProjectsGrid() {
    const [filter, setFilter] = useState("All")

    const webProjects = projects.filter(p => p.category === "Web Development")
    const filteredProjects = filter === "All"
        ? webProjects
        : webProjects.filter(p => p.subCategory === filter)



    return (
        <div className="space-y-16">
            {/* Web Development Section */}
            <div>
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h2 className="text-3xl font-bold">Web Development</h2>

                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                variant={filter === cat ? "gold" : "outline"}
                                size="sm"
                                onClick={() => setFilter(cat)}
                                className="rounded-full"
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <Card key={project.id} className="overflow-hidden flex flex-col group h-full">
                            <div className="relative aspect-video bg-zinc-900 border-b border-zinc-800">
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
            </div>

        </div>
    )
}
