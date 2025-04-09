"use client"

import { useState } from "react"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { PageContainer } from "@/components/layout/page-container"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AccessibleButton } from "@/components/ui/accessible-button"
import { AccessibleText } from "@/components/ui/accessible-text"
import { useAccessibility } from "@/contexts/accessibility-context"
import { useAnimation } from "@/contexts/animation-context"
import { meetsWCAGContrast } from "@/lib/accessibility-utils"

export default function AccessibilityTestPage() {
  const { highContrast, largeText, reducedMotion } = useAccessibility()
  const { animationsEnabled, transitionSpeed } = useAnimation()
  const [count, setCount] = useState(0)

  return (
    <PageWrapper>
      <PageContainer title="Accessibility Test" description="Test page for accessibility features">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Current Settings</CardTitle>
              <CardDescription>Your current accessibility settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <strong>High Contrast:</strong> {highContrast ? "Enabled" : "Disabled"}
              </p>
              <p>
                <strong>Large Text:</strong> {largeText ? "Enabled" : "Disabled"}
              </p>
              <p>
                <strong>Reduced Motion:</strong> {reducedMotion ? "Enabled" : "Disabled"}
              </p>
              <p>
                <strong>Animations:</strong> {animationsEnabled ? "Enabled" : "Disabled"}
              </p>
              <p>
                <strong>Transition Speed:</strong> {transitionSpeed}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Text Accessibility</CardTitle>
              <CardDescription>Test different text styles with accessibility settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Regular Text</h3>
                <p>This is regular text that adapts to your accessibility settings.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Accessible Text Component</h3>
                <AccessibleText as="p">
                  This text uses the AccessibleText component to adapt to your settings.
                </AccessibleText>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Contrast Example</h3>
                <div className="p-4 bg-primary rounded-md">
                  <p className="text-primary-foreground">
                    Text on primary background
                    {meetsWCAGContrast("#000000", "#25f4ee", "AA") ? " (Meets WCAG AA)" : " (Does not meet WCAG AA)"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Animation & Interaction</CardTitle>
              <CardDescription>Test animations and interactions with accessibility settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Button Interactions</h3>
                <div className="flex flex-wrap gap-2">
                  <AccessibleButton onClick={() => setCount(count + 1)}>Increment ({count})</AccessibleButton>

                  <AccessibleButton variant="secondary" onClick={() => setCount(0)}>
                    Reset
                  </AccessibleButton>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Animation Example</h3>
                <div
                  className={`p-4 bg-secondary rounded-md ${animationsEnabled && !reducedMotion ? "hover:scale-105 transition-transform" : ""}`}
                >
                  <p className="text-secondary-foreground">
                    Hover over this card{" "}
                    {animationsEnabled && !reducedMotion ? "to see animation" : "(animations disabled)"}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Transition Speed</h3>
                <div className="space-y-2">
                  {["slow", "normal", "fast"].map((speed) => (
                    <div
                      key={speed}
                      className={`p-2 bg-muted rounded-md ${
                        animationsEnabled && !reducedMotion
                          ? `transitions-${speed} hover:bg-muted-foreground hover:text-muted transition-colors`
                          : ""
                      }`}
                    >
                      <p>{speed.charAt(0).toUpperCase() + speed.slice(1)} transition</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Animations and transitions adapt based on your accessibility preferences.
              </p>
            </CardFooter>
          </Card>
        </div>
      </PageContainer>
    </PageWrapper>
  )
}
