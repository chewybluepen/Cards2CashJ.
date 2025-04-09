import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Accessibility" showBackButton={true} showLogo={true} />

      <PageContainer className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Accessibility Statement</h1>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                At Cards2Cash, we are committed to ensuring digital accessibility for people with disabilities. We are
                continually improving the user experience for everyone, and applying the relevant accessibility
                standards.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Conformance Status</h2>
              <p className="mb-4">
                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to
                improve accessibility for people with disabilities. It defines three levels of conformance: Level A,
                Level AA, and Level AAA.
              </p>
              <p className="mb-4">
                Cards2Cash is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of
                the content do not fully conform to the accessibility standard.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Accessibility Features</h2>
              <p className="mb-4">Cards2Cash includes the following accessibility features:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Keyboard navigation for all interactive elements</li>
                <li>Proper heading structure for screen reader navigation</li>
                <li>Alternative text for all informative images</li>
                <li>Sufficient color contrast for text and important graphics</li>
                <li>Resizable text without loss of functionality</li>
                <li>Form labels and error messages that are programmatically associated with inputs</li>
                <li>ARIA landmarks to identify regions of the page</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Feedback</h2>
              <p className="mb-4">
                We welcome your feedback on the accessibility of Cards2Cash. Please let us know if you encounter
                accessibility barriers:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Phone: +592 123 4567</li>
                <li>E-mail: accessibility@cards2cash.com</li>
                <li>Visitor address: 123 Main Street, Georgetown, Guyana</li>
              </ul>
              <p className="mb-4">We try to respond to feedback within 3 business days.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Assessment Approach</h2>
              <p className="mb-4">Cards2Cash assessed the accessibility of our platform by the following approaches:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Self-evaluation</li>
                <li>External evaluation</li>
                <li>Automated testing using accessibility tools</li>
                <li>User testing with assistive technologies</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Compatibility with Browsers and Assistive Technology</h2>
              <p className="mb-4">Cards2Cash is designed to be compatible with the following assistive technologies:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Screen readers (including NVDA, JAWS, and VoiceOver)</li>
                <li>Screen magnifiers</li>
                <li>Speech recognition software</li>
                <li>Keyboard-only navigation</li>
              </ul>
              <p className="mb-4">
                Cards2Cash is compatible with recent versions of major browsers including Chrome, Firefox, Safari, and
                Edge.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <Button asChild>
                <Link href="/contact">Contact Us About Accessibility</Link>
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
