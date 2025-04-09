"use client"

import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Share2, ThumbsUp, User } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

// Mock blog post data
const blogPosts = {
  "understanding-crypto-taxes": {
    title: "Understanding Cryptocurrency Taxes: A Beginner's Guide",
    author: "Jane Smith",
    date: "March 15, 2024",
    category: "Education",
    readTime: "8 min read",
    content: `
      <h2>Introduction to Cryptocurrency Taxation</h2>
      <p>As cryptocurrencies continue to gain mainstream adoption, tax authorities around the world have begun to establish clearer guidelines for how these digital assets should be taxed. For many cryptocurrency users, understanding these tax obligations can be challenging due to the complex and evolving nature of both cryptocurrency technology and tax regulations.</p>
      
      <p>This guide aims to provide a foundational understanding of cryptocurrency taxation principles that are commonly applied in many jurisdictions. However, it's important to note that tax laws vary significantly by country and are subject to change as regulatory frameworks evolve.</p>
      
      <h2>Basic Tax Principles for Cryptocurrencies</h2>
      <p>In most jurisdictions, cryptocurrencies are treated as property or assets for tax purposes, rather than as currency. This classification has significant implications for how various cryptocurrency transactions are taxed:</p>
      
      <h3>1. Capital Gains Tax</h3>
      <p>When you sell or exchange cryptocurrency for fiat currency (like USD or EUR) or for another cryptocurrency, you may realize a capital gain or loss. The gain or loss is typically calculated as the difference between your cost basis (what you paid for the cryptocurrency) and the fair market value at the time of sale or exchange.</p>
      
      <p>Capital gains are usually classified as either short-term or long-term:</p>
      <ul>
        <li><strong>Short-term capital gains:</strong> Gains on assets held for one year or less, often taxed at your ordinary income tax rate.</li>
        <li><strong>Long-term capital gains:</strong> Gains on assets held for more than one year, typically taxed at lower rates than short-term gains.</li>
      </ul>
      
      <h3>2. Income Tax</h3>
      <p>Certain cryptocurrency activities may be subject to income tax rather than capital gains tax:</p>
      <ul>
        <li><strong>Mining rewards:</strong> Cryptocurrency received from mining activities is often treated as income, valued at the fair market value of the cryptocurrency at the time it was received.</li>
        <li><strong>Staking rewards:</strong> Similar to mining, rewards earned from staking are typically considered income.</li>
        <li><strong>Airdrops:</strong> Free tokens received through airdrops may be treated as income.</li>
        <li><strong>Payments for goods or services:</strong> If you receive cryptocurrency as payment for providing goods or services, this is generally considered income.</li>
      </ul>
      
      <h2>Common Taxable Events</h2>
      <p>Understanding what constitutes a taxable event is crucial for proper cryptocurrency tax reporting. Here are some common taxable events:</p>
      
      <ul>
        <li>Selling cryptocurrency for fiat currency (e.g., USD, EUR)</li>
        <li>Trading one cryptocurrency for another</li>
        <li>Using cryptocurrency to purchase goods or services</li>
        <li>Receiving cryptocurrency from mining or staking</li>
        <li>Receiving cryptocurrency as payment for goods or services</li>
        <li>Receiving airdrops or hard fork tokens</li>
      </ul>
      
      <h2>Record-Keeping for Cryptocurrency Taxes</h2>
      <p>Maintaining detailed records of all your cryptocurrency transactions is essential for accurate tax reporting. For each transaction, you should record:</p>
      
      <ul>
        <li>Date of acquisition</li>
        <li>Cost basis (purchase price in fiat currency)</li>
        <li>Date of disposal (if applicable)</li>
        <li>Fair market value at the time of disposal (if applicable)</li>
        <li>Transaction fees</li>
        <li>Type of transaction (purchase, sale, trade, mining reward, etc.)</li>
      </ul>
      
      <p>Many cryptocurrency exchanges provide transaction history reports, but these may not include all the information needed for tax purposes, especially if you've moved cryptocurrency between different platforms or wallets.</p>
      
      <h2>Conclusion</h2>
      <p>Navigating cryptocurrency taxation can be complex, but understanding the basic principles is an important first step. As the regulatory landscape continues to evolve, staying informed about changes in tax laws and maintaining comprehensive records of your cryptocurrency activities will help ensure compliance with your tax obligations.</p>
      
      <p>Remember that this guide provides general information and should not be considered tax advice. For personalized guidance on your specific situation, consult with a qualified tax professional who has experience with cryptocurrency taxation.</p>
    `,
    relatedPosts: ["tax-implications-defi", "crypto-tax-loss-harvesting"],
  },
  "tax-implications-defi": {
    title: "Tax Implications of DeFi: What You Need to Know",
    author: "Michael Johnson",
    date: "March 10, 2024",
    category: "DeFi",
    readTime: "12 min read",
    content: `
      <h2>Introduction to DeFi Taxation</h2>
      <p>Decentralized Finance (DeFi) has revolutionized the cryptocurrency ecosystem, offering innovative financial services without traditional intermediaries. However, the tax implications of participating in DeFi protocols can be particularly complex and often lack clear regulatory guidance.</p>
      
      <p>This article explores the potential tax considerations for common DeFi activities and provides a framework for understanding your potential tax obligations. As with all tax matters, regulations vary by jurisdiction and are subject to change, so consulting with a tax professional is recommended.</p>
      
      <h2>Lending and Borrowing</h2>
      <p>DeFi platforms like Aave, Compound, and MakerDAO allow users to lend their cryptocurrency and earn interest or borrow against their crypto assets.</p>
      
      <h3>Lending</h3>
      <p>When you lend your cryptocurrency on a DeFi platform and receive interest payments:</p>
      <ul>
        <li>The interest earned is typically treated as ordinary income, valued at the fair market value of the tokens received at the time they were earned.</li>
        <li>Interest may be taxable as it accrues, even if not withdrawn from the platform.</li>
      </ul>
      
      <h3>Borrowing</h3>
      <p>Taking out a loan using cryptocurrency as collateral:</p>
      <ul>
        <li>Generally, borrowing is not a taxable event because you're obligated to repay the loan.</li>
        <li>However, if your collateral is liquidated because you failed to maintain the required loan-to-value ratio, this may be considered a disposal of your cryptocurrency and could trigger capital gains tax.</li>
      </ul>
      
      <h2>Liquidity Pools and Yield Farming</h2>
      <p>Providing liquidity to decentralized exchanges (DEXs) like Uniswap or engaging in yield farming strategies introduces several potential tax considerations:</p>
      
      <h3>Adding Liquidity</h3>
      <p>When you contribute assets to a liquidity pool:</p>
      <ul>
        <li>This may be considered a taxable exchange if you're receiving LP (liquidity provider) tokens in return for your contributed assets.</li>
        <li>The exchange could trigger capital gains tax on any appreciation in the value of the assets you contributed.</li>
      </ul>
      
      <h3>Earning LP Fees and Rewards</h3>
      <p>As a liquidity provider, you may earn:</p>
      <ul>
        <li>Trading fees from the pool, which are typically treated as ordinary income.</li>
        <li>Additional token rewards (yield farming), which are also generally considered income at the fair market value when received.</li>
      </ul>
      
      <h3>Removing Liquidity</h3>
      <p>When you withdraw your assets from a liquidity pool:</p>
      <ul>
        <li>This is typically considered a disposal of your LP tokens, potentially triggering capital gains tax.</li>
        <li>The cost basis of the assets you receive may be the fair market value at the time of withdrawal.</li>
      </ul>
      
      <h2>Token Swaps and DEX Trading</h2>
      <p>Trading tokens on decentralized exchanges:</p>
      <ul>
        <li>Each swap or trade is generally considered a taxable event, similar to trading on centralized exchanges.</li>
        <li>Capital gains or losses are typically calculated based on the difference between the cost basis of the token you're trading away and the fair market value of the token you're receiving.</li>
      </ul>
      
      <h2>Governance and Staking</h2>
      <p>Participating in DeFi governance and staking activities:</p>
      <ul>
        <li>Receiving governance tokens may be treated as income at fair market value when received.</li>
        <li>Staking rewards are typically considered income when received.</li>
        <li>Voting with governance tokens is generally not a taxable event if you retain ownership of the tokens.</li>
      </ul>
      
      <h2>Impermanent Loss and Tax Implications</h2>
      <p>Impermanent loss occurs when the price ratio of tokens in a liquidity pool changes compared to when you deposited them:</p>
      <ul>
        <li>There is currently limited guidance on how impermanent loss should be treated for tax purposes.</li>
        <li>Some tax professionals argue it could be considered a capital loss, while others suggest it's simply part of the overall return calculation when liquidity is removed.</li>
      </ul>
      
      <h2>Record-Keeping Challenges</h2>
      <p>DeFi activities present unique record-keeping challenges:</p>
      <ul>
        <li>Transactions may occur across multiple protocols and blockchains.</li>
        <li>Smart contracts may automatically reinvest rewards or rebalance positions.</li>
        <li>Historical price data for some tokens may be difficult to obtain.</li>
      </ul>
      
      <p>Using specialized cryptocurrency tax software that supports DeFi protocols can help track these complex interactions and calculate potential tax obligations.</p>
      
      <h2>Conclusion</h2>
      <p>The tax implications of DeFi activities are complex and continue to evolve as regulatory frameworks develop. Maintaining detailed records of all your DeFi transactions is crucial for accurate tax reporting.</p>
      
      <p>Given the complexity of DeFi taxation, working with a tax professional who has experience with cryptocurrency and DeFi is highly recommended to ensure compliance with applicable tax laws and to identify potential tax optimization strategies.</p>
    `,
    relatedPosts: ["understanding-crypto-taxes", "nft-taxes-explained"],
  },
  // Additional blog posts would be defined here
}

export default function BlogPostPage() {
  const router = useRouter()
  const params = useParams()
  const slug = params.slug as string

  const post = blogPosts[slug]

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header title="Blog Post Not Found" />
        <main className="flex-1 p-4 pb-20 md:pb-4">
          <div className="mx-auto max-w-4xl text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => router.push("/crypto/portfolio/tax/blog")} className="animate-button-press">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </div>
        </main>
        <MobileNav />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header title={post.title} />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-3xl">
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push("/crypto/portfolio/tax/blog")}
            className="mb-6 animate-button-press"
          >
            <ArrowLeft className="mr-2 h-4 w-4 text-foreground" />
            Back to Blog
          </Button>

          <article>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="bg-muted px-2 py-1 rounded-full">{post.category}</span>
              <span>{post.readTime}</span>
            </div>

            <div
              className="prose prose-sm sm:prose lg:prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="flex justify-between items-center mt-8 pt-4 border-t">
              <Button variant="outline" size="sm" className="gap-1">
                <ThumbsUp className="h-4 w-4" />
                Helpful
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </article>

          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-bold mb-4">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {post.relatedPosts.map((relatedSlug) => {
                  const relatedPost = blogPosts[relatedSlug]
                  if (!relatedPost) return null

                  return (
                    <Card
                      key={relatedSlug}
                      className="hover-lift cursor-pointer"
                      onClick={() => router.push(`/crypto/portfolio/tax/blog/${relatedSlug}`)}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{relatedPost.title}</CardTitle>
                        <CardDescription className="text-xs">
                          {relatedPost.date} • {relatedPost.readTime}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </main>
      <MobileNav />
    </div>
  )
}
