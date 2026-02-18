import { Section } from "@/components/section"
import { BlogList } from "@/components/sections/blog-list"
import { ContactBanner } from "@/components/sections/contact-banner"
import { getBlogPosts } from "@/lib/blog"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog",
    description: "Thoughts, tutorials, and insights on web development and digital marketing.",
}

export default function BlogPage() {
    const posts = getBlogPosts()

    return (
        <div className="pb-20">
            <Section className="pt-32 pb-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Thoughts & <span className="text-[#D4AF37]">Insights</span></h1>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                    Tutorials, case studies, and industry trends to help you stay ahead.
                </p>
            </Section>

            <Section>
                <BlogList initialPosts={posts} />
            </Section>

            <Section background="secondary" className="mt-20 py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Subscribe to my Newsletter</h2>
                <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
                    Get the latest posts and specialized tips delivered directly to your inbox.
                </p>
                <form className="max-w-md mx-auto flex gap-2">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    />
                    <button className="bg-[#D4AF37] text-black font-bold px-6 py-2 rounded-md hover:bg-[#b5952f]">
                        Subscribe
                    </button>
                </form>
            </Section>

            <ContactBanner />
        </div>
    )
}
