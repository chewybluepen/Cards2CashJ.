import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"
import { Tagline } from "@/components/ui/tagline"
import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Register" showBackButton={true} showLogo={true} />

      <PageContainer className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Create Your Account</h1>
            <Tagline className="mb-4" />
            <p className="text-muted-foreground">
              Join thousands of users who are already enjoying the benefits of Cards2Cash
            </p>
          </div>

          <LoginForm />

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              By creating an account, you agree to our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
