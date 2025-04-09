"use client"

import { Header } from "@/components/layout/header"
import { MobileNav } from "@/components/layout/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CryptoTaxTermsPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Crypto Tax Terms" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-4xl">
          <Button variant="outline" size="sm" onClick={() => router.back()} className="mb-6 animate-button-press">
            <ArrowLeft className="mr-2 h-4 w-4 text-foreground" />
            Back
          </Button>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Terms and Conditions for Crypto Tax Services</CardTitle>
              <CardDescription>Last updated: March 27, 2024</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Introduction</h3>
                <p className="text-muted-foreground">
                  These Terms and Conditions govern your use of the Cards2Cash Crypto Tax Services. By using our tax
                  services, you agree to these terms in full. If you disagree with these terms or any part of them, you
                  must not use our services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2. Service Description</h3>
                <p className="text-muted-foreground">
                  Cards2Cash Crypto Tax Services provides tools and resources to help users calculate potential tax
                  obligations related to cryptocurrency transactions. Our services include transaction tracking, tax
                  report generation, and educational resources.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">3. Not Financial or Tax Advice</h3>
                <p className="text-muted-foreground">
                  The information provided through our services is for informational purposes only and should not be
                  construed as financial, tax, or legal advice. We strongly recommend consulting with a qualified tax
                  professional regarding your specific situation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">4. User Responsibilities</h3>
                <p className="text-muted-foreground">
                  Users are responsible for the accuracy and completeness of all information provided to our services.
                  Cards2Cash is not responsible for any errors or omissions in tax calculations resulting from
                  inaccurate or incomplete information provided by users.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">5. Data Privacy</h3>
                <p className="text-muted-foreground">
                  We collect and process personal data in accordance with our Privacy Policy. By using our services, you
                  consent to such processing and warrant that all data provided by you is accurate.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">6. Limitation of Liability</h3>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, Cards2Cash shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
                  directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from
                  your use of our tax services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">7. Changes to Terms</h3>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. We will provide notice of significant changes
                  by updating the date at the top of these terms and by maintaining a current version of the terms on
                  our website.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">8. Governing Law</h3>
                <p className="text-muted-foreground">
                  These terms shall be governed by and construed in accordance with the laws of the jurisdiction in
                  which Cards2Cash operates, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">9. Contact Information</h3>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms and Conditions, please contact us at
                  support@cards2cash.com.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <MobileNav />
    </div>
  )
}
