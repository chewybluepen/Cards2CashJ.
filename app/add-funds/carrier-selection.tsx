"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Carrier {
  id: string;
  name: string;
  logo?: string; // Made optional to handle cases where logo might not be provided
  description: string;
}

export default function CarrierSelection() {
  const router = useRouter();
  const [selectedCarrier, setSelectedCarrier] = useState<string | null>(null);

  const carriers: Carrier[] = [
    {
      id: "digicel",
      name: "Digicel",
      logo: "/images/carriers/digicel.png",
      description: "Convert Digicel prepaid credit to digital funds",
    },
    {
      id: "gtt",
      name: "GTT",
      logo: "/images/carriers/gtt.png",
      description: "Convert GTT prepaid credit to digital funds",
    },
  ];

  const handleCarrierSelect = (carrierId: string) => {
    setSelectedCarrier(carrierId);
  };

  const handleContinue = () => {
    if (selectedCarrier) {
      router.push(`/add-funds?carrier=${selectedCarrier}`);
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Select Carrier</CardTitle>
          <CardDescription>Choose your prepaid credit provider</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            {carriers.map((carrier) => (
              <Button
                key={carrier.id}
                variant="outline"
                className={`flex h-24 items-center justify-start gap-4 p-4 animate-button-press ${
                  selectedCarrier === carrier.id ? "border-primary" : ""
                }`}
                onClick={() => handleCarrierSelect(carrier.id)}
              >
                <div className="h-16 w-16 relative">
                  <Image
                    src={carrier.logo || "/placeholder.svg"}
                    alt={carrier.name}
                    fill
                    className="object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"; // Fallback to placeholder if image fails to load
                    }}
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-medium">{carrier.name}</h3>
                  <p className="text-sm text-muted-foreground">{carrier.description}</p>
                </div>
              </Button>
            ))}
          </div>
          <Button
            className="w-full animate-button-press"
            disabled={!selectedCarrier}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}