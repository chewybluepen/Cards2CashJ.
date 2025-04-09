import * as React from "react"
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  rainbowBg?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, rainbowBg = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      rainbowBg && "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500",
      className,
    )}
    {...props}
  />
))
Card.displayName = "Card"

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  rainbowBg?: boolean
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, rainbowBg = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col space-y-1.5 p-6",
        rainbowBg && "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500",
        className,
      )}
      {...props}
    />
  ),
)
CardHeader.displayName = "CardHeader"

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  rainbowBg?: boolean
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, rainbowBg = false, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        rainbowBg && "text-black font-bold",
        className,
      )}
      {...props}
    />
  ),
)
CardTitle.displayName = "CardTitle"

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  rainbowBg?: boolean
}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, rainbowBg = false, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", rainbowBg && "text-black font-bold", className)}
      {...props}
    />
  ),
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
