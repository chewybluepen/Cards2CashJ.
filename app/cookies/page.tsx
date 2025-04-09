import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Cookie Policy" showBackButton={true} showLogo={true} />

      <PageContainer className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">Last updated: March 31, 2025</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                They are widely used to make websites work more efficiently and provide information to the website
                owners.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
              <p className="mb-4">Cards2Cash uses cookies for several purposes, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Authentication: To recognize you when you return to our website</li>
                <li>Security: To help protect your account from unauthorized access</li>
                <li>Preferences: To remember your settings and preferences</li>
                <li>Analytics: To understand how visitors interact with our website</li>
                <li>Advertising: To deliver relevant advertisements</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Types of Cookies We Use</h2>
              <p className="mb-4">We use the following types of cookies:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Essential cookies: Necessary for the website to function properly</li>
                <li>Preference cookies: Enable the website to remember your preferences</li>
                <li>Statistics cookies: Collect anonymous data about how visitors use our website</li>
                <li>Marketing cookies: Track visitors across websites to display relevant advertisements</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Cookies</h2>
              <p className="mb-4">
                Some cookies are placed by third parties on our website. These third parties may include analytics
                providers, advertising networks, and social media platforms.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Managing Cookies</h2>
              <p className="mb-4">
                You can control and manage cookies in various ways. Most web browsers allow you to manage your cookie
                preferences. You can:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Delete cookies from your device</li>
                <li>
                  Block cookies by activating the setting on your browser that allows you to refuse all or some cookies
                </li>
                <li>Set your browser to notify you when you receive a cookie</li>
              </ul>
              <p className="mb-4">
                Please note that if you choose to block or delete cookies, you may not be able to access certain areas
                or features of our website, and some services may not function properly.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to This Cookie Policy</h2>
              <p className="mb-4">
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
                Cookie Policy on this page.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our Cookie Policy, please contact us at privacy@cards2cash.com.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
