import type { ReactNode } from "react"
import { SPACE } from "@/components/amonix/tokens"
import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  /** Primary/secondary row vs quieter tertiary row. */
  tone?: "main" | "tertiary" | "end"
  className?: string
}

/**
 * Consistent spacing for page/position action clusters.
 * Main: primary + secondary (stack on mobile, row on desktop).
 * Tertiary: wrap quieter actions under the main row.
 * End: review/confirm aligned end on desktop, full-width stack on mobile.
 */
export function ActionGroup({ children, tone = "main", className }: Props) {
  return (
    <div
      className={cn(
        "flex",
        SPACE.actionGap,
        tone === "main" && "flex-col items-stretch sm:flex-row sm:flex-wrap sm:items-center sm:justify-start",
        tone === "tertiary" && "flex-wrap items-center justify-start",
        tone === "end" && "flex-col items-stretch sm:flex-row sm:justify-end",
        className
      )}
    >
      {children}
    </div>
  )
}
