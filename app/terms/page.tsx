import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Terms of Service" showBackButton={true} showLogo={true} />

      <PageContainer className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">Last updated: March 31, 2025</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to Cards2Cash. These Terms of Service govern your use of our website, mobile application, and
                services. By accessing or using Cards2Cash, you agree to be bound by these Terms.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Definitions</h2>
              <p className="mb-4">
                "Service" refers to the Cards2Cash platform, including our website, mobile application, and all related
                services.
              </p>
              <p className="mb-4">"User" refers to any individual who accesses or uses our Service.</p>
              <p className="mb-4">
                "Digital Funds" refers to the electronic currency stored in your Cards2Cash account.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Account Registration</h2>
              <p className="mb-4">
                To use certain features of our Service, you must register for an account. You agree to provide accurate,
                current, and complete information during the registration process.
              </p>
              <p className="mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all
                activities that occur under your account.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Phone Credit Conversion</h2>
              <p className="mb-4">
                Our Service allows you to convert prepaid phone credit into Digital Funds. The conversion rate is
                determined by Cards2Cash and may change without notice.
              </p>
              <p className="mb-4">
                We are not responsible for any issues related to the purchase of phone credit from carriers.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Virtual Cards</h2>
              <p className="mb-4">
                Virtual cards generated through our Service are subject to the terms and conditions of our card issuing
                partners.
              </p>
              <p className="mb-4">
                You agree to use virtual cards only for lawful purposes and in compliance with all applicable laws and
                regulations.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Fees and Charges</h2>
              <p className="mb-4">
                We may charge fees for certain features or transactions. All fees will be clearly disclosed before you
                complete a transaction.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Privacy</h2>
              <p className="mb-4">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and
                disclose information about you.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Termination</h2>
              <p className="mb-4">
                We reserve the right to suspend or terminate your account at any time for any reason, including
                violation of these Terms.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to Terms</h2>
              <p className="mb-4">
                We may modify these Terms at any time. We will notify you of any material changes by posting the new
                Terms on our platform or via email.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us at legal@cards2cash.com.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
