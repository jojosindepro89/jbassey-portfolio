"use client"

import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { trainingPrograms } from "@/data/training"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function FeaturedTraining() {
    return (
        <Section background="secondary">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl font-bold mb-2">Training Programs</h2>
                    <p className="text-zinc-400">Master high-demand skills with personalized mentorship</p>
                </div>
                <Link href="/training">
                    <Button variant="ghost" className="group">
                        View All Programs <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {trainingPrograms.map((program) => (
                    <Card
                        key={program.id}
                        className={cn(
                            "relative border-zinc-800 flex flex-col",
                            program.popular && "border-[#D4AF37]/50 shadow-[0_0_30px_-10px_rgba(212,175,55,0.1)]"
                        )}
                    >
                        {program.popular && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#D4AF37] text-black text-xs font-bold rounded-full">
                                MOST POPULAR
                            </div>
                        )}

                        <CardHeader>
                            <CardTitle className="text-xl">{program.title}</CardTitle>
                            <div className="mt-4">
                                <span className="text-3xl font-bold text-white">{program.price}</span>
                                {program.duration && <span className="text-zinc-500 ml-2">/ {program.duration}</span>}
                            </div>
                        </CardHeader>

                        <CardContent className="flex-1">
                            <ul className="space-y-3">
                                {program.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                                        <Check className="h-4 w-4 text-[#D4AF37] mt-0.5 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter>
                            <Link href={`/contact?subject=Enroll in ${program.title}`} className="w-full">
                                <Button
                                    variant={program.popular ? "gold" : "outline"}
                                    className="w-full"
                                >
                                    {program.cta}
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
