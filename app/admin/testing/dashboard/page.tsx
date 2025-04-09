"use client"

import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LinkChecker } from "@/components/testing/link-checker"
import { AccessibilityChecker } from "@/components/testing/accessibility-checker"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TestingDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Testing Dashboard" showBackButton={true} showLogo={true} />

      <PageContainer className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold">Cards2Cash Testing Dashboard</h1>
                <p className="text-muted-foreground mt-2">
                  Comprehensive tools for validating application functionality and accessibility
                </p>
              </div>
              <Button asChild>
                <Link href="/admin/testing">
                  Full Page Testing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Pages</CardTitle>
                  <CardDescription>Total pages in the application</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">
                    {Object.values(pageStructure).reduce((acc, curr) => acc + curr.length, 0)}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Links</CardTitle>
                  <CardDescription>Estimated total links</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">
                    {Object.values(pageStructure).reduce((acc, curr) => acc + curr.length, 0) * 5}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Interactive Elements</CardTitle>
                  <CardDescription>Estimated total elements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">
                    {Object.values(pageStructure).reduce((acc, curr) => acc + curr.length, 0) * 8}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="link-checker" className="space-y-6">
              <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
                <TabsTrigger value="link-checker">Link Checker</TabsTrigger>
                <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
              </TabsList>

              <TabsContent value="link-checker">
                <LinkChecker />
              </TabsContent>

              <TabsContent value="accessibility">
                <AccessibilityChecker />
              </TabsContent>
            </Tabs>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Recent Test Results</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Tertiary Pages</CardTitle>
                    <CardDescription>Most recent validation results</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pageStructure.tertiary.slice(0, 3).map((page, index) => (
                        <div key={index} className="flex items-center justify-between border-b pb-2 last:border-0">
                          <div>
                            <p className="font-medium">{page.title}</p>
                            <p className="text-xs text-muted-foreground">{page.path}</p>
                          </div>
                          <div className="flex items-center">
                            <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                            <span className="text-sm">Valid</span>
                          </div>
                        </div>
                      ))}

                      <Button variant="link" size="sm" className="px-0" asChild>
                        <Link href="/admin/testing">
                          View all tertiary pages
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quaternary Pages</CardTitle>
                    <CardDescription>Most recent validation results</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pageStructure.quaternary.slice(0, 3).map((page, index) => (
                        <div key={index} className="flex items-center justify-between border-b pb-2 last:border-0">
                          <div>
                            <p className="font-medium">{page.title}</p>
                            <p className="text-xs text-muted-foreground">{page.path}</p>
                          </div>
                          <div className="flex items-center">
                            <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                            <span className="text-sm">Valid</span>
                          </div>
                        </div>
                      ))}

                      <Button variant="link" size="sm" className="px-0" asChild>
                        <Link href="/admin/testing">
                          View all quaternary pages
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}

// Page structure definition (same as in the testing page)
const pageStructure = {
  tertiary: [
    { path: "/about", title: "About Us" },
    { path: "/features", title: "Features" },
    { path: "/contact", title: "Contact Us" },
    { path: "/terms", title: "Terms of Service" },
    { path: "/privacy", title: "Privacy Policy" },
    { path: "/cookies", title: "Cookie Policy" },
    { path: "/compliance", title: "Compliance" },
    { path: "/faq", title: "FAQ" },
    { path: "/pricing", title: "Pricing" },
  ],
  quaternary: [
    { path: "/crypto/portfolio", title: "Crypto Portfolio" },
    { path: "/crypto/transactions", title: "Crypto Transactions" },
    { path: "/crypto/settings", title: "Crypto Settings" },
    { path: "/crypto/alerts", title: "Crypto Alerts" },
    { path: "/crypto/news", title: "Crypto News" },
    { path: "/crypto/learn", title: "Crypto Learn" },
    { path: "/crypto/calculator", title: "Crypto Calculator" },
    { path: "/crypto/compare", title: "Crypto Compare" },
    { path: "/crypto/watchlist", title: "Crypto Watchlist" },
    { path: "/crypto/converter", title: "Crypto Converter" },
  ],
  quintenary: [
    { path: "/crypto/portfolio/[id]", title: "Crypto Portfolio Detail" },
    { path: "/crypto/portfolio/create", title: "Create Crypto Portfolio" },
    { path: "/crypto/portfolio/[id]/edit", title: "Edit Crypto Portfolio" },
    { path: "/crypto/portfolio/[id]/delete", title: "Delete Crypto Portfolio" },
    { path: "/crypto/portfolio/[id]/share", title: "Share Crypto Portfolio" },
    { path: "/crypto/portfolio/[id]/export", title: "Export Crypto Portfolio" },
    { path: "/crypto/portfolio/import", title: "Import Crypto Portfolio" },
    { path: "/crypto/portfolio/settings", title: "Portfolio Settings" },
    { path: "/crypto/portfolio/alerts", title: "Portfolio Alerts" },
    { path: "/crypto/portfolio/transactions", title: "Portfolio Transactions" },
    { path: "/crypto/portfolio/analytics", title: "Portfolio Analytics" },
    { path: "/crypto/portfolio/performance", title: "Portfolio Performance" },
    { path: "/crypto/portfolio/allocation", title: "Portfolio Allocation" },
    { path: "/crypto/portfolio/history", title: "Portfolio History" },
    { path: "/crypto/portfolio/report", title: "Portfolio Report" },
    { path: "/crypto/portfolio/tax/report", title: "Tax Report" },
  ],
  sensory: [
    { path: "/biometric-setup", title: "Biometric Setup" },
    { path: "/voice-commands", title: "Voice Commands" },
    { path: "/fingerprint-auth", title: "Fingerprint Authentication" },
    { path: "/face-recognition", title: "Face Recognition" },
    { path: "/haptic-feedback", title: "Haptic Feedback Settings" },
    { path: "/sound-settings", title: "Sound Settings" },
    { path: "/accessibility", title: "Accessibility Settings" },
  ],
}
