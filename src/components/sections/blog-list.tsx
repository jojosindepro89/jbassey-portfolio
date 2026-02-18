"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Calendar, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BlogPost } from "@/lib/blog"
import { cn } from "@/lib/utils"

// I need to create Input component first, or just use standard input here for now
// I'll create a simple input wrapper here or use standard input
function SearchInput({ value, onChange }: { value: string, onChange: (v: string) => void }) {
    return (
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
                type="text"
                placeholder="Search posts..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37] text-sm"
            />
        </div>
    )
}

interface BlogListProps {
    initialPosts: BlogPost[]
}

export function BlogList({ initialPosts }: BlogListProps) {
    const [search, setSearch] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")

    // Extract categories
    const categories = ["All", ...Array.from(new Set(initialPosts.map(p => p.frontmatter.category)))]

    // Filter posts
    const filteredPosts = initialPosts.filter(post => {
        const matchesSearch = post.frontmatter.title.toLowerCase().includes(search.toLowerCase()) ||
            post.frontmatter.description.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = selectedCategory === "All" || post.frontmatter.category === selectedCategory

        return matchesSearch && matchesCategory
    })

    return (
        <div className="space-y-8">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="w-full md:w-1/3">
                    <SearchInput value={search} onChange={setSearch} />
                </div>

                <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={selectedCategory === cat ? "gold" : "outline"}
                            size="sm"
                            onClick={() => setSelectedCategory(cat)}
                            className="rounded-full text-xs"
                        >
                            {cat}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Posts Grid */}
            {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <Card className="h-full hover:border-[#D4AF37]/50 transition-colors cursor-pointer group flex flex-col">
                                <div className="aspect-video bg-zinc-900 relative overflow-hidden">
                                    {/* Placeholder for image */}
                                    <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600">
                                        Course Image
                                    </div>
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-mono text-[#D4AF37]">{post.frontmatter.category}</span>
                                        <span className="text-xs text-zinc-500 flex items-center gap-1">
                                            <Calendar className="h-3 w-3" /> {post.frontmatter.date}
                                        </span>
                                    </div>
                                    <CardTitle className="group-hover:text-[#D4AF37] transition-colors">{post.frontmatter.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <CardDescription className="line-clamp-3">
                                        {post.frontmatter.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <span className="text-sm font-medium text-white group-hover:underline flex items-center">
                                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                                    </span>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 text-zinc-500">
                    No posts found.
                </div>
            )}
        </div>
    )
}
