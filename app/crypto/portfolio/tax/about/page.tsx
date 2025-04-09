"use client"

import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calculator, FileText, HelpCircle, Shield } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CryptoTaxAboutPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="About Crypto Tax" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-4xl">
          <Button variant="outline" size="sm" onClick={() => router.back()} className="mb-6 animate-button-press">
            <ArrowLeft className="mr-2 h-4 w-4 text-foreground" />
            Back
          </Button>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-2xl">About Our Crypto Tax Services</CardTitle>
              <CardDescription>Simplifying cryptocurrency tax compliance for everyone</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg">
                Cards2Cash Crypto Tax Services is designed to help cryptocurrency users navigate the complex world of
                crypto taxation. We understand that calculating taxes on cryptocurrency transactions can be challenging,
                which is why we've developed a comprehensive suite of tools to simplify the process.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
                  <Calculator className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Accurate Calculations</h3>
                  <p className="text-muted-foreground">
                    Our advanced algorithms calculate your potential tax obligations based on your transaction history,
                    applying relevant tax rules and regulations.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
                  <FileText className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Reports</h3>
                  <p className="text-muted-foreground">
                    Generate detailed tax reports that can be shared with your tax professional or used for your own
                    record-keeping.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Data Security</h3>
                  <p className="text-muted-foreground">
                    Your financial data is protected with industry-standard encryption and security measures. We never
                    share your information with third parties without your consent.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
                  <HelpCircle className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Educational Resources</h3>
                  <p className="text-muted-foreground">
                    Access our library of articles, guides, and tutorials to better understand cryptocurrency taxation
                    and stay informed about regulatory changes.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
                <p className="mb-4">
                  At Cards2Cash, we believe that cryptocurrency taxation should be accessible to everyone. Our platform
                  is designed with both beginners and experienced crypto users in mind, providing intuitive tools that
                  simplify complex tax calculations.
                </p>
                <p className="mb-4">
                  While we provide powerful tools and resources, we always recommend consulting with a qualified tax
                  professional for personalized advice. Our services are designed to complement professional tax advice,
                  not replace it.
                </p>
                <p>
                  We're committed to staying up-to-date with the latest developments in cryptocurrency taxation,
                  ensuring that our users have access to the most current information and tools.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Our Tax Team</CardTitle>
              <CardDescription>Have questions about our crypto tax services?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our team of cryptocurrency tax specialists is available to answer your questions and provide guidance on
                using our tax services.
              </p>
              <Button
                className="w-full sm:w-auto animate-button-press"
                onClick={() => router.push("/crypto/portfolio/tax/contact")}
              >
                Contact Tax Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <MobileNav />
    </div>
  )
}
