"use client"

import { testimonials } from "@/data/testimonials"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
                <Card key={i} className="bg-zinc-900/30 border-zinc-800">
                    <CardHeader className="pb-2">
                        <Quote className="h-8 w-8 text-[#D4AF37]/20 mb-2" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-zinc-300 mb-6 italic">"{t.content}"</p>
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-[#D4AF37] border border-zinc-700">
                                {t.avatar}
                            </div>
                            <div>
                                <div className="font-bold text-white text-sm">{t.name}</div>
                                <div className="text-xs text-zinc-500">{t.role}</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
