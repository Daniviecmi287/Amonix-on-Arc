import { cn } from "@/lib/utils"

export function TokenIcon({ symbol, size = 40, className }: { symbol: string; size?: number; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-amonix-primary-light text-[11px] font-semibold text-amonix-primary",
        className
      )}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {symbol.slice(0, 3)}
    </span>
  )
}
