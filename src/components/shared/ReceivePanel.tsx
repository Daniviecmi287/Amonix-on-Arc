"use client"

import type { ReactNode } from "react"
import { SPACE, SURFACE, TYPE } from "@/components/amonix/tokens"
import { cn } from "@/lib/utils"

/** Cohesive display shell for Receive (QR / address / share) — not a transaction input form. */
export function ReceivePanel({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        SURFACE.panel,
        SPACE.panelPad,
        "mx-auto flex w-full max-w-[800px] flex-col items-stretch gap-6",
        className
      )}
    >
      {children}
    </div>
  )
}

export function ReceivePanelSection({
  title,
  description,
  children,
  className,
}: {
  title?: ReactNode
  description?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section className={cn("flex flex-col gap-3", className)}>
      {title || description ? (
        <div className="flex flex-col gap-1">
          {title ? <h2 className={TYPE.sectionTitle}>{title}</h2> : null}
          {description ? <p className={TYPE.muted}>{description}</p> : null}
        </div>
      ) : null}
      {children}
    </section>
  )
}
