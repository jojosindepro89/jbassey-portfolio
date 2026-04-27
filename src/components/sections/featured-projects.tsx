"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { projects } from "@/data/projects"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function FeaturedProjects() {
    // Show only first 3 web projects
    const featured = projects.filter(p => p.category === "Web Development").slice(0, 3)

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
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <Section className="relative z-10 py-24">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
            >
                <div>
                    <div className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium tracking-wider uppercase mb-6">
                        Portfolio
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
                    <p className="text-zinc-400 text-lg">Recent web and mobile applications I've built</p>
                </div>
                <Link href="/projects">
                    <Button variant="ghost" className="group text-zinc-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10">
                        View All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </Link>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {featured.map((project) => (
                    <motion.div key={project.id} variants={itemVariants} className="h-full">
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
            </motion.div>
        </Section>
    )
}
