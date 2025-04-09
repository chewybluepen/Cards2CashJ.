"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface SocialLoginProps {
  onSuccess?: () => void
}

export function SocialLogin({ onSuccess }: SocialLoginProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For demo purposes, always succeed
      if (onSuccess) {
        onSuccess()
      } else {
        router.push("/dashboard")
      }
    } catch (err) {
      setError(`Failed to login with ${provider}. Please try again.`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <div className="flex justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full animate-button-press"
          onClick={() => handleSocialLogin("Google")}
          disabled={isLoading}
        >
          <Image src="/images/social/gmail.png" alt="Google" width={24} height={24} />
          <span className="sr-only">Google</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full animate-button-press"
          onClick={() => handleSocialLogin("Facebook")}
          disabled={isLoading}
        >
          <Image src="/images/social/facebook.png" alt="Facebook" width={24} height={24} />
          <span className="sr-only">Facebook</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full animate-button-press"
          onClick={() => handleSocialLogin("WhatsApp")}
          disabled={isLoading}
        >
          <Image src="/images/social/whatsapp.png" alt="WhatsApp" width={24} height={24} />
          <span className="sr-only">WhatsApp</span>
        </Button>
      </div>
    </div>
  )
}
