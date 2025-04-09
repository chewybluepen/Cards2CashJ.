"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Loader2, AlertTriangle, CheckCircle, Info } from "lucide-react"
import type { AccessibilityIssue } from "@/lib/testing-utils"

interface AccessibilityCheckResult {
  url: string
  timestamp: Date
  issues: AccessibilityIssue[]
  score: number
}

export function AccessibilityChecker() {
  const [url, setUrl] = useState("")
  const [isChecking, setIsChecking] = useState(false)
  const [results, setResults] = useState<AccessibilityCheckResult[]>([])

  const checkAccessibility = async () => {
    if (!url) return

    setIsChecking(true)
    try {
      // In a real implementation, this would use an accessibility testing library
      // For demo purposes, we'll simulate a check with random results
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Generate random issues
      const numIssues = Math.floor(Math.random() * 5)
      const issues: AccessibilityIssue[] = []

      const possibleIssues = [
        {
          element: "Image",
          issue: "Missing alt text",
          impact: "serious" as const,
          wcagCriteria: "WCAG 1.1.1",
        },
        {
          element: "Button",
          issue: "No accessible name",
          impact: "critical" as const,
          wcagCriteria: "WCAG 4.1.2",
        },
        {
          element: "Link",
          issue: "Non-descriptive link text",
          impact: "moderate" as const,
          wcagCriteria: "WCAG 2.4.4",
        },
        {
          element: "Form field",
          issue: "Missing label",
          impact: "serious" as const,
          wcagCriteria: "WCAG 3.3.2",
        },
        {
          element: "Heading",
          issue: "Skipped heading level",
          impact: "moderate" as const,
          wcagCriteria: "WCAG 1.3.1",
        },
        {
          element: "Color contrast",
          issue: "Insufficient contrast ratio",
          impact: "serious" as const,
          wcagCriteria: "WCAG 1.4.3",
        },
      ]

      for (let i = 0; i < numIssues; i++) {
        const randomIssue = possibleIssues[Math.floor(Math.random() * possibleIssues.length)]
        issues.push(randomIssue)
      }

      // Calculate a score based on issues (higher is better)
      const score = Math.max(0, 100 - issues.length * 15)

      const result: AccessibilityCheckResult = {
        url,
        timestamp: new Date(),
        issues,
        score,
      }

      setResults((prev) => [result, ...prev])
    } catch (error) {
      console.error("Error checking accessibility:", error)
    } finally {
      setIsChecking(false)
      setUrl("")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    checkAccessibility()
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="h-5 w-5 text-green-500" />
    if (score >= 70) return <AlertTriangle className="h-5 w-5 text-yellow-500" />
    return <AlertTriangle className="h-5 w-5 text-red-500" />
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Accessibility Checker</CardTitle>
        <CardDescription>Check pages for accessibility issues and WCAG compliance</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="accessibility-url">URL to check</Label>
            <div className="flex space-x-2">
              <Input
                id="accessibility-url"
                placeholder="Enter URL or path (e.g., /about)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={isChecking}
              />
              <Button type="submit" disabled={isChecking || !url}>
                {isChecking ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Checking...
                  </>
                ) : (
                  "Check"
                )}
              </Button>
            </div>
          </div>
        </form>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Results</h3>
          {results.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">
              No pages checked yet. Enter a URL above to check for accessibility issues.
            </p>
          ) : (
            <div className="space-y-6">
              {results.map((result, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <div className="bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{result.url}</h4>
                        <p className="text-xs text-muted-foreground">Checked on {result.timestamp.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center">
                        {getScoreIcon(result.score)}
                        <span className={`ml-2 font-bold ${getScoreColor(result.score)}`}>{result.score}/100</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h5 className="font-medium mb-3">
                      {result.issues.length === 0 ? "No issues found" : `${result.issues.length} issues found`}
                    </h5>

                    {result.issues.length === 0 ? (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <p>This page passes all accessibility checks!</p>
                      </div>
                    ) : (
                      <ul className="space-y-3">
                        {result.issues.map((issue, issueIndex) => (
                          <li
                            key={issueIndex}
                            className="border-l-4 pl-4 py-1"
                            style={{
                              borderColor:
                                issue.impact === "critical"
                                  ? "rgb(239, 68, 68)"
                                  : issue.impact === "serious"
                                    ? "rgb(249, 115, 22)"
                                    : "rgb(234, 179, 8)",
                            }}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium">{issue.element}</p>
                                <p className="text-sm">{issue.issue}</p>
                              </div>
                              <Badge variant="outline">{issue.wcagCriteria}</Badge>
                            </div>
                            <p className="text-xs mt-1 capitalize">
                              Impact: <span className="font-medium">{issue.impact}</span>
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-xs text-muted-foreground">Based on WCAG 2.1 AA standards</p>
        <Button variant="link" size="sm" className="h-auto p-0">
          <Info className="h-4 w-4 mr-1" />
          Learn about accessibility
        </Button>
      </CardFooter>
    </Card>
  )
}
