// app/support/loading.tsx

import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="animate-spin w-8 h-8 text-gray-600" />
        <p className="text-sm text-gray-500">Loading support content...</p>
      </div>
    </div>
  );
}
