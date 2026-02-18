"use client"

import { Building2, Calendar } from "lucide-react"

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
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {experiences.map((item, index) => (
                <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#D4AF37] text-slate-500 group-[.is-active]:text-zinc-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <Building2 className="w-5 h-5" />
                    </div>

                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 shadow-sm">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-100">{item.role}</div>
                            <time className="font-mono text-xs text-[#D4AF37] flex items-center gap-1">
                                <Calendar className="w-3 h-3" /> {item.period}
                            </time>
                        </div>
                        <div className="text-slate-400 mb-2">{item.company}</div>
                        <div className="text-slate-500 text-sm">
                            {item.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
