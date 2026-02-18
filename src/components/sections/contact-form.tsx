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

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">Full Name</label>
                    <input
                        id="name"
                        required
                        type="text"
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email Address</label>
                    <input
                        id="email"
                        required
                        type="email"
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-zinc-300">Phone Number (Optional)</label>
                <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    placeholder="+234..."
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message</label>
                <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                />
            </div>

            <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                disabled={status === "sending" || status === "success"}
            >
                {status === "sending" ? (
                    "Sending..."
                ) : status === "success" ? (
                    <><CheckCircle className="mr-2 h-4 w-4" /> Message Sent</>
                ) : (
                    <><Send className="mr-2 h-4 w-4" /> Send Message</>
                )}
            </Button>

            {status === "success" && (
                <p className="text-green-500 text-sm text-center">Thanks reaching out! I'll get back to you soon.</p>
            )}
        </form>
    )
}
