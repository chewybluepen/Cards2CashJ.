"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertCircle, Loader2 } from "lucide-react"
import type { PageValidationResult } from "@/lib/testing-utils"

interface PageValidatorProps {
  initialResults?: PageValidationResult[]
  onRunTests?: () => Promise<PageValidationResult[]>
}

export function PageValidator({ initialResults = [], onRunTests }: PageValidatorProps) {
  const [results, setResults] = useState<PageValidationResult[]>(initialResults)
  const [isRunning, setIsRunning] = useState(false)
  const [expandedPage, setExpandedPage] = useState<string | null>(null)

  const runTests = async () => {
    if (!onRunTests) return

    setIsRunning(true)
    try {
      const newResults = await onRunTests()
      setResults(newResults)
    } catch (error) {
      console.error("Error running tests:", error)
    } finally {
      setIsRunning(false)
    }
  }

  const getStatusIcon = (status: "valid" | "invalid" | "pending" | "functional" | "non-functional") => {
    switch (status) {
      case "valid":
      case "functional":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "invalid":
      case "non-functional":
        return <XCircle className="h-5 w-5 text-red-500" />
      case "pending":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
    }
  }

  const toggleExpandPage = (pagePath: string) => {
    if (expandedPage === pagePath) {
      setExpandedPage(null)
    } else {
      setExpandedPage(pagePath)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Page Validation Results</h2>
        <Button onClick={runTests} disabled={isRunning}>
          {isRunning ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Running Tests...
            </>
          ) : (
            "Run Tests"
          )}
        </Button>
      </div>

      {results.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              No test results available. Run tests to see validation results.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {results.map((result) => (
            <Card key={result.pagePath} className="overflow-hidden">
              <CardHeader className="cursor-pointer" onClick={() => toggleExpandPage(result.pagePath)}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(result.status)}
                    <CardTitle>{result.title}</CardTitle>
                  </div>
                  <Badge variant={result.status === "valid" ? "default" : "destructive"}>{result.status}</Badge>
                </div>
                <CardDescription>{result.pagePath}</CardDescription>
              </CardHeader>

              {expandedPage === result.pagePath && (
                <CardContent>
                  <div className="space-y-6">
                    {/* Links Section */}
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Links</h3>
                      {result.links.length === 0 ? (
                        <p className="text-sm text-muted-foreground">No links validated</p>
                      ) : (
                        <ul className="space-y-2">
                          {result.links.map((link, index) => (
                            <li key={index} className="flex items-center justify-between text-sm">
                              <div className="flex items-center">
                                {getStatusIcon(link.status)}
                                <span className="ml-2">{link.url}</span>
                              </div>
                              {link.status === "invalid" && <span className="text-red-500">{link.error}</span>}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Interactive Elements Section */}
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Interactive Elements</h3>
                      {result.interactiveElements.length === 0 ? (
                        <p className="text-sm text-muted-foreground">No interactive elements validated</p>
                      ) : (
                        <ul className="space-y-2">
                          {result.interactiveElements.map((element, index) => (
                            <li key={index} className="flex items-center justify-between text-sm">
                              <div className="flex items-center">
                                {getStatusIcon(element.status)}
                                <span className="ml-2">{element.description}</span>
                              </div>
                              {element.status === "non-functional" && (
                                <span className="text-red-500">{element.error}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Accessibility Issues Section */}
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Accessibility Issues</h3>
                      {result.accessibilityIssues.length === 0 ? (
                        <p className="text-sm text-muted-foreground">No accessibility issues found</p>
                      ) : (
                        <ul className="space-y-2">
                          {result.accessibilityIssues.map((issue, index) => (
                            <li key={index} className="text-sm">
                              <div className="flex items-start">
                                <XCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                                <div>
                                  <p className="font-medium">{issue.element}</p>
                                  <p>{issue.issue}</p>
                                  <Badge variant="outline" className="mt-1">
                                    Impact: {issue.impact}
                                  </Badge>
                                  {issue.wcagCriteria && (
                                    <Badge variant="outline" className="mt-1 ml-2">
                                      {issue.wcagCriteria}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </CardContent>
              )}

              <CardFooter className="bg-muted/50 py-2">
                <p className="text-xs text-muted-foreground">
                  {expandedPage === result.pagePath ? "Click to collapse" : "Click to expand details"}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
