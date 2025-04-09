import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Forgot Password" showBackButton={true} showLogo={true} />

      <PageContainer className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Reset Your Password</CardTitle>
                <CardDescription>
                  Enter your email address or phone number and we'll send you instructions to reset your password.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-phone">Email or Phone Number</Label>
                    <Input id="email-phone" placeholder="Enter your email or phone number" type="text" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Reset Instructions
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="link" asChild>
                  <Link href="/" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Login
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
