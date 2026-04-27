"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
    const searchParams = useSearchParams()
    const subject = searchParams.get("subject") ?? ""

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: subject ? `I'm interested in: ${subject}` : "",
    })

    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("sending")

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        console.log("Form Submitted:", formData)
        setStatus("success")
        setFormData({ name: "", email: "", phone: "", message: "" })
    }

    const inputClasses = "w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-transparent transition-all duration-300 text-white placeholder:text-zinc-600 backdrop-blur-sm"
    const labelClasses = "text-sm font-semibold text-zinc-300 ml-1 block"

    return (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                    <label htmlFor="name" className={labelClasses}>Full Name</label>
                    <input
                        id="name"
                        required
                        type="text"
                        className={inputClasses}
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div className="space-y-2.5">
                    <label htmlFor="email" className={labelClasses}>Email Address</label>
                    <input
                        id="email"
                        required
                        type="email"
                        className={inputClasses}
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
            </div>

            <div className="space-y-2.5">
                <label htmlFor="phone" className={labelClasses}>Phone Number (Optional)</label>
                <input
                    id="phone"
                    type="tel"
                    className={inputClasses}
                    placeholder="+234..."
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
            </div>

            <div className="space-y-2.5">
                <label htmlFor="message" className={labelClasses}>Message</label>
                <textarea
                    id="message"
                    required
                    rows={5}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                />
            </div>

            <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full h-14 text-lg font-bold mt-2 shadow-[0_0_20px_-5px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.6)] transition-all duration-300"
                disabled={status === "sending" || status === "success"}
            >
                {status === "sending" ? (
                    "Sending..."
                ) : status === "success" ? (
                    <><CheckCircle className="mr-2 h-5 w-5" /> Message Sent</>
                ) : (
                    <><Send className="mr-2 h-5 w-5" /> Send Message</>
                )}
            </Button>

            {status === "success" && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-center">
                    <p className="text-green-400 font-medium">Thanks for reaching out! I'll get back to you soon.</p>
                </div>
            )}
        </form>
    )
}
