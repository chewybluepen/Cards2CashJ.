"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ArrowLeft, Calculator, Download, FileText, Info } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function TaxCalculatorPage() {
  const [taxYear, setTaxYear] = useState("2023")
  const [country, setCountry] = useState("us")
  const [calculationMethod, setCalculationMethod] = useState("fifo")
  const [income, setIncome] = useState("")
  const [cryptoGains, setCryptoGains] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsCalculating(true)

    // Simulate calculation delay
    setTimeout(() => {
      setIsCalculating(false)
      setShowResults(true)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Tax Calculator" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="container mx-auto max-w-4xl">
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
              <Link href="/crypto/portfolio/tax" className="text-sm text-muted-foreground hover:text-foreground">
                Tax
              </Link>
              <span className="text-sm text-muted-foreground">/</span>
              <span className="text-sm font-medium">Calculator</span>
            </div>

            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Crypto Tax Calculator</h1>
              <Button variant="outline" size="sm" asChild>
                <Link href="/crypto/portfolio/tax">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Tax
                </Link>
              </Button>
            </div>

            <Tabs defaultValue="calculator" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="calculator">Calculator</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="calculator">
                {!showResults ? (
                  <Card>
                    <CardHeader>
                      <CardTitle>Calculate Your Crypto Taxes</CardTitle>
                      <CardDescription>
                        Enter your information to calculate your cryptocurrency tax liability
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleCalculate} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="tax-year">Tax Year</Label>
                            <Select value={taxYear} onValueChange={setTaxYear}>
                              <SelectTrigger id="tax-year">
                                <SelectValue placeholder="Select tax year" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="2023">2023</SelectItem>
                                <SelectItem value="2022">2022</SelectItem>
                                <SelectItem value="2021">2021</SelectItem>
                                <SelectItem value="2020">2020</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Select value={country} onValueChange={setCountry}>
                              <SelectTrigger id="country">
                                <SelectValue placeholder="Select country" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="us">United States</SelectItem>
                                <SelectItem value="uk">United Kingdom</SelectItem>
                                <SelectItem value="ca">Canada</SelectItem>
                                <SelectItem value="au">Australia</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="calculation-method">Calculation Method</Label>
                          <Select value={calculationMethod} onValueChange={setCalculationMethod}>
                            <SelectTrigger id="calculation-method">
                              <SelectValue placeholder="Select calculation method" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fifo">FIFO (First In, First Out)</SelectItem>
                              <SelectItem value="lifo">LIFO (Last In, First Out)</SelectItem>
                              <SelectItem value="hifo">HIFO (Highest In, First Out)</SelectItem>
                              <SelectItem value="acb">ACB (Average Cost Basis)</SelectItem>
                            </SelectContent>
                          </Select>
                          <p className="text-xs text-muted-foreground">
                            The calculation method determines how cost basis is calculated for your crypto assets.
                          </p>
                        </div>

                        <Separator />

                        <div className="space-y-2">
                          <Label htmlFor="income">Annual Income (USD)</Label>
                          <Input
                            id="income"
                            placeholder="0.00"
                            value={income}
                            onChange={(e) => setIncome(e.target.value)}
                          />
                          <p className="text-xs text-muted-foreground">
                            Your annual income helps determine your tax bracket.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="crypto-gains">Estimated Crypto Gains/Losses (USD)</Label>
                          <Input
                            id="crypto-gains"
                            placeholder="0.00"
                            value={cryptoGains}
                            onChange={(e) => setCryptoGains(e.target.value)}
                          />
                          <p className="text-xs text-muted-foreground">
                            Enter your estimated cryptocurrency capital gains or losses.
                          </p>
                        </div>

                        <Alert>
                          <Info className="h-4 w-4" />
                          <AlertTitle>Information</AlertTitle>
                          <AlertDescription>
                            This calculator provides an estimate only. For accurate tax advice, please consult a tax
                            professional.
                          </AlertDescription>
                        </Alert>

                        <Button type="submit" className="w-full" disabled={isCalculating}>
                          {isCalculating ? (
                            <>Calculating...</>
                          ) : (
                            <>
                              <Calculator className="mr-2 h-4 w-4" />
                              Calculate Tax Estimate
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardHeader>
                      <CardTitle>Tax Calculation Results</CardTitle>
                      <CardDescription>Estimated tax liability for your cryptocurrency transactions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">Tax Year</p>
                            <p className="font-medium">{taxYear}</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">Country</p>
                            <p className="font-medium">
                              {country === "us"
                                ? "United States"
                                : country === "uk"
                                  ? "United Kingdom"
                                  : country === "ca"
                                    ? "Canada"
                                    : country === "au"
                                      ? "Australia"
                                      : "Other"}
                            </p>
                          </div>
                        </div>

                        <Separator />

                        <div className="space-y-4">
                          <h3 className="font-medium">Tax Summary</h3>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-lg bg-muted p-4">
                              <p className="text-sm text-muted-foreground">Total Capital Gains</p>
                              <p className="text-2xl font-bold">$3,250.00</p>
                            </div>
                            <div className="rounded-lg bg-muted p-4">
                              <p className="text-sm text-muted-foreground">Estimated Tax</p>
                              <p className="text-2xl font-bold">$487.50</p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <p className="text-sm">Short-term Gains (≤ 1 year)</p>
                              <p className="font-medium">$2,500.00</p>
                            </div>
                            <div className="flex justify-between">
                              <p className="text-sm">Long-term Gains (> 1 year)</p>
                              <p className="font-medium">$750.00</p>
                            </div>
                            <div className="flex justify-between">
                              <p className="text-sm">Short-term Tax Rate</p>
                              <p className="font-medium">22%</p>
                            </div>
                            <div className="flex justify-between">
                              <p className="text-sm">Long-term Tax Rate</p>
                              <p className="font-medium">15%</p>
                            </div>
                          </div>
                        </div>

                        <Alert>
                          <Info className="h-4 w-4" />
                          <AlertTitle>Disclaimer</AlertTitle>
                          <AlertDescription>
                            This is an estimate based on the information provided. Actual tax liability may vary. Please
                            consult a tax professional for accurate advice.
                          </AlertDescription>
                        </Alert>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row gap-3">
                      <Button variant="outline" onClick={() => setShowResults(false)} className="sm:flex-1">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Calculator
                      </Button>
                      <Button className="sm:flex-1">
                        <Download className="mr-2 h-4 w-4" />
                        Download Report
                      </Button>
                      <Button variant="outline" asChild className="sm:flex-1">
                        <Link href="/crypto/portfolio/tax/calculator/details">
                          <FileText className="mr-2 h-4 w-4" />
                          View Detailed Report
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="transactions">
                <Card>
                  <CardHeader>
                    <CardTitle>Transaction History</CardTitle>
                    <CardDescription>
                      View and manage your cryptocurrency transactions for tax calculations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">No Transactions Found</h3>
                      <p className="text-muted-foreground mb-4">
                        Import your transaction history to calculate your tax liability accurately.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild>
                          <Link href="/crypto/portfolio/tax/import">Import Transactions</Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href="/crypto/portfolio/tax/calculator/manual">Add Manually</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Tax Settings</CardTitle>
                    <CardDescription>Configure your tax calculation preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="default-method">Default Calculation Method</Label>
                        <Select defaultValue="fifo">
                          <SelectTrigger id="default-method">
                            <SelectValue placeholder="Select calculation method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fifo">FIFO (First In, First Out)</SelectItem>
                            <SelectItem value="lifo">LIFO (Last In, First Out)</SelectItem>
                            <SelectItem value="hifo">HIFO (Highest In, First Out)</SelectItem>
                            <SelectItem value="acb">ACB (Average Cost Basis)</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-muted-foreground">
                          This method will be used by default for all tax calculations.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="default-country">Default Country</Label>
                        <Select defaultValue="us">
                          <SelectTrigger id="default-country">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-muted-foreground">
                          Tax calculations will use the rules for this country by default.
                        </p>
                      </div>

                      <Button className="w-full">Save Settings</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
