// app/layout.tsx
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
import ClientTransitionWrapper from "./client-transition-wrapper";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cards2Cash",
  description: "Convert prepaid phone credit to digital funds",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* WARNING: The following meta tag disables most security protections.
            Use ONLY in a demo environment. */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline'; connect-src *;"
        />
      </head>
      <body className={inter.className}>
        <ApolloProvider client={client}>
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
                      {/* Client-only transition wrapper */}
                      <ClientTransitionWrapper>{children}</ClientTransitionWrapper>
                      <AuthNavigation />
                    </div>
                    <Toaster />
                  </BiometricAuthProvider>
                </AuthProvider>
              </AnimationProvider>
            </AccessibilityProvider>
          </ThemeProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
