"use client";

import { useState } from "react";
import Image from "next/image"; // Import the Next.js Image component
import { Header } from "@/components/layout/header";
import { BottomTabBar } from "@/components/layout/bottom-tab-bar";
import { BankCard } from "@/components/bank/bank-card";
import { BankForm } from "@/components/bank/bank-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

interface Bank {
  id: string;
  name: string;
  logo: string;
}

export default function BankAccountsPage() {
  const [linkedBanks, setLinkedBanks] = useState<string[]>([]);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [showLinkDialog, setShowLinkDialog] = useState(false);

  const banks: Bank[] = [
    {
      id: "citizens",
      name: "Citizens Bank",
      logo: "/images/banks/citizens-bank.png",
    },
    {
      id: "republic",
      name: "Republic Bank",
      logo: "/images/banks/republic-bank.png",
    },
    {
      id: "gbti",
      name: "GBTI",
      logo: "/images/banks/gbti.png",
    },
    {
      id: "demerara",
      name: "Demerara Bank",
      logo: "/images/banks/demerara-bank.png",
    },
    {
      id: "baroda",
      name: "Bank of Baroda",
      logo: "/images/banks/bank-of-baroda.png",
    },
  ];

  const handleLinkBank = (bankId: string) => {
    const bank = banks.find((b) => b.id === bankId);
    if (bank) {
      setSelectedBank(bank);
      setShowLinkDialog(true);
    }
  };

  const handleUnlinkBank = (bankId: string) => {
    setLinkedBanks((prev) => prev.filter((id) => id !== bankId));
  };

  const handleLinkSuccess = () => {
    if (selectedBank) {
      setLinkedBanks((prev) => [...prev, selectedBank.id]);
      setTimeout(() => {
        setShowLinkDialog(false);
        setSelectedBank(null);
      }, 1500);
    }
  };

  const handleCancelLink = () => {
    setShowLinkDialog(false);
    setSelectedBank(null);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Bank Accounts" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-3xl">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Your Bank Accounts</h1>
            <Button
              variant="outline"
              className="animate-button-press"
              onClick={() => setShowLinkDialog(true)}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add New
            </Button>
          </div>

          <div className="space-y-4">
            {banks.map((bank) => (
              <BankCard
                key={bank.id}
                id={bank.id}
                name={bank.name}
                logo={bank.logo}
                isLinked={linkedBanks.includes(bank.id)}
                onLink={handleLinkBank}
                onUnlink={handleUnlinkBank}
              />
            ))}

            {linkedBanks.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <p>No bank accounts linked yet.</p>
                <p className="text-sm">Link a bank account to transfer funds easily.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Dialog open={showLinkDialog} onOpenChange={setShowLinkDialog}>
        <DialogContent className="sm:max-w-md">
          {selectedBank ? (
            <BankForm
              bankId={selectedBank.id}
              bankName={selectedBank.name}
              bankLogo={selectedBank.logo}
              onSuccess={handleLinkSuccess}
              onCancel={handleCancelLink}
            />
          ) : (
            <div className="space-y-4 py-4">
              <h2 className="text-xl font-bold text-center">Select a Bank</h2>
              <div className="grid gap-4">
                {banks.map((bank) => (
                  <Button
                    key={bank.id}
                    variant="outline"
                    className="flex justify-start items-center h-16 animate-button-press"
                    onClick={() => setSelectedBank(bank)}
                    disabled={linkedBanks.includes(bank.id)}
                  >
                    <div className="h-10 w-10 relative mr-4">
                      <Image
                        src={bank.logo || "/placeholder.svg"}
                        alt={bank.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span>{bank.name}</span>
                    {linkedBanks.includes(bank.id) && (
                      <span className="ml-auto text-xs text-muted-foreground">
                        Already linked
                      </span>
                    )}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <BottomTabBar />
    </div>
  );
}
