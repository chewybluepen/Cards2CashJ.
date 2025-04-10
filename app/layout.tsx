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
import dynamic from "next/dynamic";

// Dynamically import TransitionLayout to ensure client-side rendering only
const ClientOnlyTransitionLayout = dynamic(
  () => import("@/components/layout/transition-layout"),
  { ssr: false }
);

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
                    <ClientOnlyTransitionLayout>
                      {children}
                    </ClientOnlyTransitionLayout>
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
