"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle, XCircle, ExternalLink } from "lucide-react"
import { validateLink, type LinkValidationResult } from "@/lib/testing-utils"

export function LinkChecker() {
  const [url, setUrl] = useState("")
  const [isChecking, setIsChecking] = useState(false)
  const [results, setResults] = useState<LinkValidationResult[]>([])

  const checkLink = async () => {
    if (!url) return

    setIsChecking(true)
    try {
      const result = await validateLink(url)
      setResults((prev) => [result, ...prev])
    } catch (error) {
      console.error("Error checking link:", error)
    } finally {
      setIsChecking(false)
      setUrl("")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    checkLink()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Link Validator</CardTitle>
        <CardDescription>Check if links are working correctly across the application</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="url">URL to check</Label>
            <div className="flex space-x-2">
              <Input
                id="url"
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
              No links checked yet. Enter a URL above to validate.
            </p>
          ) : (
            <div className="space-y-3">
              {results.map((result, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border ${
                    result.status === "valid" ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
                  }`}
                >
                  <div className="flex items-start">
                    {result.status === "valid" ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{result.url}</p>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0" asChild>
                          <a href={result.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            <span className="sr-only">Open link</span>
                          </a>
                        </Button>
                      </div>
                      {result.status === "valid" ? (
                        <p className="text-sm text-green-700">Link is valid</p>
                      ) : (
                        <p className="text-sm text-red-700">{result.error || "Link is invalid"}</p>
                      )}
                      {result.destination && (
                        <p className="text-xs text-muted-foreground mt-1">Destination: {result.destination}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          This tool checks if links are accessible and properly configured.
        </p>
      </CardFooter>
    </Card>
  )
}
