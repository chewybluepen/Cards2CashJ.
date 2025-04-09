"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useAuth } from "@/contexts/auth-context"

interface ProfilePictureEditorProps {
  currentImage?: string
  onImageChange: (imageUrl: string) => void
  username?: string
}

export function ProfilePictureEditor({ currentImage, onImageChange, username = "User" }: ProfilePictureEditorProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(currentImage)
  const { updateProfilePicture } = useAuth()

  const avatarOptions = [
    "/images/avatars/cartman.png",
    "/images/avatars/stan.png",
    "/images/avatars/kyle.png",
    "/images/avatars/kenny.png",
    "/images/avatars/butters.png",
    "/images/dp.png", // Default profile picture
  ]

  const handleSelectImage = (image: string) => {
    setSelectedImage(image)
  }

  const handleSave = () => {
    if (onImageChange) {
      onImageChange(selectedImage)
    }
    if (updateProfilePicture) {
      updateProfilePicture(selectedImage)
    }
    setIsDialogOpen(false)
  }

  return (
    <>
      <Button variant="outline" size="sm" onClick={() => setIsDialogOpen(true)}>
        Change Picture
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Choose Profile Picture</DialogTitle>
            <DialogDescription>Select an avatar or upload your own image.</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-4 py-4">
            {avatarOptions.map((avatar, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-md p-2 transition-colors ${
                  selectedImage === avatar ? "bg-primary/10 ring-2 ring-primary" : "hover:bg-muted"
                }`}
                onClick={() => handleSelectImage(avatar)}
              >
                <Avatar className="h-16 w-16 mx-auto">
                  <AvatarImage src={avatar} alt={`Avatar option ${index + 1}`} />
                  <AvatarFallback>{username.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
              </div>
            ))}
          </div>
          <DialogFooter className="sm:justify-between">
            <Button type="button" variant="secondary" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={handleSave}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
