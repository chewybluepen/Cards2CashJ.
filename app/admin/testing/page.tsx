"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"
import { PageValidator } from "@/components/testing/page-validator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type {
  PageValidationResult,
  LinkValidationResult,
  InteractiveElementResult,
  AccessibilityIssue,
} from "@/lib/testing-utils"
import { Loader2 } from "lucide-react"

// Define the page structure for testing
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

// Mock function to simulate testing pages
const mockTestPages = async (pages: { path: string; title: string }[]): Promise<PageValidationResult[]> => {
  // In a real implementation, this would actually test the pages
  return Promise.all(
    pages.map(async (page) => {
      // Simulate some processing time
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000 + 500))

      // Generate random links for testing purposes
      const links: LinkValidationResult[] = Array.from({ length: Math.floor(Math.random() * 5) + 1 }, (_, i) => ({
        url: `${page.path}/link-${i + 1}`,
        status: Math.random() > 0.9 ? "invalid" : "valid", // 10% chance of being invalid
        destination: Math.random() > 0.9 ? null : `${page.path}/destination-${i + 1}`,
        error: Math.random() > 0.9 ? "Link not found" : undefined,
      }))

      // Generate random interactive elements
      const interactiveElements: InteractiveElementResult[] = Array.from(
        { length: Math.floor(Math.random() * 4) + 2 },
        (_, i) => {
          const elementTypes: InteractiveElementResult["elementType"][] = [
            "button",
            "input",
            "select",
            "checkbox",
            "radio",
            "link",
            "other",
          ]
          const randomType = elementTypes[Math.floor(Math.random() * elementTypes.length)]

          return {
            elementId: `element-${i + 1}`,
            elementType: randomType,
            status: Math.random() > 0.95 ? "non-functional" : "functional", // 5% chance of being non-functional
            description: `${randomType.charAt(0).toUpperCase() + randomType.slice(1)} element ${i + 1}`,
            error: Math.random() > 0.95 ? "Element not responding" : undefined,
          }
        },
      )

      // Generate random accessibility issues (rarely)
      const accessibilityIssues: AccessibilityIssue[] =
        Math.random() > 0.8
          ? []
          : [
              {
                element: "Image",
                issue: "Missing alt text",
                impact: "serious",
                wcagCriteria: "WCAG 1.1.1",
              },
            ]

      return {
        pagePath: page.path,
        title: page.title,
        status: Math.random() > 0.95 ? "invalid" : "valid", // 5% chance of being invalid
        links,
        interactiveElements,
        accessibilityIssues,
      }
    }),
  )
}

export default function TestingPage() {
  const [activeTab, setActiveTab] = useState("tertiary")
  const [tertiaryResults, setTertiaryResults] = useState<PageValidationResult[]>([])
  const [quaternaryResults, setQuaternaryResults] = useState<PageValidationResult[]>([])
  const [quintenaryResults, setQuintenaryResults] = useState<PageValidationResult[]>([])
  const [sensoryResults, setSensoryResults] = useState<PageValidationResult[]>([])
  const [isRunningAll, setIsRunningAll] = useState(false)

  const runAllTests = async () => {
    setIsRunningAll(true)
    try {
      const [tertiary, quaternary, quintenary, sensory] = await Promise.all([
        mockTestPages(pageStructure.tertiary),
        mockTestPages(pageStructure.quaternary),
        mockTestPages(pageStructure.quintenary),
        mockTestPages(pageStructure.sensory),
      ])

      setTertiaryResults(tertiary)
      setQuaternaryResults(quaternary)
      setQuintenaryResults(quintenary)
      setSensoryResults(sensory)
    } catch (error) {
      console.error("Error running all tests:", error)
    } finally {
      setIsRunningAll(false)
    }
  }

  // Functions to run individual test categories
  const runTertiaryTests = async () => mockTestPages(pageStructure.tertiary)
  const runQuaternaryTests = async () => mockTestPages(pageStructure.quaternary)
  const runQuintenaryTests = async () => mockTestPages(pageStructure.quintenary)
  const runSensoryTests = async () => mockTestPages(pageStructure.sensory)

  return (
    <div className="min-h-screen bg-background">
      <Header title="Page Testing & Validation" showBackButton={true} showLogo={true} />

      <PageContainer className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Cards2Cash Page Testing Suite</CardTitle>
                <CardDescription>
                  Test and validate all tertiary, quaternary, quintenary, and sensory pages in the application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-muted-foreground">
                    This tool validates links, interactive elements, and accessibility across all pages.
                  </p>
                  <Button onClick={runAllTests} disabled={isRunningAll}>
                    {isRunningAll ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Testing All Pages...
                      </>
                    ) : (
                      "Test All Pages"
                    )}
                  </Button>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-4 mb-8">
                    <TabsTrigger value="tertiary">Tertiary Pages</TabsTrigger>
                    <TabsTrigger value="quaternary">Quaternary Pages</TabsTrigger>
                    <TabsTrigger value="quintenary">Quintenary Pages</TabsTrigger>
                    <TabsTrigger value="sensory">Sensory Pages</TabsTrigger>
                  </TabsList>

                  <TabsContent value="tertiary">
                    <PageValidator initialResults={tertiaryResults} onRunTests={runTertiaryTests} />
                  </TabsContent>

                  <TabsContent value="quaternary">
                    <PageValidator initialResults={quaternaryResults} onRunTests={runQuaternaryTests} />
                  </TabsContent>

                  <TabsContent value="quintenary">
                    <PageValidator initialResults={quintenaryResults} onRunTests={runQuintenaryTests} />
                  </TabsContent>

                  <TabsContent value="sensory">
                    <PageValidator initialResults={sensoryResults} onRunTests={runSensoryTests} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Testing Summary</CardTitle>
                <CardDescription>Overview of all validation results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <SummaryCard
                    title="Tertiary Pages"
                    total={pageStructure.tertiary.length}
                    tested={tertiaryResults.length}
                    valid={tertiaryResults.filter((r) => r.status === "valid").length}
                    invalid={tertiaryResults.filter((r) => r.status === "invalid").length}
                  />

                  <SummaryCard
                    title="Quaternary Pages"
                    total={pageStructure.quaternary.length}
                    tested={quaternaryResults.length}
                    valid={quaternaryResults.filter((r) => r.status === "valid").length}
                    invalid={quaternaryResults.filter((r) => r.status === "invalid").length}
                  />

                  <SummaryCard
                    title="Quintenary Pages"
                    total={pageStructure.quintenary.length}
                    tested={quintenaryResults.length}
                    valid={quintenaryResults.filter((r) => r.status === "valid").length}
                    invalid={quintenaryResults.filter((r) => r.status === "invalid").length}
                  />

                  <SummaryCard
                    title="Sensory Pages"
                    total={pageStructure.sensory.length}
                    tested={sensoryResults.length}
                    valid={sensoryResults.filter((r) => r.status === "valid").length}
                    invalid={sensoryResults.filter((r) => r.status === "invalid").length}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}

interface SummaryCardProps {
  title: string
  total: number
  tested: number
  valid: number
  invalid: number
}

function SummaryCard({ title, total, tested, valid, invalid }: SummaryCardProps) {
  const percentTested = total > 0 ? Math.round((tested / total) * 100) : 0
  const percentValid = tested > 0 ? Math.round((valid / tested) * 100) : 0

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Pages Tested:</span>
            <span className="font-medium">
              {tested} / {total} ({percentTested}%)
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Valid:</span>
            <span className="font-medium text-green-600">
              {valid} ({percentValid}%)
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Invalid:</span>
            <span className="font-medium text-red-600">{invalid}</span>
          </div>

          <div className="w-full bg-muted rounded-full h-2 mt-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: `${percentValid}%` }} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
