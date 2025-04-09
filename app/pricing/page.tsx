import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"
import { Tagline } from "@/components/ui/tagline"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Pricing" showBackButton={true} showLogo={true} />

      <PageContainer className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h1>
              <Tagline className="mb-4" />
              <p className="text-lg text-muted-foreground">Choose the plan that works best for your financial needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For occasional users</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">Free</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Convert up to $50 phone credit monthly</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Generate up to 2 virtual cards</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Standard currency conversion rates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Basic customer support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/register">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-primary shadow-lg relative">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
                  Popular
                </div>
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>For regular users</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$4.99</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Convert up to $200 phone credit monthly</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Generate up to 5 virtual cards</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Preferred currency conversion rates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Priority customer support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Access to exclusive partner offers</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/register">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle>Business</CardTitle>
                  <CardDescription>For power users</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">$12.99</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Unlimited phone credit conversion</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Unlimited virtual cards</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Best currency conversion rates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>24/7 dedicated customer support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Advanced analytics and reporting</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>Multi-user access</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/register">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Are there any hidden fees?</h3>
                  <p className="text-muted-foreground">
                    No, we believe in complete transparency. All fees are clearly displayed before you complete any
                    transaction.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can change your plan at any time. Changes will take effect at the start of your next
                    billing cycle.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
                  <p className="text-muted-foreground">
                    We offer a 14-day money-back guarantee for all paid plans if you're not satisfied with our service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
