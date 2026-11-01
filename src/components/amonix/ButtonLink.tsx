import type { AnchorHTMLAttributes, ReactNode } from "react"
import { BUTTON_SIZE, BUTTON_VARIANT } from "@/components/amonix/buttonStyles"
import type { AmonixButtonSize, AmonixButtonVariant } from "@/components/amonix/Button"
import { cn } from "@/lib/utils"

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
  variant?: AmonixButtonVariant
  size?: AmonixButtonSize
  fullWidth?: boolean
  children?: ReactNode
}

/** Anchor that matches shared Button visuals (Explorer, external actions). */
export function ButtonLink({
  variant = "secondary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...props
}: Props) {
  return (
    <a
      className={cn(BUTTON_VARIANT[variant], BUTTON_SIZE[size], fullWidth && "w-full", className)}
      {...props}
    >
      {children}
    </a>
  )
}
