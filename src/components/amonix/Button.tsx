"use client"

import type { ButtonHTMLAttributes, ReactNode } from "react"
import { LoaderCircle } from "lucide-react"
import { BUTTON_SIZE, BUTTON_VARIANT } from "@/components/amonix/buttonStyles"
import { cn } from "@/lib/utils"

export type AmonixButtonVariant = keyof typeof BUTTON_VARIANT
export type AmonixButtonSize = keyof typeof BUTTON_SIZE

export type AmonixButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  variant?: AmonixButtonVariant
  size?: AmonixButtonSize
  /** Stretch to container width when the layout needs a full-bleed CTA. */
  fullWidth?: boolean
  loading?: boolean
  children?: ReactNode
}

/**
 * AMONIX product action button.
 * Prefer this over raw `<button className="h-12 rounded-full…">` for normal CTAs.
 * Segmented controls and icon-only chrome use their own primitives.
 */
export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled,
  className,
  children,
  type = "button",
  ...props
}: AmonixButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(BUTTON_VARIANT[variant], BUTTON_SIZE[size], fullWidth && "w-full", className)}
      {...props}
    >
      {loading ? <LoaderCircle className="size-4 animate-spin" aria-hidden="true" /> : null}
      {children}
    </button>
  )
}
