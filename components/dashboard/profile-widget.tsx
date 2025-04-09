"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ProfilePicture } from "@/components/profile/profile-picture"
import { ChevronRight } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

interface ProfileWidgetProps {
  username: string
  email: string
  profileImage?: string
}

export function ProfileWidget({ username, email, profileImage }: ProfileWidgetProps) {
  const { user } = useAuth()
  const displayImage = user?.profilePicture || profileImage || "/images/dp.png"

  return (
    <Link href="/profile">
      <Card className="hover:bg-muted/50 transition-colors">
        <CardContent className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <ProfilePicture initialImage={displayImage} username={username} size="sm" />
            <div>
              <h3 className="font-medium">{username}</h3>
              <p className="text-sm text-muted-foreground">{email}</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </CardContent>
      </Card>
    </Link>
  )
}
