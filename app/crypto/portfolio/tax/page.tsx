"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, FileText, HelpCircle, Info, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function CryptoTaxPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Crypto Tax" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/crypto" className="text-sm text-muted-foreground hover:text-foreground">
                Cryptocurrencies
              </Link>
              <span className="text-sm text-muted-foreground">/</span>
              <Link href="/crypto/portfolio" className="text-sm text-muted-foreground hover:text-foreground">
                Portfolio
              </Link>
              <span className="text-sm text-muted-foreground">/</span>
              <span className="text-sm font-medium">Tax</span>
            </div>

            <h1 className="text-2xl font-bold mb-2">Crypto Tax Management</h1>
            <p className="text-muted-foreground mb-6">
              Simplify your cryptocurrency tax reporting with our comprehensive tools and resources.
            </p>

            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tax Reporting Made Easy</CardTitle>
                      <CardDescription>
                        Our tax tools help you stay compliant with cryptocurrency tax regulations.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Cryptocurrency transactions are taxable events in most jurisdictions. Our suite of tax tools
                        helps you:
                      </p>
                      <ul className="space-y-2 list-disc pl-5 mb-4">
                        <li>Calculate your crypto tax liability</li>
                        <li>Generate tax reports for different jurisdictions</li>
                        <li>Track cost basis and capital gains</li>
                        <li>Import transaction history from exchanges</li>
                        <li>Export data in tax-friendly formats</li>
                      </ul>
                      <Button asChild className="w-full mt-2">
                        <Link href="/crypto/portfolio/tax/calculator">Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Tax Resources</CardTitle>
                      <CardDescription>
                        Learn about cryptocurrency taxation and stay updated with the latest regulations.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <FileText className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Tax Guides</h3>
                            <p className="text-sm text-muted-foreground">
                              Comprehensive guides on crypto taxation in different countries.
                            </p>
                            <Button variant="link" asChild className="p-0 h-auto text-sm">
                              <Link href="/crypto/portfolio/tax/blog">View Guides</Link>
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <HelpCircle className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">FAQ</h3>
                            <p className="text-sm text-muted-foreground">
                              Answers to common questions about cryptocurrency taxation.
                            </p>
                            <Button variant="link" asChild className="p-0 h-auto text-sm">
                              <Link href="/crypto/portfolio/tax/faq">View FAQ</Link>
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Info className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">About Our Tax Tools</h3>
                            <p className="text-sm text-muted-foreground">
                              Learn how our tax tools work and how they can help you.
                            </p>
                            <Button variant="link" asChild className="p-0 h-auto text-sm">
                              <Link href="/crypto/portfolio/tax/about">Learn More</Link>
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h3 className="font-medium">Tax Support</h3>
                            <p className="text-sm text-muted-foreground">
                              Get help with your cryptocurrency tax questions.
                            </p>
                            <Button variant="link" asChild className="p-0 h-auto text-sm">
                              <Link href="/crypto/portfolio/tax/contact">Contact Support</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="tools">
                <div className="grid gap-6 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calculator className="h-5 w-5" />
                        Tax Calculator
                      </CardTitle>
                      <CardDescription>Calculate your crypto tax liability</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Our tax calculator helps you determine your capital gains, losses, and tax obligations for your
                        cryptocurrency transactions.
                      </p>
                      <Button asChild className="w-full">
                        <Link href="/crypto/portfolio/tax/calculator">Calculate Taxes</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Tax Reports
                      </CardTitle>
                      <CardDescription>Generate detailed tax reports</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Generate comprehensive tax reports for different jurisdictions and time periods.
                      </p>
                      <Button asChild className="w-full">
                        <Link href="/crypto/portfolio/tax/report">Generate Reports</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Import/Export
                      </CardTitle>
                      <CardDescription>Manage your transaction data</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Import transaction history from exchanges and export tax data in various formats.
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <Button asChild variant="outline">
                          <Link href="/crypto/portfolio/tax/import">Import</Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link href="/crypto/portfolio/tax/export">Export</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="resources">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tax Guides & Articles</CardTitle>
                      <CardDescription>Stay informed about cryptocurrency taxation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-b pb-4">
                          <h3 className="font-medium">Understanding Crypto Capital Gains</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Learn how capital gains are calculated for cryptocurrency transactions.
                          </p>
                          <Button variant="link" asChild className="p-0 h-auto text-sm">
                            <Link href="/crypto/portfolio/tax/blog/capital-gains">Read Article</Link>
                          </Button>
                        </div>

                        <div className="border-b pb-4">
                          <h3 className="font-medium">Tax Implications of DeFi</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Understand the tax considerations for decentralized finance activities.
                          </p>
                          <Button variant="link" asChild className="p-0 h-auto text-sm">
                            <Link href="/crypto/portfolio/tax/blog/defi-tax">Read Article</Link>
                          </Button>
                        </div>

                        <div>
                          <h3 className="font-medium">NFT Taxation Guide</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Learn about the tax implications of buying, selling, and creating NFTs.
                          </p>
                          <Button variant="link" asChild className="p-0 h-auto text-sm">
                            <Link href="/crypto/portfolio/tax/blog/nft-taxation">Read Article</Link>
                          </Button>
                        </div>

                        <Button asChild className="w-full">
                          <Link href="/crypto/portfolio/tax/blog">View All Articles</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Support & Help</CardTitle>
                      <CardDescription>Get assistance with your crypto tax questions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-b pb-4">
                          <h3 className="font-medium">Frequently Asked Questions</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Find answers to common questions about cryptocurrency taxation.
                          </p>
                          <Button variant="link" asChild className="p-0 h-auto text-sm">
                            <Link href="/crypto/portfolio/tax/faq">View FAQ</Link>
                          </Button>
                        </div>

                        <div className="border-b pb-4">
                          <h3 className="font-medium">Contact Tax Support</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Get help from our tax specialists for your specific questions.
                          </p>
                          <Button variant="link" asChild className="p-0 h-auto text-sm">
                            <Link href="/crypto/portfolio/tax/contact">Contact Support</Link>
                          </Button>
                        </div>

                        <div>
                          <h3 className="font-medium">Terms & Conditions</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Review the terms and conditions for using our tax tools.
                          </p>
                          <Button variant="link" asChild className="p-0 h-auto text-sm">
                            <Link href="/crypto/portfolio/tax/terms">View Terms</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
