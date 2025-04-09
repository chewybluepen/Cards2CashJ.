import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"
import { Tagline } from "@/components/ui/tagline"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Contact Us" showBackButton={true} showLogo={true} />

      <PageContainer className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
              <Tagline className="mb-4" />
              <p className="text-lg text-muted-foreground">
                We'd love to hear from you. Reach out with any questions, feedback, or support needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle>Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-2">Our support team is available 24/7</CardDescription>
                  <p className="font-medium">+592 123 4567</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle>Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-2">Send us an email anytime</CardDescription>
                  <p className="font-medium">support@cards2cash.com</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle>Visit Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-2">Our headquarters location</CardDescription>
                  <p className="font-medium">123 Main Street, Georgetown, Guyana</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Please provide details about your inquiry..." rows={5} />
                  </div>

                  <Button type="submit" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="bg-muted p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="mb-6 text-muted-foreground">
                Can't find what you're looking for? Check our comprehensive FAQ section.
              </p>
              <Button variant="outline" asChild>
                <a href="/faq">View FAQs</a>
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
