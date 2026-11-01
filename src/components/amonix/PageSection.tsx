import type { ReactNode } from "react"
import { SPACE, SURFACE, TYPE } from "@/components/amonix/tokens"
import { cn } from "@/lib/utils"

/** Predictable page vertical rhythm without forcing identical layouts. */
export function PageSection({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn(SPACE.pageGap, className)}>{children}</div>
}

export function PageIntro({
  title,
  subtitle,
  trailing,
  className,
}: {
  title: ReactNode
  subtitle?: ReactNode
  trailing?: ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex items-start justify-between gap-3", className)}>
      <div className="min-w-0 flex-1">
        {typeof title === "string" ? <h1 className={TYPE.pageTitle}>{title}</h1> : title}
        {subtitle ? <p className={cn("mt-1", TYPE.body)}>{subtitle}</p> : null}
      </div>
      {trailing}
    </div>
  )
}

/**
 * Tinted group for related cards. White interactive cards stay inside it.
 * Do not use this for the portfolio chart.
 */
export function SoftSection({
  children,
  className,
  title,
  description,
  trailing,
  titleClassName,
}: {
  children: ReactNode
  className?: string
  title?: ReactNode
  description?: ReactNode
  trailing?: ReactNode
  titleClassName?: string
}) {
  const hasHeader = title != null || description != null || trailing != null
  return (
    <section className={cn(SURFACE.group, className)}>
      {hasHeader ? (
        <div className="mb-2.5 px-0.5">
          <div className="flex items-center justify-between gap-3">
            {typeof title === "string" ? (
              <h2 className={cn(TYPE.sectionTitle, "text-base", titleClassName)}>{title}</h2>
            ) : (
              title
            )}
            {trailing}
          </div>
          {description ? <p className="mt-0.5 text-xs text-amonix-text-muted">{description}</p> : null}
        </div>
      ) : null}
      {children}
    </section>
  )
}
