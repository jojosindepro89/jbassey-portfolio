import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Section } from "@/components/section"
import { getBlogPost, getBlogPosts } from "@/lib/blog"
import { ContactBanner } from "@/components/sections/contact-banner"

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const posts = getBlogPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params
    const post = getBlogPost(slug)

    if (!post) {
        return {
            title: "Post Not Found",
        }
    }

    return {
        title: post.frontmatter.title,
        description: post.frontmatter.description,
    }
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params
    const post = getBlogPost(slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="pb-20">
            <Section className="pt-32 pb-8">
                <Link href="/blog" className="inline-flex items-center text-zinc-400 hover:text-[#D4AF37] mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Link>

                <div className="max-w-3xl mx-auto">
                    <div className="mb-8 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-4 text-sm text-zinc-400">
                            <span className="flex items-center gap-1">
                                <Tag className="h-3 w-3 text-[#D4AF37]" /> {post.frontmatter.category}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" /> {post.frontmatter.date}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                            {post.frontmatter.title}
                        </h1>
                        <p className="text-xl text-zinc-400">
                            {post.frontmatter.description}
                        </p>
                    </div>

                    <div className="prose prose-invert prose-yellow max-w-none">
                        <MDXRemote source={post.content} />
                    </div>
                </div>
            </Section>

            <ContactBanner />
        </div>
    )
}
