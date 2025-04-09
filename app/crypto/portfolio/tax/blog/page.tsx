"use client"

import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ArrowRight, Calendar, Search, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

// Mock blog posts data
const blogPosts = [
  {
    id: "understanding-crypto-taxes",
    title: "Understanding Cryptocurrency Taxes: A Beginner's Guide",
    excerpt:
      "Learn the basics of cryptocurrency taxation and how different transactions might affect your tax obligations.",
    author: "Jane Smith",
    date: "March 15, 2024",
    category: "Education",
    readTime: "8 min read",
  },
  {
    id: "tax-implications-defi",
    title: "Tax Implications of DeFi: What You Need to Know",
    excerpt: "Explore the complex tax considerations when participating in decentralized finance protocols.",
    author: "Michael Johnson",
    date: "March 10, 2024",
    category: "DeFi",
    readTime: "12 min read",
  },
  {
    id: "nft-taxes-explained",
    title: "NFT Taxes Explained: Collecting, Creating, and Trading",
    excerpt: "Understand how tax authorities view NFT transactions and what you need to report on your tax returns.",
    author: "Sarah Williams",
    date: "March 5, 2024",
    category: "NFTs",
    readTime: "10 min read",
  },
  {
    id: "crypto-tax-loss-harvesting",
    title: "Crypto Tax Loss Harvesting Strategies",
    excerpt: "Learn how to potentially reduce your tax liability through strategic selling of cryptocurrency assets.",
    author: "David Chen",
    date: "February 28, 2024",
    category: "Strategy",
    readTime: "15 min read",
  },
  {
    id: "international-crypto-taxation",
    title: "International Cryptocurrency Taxation: A Comparative Analysis",
    excerpt: "Compare how different countries approach cryptocurrency taxation and what it means for global investors.",
    author: "Elena Rodriguez",
    date: "February 20, 2024",
    category: "Global",
    readTime: "18 min read",
  },
]

export default function CryptoTaxBlogPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Crypto Tax Blog" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-4xl">
          <Button variant="outline" size="sm" onClick={() => router.back()} className="mb-6 animate-button-press">
            <ArrowLeft className="mr-2 h-4 w-4 text-foreground" />
            Back
          </Button>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Crypto Tax Blog</h1>
            <p className="text-muted-foreground mb-6">
              Stay informed about cryptocurrency taxation with our latest articles, guides, and updates.
            </p>
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10 input-focus-animation"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="hover-lift cursor-pointer"
                  onClick={() => router.push(`/crypto/portfolio/tax/blog/${post.id}`)}
                >
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="bg-muted px-2 py-1 rounded-full text-xs">{post.category}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <Button variant="ghost" size="sm" className="gap-1">
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="text-center py-12 bg-muted rounded-lg">
                <h3 className="text-lg font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-4">
                  We couldn't find any articles matching your search criteria.
                </p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear search
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <MobileNav />
    </div>
  )
}
