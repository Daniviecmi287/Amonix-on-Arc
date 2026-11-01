import { cn } from "@/lib/utils"

export const HIDDEN_VALUE_MASK = "••••••"

export function HiddenAmount({
  hidden,
  children,
  className,
}: {
  hidden: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <span className={cn("inline-block min-w-[4.5ch] tabular-nums", hidden && "tracking-wider", className)}>
      {hidden ? HIDDEN_VALUE_MASK : children}
    </span>
  )
}
