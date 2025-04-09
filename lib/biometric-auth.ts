// Types
export type BiometricType = "fingerprint" | "face" | "none"

export interface BiometricCapability {
  available: boolean
  type: BiometricType
  isSimulated: boolean
}

export interface BiometricCredential {
  id: string
  username: string
  createdAt: number
}

export interface BiometricPromptResult {
  success: boolean
  error?: string
}

// Force set biometric type (for testing)
export function forceSetBiometricType(type: BiometricType): void {
  localStorage.setItem("forcedBiometricType", type)
}

// Check if biometric authentication is available
export async function checkBiometricAvailability(): Promise<BiometricCapability> {
  // In a real app, this would check the device capabilities
  // For this simulation, we'll assume biometrics are available

  // Check if there's a stored preference
  const storedType = localStorage.getItem("forcedBiometricType")
  const type = storedType === "fingerprint" || storedType === "face" ? (storedType as BiometricType) : "fingerprint" // Default to fingerprint

  // Store the default if none exists
  if (!storedType) {
    localStorage.setItem("forcedBiometricType", type)
  }

  return {
    available: true,
    type,
    isSimulated: true,
  }
}

// Register a new biometric credential
export async function registerBiometricCredential(username: string): Promise<BiometricCredential> {
  // In a real app, this would register the biometric with the device and server
  // For this simulation, we'll just create a credential object

  return {
    id: `credential-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
    username,
    createdAt: Date.now(),
  }
}

// Get forced biometric type (for testing)
export function getForcedBiometricType(): BiometricType | null {
  const storedType = localStorage.getItem("forcedBiometricType")
  return storedType === "fingerprint" || storedType === "face" ? (storedType as BiometricType) : null
}

// Simulate biometric prompt
export async function simulateBiometricPrompt(type: BiometricType): Promise<BiometricPromptResult> {
  // For testing purposes, always return success
  return Promise.resolve({ success: true })
}

// Verify biometric credential
export async function verifyBiometricCredential(credential: BiometricCredential): Promise<boolean> {
  // For testing purposes, always return true
  return Promise.resolve(true)
}
