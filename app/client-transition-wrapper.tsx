'use client';

import React from "react";
import ClientTransitionLayout from "./client-transition-layout";

interface ClientTransitionWrapperProps {
  children: React.ReactNode;
}

export default function ClientTransitionWrapper({
  children,
}: ClientTransitionWrapperProps) {
  return <ClientTransitionLayout>{children}</ClientTransitionLayout>;
}
