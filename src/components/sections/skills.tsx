"use client"

import { skills } from "@/data/skills"
import { Section } from "@/components/section"
import { motion } from "framer-motion"

export function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <Section background="secondary" className="border-y border-white/5 py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#D4AF37]/5 rounded-[100%] blur-[120px] pointer-events-none" />
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 relative z-10"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Expertise</h2>
                <p className="text-zinc-400 text-lg">Tools and technologies I use to build digital products</p>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 relative z-10 max-w-6xl mx-auto"
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:border-[#D4AF37]/30 hover:bg-zinc-800/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.2)] cursor-default"
                    >
                        <div className="p-4 rounded-xl bg-black/50 border border-white/5 mb-4 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/20 transition-all duration-500 shadow-inner">
                            <skill.icon className="h-8 w-8 text-zinc-400 group-hover:text-[#D4AF37] group-hover:scale-110 transition-all duration-500" />
                        </div>
                        <span className="font-medium text-zinc-400 group-hover:text-white transition-colors duration-300 text-sm tracking-wide">{skill.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    )
}
