"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { BottomTabBar } from "@/components/layout/bottom-tab-bar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ProfilePicture } from "@/components/profile/profile-picture"
import { ProfilePictureEditor } from "@/components/profile/profile-picture-editor"
import { BiometricSetup } from "@/components/profile/biometric-setup"
import { BiometricToggle } from "@/components/profile/biometric-toggle"
import { BiometricTestPanel } from "@/components/profile/biometric-test-panel"
import { useToast } from "@/hooks/use-toast"
import { Save, X } from "lucide-react"

export default function ProfilePage() {
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [showPictureEditor, setShowPictureEditor] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setIsEditing(false)
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
    })
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset form data to original values
    setFormData({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Profile" />
      <main className="flex-1 p-4 pb-20 md:pb-4">
        <div className="mx-auto max-w-2xl">
          {/* Profile Header */}
          <div className="mb-6 flex flex-col items-center justify-center text-center">
            <ProfilePicture
              src="/images/dp.png"
              alt="Profile Picture"
              size="large"
              onClick={() => setShowPictureEditor(true)}
              editable
            />
            <h1 className="mt-4 text-2xl font-bold">
              {formData.firstName} {formData.lastName}
            </h1>
            <p className="text-muted-foreground">{formData.email}</p>
          </div>

          {/* Profile Information */}
          <Card className="mb-6 amazon-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Personal Information</CardTitle>
                {!isEditing && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(true)}
                    className="animate-button-press"
                  >
                    Edit
                  </Button>
                )}
              </div>
              <CardDescription>Manage your personal information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    {isEditing ? (
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="input-focus-animation"
                      />
                    ) : (
                      <div className="rounded-md border border-input bg-background px-3 py-2">{formData.firstName}</div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    {isEditing ? (
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="input-focus-animation"
                      />
                    ) : (
                      <div className="rounded-md border border-input bg-background px-3 py-2">{formData.lastName}</div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-focus-animation"
                    />
                  ) : (
                    <div className="rounded-md border border-input bg-background px-3 py-2">{formData.email}</div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input-focus-animation"
                    />
                  ) : (
                    <div className="rounded-md border border-input bg-background px-3 py-2">{formData.phone}</div>
                  )}
                </div>

                {isEditing && (
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={handleCancel} className="animate-button-press">
                      <X className="mr-2 h-4 w-4" />
                      Cancel
                    </Button>
                    <Button onClick={handleSave} className="animate-button-press">
                      <Save className="mr-2 h-4 w-4" />
                      Save
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Biometric Authentication */}
          <div className="space-y-6">
            <BiometricSetup />
            <BiometricToggle />
            <BiometricTestPanel />
          </div>
        </div>
      </main>
      <BottomTabBar />

      {/* Profile Picture Editor */}
      <ProfilePictureEditor open={showPictureEditor} onClose={() => setShowPictureEditor(false)} />
    </div>
  )
}
