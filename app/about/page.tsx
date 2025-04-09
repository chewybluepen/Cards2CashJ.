import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"
import { Tagline } from "@/components/ui/tagline"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header title="About Us" showBackButton={true} showLogo={true} />

      <PageContainer className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">About Cards2Cash</h1>

            <div className="mb-8 flex justify-center">
              <Image src="/images/logo.png" alt="Cards2Cash Logo" width={120} height={120} className="rounded-lg" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-4">
                Cards2Cash was founded in 2023 with a singular mission—to provide financial freedom to everyone,
                especially those without traditional banking access. Born from a vision of digital empowerment, our
                story is as much about technological innovation as it is about drawing inspiration from a land steeped
                in natural wonder and rich cultural heritage.
              </p>

              <p className="mb-4">
                Deep in the heart of Guyana—where the mighty Demerara River carves its way through ancient rainforests
                and the thunderous Kaieteur Falls sings nature’s eternal hymn—a dream began to take shape. Not in a cold
                boardroom, but amid the spirited streets of Georgetown, where the soulful rhythms of Mashramani
                festivals and the colorful vibrancy of local markets imbued every moment with hope and resilience.
              </p>

              <p className="mb-4">
                One enchanted evening, under a sky awash with starlight and the whispers of ancient forests, our
                founders found their calling. In that magical confluence of nature and culture, they envisioned a
                revolutionary platform that could turn everyday phone credit into digital funds, bridging tradition with
                the cutting edge of financial technology. Inspired by the pioneering legacies of great innovators, they
                channeled the spirit of forward-thinking visionaries.
              </p>

              <p className="mb-4">
                Embodying the breakthrough minds of our time, our founding team—Bill Gates as CEO & Founder, Steve Jobs
                as CTO, and Elon Musk as Head of Operations—set out to transform the landscape of digital finance. At
                Cards2Cash, every feature is a tribute to Guyana’s enchanting beauty, merging modern tech with the
                enduring soul of our heritage so that financial inclusion is not merely an ideal, but a lived reality.
              </p>

              <p className="mb-4">
                Welcome to Cards2Cash—where the natural wonders and cultural vibrancy of Guyana converge with
                groundbreaking digital innovation, creating endless pathways to empowerment and a legacy of progress for
                generations to come.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="mb-3 mx-auto rounded-full overflow-hidden w-24 h-24">
                    <Image
                      src="/images/avatars/cartman.png"
                      alt="Team Member"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold">Bill Gates</h3>
                  <p className="text-sm text-muted-foreground">CEO & Founder</p>
                </div>

                <div className="text-center">
                  <div className="mb-3 mx-auto rounded-full overflow-hidden w-24 h-24">
                    <Image
                      src="/images/avatars/kyle.png"
                      alt="Team Member"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold">Steve Jobs</h3>
                  <p className="text-sm text-muted-foreground">CTO</p>
                </div>

                <div className="text-center">
                  <div className="mb-3 mx-auto rounded-full overflow-hidden w-24 h-24">
                    <Image
                      src="/images/avatars/stan.png"
                      alt="Team Member"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold">Elon Musk</h3>
                  <p className="text-sm text-muted-foreground">Head of Operations</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Tagline className="mb-4" />
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
