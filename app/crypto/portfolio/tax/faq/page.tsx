"use client"

import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

// Mock FAQ data
const faqCategories = [
  {
    id: "general",
    title: "General Tax Questions",
    faqs: [
      {
        question: "Do I need to pay taxes on my cryptocurrency?",
        answer:
          "In most jurisdictions, cryptocurrency is treated as property for tax purposes, and transactions involving cryptocurrency may be subject to capital gains tax or income tax, depending on the nature of the transaction. However, tax laws vary by country and are subject to change, so it's important to consult with a tax professional familiar with cryptocurrency taxation in your jurisdiction.",
      },
      {
        question: "How are cryptocurrencies taxed?",
        answer:
          "Cryptocurrency taxation typically falls into two categories: capital gains tax (when you sell or exchange cryptocurrency) and income tax (when you receive cryptocurrency as income, such as through mining, staking, or as payment for goods or services). The specific tax rates and rules depend on your jurisdiction and individual circumstances.",
      },
      {
        question: "What is a taxable event for cryptocurrency?",
        answer:
          "Common taxable events include: selling cryptocurrency for fiat currency (e.g., USD), trading one cryptocurrency for another, using cryptocurrency to purchase goods or services, receiving cryptocurrency as payment for goods or services, mining or staking rewards, and receiving airdrops or hard fork tokens. However, simply transferring cryptocurrency between wallets you own is generally not considered a taxable event.",
      },
    ],
  },
  {
    id: "reporting",
    title: "Tax Reporting",
    faqs: [
      {
        question: "How do I report cryptocurrency on my tax return?",
        answer:
          "The specific reporting requirements vary by country. In the United States, for example, cryptocurrency transactions are typically reported on Schedule D and Form 8949 for capital gains and losses. Income from cryptocurrency (such as mining or staking rewards) is generally reported on Schedule 1 or Schedule C, depending on whether the activity is considered a hobby or a business. Cards2Cash provides tax reports that can help you or your tax professional complete the necessary forms.",
      },
      {
        question: "What records should I keep for cryptocurrency tax purposes?",
        answer:
          "You should maintain detailed records of all cryptocurrency transactions, including: date of acquisition, cost basis (purchase price in fiat currency), date of disposal (if applicable), fair market value at the time of disposal (if applicable), transaction fees, and the type of transaction (purchase, sale, trade, mining reward, etc.). Cards2Cash helps you track this information automatically for transactions made through our platform.",
      },
      {
        question: "What if I don't have complete records of all my cryptocurrency transactions?",
        answer:
          "If you're missing records, you should make a good faith effort to reconstruct them using available information from exchanges, wallet history, and blockchain explorers. Some tax authorities may accept reasonable estimation methods if complete records are unavailable, but this varies by jurisdiction. It's best to consult with a tax professional if you're missing significant transaction data.",
      },
    ],
  },
  {
    id: "defi",
    title: "DeFi & Advanced Topics",
    faqs: [
      {
        question: "How are DeFi activities taxed?",
        answer:
          "DeFi activities can have complex tax implications. Generally: Lending cryptocurrency and earning interest is typically treated as income. Providing liquidity to pools may trigger capital gains tax when assets are contributed and withdrawn. Yield farming rewards are usually considered income. Borrowing against your cryptocurrency is generally not a taxable event, but liquidation of collateral typically is. Given the complexity, it's advisable to consult with a tax professional familiar with DeFi taxation.",
      },
      {
        question: "What are the tax implications of NFTs?",
        answer:
          "Creating, buying, selling, and trading NFTs generally follow similar tax principles as other cryptocurrency transactions. Creating and selling an NFT may be treated as income. Buying an NFT and later selling it for a profit would typically trigger capital gains tax. The specific tax treatment depends on whether you're considered a collector, investor, or creator, and varies by jurisdiction.",
      },
      {
        question: "How is staking taxed?",
        answer:
          "Staking rewards are generally treated as income, valued at the fair market value of the cryptocurrency at the time the rewards are received. When you later sell or exchange these tokens, you may also incur capital gains tax based on any change in value since you received them. Some jurisdictions may have specific rules for staking, so it's important to consult with a tax professional.",
      },
    ],
  },
  {
    id: "cards2cash",
    title: "Cards2Cash Tax Services",
    faqs: [
      {
        question: "How does Cards2Cash help with cryptocurrency taxes?",
        answer:
          "Cards2Cash provides tools to track your cryptocurrency transactions, calculate potential tax obligations, and generate tax reports that can be shared with your tax professional. Our platform automatically categorizes transactions, calculates gains and losses using various accounting methods, and helps identify potential tax-saving opportunities.",
      },
      {
        question: "Does Cards2Cash provide tax advice?",
        answer:
          "Cards2Cash provides educational resources and tools to help you understand and calculate your potential cryptocurrency tax obligations. However, we do not provide personalized tax advice. For specific guidance on your tax situation, we recommend consulting with a qualified tax professional who has experience with cryptocurrency taxation.",
      },
      {
        question: "How accurate are Cards2Cash tax calculations?",
        answer:
          "Our tax calculations are based on the transaction data available in your Cards2Cash account and any external data you import. The accuracy depends on the completeness and correctness of this data. We use industry-standard accounting methods and regularly update our platform to reflect changes in tax regulations. However, tax laws are complex and vary by jurisdiction, so we recommend reviewing the calculations with a tax professional.",
      },
    ],
  },
]

export default function CryptoTaxFAQPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter FAQs based on search query and active category
  const filteredFAQs = faqCategories.flatMap((category) => {
    const categoryFAQs = category.faqs
      .filter(
        (faq) =>
          (searchQuery === "" ||
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())) &&
          (activeCategory === "all" || activeCategory === category.id),
      )
      .map((faq) => ({
        ...faq,
        categoryId: category.id,
        categoryTitle: category.title,
      }))

    return categoryFAQs
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Crypto Tax FAQ" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-4xl">
          <Button variant="outline" size="sm" onClick={() => router.back()} className="mb-6 animate-button-press">
            <ArrowLeft className="mr-2 h-4 w-4 text-foreground" />
            Back
          </Button>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Find answers to common questions about cryptocurrency taxation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search FAQs..."
                  className="pl-10 input-focus-animation"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <Button
                  variant={activeCategory === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory("all")}
                  className="animate-button-press"
                >
                  All Categories
                </Button>
                {faqCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category.id)}
                    className="animate-button-press"
                  >
                    {category.title}
                  </Button>
                ))}
              </div>

              {filteredFAQs.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <div className="pt-2">
                          {activeCategory === "all" && (
                            <div className="mb-2">
                              <span className="text-xs font-medium bg-muted px-2 py-1 rounded-full">
                                {faq.categoryTitle}
                              </span>
                            </div>
                          )}
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-12 bg-muted rounded-lg">
                  <h3 className="text-lg font-medium mb-2">No FAQs found</h3>
                  <p className="text-muted-foreground mb-4">We couldn't find any FAQs matching your search criteria.</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("")
                      setActiveCategory("all")
                    }}
                  >
                    Reset filters
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Still have questions?</CardTitle>
              <CardDescription>Our cryptocurrency tax specialists are here to help</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4">
              <Button
                className="flex-1 animate-button-press"
                onClick={() => router.push("/crypto/portfolio/tax/contact")}
              >
                Contact Tax Support
              </Button>
              <Button
                variant="outline"
                className="flex-1 animate-button-press"
                onClick={() => router.push("/crypto/portfolio/tax/blog")}
              >
                Read Tax Blog
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <MobileNav />
    </div>
  )
}
