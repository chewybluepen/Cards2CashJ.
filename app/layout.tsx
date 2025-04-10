import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/auth-context";
import { ThemeProvider } from "@/components/theme-provider";
import { BiometricAuthProvider } from "@/contexts/biometric-auth-context";
import { AuthNavigation } from "@/components/layout/auth-navigation";
import { AccessibilityProvider } from "@/contexts/accessibility-context";
import { AnimationProvider } from "@/contexts/animation-context";
import ClientTransitionLayout from "./client-transition-layout"; // Client-only component with built-in error handling and loading fallback

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cards2Cash",
  description: "Convert prepaid phone credit to digital funds",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* ThemeProvider should wrap entire application to manage light/dark mode */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Accessibility and animation context providers */}
          <AccessibilityProvider>
            <AnimationProvider>
              {/* Authentication providers for session and biometric authentication */}
              <AuthProvider>
                <BiometricAuthProvider>
                  {/* Main container */}
                  <div className="flex min-h-screen flex-col bg-gradient-to-br from-pink-100 via-white to-blue-100">
                    {/* Client-side only layout transition with error boundary and loading fallback */}
                    <ClientTransitionLayout>
                      {children}
                    </ClientTransitionLayout>
                    {/* Navigation that appears on authenticated pages */}
                    <AuthNavigation />
                    {/* Global toaster notifications */}
                    <Toaster />
                  </div>
                </BiometricAuthProvider>
              </AuthProvider>
            </AnimationProvider>
          </AccessibilityProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
