"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, Mail, Phone, Fingerprint, Scan } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { delay } from "@/lib/utils"
import Image from "next/image"
import { SocialLogin } from "./social-login"
import { Tagline } from "@/components/ui/tagline"
import { useAuth } from "@/contexts/auth-context"
import { useBiometricAuth } from "@/contexts/biometric-auth-context"
import { BiometricLoginButton } from "./biometric-login-button"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const { login } = useAuth()

  const { setIsAuthenticated } = useAuth()
  const { biometricCapability, toggleBiometricType } = useBiometricAuth()

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<string>("login")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [otpSent, setOtpSent] = useState<boolean>(false)
  const [otp, setOtp] = useState<string>("")
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const result = await login(email, password)
      if (result.success) {
        router.push("/dashboard")
      } else {
        setError(result.message || "Login failed. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call
      await delay(1500)

      // Set authentication status to true
      setIsAuthenticated(true)

      // For demo purposes, always succeed
      router.push("/dashboard")
    } catch (err) {
      setError("Invalid credentials. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call
      await delay(1500)

      // For demo purposes, always succeed with OTP
      setOtpSent(true)
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call
      await delay(1500)

      // Set authentication status to true
      setIsAuthenticated(true)

      // For demo purposes, always succeed
      router.push("/dashboard")
    } catch (err) {
      setError("OTP verification failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto animate-fade-in shadow-lg hover-lift">
      <CardHeader className="space-y-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-t-lg p-6">
        <div className="flex justify-center mb-4">
          <Image
            src="/images/logo.png"
            alt="Cards2Cash Logo"
            width={80}
            height={80}
            className="animate-pulse-opacity"
          />
        </div>
        <CardTitle className="text-2xl font-bold text-center text-black">Cards2Cash</CardTitle>
        <Tagline className="text-black font-bold" onRainbowBg={true} />
      </CardHeader>
      <CardContent className="pt-6 px-6">
        <Tabs defaultValue="login" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            <TabsTrigger
              value="login"
              className="animate-button-press data-[state=active]:bg-white/20 text-black font-bold"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="animate-button-press data-[state=active]:bg-white/20 text-black font-bold"
            >
              Register
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="space-y-5 slide-in-bottom">
            <div className="w-full max-w-md mx-auto space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Welcome Back</h1>
                <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access your account</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-xs"
                      type="button"
                      onClick={() => router.push("/forgot-password")}
                    >
                      Forgot password?
                    </Button>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </form>

              {/* Biometric login section */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              {/* Biometric type toggle for demo purposes */}
              <div className="flex justify-center mb-4">
                <Button variant="outline" size="sm" onClick={toggleBiometricType} className="text-xs">
                  {biometricCapability.type === "fingerprint" ? (
                    <>
                      <Fingerprint className="h-3 w-3 mr-1" />
                      Using Fingerprint
                    </>
                  ) : (
                    <>
                      <Scan className="h-3 w-3 mr-1" />
                      Using Face ID
                    </>
                  )}
                </Button>
              </div>

              <BiometricLoginButton />

              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Button variant="link" className="p-0 h-auto" type="button" onClick={() => setActiveTab("register")}>
                  Sign up
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="register" className="space-y-5 slide-in-bottom">
            {!otpSent ? (
              <form onSubmit={handleRegister}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        placeholder="+592..."
                        type="tel"
                        className="pl-10 input-focus-animation"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-email" className="text-sm font-medium">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="reg-email"
                        placeholder="m@example.com"
                        type="email"
                        className="pl-10 input-focus-animation"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-password" className="text-sm font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="reg-password"
                        type={showPassword ? "text" : "password"}
                        className="pl-10 pr-10 input-focus-animation"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        aria-required="true"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 text-muted-foreground"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-black font-bold hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 animate-button-press"
                    disabled={isLoading}
                    aria-busy={isLoading}
                  >
                    {isLoading ? "Sending OTP..." : "Register"}
                  </Button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleVerifyOTP}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="otp" className="text-sm font-medium">
                      Enter OTP sent to your phone
                    </Label>
                    <Input
                      id="otp"
                      placeholder="123456"
                      type="text"
                      className="text-center text-lg tracking-widest input-focus-animation"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength={6}
                      required
                      aria-required="true"
                    />
                  </div>
                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-black font-bold hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 animate-button-press"
                    disabled={isLoading}
                    aria-busy={isLoading}
                  >
                    {isLoading ? "Verifying..." : "Verify OTP"}
                  </Button>
                  <Button
                    type="button"
                    variant="link"
                    className="w-full"
                    onClick={() => setOtpSent(false)}
                    disabled={isLoading}
                  >
                    Back to Registration
                  </Button>
                </div>
              </form>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-center px-6 pb-6">
        <div className="w-full space-y-3">
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <SocialLogin />
        </div>
      </CardFooter>
    </Card>
  )
}
