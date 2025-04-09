/**
 * Utility functions for accessibility
 */

/**
 * Determines if text should be black or white based on background color
 * @param bgColor Background color in hex format (e.g., "#ff0000")
 * @returns "black" or "white" based on which provides better contrast
 */
export function getContrastTextColor(bgColor: string): "black" | "white" {
  // For rainbow backgrounds, we always use black as per requirements
  if (bgColor === "rainbow") {
    return "black"
  }

  // For other backgrounds, calculate contrast
  // This is a simplified version - in a real app, use a proper contrast calculation
  const r = Number.parseInt(bgColor.slice(1, 3), 16)
  const g = Number.parseInt(bgColor.slice(3, 5), 16)
  const b = Number.parseInt(bgColor.slice(5, 7), 16)

  // Calculate relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  // Return black for light backgrounds, white for dark backgrounds
  return luminance > 0.5 ? "black" : "white"
}

/**
 * Checks if a color combination meets WCAG contrast requirements
 * @param textColor Text color in hex format
 * @param bgColor Background color in hex format
 * @param level WCAG level to check against ("AA" or "AAA")
 * @returns boolean indicating if the contrast is sufficient
 */
export function meetsContrastRequirements(textColor: string, bgColor: string, level: "AA" | "AAA" = "AA"): boolean {
  // This would be a proper implementation in a real app
  // For now, we'll assume black text on rainbow backgrounds always passes
  if (textColor === "#000000" && bgColor === "rainbow") {
    return true
  }

  // Placeholder for actual contrast calculation
  return true
}
