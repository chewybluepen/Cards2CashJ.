"use client";

import React from "react";

export default function LearnPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Learn About: {slug}</h1>
      <p>
        This page contains detailed learning content about crypto topics related
        to "{slug}".
      </p>
      {/* Insert additional dynamic content as needed */}
    </div>
  );
}
