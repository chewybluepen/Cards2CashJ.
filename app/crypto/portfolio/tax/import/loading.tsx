import React from "react";
import { Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <p className="text-lg font-medium text-gray-700">Importing your crypto portfolio data...</p>
          <p className="text-sm text-gray-500">This may take a few moments. Please don’t close the tab.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Loading;
