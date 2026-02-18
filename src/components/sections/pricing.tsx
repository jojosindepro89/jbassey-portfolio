"use client"


import { Check } from "lucide-react"
import { siteConfig } from "@/config/site"
import { trainingPrograms } from "@/data/training"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function Pricing() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingPrograms.map((program) => (
                <Card
                    key={program.id}
                    className={cn(
                        "relative flex flex-col h-full border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors",
                        program.popular && "border-[#D4AF37] shadow-[0_0_30px_-10px_rgba(212,175,55,0.2)]"
                    )}
                >
                    {program.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#D4AF37] text-black text-xs font-bold rounded-full">
                            MOST POPULAR
                        </div>
                    )}

                    <CardHeader className="text-center pt-8">
                        <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                        <div className="flex items-baseline justify-center gap-1">
                            <span className="text-3xl font-bold text-white">{program.price}</span>
                        </div>
                        {program.duration && <span className="text-zinc-500 text-sm">{program.duration}</span>}
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col">
                        <ul className="space-y-4 mt-4 mb-4 flex-1">
                            {program.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                                    <div className="mt-0.5 rounded-full bg-[#D4AF37]/10 p-1 shrink-0">
                                        <Check className="h-3 w-3 text-[#D4AF37]" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto">
                            <Button
                                variant={program.popular ? "gold" : "outline"}
                                className="w-full py-6 text-base"
                                asChild
                            >
                                <a
                                    href={`https://wa.me/${siteConfig.contact.phone.replace(/\+/g, "")}?text=Hi Joseph, I'm interested in the ${program.title} training.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {program.cta}
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card >
            ))
            }
        </div >
    )
}
