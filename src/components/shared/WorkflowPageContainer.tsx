import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/** Centered shell for every non-Home app page. Home keeps the wider dashboard. */
export function PageContainer({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn("mx-auto w-full max-w-[960px]", className)}>{children}</div>
}

/** Narrower column for forms, reviews, and detail flows inside a page. */
export function WorkflowPageContainer({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn("mx-auto w-full max-w-[840px]", className)}>{children}</div>
}
