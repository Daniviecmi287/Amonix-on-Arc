import type { ReactNode } from "react"
import { RADIUS } from "@/components/amonix/tokens"
import { cn } from "@/lib/utils"

export type BadgeTone = "neutral" | "active" | "success" | "warning" | "danger" | "rate" | "risk"

const TONE: Record<BadgeTone, string> = {
  neutral: "border border-amonix-border text-amonix-text-muted",
  active: "bg-amonix-primary-very-light text-amonix-primary",
  success: "bg-amonix-success-bg text-amonix-success",
  warning: "bg-amonix-warning-bg text-amonix-warning",
  danger: "bg-amonix-error-bg text-amonix-error",
  rate: "bg-amonix-warning-bg text-amonix-warning",
  risk: "bg-amonix-error-bg text-amonix-error",
}

/** Compact semantic chip. Prefer this over one-off rounded-full badge classes. */
export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode
  tone?: BadgeTone
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium",
        RADIUS.pill,
        TONE[tone],
        className
      )}
    >
      {children}
    </span>
  )
}
