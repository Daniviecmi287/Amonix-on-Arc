import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Semantic financial metric tones (text color + weight only — not filled pills).
 * Status chips still use `Badge`. Metric values stay clean indicators.
 * - info: position / provided / collateral / pool share
 * - positive: earned / yield / safe health
 * - debt: borrowed / outstanding debt
 * - risk: risky/critical health / liquidation warning
 * - rate: APY / interest rate
 * - neutral: plain balances without obligation/yield meaning
 */
export type MetricTone = "neutral" | "info" | "positive" | "debt" | "risk" | "rate"

/** Softer semantic text colors — meaning without badge fills. */
const TONE: Record<MetricTone, string> = {
  neutral: "text-amonix-text",
  info: "text-amonix-primary/85",
  positive: "text-amonix-success",
  debt: "text-amonix-warning",
  risk: "text-amonix-error",
  rate: "text-amonix-warning",
}

/** Financial metric value — semantic color + weight; no tinted pill background. */
export function MetricValue({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode
  tone?: MetricTone
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-block max-w-full min-w-0 font-semibold tabular-nums tracking-tight",
        TONE[tone],
        className
      )}
    >
      {children}
    </span>
  )
}
