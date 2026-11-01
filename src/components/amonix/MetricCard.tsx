import type { ReactNode } from "react"
import { MetricValue, type MetricTone } from "@/components/amonix/MetricValue"
import { SPACE, SURFACE, TYPE } from "@/components/amonix/tokens"
import { cn } from "@/lib/utils"

export function MetricCard({
  label,
  value,
  hint,
  badge,
  tone,
  className,
}: {
  label: ReactNode
  value: ReactNode
  hint?: ReactNode
  badge?: ReactNode
  /** When set, value uses shared financial MetricValue styling. */
  tone?: MetricTone
  className?: string
}) {
  return (
    <div className={cn(SURFACE.card, SPACE.cardPad, className)}>
      <div className="flex items-start justify-between gap-2">
        <p className={TYPE.muted}>{label}</p>
        {badge}
      </div>
      {tone ? (
        <div className="mt-1">
          <MetricValue tone={tone} className="text-lg">
            {value}
          </MetricValue>
        </div>
      ) : (
        <p className={cn("mt-1", TYPE.metricValue)}>{value}</p>
      )}
      {hint ? <p className={TYPE.helper}>{hint}</p> : null}
    </div>
  )
}

export function MetricGrid({
  children,
  columns = 4,
  className,
}: {
  children: ReactNode
  columns?: 2 | 4
  className?: string
}) {
  return (
    <div className={cn("grid grid-cols-2 gap-3", columns === 4 && "lg:grid-cols-4", className)}>
      {children}
    </div>
  )
}
