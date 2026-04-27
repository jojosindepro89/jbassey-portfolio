"use client"

import { useState } from "react"
import { projects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const categories = ["All", "Web App", "Landing Page", "E-commerce"]

export function ProjectsGrid() {
    const [filter, setFilter] = useState("All")

    const webProjects = projects.filter(p => p.category === "Web Development")
    const filteredProjects = filter === "All"
        ? webProjects
        : webProjects.filter(p => p.subCategory === filter)

    return (
        <div className="space-y-16 relative z-10">
            {/* Web Development Section */}
            <div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Web Development</h2>

                    <div className="flex flex-wrap gap-3 justify-center p-1.5 rounded-full bg-zinc-900/50 border border-white/5 backdrop-blur-md">
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                variant={filter === cat ? "gold" : "ghost"}
                                size="sm"
                                onClick={() => setFilter(cat)}
                                className={`rounded-full transition-all duration-300 ${filter === cat ? 'shadow-[0_0_15px_-3px_rgba(212,175,55,0.4)]' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </motion.div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div 
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="h-full"
                            >
                                <Card className="h-full flex flex-col border border-white/5 bg-zinc-900/40 backdrop-blur-xl hover:bg-zinc-800/60 hover:border-white/10 transition-all duration-500 overflow-hidden group shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/5">
                                    <div className="relative aspect-video bg-zinc-950 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 opacity-60" />
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    <CardHeader className="relative z-20 pt-6">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="text-xs font-bold tracking-wider uppercase text-[#D4AF37] mb-3 block">{project.subCategory}</span>
                                                <CardTitle className="text-2xl text-white group-hover:text-[#D4AF37] transition-colors">{project.title}</CardTitle>
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="flex-1 relative z-20">
                                        <CardDescription className="mb-6 text-zinc-400 text-base leading-relaxed line-clamp-3">{project.description}</CardDescription>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech) => (
                                                <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-black/50 text-zinc-300 border border-white/5 backdrop-blur-md group-hover:border-white/10 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>

                                    <CardFooter className="gap-3 mt-auto pb-6 pt-2 relative z-20">
                                        <Button variant="outline" size="sm" className="w-full border-white/10 hover:bg-white/5 hover:border-white/20 transition-all text-zinc-300" asChild>
                                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 h-4 w-4" /> Visit Website
                                            </a>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    )
}
