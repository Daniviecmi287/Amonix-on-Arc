import type { ReactNode } from "react"
import { SPACE, SURFACE, TYPE } from "@/components/amonix/tokens"
import { cn } from "@/lib/utils"

export function SectionCard({
  title,
  children,
  className,
  padding = "md",
}: {
  title?: ReactNode
  children: ReactNode
  className?: string
  padding?: "md" | "lg"
}) {
  return (
    <section className={cn(SURFACE.card, padding === "lg" ? SPACE.cardPadLg : SPACE.cardPad, className)}>
      {title ? <h3 className={TYPE.sectionTitle}>{title}</h3> : null}
      <div className={title ? "mt-2" : undefined}>{children}</div>
    </section>
  )
}
