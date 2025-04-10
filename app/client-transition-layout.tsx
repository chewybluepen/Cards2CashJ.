"use client";

import dynamic from "next/dynamic";

// Dynamically import TransitionLayout for client-side rendering only
const ClientOnlyTransitionLayout = dynamic(
  () => import("@/components/layout/transition-layout"),
  { ssr: false }
);

export default function ClientTransitionLayout({ children }: { children: React.ReactNode }) {
  return <ClientOnlyTransitionLayout>{children}</ClientOnlyTransitionLayout>;
}
