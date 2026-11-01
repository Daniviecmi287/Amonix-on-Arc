"use client"

import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/amonix"
import { cn } from "@/lib/utils"

export function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel,
  cancelLabel,
  onConfirm,
  destructive = false,
  icon: Icon,
  loading = false,
  children,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description: string
  confirmLabel: string
  cancelLabel: string
  onConfirm: () => void | Promise<void>
  destructive?: boolean
  icon?: LucideIcon
  loading?: boolean
  children?: ReactNode
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="gap-3 rounded-[22px] border border-amonix-border bg-amonix-surface p-4 max-sm:top-auto max-sm:bottom-4 max-sm:translate-y-0"
      >
        <DialogHeader className="gap-2">
          {Icon && (
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full",
                destructive ? "bg-amonix-error-bg text-amonix-error" : "bg-amonix-primary-light text-amonix-primary"
              )}
            >
              <Icon className="h-5 w-5" />
            </div>
          )}
          <DialogTitle className="text-base font-semibold text-amonix-text">{title}</DialogTitle>
          <DialogDescription className="text-sm leading-relaxed text-amonix-text-secondary">
            {description}
          </DialogDescription>
        </DialogHeader>
        {children}
        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="secondary"
            size="md"
            disabled={loading}
            className="w-full sm:w-auto"
            onClick={() => onOpenChange(false)}
          >
            {cancelLabel}
          </Button>
          <Button
            type="button"
            variant={destructive ? "danger" : "primary"}
            size="md"
            loading={loading}
            className="w-full sm:w-auto"
            onClick={() => void onConfirm()}
          >
            {confirmLabel}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
