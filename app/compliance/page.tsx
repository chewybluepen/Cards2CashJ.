import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Compliance" showBackButton={true} showLogo={true} />

      <PageContainer className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Compliance</h1>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                At Cards2Cash, we are committed to maintaining the highest standards of regulatory compliance and
                ethical business practices. This page outlines our approach to compliance and the measures we take to
                ensure our services meet all applicable legal requirements.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Anti-Money Laundering (AML)</h2>
              <p className="mb-4">
                We have implemented robust AML procedures to prevent the use of our platform for money laundering or
                terrorist financing. These include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Customer due diligence and Know Your Customer (KYC) procedures</li>
                <li>Transaction monitoring to identify suspicious activities</li>
                <li>Regular staff training on AML requirements</li>
                <li>Record-keeping in accordance with regulatory requirements</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Data Protection</h2>
              <p className="mb-4">We comply with applicable data protection laws, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Implementing appropriate technical and organizational measures to protect personal data</li>
                <li>Processing personal data only for specified, explicit, and legitimate purposes</li>
                <li>Respecting data subject rights</li>
                <li>Maintaining records of data processing activities</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Payment Services Regulations</h2>
              <p className="mb-4">
                Our virtual card and payment services comply with relevant payment services regulations, ensuring:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Transparent fee structures</li>
                <li>Secure payment processing</li>
                <li>Proper authorization and authentication procedures</li>
                <li>Clear information about payment transactions</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Consumer Protection</h2>
              <p className="mb-4">We adhere to consumer protection laws to ensure fair treatment of our users:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Clear and transparent terms and conditions</li>
                <li>Fair marketing practices</li>
                <li>Effective complaint handling procedures</li>
                <li>Protection against fraud and unauthorized transactions</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Regulatory Licenses and Registrations</h2>
              <p className="mb-4">
                Cards2Cash holds all necessary licenses and registrations required to operate our services in the
                jurisdictions where we operate. Details of our regulatory status are available upon request.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Reporting Concerns</h2>
              <p className="mb-4">
                If you have any concerns about compliance issues or suspect any violations of laws or regulations
                related to our services, please contact our Compliance Officer at compliance@cards2cash.com.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Updates to Our Compliance Policies</h2>
              <p className="mb-4">
                We regularly review and update our compliance policies to ensure they remain effective and aligned with
                current regulatory requirements. Any significant changes will be communicated to our users.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
