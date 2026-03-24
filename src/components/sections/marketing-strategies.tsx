"use client"

import { Section } from "@/components/section"
import { Search, PenTool, BarChart3, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MarketingStrategies() {
    const strategies = [
        {
            title: "Search Engine Optimization",
            icon: Search,
            description: "Implementing technical and content-driven SEO to boost organic visibility and capture high-intent traffic.",
        },
        {
            title: "Performance Marketing",
            icon: Target,
            description: "Executing highly targeted paid campaigns across Google and Social Media to maximize ROI and lower acquisition costs.",
        },
        {
            title: "Content Strategy",
            icon: PenTool,
            description: "Crafting compelling narratives and value-driven content that engages audiences and builds brand authority.",
        },
        {
            title: "Data Analytics & CRO",
            icon: BarChart3,
            description: "Utilizing deep analytics to understand user behavior and optimizing funnels to increase conversion rates.",
        }
    ];

    return (
        <Section id="marketing-strategies" background="secondary" className="pb-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Digital Marketing <span className="text-[#D4AF37]">Strategies</span></h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                    My approach goes beyond driving traffic. I build comprehensive systems that engage users and drive predictable growth.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {strategies.map((strategy, index) => (
                    <Card key={index} className="border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/80 transition-all group overflow-hidden relative h-full flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        <CardHeader className="relative z-10 pb-4">
                            <div className="h-12 w-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-4 text-[#D4AF37] group-hover:scale-110 transition-transform">
                                <strategy.icon className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-lg text-white">{strategy.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="relative z-10 flex-grow">
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {strategy.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
