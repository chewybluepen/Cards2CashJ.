"use client"

import { useAccessibility } from "@/contexts/accessibility-context"
import { useAnimation } from "@/contexts/animation-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function AccessibilitySettings() {
  const { highContrast, largeText, reducedMotion, toggleHighContrast, toggleLargeText, toggleReducedMotion } =
    useAccessibility()
  const { animationsEnabled, transitionSpeed, toggleAnimations, setTransitionSpeed } = useAnimation()

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Accessibility Settings</CardTitle>
          <CardDescription>Customize your experience to make the app more accessible</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="high-contrast">High Contrast</Label>
              <p className="text-sm text-muted-foreground">Increase contrast for better visibility</p>
            </div>
            <Switch
              id="high-contrast"
              checked={highContrast}
              onCheckedChange={toggleHighContrast}
              aria-label="Toggle high contrast mode"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="large-text">Large Text</Label>
              <p className="text-sm text-muted-foreground">Increase text size for better readability</p>
            </div>
            <Switch
              id="large-text"
              checked={largeText}
              onCheckedChange={toggleLargeText}
              aria-label="Toggle large text mode"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="reduced-motion">Reduced Motion</Label>
              <p className="text-sm text-muted-foreground">Minimize animations and motion effects</p>
            </div>
            <Switch
              id="reduced-motion"
              checked={reducedMotion}
              onCheckedChange={toggleReducedMotion}
              aria-label="Toggle reduced motion mode"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="animations-enabled">Animations</Label>
              <p className="text-sm text-muted-foreground">Enable or disable all animations</p>
            </div>
            <Switch
              id="animations-enabled"
              checked={animationsEnabled}
              onCheckedChange={toggleAnimations}
              aria-label="Toggle animations"
            />
          </div>

          <div className="space-y-3">
            <Label>Animation Speed</Label>
            <RadioGroup
              value={transitionSpeed}
              onValueChange={(value) => setTransitionSpeed(value as "slow" | "normal" | "fast")}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="slow" id="slow" />
                <Label htmlFor="slow">Slow</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="normal" id="normal" />
                <Label htmlFor="normal">Normal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fast" id="fast" />
                <Label htmlFor="fast">Fast</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
