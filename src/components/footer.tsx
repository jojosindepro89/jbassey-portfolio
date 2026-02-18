import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"
import { siteConfig } from "@/config/site"

export function Footer() {
    return (
        <footer className="border-t border-zinc-900 bg-[#050505] relative overflow-hidden">
            {/* Background enhancement */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="flex flex-col items-center text-center gap-6">
                    {/* Logo */}
                    <Link href="#home" className="flex flex-col items-center gap-4 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Image src="/logo.png" alt="JBassey Logo" width={100} height={100} className="w-auto h-24 object-contain relative z-10" />
                        </div>
                    </Link>

                    {/* Slogan / Text */}
                    <p className="text-zinc-400 max-w-md mx-auto">
                        Building the future of web & growth. <br />
                        <span className="text-[#D4AF37]">One pixel at a time.</span>
                    </p>

                    {/* Copyright */}
                    <div className="pt-8 border-t border-zinc-900 w-full max-w-xs mx-auto">
                        <p className="text-sm text-zinc-600">
                            © {new Date().getFullYear()} Joseph Bassey.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
