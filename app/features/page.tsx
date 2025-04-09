import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"
import { Tagline } from "@/components/ui/tagline"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, RefreshCw, ShieldCheck, Smartphone, Globe, Gift } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Features" showBackButton={true} showLogo={true} />

      <PageContainer className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold mb-4">Our Features</h1>
              <Tagline className="mb-4" />
              <p className="text-lg text-muted-foreground">
                Discover how Cards2Cash can transform your digital financial experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Phone Credit Conversion</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Convert your prepaid phone credit from carriers like Digicel, GTT, and other international providers
                    into digital funds instantly.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Virtual Card Generation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Create virtual cards for secure online shopping, subscriptions, and international transactions with
                    just a few taps.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <RefreshCw className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Real-time Currency Conversion</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Convert between GYD, USD, and other major currencies with competitive exchange rates and minimal
                    fees.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Enhanced Security</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Protect your funds with biometric authentication, transaction monitoring, and secure encryption for
                    all your financial activities.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Global Accessibility</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Access your digital funds from anywhere in the world, with support for international transactions
                    and global merchant compatibility.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Gift className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Rewards Program</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Earn points on every transaction and redeem them for discounts, cashback, and exclusive partner
                    offers.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
              <p className="mb-6 text-muted-foreground">
                Join thousands of users who are already enjoying the benefits of Cards2Cash
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/register">Create Account</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
