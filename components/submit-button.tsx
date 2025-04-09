"use client"

import React, { ButtonHTMLAttributes } from "react"

export interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Indicates whether the button should display a loading state */
  isLoading?: boolean
}

/**
 * A simple submit button component that displays a loading indicator when appropriate.
 */
const SubmitButton: React.FC<SubmitButtonProps> = ({ isLoading, children, className = "", ...props }) => {
  return (
    <button
      type="submit"
      disabled={isLoading || props.disabled}
      {...props}
      className={`py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded transition-colors ${className}`}
    >
      {isLoading ? "Loading..." : children}
    </button>
  )
}

export default SubmitButton
