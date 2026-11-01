import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Button, BUTTON_SIZE, BUTTON_VARIANT } from "@/components/amonix"
import { cn } from "@/lib/utils"

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  actionHref,
  onAction,
}: {
  icon: LucideIcon
  title: string
  description?: string
  actionLabel?: string
  actionHref?: string
  onAction?: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-amonix-border bg-amonix-surface px-4 py-6 text-center sm:gap-3 sm:px-6 sm:py-10">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amonix-primary-light text-amonix-primary sm:h-12 sm:w-12">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
      <div>
        <p className="text-sm font-semibold text-amonix-text">{title}</p>
        {description && <p className="mt-1 text-sm text-amonix-text-secondary">{description}</p>}
      </div>
      {actionLabel && actionHref && (
        <Link href={actionHref} className={cn(BUTTON_VARIANT.primary, BUTTON_SIZE.md, "mt-2")}>
          {actionLabel}
        </Link>
      )}
      {actionLabel && onAction && !actionHref && (
        <Button variant="primary" className="mt-2" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  )
}
