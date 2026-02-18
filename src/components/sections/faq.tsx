"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { faqs } from "@/data/faq"
import { cn } from "@/lib/utils"

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
                const isOpen = openIndex === index
                return (
                    <div
                        key={index}
                        className="border border-zinc-800 rounded-lg bg-zinc-900/30 overflow-hidden"
                    >
                        <button
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="flex items-center justify-between w-full p-4 text-left font-medium transition-colors hover:text-[#D4AF37]"
                        >
                            <span className={cn(isOpen && "text-[#D4AF37]")}>{faq.question}</span>
                            <ChevronDown
                                className={cn(
                                    "h-4 w-4 transition-transform duration-200",
                                    isOpen && "rotate-180 text-[#D4AF37]"
                                )}
                            />
                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="px-4 pb-4 text-zinc-400 text-sm">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            })}
        </div>
    )
}
