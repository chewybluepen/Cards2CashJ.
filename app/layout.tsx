import type React from "react";
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
// Import our client-only transition wrapper (which is a client component)
import ClientTransitionWrapper from "./client-transition-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cards2Cash",
  description: "Convert prepaid phone credit to digital funds",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AccessibilityProvider>
            <AnimationProvider>
              <AuthProvider>
                <BiometricAuthProvider>
                  <div className="flex min-h-screen flex-col bg-gradient-to-br from-pink-100 via-white to-blue-100">
                    {/* Use the client-only transition wrapper */}
                    <ClientTransitionWrapper>{children}</ClientTransitionWrapper>
                    <AuthNavigation />
                  </div>
                  <Toaster />
                </BiometricAuthProvider>
              </AuthProvider>
            </AnimationProvider>
          </AccessibilityProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
