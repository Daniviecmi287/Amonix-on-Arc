import type { ReactNode } from "react"
import { MetricValue, type MetricTone } from "@/components/amonix/MetricValue"
import { cn } from "@/lib/utils"

export function DetailRow({
  label,
  value,
  hint,
  tone,
  className,
  divide = true,
}: {
  label: ReactNode
  value: ReactNode
  hint?: ReactNode
  /** When set, value uses shared financial MetricValue styling. */
  tone?: MetricTone
  className?: string
  divide?: boolean
}) {
  return (
    <div
      className={cn(
        "min-h-11 py-2",
        divide && "border-b border-amonix-border/70 last:border-b-0",
        className
      )}
    >
      <div className="flex min-h-7 items-center justify-between gap-4 text-sm">
        <span className="shrink-0 text-amonix-text-muted">{label}</span>
        {tone ? (
          <MetricValue tone={tone} className="min-w-0 max-w-[70%] break-all text-right text-sm">
            {value}
          </MetricValue>
        ) : (
          <span className="min-w-0 break-all text-right font-medium text-amonix-text">{value}</span>
        )}
      </div>
      {hint ? <p className="mt-0.5 text-xs leading-4 text-amonix-text-muted">{hint}</p> : null}
    </div>
  )
}
