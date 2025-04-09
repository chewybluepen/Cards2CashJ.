"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/header";
import { BottomTabBar } from "@/components/layout/bottom-tab-bar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { delay, formatVoucherCode, isValidVoucherCode } from "@/lib/utils";
import { AlertCircle, CheckCircle2, CreditCard, Info, Smartphone, Wifi, WifiOff } from "lucide-react";
import CarrierSelection from "./carrier-selection";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

export default function AddFundsPage() {
  const router = useRouter();
  const { toast } = useToast();
  const searchParams = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const carrierParam = searchParams.get("carrier");

  const [isLoading, setIsLoading] = useState(false);
  const [carrier, setCarrier] = useState(carrierParam || "");
  const [voucherCode, setVoucherCode] = useState("");
  const [formattedCode, setFormattedCode] = useState("");
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"idle" | "validating" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isOffline, setIsOffline] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);

  // Check network status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleVoucherCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setVoucherCode(value);
    setFormattedCode(formatVoucherCode(value));

    // Reset status when user types
    if (status !== "idle") {
      setStatus("idle");
      setProgress(0);
      setErrorMessage("");
    }
  };

  const validateVoucher = async () => {
    if (!carrier) {
      setErrorMessage("Please select a carrier");
      setStatus("error");
      return false;
    }

    if (!isValidVoucherCode(voucherCode)) {
      setErrorMessage("Invalid voucher code format. Please enter a 16-digit code.");
      setStatus("error");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = await validateVoucher();
    if (!isValid) return;

    setIsLoading(true);
    setStatus("validating");

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    try {
      // Simulate API call
      await delay(2000);

      clearInterval(interval);
      setProgress(100);

      // For demo purposes, always succeed
      setStatus("success");

      // Show toast notification
      toast({
        title: "Funds Added Successfully",
        description: `${formatCurrency(getRandomAmount(), "GYD")} has been added to your account.`,
        variant: "success",
      });

      // Redirect after a short delay
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (err) {
      clearInterval(interval);
      setStatus("error");
      setErrorMessage("Failed to process voucher. Please try again.");

      toast({
        title: "Transaction Failed",
        description: "We couldn't process your voucher. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleOfflineMode = () => {
    setIsOffline(!isOffline);

    if (!isOffline) {
      toast({
        title: "Offline Mode Enabled",
        description: "Your transaction will be processed when you're back online.",
        variant: "default",
      });
    }
  };

  const handlePhoneCreditRedirect = () => {
    router.push("/phone-credit");
  };

  const getRandomAmount = () => {
    return Math.floor(Math.random() * 5000) + 1000;
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
    }).format(amount);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Add Funds" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        {!carrier ? (
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="mx-auto max-w-md shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <CardTitle>Add Funds to Your Account</CardTitle>
                <CardDescription className="text-blue-100">Choose your preferred method to add funds</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <Alert className="bg-blue-50 border-blue-200">
                  <Info className="h-4 w-4 text-blue-500" />
                  <AlertDescription className="text-blue-700">
                    Adding funds allows you to generate virtual cards, transfer money, and more.
                  </AlertDescription>
                </Alert>

                <div className="grid gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      className="flex h-24 w-full items-center justify-start gap-4 p-4 animate-button-press border-2 border-green-200 hover:border-green-400 hover:bg-green-50 transition-all duration-300"
                      onClick={handlePhoneCreditRedirect}
                    >
                      <div className="h-16 w-16 flex items-center justify-center bg-green-100 rounded-full">
                        <Smartphone className="h-8 w-8 text-green-600" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium">Phone Credit to Digital Funds</h3>
                        <p className="text-sm text-muted-foreground">Convert your phone credit to digital funds</p>
                        <span className="inline-block mt-1 text-xs font-medium text-white bg-red-500 px-2 py-0.5 rounded-full">
                          Recommended
                        </span>
                      </div>
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      className="flex h-24 w-full items-center justify-start gap-4 p-4 animate-button-press border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
                      onClick={() => router.push("/bank-accounts")}
                    >
                      <div className="h-16 w-16 flex items-center justify-center bg-blue-100 rounded-full">
                        <CreditCard className="h-8 w-8 text-blue-600" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-medium">Bank Transfer</h3>
                        <p className="text-sm text-muted-foreground">Add funds via bank transfer</p>
                      </div>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 px-6 py-4">
                <div className="flex items-center text-sm text-muted-foreground w-full justify-center">
                  {isOnline ? (
                    <div className="flex items-center text-green-600">
                      <Wifi className="mr-2 h-4 w-4" />
                      <span>You're online. All payment methods available.</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-amber-600">
                      <WifiOff className="mr-2 h-4 w-4" />
                      <span>You're offline. Some features may be limited.</span>
                    </div>
                  )}
                </div>
              </CardFooter>
            </Card>

            <CarrierSelection />
          </motion.div>
        ) : (
          <motion.div
            className="mx-auto max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <CardTitle>Add Funds with Prepaid Credit</CardTitle>
                <CardDescription className="text-blue-100">
                  Enter your prepaid voucher code to add funds
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="carrier">Select Carrier</Label>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2 text-blue-600"
                        type="button"
                        onClick={() => setShowInstructions(!showInstructions)}
                      >
                        <Info className="h-4 w-4 mr-1" />
                        <span className="text-xs">Help</span>
                      </Button>
                    </div>
                    <Select value={carrier} onValueChange={setCarrier}>
                      <SelectTrigger id="carrier" className="input-focus-animation">
                        <SelectValue placeholder="Select carrier" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="digicel">Digicel</SelectItem>
                        <SelectItem value="gtt">GTT</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <AnimatePresence>
                    {showInstructions && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Alert className="bg-blue-50 border-blue-200 mb-4">
                          <Info className="h-4 w-4 text-blue-500" />
                          <AlertTitle className="text-blue-700">How to find your voucher code</AlertTitle>
                          <AlertDescription className="text-blue-600 text-sm">
                            <ul className="list-disc pl-5 space-y-1 mt-2">
                              <li>
                                For Digicel: Scratch the silver panel on your voucher card to reveal the 16-digit code
                              </li>
                              <li>For GTT: Look for the 16-digit code printed on your receipt or voucher card</li>
                              <li>Enter the code without spaces or dashes</li>
                            </ul>
                          </AlertDescription>
                        </Alert>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="space-y-2">
                    <Label htmlFor="voucher-code">Voucher Code</Label>
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="voucher-code"
                        placeholder="Enter 16-digit code"
                        className="pl-10 input-focus-animation"
                        value={formattedCode}
                        onChange={handleVoucherCodeChange}
                        maxLength={19} // 16 digits + 3 spaces
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">Enter the 16-digit code from your prepaid voucher</p>
                  </div>

                  {status === "validating" && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Validating voucher...</span>
                        <span>{progress}%</span>
                      </div>
                      <Progress value={progress} className="animate-progress" />
                    </div>
                  )}

                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Alert className="bg-green-50 border-green-200">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <AlertTitle className="text-green-500">Success!</AlertTitle>
                        <AlertDescription>Your funds have been added to your account.</AlertDescription>
                      </Alert>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{errorMessage}</AlertDescription>
                      </Alert>
                    </motion.div>
                  )}

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="offline-mode"
                      checked={isOffline}
                      onChange={toggleOfflineMode}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="offline-mode" className="text-sm">
                      Save for offline processing
                    </Label>
                  </div>

                  {isOffline && (
                    <Alert className="bg-blue-50 border-blue-200">
                      <AlertDescription className="text-sm">
                        Offline Mode Syncing – transaction will be queued until network is available.
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    className="w-full animate-button-press bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
                    disabled={isLoading || status === "success"}
                  >
                    {isLoading ? "Processing..." : "Add Funds"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center bg-gray-50 p-4">
                <Button variant="link" className="text-xs" onClick={() => router.push("/support")}>
                  Having trouble? Get help
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </main>
      <BottomTabBar />
    </div>
  );
}