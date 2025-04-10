'use client';

import React, { Suspense } from "react";
import { usePathname } from "next/navigation";
// If you haven’t already installed Framer Motion, add it via: pnpm add framer-motion
import { AnimatePresence, motion } from "framer-motion";

// Error boundary to catch any rendering errors in children
class TransitionErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError() {
    // Update state so that the next render will show the fallback UI.
    return { hasError: true };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to an error reporting service or console
    console.error("Error in ClientTransitionLayout:", error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong while rendering this page.</div>;
    }
    return this.props.children;
  }
}

interface ClientTransitionLayoutProps {
  children: React.ReactNode;
}

const ClientTransitionLayout = ({ children }: ClientTransitionLayoutProps) => {
  // Using Next.js hook to determine the current pathname. The key will change on route changes.
  const pathname = usePathname();

  return (
    <TransitionErrorBoundary>
      {/* AnimatePresence ensures exit animations run on route change */}
      <AnimatePresence mode="wait">
        {/* 
          The motion.div below is keyed on the current pathname so that when the route changes
          the animation triggers. Adjust initial, animate, and exit props as needed.
        */}
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* 
            Suspense can be used to display a loading state for any lazy-loaded content.
            You can swap the fallback with a custom loader if desired.
          */}
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </TransitionErrorBoundary>
  );
};

export default ClientTransitionLayout;
