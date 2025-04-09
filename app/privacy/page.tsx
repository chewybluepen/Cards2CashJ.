import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Privacy Policy" showBackButton={true} showLogo={true} />

      <PageContainer className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">Last updated: March 31, 2025</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p className="mb-4">
                At Cards2Cash, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and protect your personal information when you use our services.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
              <p className="mb-4">
                We collect several types of information from and about users of our Service, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Personal information such as name, email address, phone number, and identification details</li>
                <li>Transaction information including phone credit conversions and virtual card usage</li>
                <li>Device information including IP address, browser type, and operating system</li>
                <li>Usage data about how you interact with our Service</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide, maintain, and improve our Service</li>
                <li>Process transactions and send related information</li>
                <li>Verify your identity and prevent fraud</li>
                <li>Communicate with you about products, services, and promotions</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Information Sharing</h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service providers who perform services on our behalf</li>
                <li>Financial institutions and payment processors to facilitate transactions</li>
                <li>Law enforcement or government officials when required by law</li>
                <li>Other parties in connection with a merger, acquisition, or sale of assets</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information from
                unauthorized access, disclosure, alteration, and destruction.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including
                the right to access, correct, delete, or restrict processing of your data.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children's Privacy</h2>
              <p className="mb-4">
                Our Service is not intended for children under 18 years of age. We do not knowingly collect personal
                information from children.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Policy</h2>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at privacy@cards2cash.com.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
