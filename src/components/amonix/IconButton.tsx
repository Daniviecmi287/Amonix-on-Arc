"use client"

import type { ButtonHTMLAttributes, ReactNode } from "react"
import { FOCUS, RADIUS } from "@/components/amonix/tokens"
import { cn } from "@/lib/utils"

export type IconButtonSize = "sm" | "md" | "lg"

const SIZE: Record<IconButtonSize, string> = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-11 w-11",
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: IconButtonSize
  label: string
  children: ReactNode
}

/** Icon-only control (back, close, search, visibility). Not a text CTA. */
export function IconButton({
  size = "md",
  label,
  className,
  children,
  type = "button",
  ...props
}: Props) {
  return (
    <button
      type={type}
      aria-label={label}
      className={cn(
        "inline-flex shrink-0 items-center justify-center text-amonix-text-secondary transition-colors",
        RADIUS.pill,
        FOCUS,
        "hover:bg-amonix-primary-very-light hover:text-amonix-primary",
        "disabled:cursor-default disabled:opacity-50",
        SIZE[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
