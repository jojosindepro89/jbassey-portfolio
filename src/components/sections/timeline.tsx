"use client"

import { Building2, Calendar } from "lucide-react"
import { motion } from "framer-motion"

type Experience = {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
};

const experiences: Experience[] = [
    {
        id: "1",
        role: "B2B SaaS Content Writer",
        company: "Anchor (getanchor.co)",
        period: "2024 - 2025",
        description: "Created high-quality, conversion-focused content for B2B SaaS audiences and optimized SEO strategies.",
    },
    {
        id: "2",
        role: "Customer Success Manager",
        company: "Groom Technologies",
        period: "2023 - 2025",
        description: "Managed customer portfolios, reduced churn, and collaborated with cross-functional teams to improve experience.",
    },
    {
        id: "3",
        role: "IT Specialist",
        company: "Dafe Energy",
        period: "2022 - 2024",
        description: "Managed IT infrastructure, optimized website performance, and coordinated vendor support.",
    },
    {
        id: "4",
        role: "Digital Marketing & Web Trainer",
        company: "Bizmarrow Technologies",
        period: "2018 - Present",
        description: "Delivered hands-on training in web development and digital marketing standards.",
    },
    {
        id: "5",
        role: "Web Developer",
        company: "Clover Dynamics",
        period: "2019 - Present",
        description: "Developed and maintained client websites using WordPress, HTML, CSS, and JavaScript.",
    },
];

export function Timeline() {
    return (
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-[#D4AF37]/50 before:to-transparent">
            {experiences.map((item, index) => (
                <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-zinc-950 shadow-[0_0_15px_-3px_rgba(212,175,55,0.4)] group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37] group-hover:scale-110 transition-all duration-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                        <Building2 className="w-4 h-4 text-[#D4AF37]" />
                    </div>

                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-500 group-hover:-translate-y-1 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                <div className="font-bold text-xl text-white group-hover:text-[#D4AF37] transition-colors">{item.role}</div>
                                <time className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-black/50 text-[#D4AF37] border border-white/5 flex items-center gap-1.5 w-fit">
                                    <Calendar className="w-3.5 h-3.5" /> {item.period}
                                </time>
                            </div>
                            <div className="text-zinc-300 font-medium mb-3">{item.company}</div>
                            <div className="text-zinc-400 text-sm leading-relaxed">
                                {item.description}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
