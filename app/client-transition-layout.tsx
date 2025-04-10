"use client";

import React, { Component, ReactNode } from "react";
import dynamic from "next/dynamic";

// A simple Error Boundary to catch errors in the child component tree
class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(/* error: Error */) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Optionally log error information to an error reporting service here
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try refreshing the page.</div>;
    }
    return this.props.children;
  }
}

// Dynamically import TransitionLayout for client-side rendering only
// Added a simple loading fallback
const ClientOnlyTransitionLayout = dynamic(
  () => import("@/components/layout/transition-layout"),
  {
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

export default function ClientTransitionLayout({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary>
      <ClientOnlyTransitionLayout>
        {children}
      </ClientOnlyTransitionLayout>
    </ErrorBoundary>
  );
}
