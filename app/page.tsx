import { LoginForm } from "@/components/auth/login-form"
import { Tagline } from "@/components/ui/tagline"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import { HelperTip } from "@/components/ui/helper-tip"
import { PageContainer } from "@/components/layout/page-container"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-amazon-background">
      <header className="w-full py-4 px-4 bg-gradient-to-r from-amazon-blue to-amazon-secondary text-black">
          <div className="container mx-auto flex justify-between items-center gap-8">
            <div className="flex items-center gap-2 flex-shrink-0">
              <Image src="/images/logo.png" alt="Cards2Cash Logo" width={35} height={35} />
              <span className="text-lg font-bold">Cards2Cash</span>
            </div>
            <Tagline className="hidden lg:block text-amazon-accent flex-shrink-0" />
            <nav className="flex items-center gap-3 flex-shrink-0">
              <Button variant="ghost" className="text-black hover:text-amazon-accent">
                About
              </Button>
              <Button variant="ghost" className="text-black hover:text-amazon-accent">
                Features
              </Button>
              <Button variant="ghost" className="text-black hover:text-amazon-accent">
                Contact
              </Button>
            </nav>
          </div>
        </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-b from-amazon-background to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-5 slide-in-left">
                <div className="space-y-3">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                    Convert Phone Credit to Digital Funds
                  </h1>
                  <Tagline variant="large" className="text-left text-amazon-secondary" />
                  <p className="text-muted-foreground md:text-xl mt-4">
                    Cards2Cash empowers you to convert prepaid phone credit into digital funds for secure online
                    shopping and international transactions.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-amazon-primary" />
                    <span>Instant virtual card generation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-amazon-primary" />
                    <span>Real-time currency conversion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-amazon-primary" />
                    <span>Secure bank transfers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-amazon-primary" />
                    <span>Rewards program with exclusive offers</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <Button className="amazon-button-primary animate-button-press" asChild>
                    <a href="/register">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="animate-button-press hover:bg-amazon-accent hover:text-black"
                    asChild
                  >
                    <a href="/features">Learn More</a>
                  </Button>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-amazon-primary fill-amazon-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">Trusted by over 10,000 users worldwide</span>
                </div>
              </div>
              <div className="mx-auto lg:order-last slide-in-right">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-amazon-primary to-amazon-secondary opacity-30 blur"></div>
                  <div className="relative rounded-lg bg-gradient-to-r from-amazon-primary/20 to-amazon-secondary/20 p-8 shadow-xl">
                    <h3 className="text-xl font-bold mb-4 text-center">Digital Financial Freedom</h3>
                    <p className="text-center mb-4">Transform your phone credit into digital currency instantly</p>
                    <div className="flex justify-center">
                      <Image
                        src="/images/logo.png"
                        alt="Cards2Cash"
                        width={120}
                        height={120}
                        className="animate-float"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-20 lg:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10 slide-in-bottom">
              <h2 className="text-3xl font-bold tracking-tighter text-amazon-dark">How It Works</h2>
              <Tagline className="mt-2 text-amazon-secondary" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border hover-lift slide-in-bottom">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amazon-accent text-amazon-dark">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-amazon-dark">Load Phone Credit</h3>
                <p className="text-muted-foreground">
                  Convert your prepaid phone credit from carriers like Digicel or GTT into digital funds.
                </p>
              </div>
              <div
                className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border hover-lift slide-in-bottom"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amazon-accent text-amazon-dark">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-amazon-dark">Generate Virtual Cards</h3>
                <p className="text-muted-foreground">
                  Create virtual cards instantly for secure online shopping and international transactions.
                </p>
              </div>
              <div
                className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border hover-lift slide-in-bottom"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amazon-accent text-amazon-dark">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-amazon-dark">Shop Online Securely</h3>
                <p className="text-muted-foreground">
                  Use your virtual cards to shop online securely with real-time currency conversion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-b from-white to-amazon-background">
          <div className="container px-4 md:px-6">
            <PageContainer className="flex items-center justify-center p-4">
              <LoginForm />
            </PageContainer>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-amazon-blue text-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/images/logo.png" alt="Cards2Cash Logo" width={40} height={40} />
                <span className="text-xl font-bold">Cards2Cash</span>
              </div>
              <Tagline className="text-amazon-accent" />
              <p className="text-sm text-amazon-accent/80">Converting phone credit to digital funds since 2023.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-amazon-accent">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-sm text-black/90 hover:text-amazon-accent transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/features" className="text-sm text-black/90 hover:text-amazon-accent transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="text-sm text-black/90 hover:text-amazon-accent transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-sm text-black/90 hover:text-amazon-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-sm text-black/90 hover:text-amazon-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-amazon-accent">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/terms" className="text-sm text-black/90 hover:text-amazon-accent transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-sm text-black/90 hover:text-amazon-accent transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/cookies" className="text-sm text-black/90 hover:text-amazon-accent transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="/compliance" className="text-sm text-black/90 hover:text-amazon-accent transition-colors">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-amazon-accent">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-black/90 hover:text-amazon-accent transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://twitter.com" className="text-black/90 hover:text-amazon-accent transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="https://instagram.com" className="text-black/90 hover:text-amazon-accent transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://linkedin.com" className="text-black/90 hover:text-amazon-accent transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
              <div className="mt-5">
                <h4 className="text-sm font-medium mb-3 text-black">>Subscribe to our newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 rounded-l-md border border-r-0 px-3 py-2 text-sm bg-white/10 border-black/90 text-black placeholder:text-black/90"
                  />
                  <button className="rounded-r-md bg-amazon-primary px-3 py-2 text-sm text-black font-medium hover:bg-amazon-accent transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-white/20 pt-8 text-center">
            <p className="text-sm text-black/90">&copy; {new Date().getFullYear()} Cards2Cash. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <HelperTip
        position="bottom-right"
        message="Welcome to Cards2Cash! Sign in or register to start managing your digital finances."
        delay={3000}
      />
    </div>
  )
}
