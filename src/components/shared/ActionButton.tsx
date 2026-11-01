import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ACTION_TILE, FOCUS } from "@/components/amonix/tokens"
import { cn } from "@/lib/utils"

export function ActionButton({
  href,
  onClick,
  icon: Icon,
  label,
}: {
  href?: string
  onClick?: () => void
  icon: LucideIcon
  label: string
}) {
  const className = cn(ACTION_TILE.root, FOCUS)
  const body = (
    <>
      <div className={ACTION_TILE.iconWrap}>
        <Icon className={ACTION_TILE.icon} aria-hidden="true" />
      </div>
      <span className={ACTION_TILE.label}>{label}</span>
    </>
  )
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {body}
      </button>
    )
  }
  return (
    <Link href={href ?? "/"} className={className}>
      {body}
    </Link>
  )
}
