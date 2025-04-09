"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ProfilePictureEditor } from "./profile-picture-editor"
import { useAuth } from "@/contexts/auth-context"

interface ProfilePictureProps {
  initialImage?: string
  username?: string
  size?: "sm" | "md" | "lg" | "xl"
  editable?: boolean
  onImageChange?: (imageUrl: string) => void
}

export function ProfilePicture({
  initialImage,
  username = "User",
  size = "md",
  editable = false,
  onImageChange,
}: ProfilePictureProps) {
  const { user, updateProfilePicture } = useAuth()
  const [image, setImage] = useState(user?.profilePicture || initialImage || "/images/dp.png")

  // Get initials from username
  const initials = username
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)

  // Determine avatar size based on prop
  const sizeClasses = {
    sm: "h-10 w-10",
    md: "h-16 w-16",
    lg: "h-24 w-24",
    xl: "h-32 w-32",
  }

  const handleImageChange = (newImage: string) => {
    setImage(newImage)
    if (updateProfilePicture) {
      updateProfilePicture(newImage)
    }
    if (onImageChange) {
      onImageChange(newImage)
    }
  }

  // Update image when user profile picture changes
  useEffect(() => {
    if (user?.profilePicture) {
      setImage(user.profilePicture)
    }
  }, [user?.profilePicture])

  return (
    <div className="flex flex-col items-center">
      <Avatar className={`${sizeClasses[size]} border-2 border-primary/10`}>
        <AvatarImage src={image} alt={username} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>

      {editable && (
        <div className="mt-2">
          <ProfilePictureEditor currentImage={image} onImageChange={handleImageChange} username={username} />
        </div>
      )}
    </div>
  )
}
