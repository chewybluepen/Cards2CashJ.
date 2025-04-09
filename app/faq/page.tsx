import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"
import { Tagline } from "@/components/ui/tagline"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header title="FAQ" showBackButton={true} showLogo={true} />

      <PageContainer className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
              <Tagline className="mb-4" />
              <p className="text-lg text-muted-foreground">
                Find answers to the most common questions about Cards2Cash
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>General Questions</CardTitle>
                <CardDescription>Basic information about our service</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is Cards2Cash?</AccordionTrigger>
                    <AccordionContent>
                      Cards2Cash is a digital financial platform that allows users to convert prepaid phone credit into
                      digital funds. These funds can be used to generate virtual cards for online shopping,
                      international transactions, and more.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I create an account?</AccordionTrigger>
                    <AccordionContent>
                      To create an account, click on the "Register" button on our homepage. You'll need to provide your
                      phone number, email address, and create a password. We'll send you a verification code to confirm
                      your phone number.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is Cards2Cash available in my country?</AccordionTrigger>
                    <AccordionContent>
                      Cards2Cash is currently available in Guyana and select Caribbean countries. We're actively working
                      on expanding our service to more regions. Check our website for the most up-to-date information on
                      supported countries.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Phone Credit Conversion</CardTitle>
                <CardDescription>How to convert phone credit to digital funds</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Which phone carriers are supported?</AccordionTrigger>
                    <AccordionContent>
                      We currently support major carriers in Guyana including Digicel and GTT, as well as select
                      international carriers. The full list of supported carriers is available in the app when you
                      initiate a phone credit conversion.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I convert phone credit to digital funds?</AccordionTrigger>
                    <AccordionContent>
                      To convert phone credit, log into your account, go to the "Add Funds" section, select "Phone
                      Credit," choose your carrier, enter the voucher code, and confirm the conversion. The funds will
                      be added to your Cards2Cash balance immediately after verification.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What are the conversion rates and fees?</AccordionTrigger>
                    <AccordionContent>
                      Conversion rates vary by carrier and are displayed before you confirm the transaction. We strive
                      to offer competitive rates. Basic accounts have a standard conversion fee of 5%, while Premium and
                      Business accounts enjoy reduced fees of 3% and 1% respectively.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Virtual Cards</CardTitle>
                <CardDescription>Information about our virtual card services</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I generate a virtual card?</AccordionTrigger>
                    <AccordionContent>
                      To generate a virtual card, go to the "Generate Card" section in your dashboard, select the card
                      type (single-use or recurring), enter the desired amount, review the details, and confirm. Your
                      new virtual card will be created instantly.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What types of virtual cards are available?</AccordionTrigger>
                    <AccordionContent>
                      We offer two types of virtual cards: single-use cards that expire after one transaction, and
                      recurring cards that can be used multiple times until the balance is depleted or until the
                      expiration date. Both types are secured with advanced encryption.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Where can I use my virtual cards?</AccordionTrigger>
                    <AccordionContent>
                      Our virtual cards can be used at any online merchant that accepts Visa or Mastercard. This
                      includes major e-commerce platforms, subscription services, and international websites. The cards
                      support secure online transactions worldwide.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Account & Security</CardTitle>
                <CardDescription>Managing your account and security features</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                    <AccordionContent>
                      If you've forgotten your password, click on the "Forgot Password" link on the login page. Enter
                      your registered email or phone number, and we'll send you instructions to reset your password. For
                      security reasons, password reset links expire after 30 minutes.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What security features does Cards2Cash offer?</AccordionTrigger>
                    <AccordionContent>
                      We offer multiple security features including biometric authentication (fingerprint and facial
                      recognition), two-factor authentication, transaction monitoring, and encrypted data storage. You
                      can manage your security settings in the "Settings" section of your account.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How can I update my personal information?</AccordionTrigger>
                    <AccordionContent>
                      You can update your personal information in the "Profile" or "Settings" section of your account.
                      Some changes to sensitive information may require additional verification for security purposes.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <div className="bg-muted p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="mb-6 text-muted-foreground">
                Our support team is ready to help you with any other questions you might have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/support">View Support Center</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
