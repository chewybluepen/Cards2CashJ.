"use client";

import dynamic from "next/dynamic";
import React, { Component, ReactNode } from "react";

// ErrorBoundary to catch runtime errors in the dynamic component
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try refreshing the page.</div>;
    }
    return this.props.children;
  }
}

// Dynamically import TransitionLayout for client-side rendering only.
// The ".then(mod => mod.default || mod)" ensures that we extract the default export,
// avoiding the [object Module] error.
const ClientOnlyTransitionLayout = dynamic(
  () =>
    import("@/components/layout/transition-layout").then(
      (mod) => mod.default || mod
    ),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);

export default function ClientTransitionLayout({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary>
      <ClientOnlyTransitionLayout>{children}</ClientOnlyTransitionLayout>
    </ErrorBoundary>
  );
}
