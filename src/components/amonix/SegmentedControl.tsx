"use client"

import type { ReactNode } from "react"
import { CONTROL_HEIGHT, FOCUS, RADIUS } from "@/components/amonix/tokens"
import { cn } from "@/lib/utils"

/**
 * Payment Requests is the visual source of truth for pill segmented controls.
 * Create/Activity, Incoming/Outgoing, Tokens/NFTs, Earn/Borrow, Equal/Custom share these.
 */
export const SEGMENT_LIST = cn(
  "grid w-full grid-cols-2 gap-1 border border-amonix-border bg-amonix-background p-1",
  RADIUS.segment,
  CONTROL_HEIGHT.md,
  "group-data-horizontal/tabs:h-11 sm:group-data-horizontal/tabs:h-12"
)

export const SEGMENT_TRIGGER = cn(
  "inline-flex h-full min-w-0 items-center justify-center bg-white px-3 text-sm font-semibold text-amonix-text shadow-sm transition-colors",
  RADIUS.pill,
  FOCUS,
  "hover:bg-amonix-primary-very-light hover:text-amonix-text",
  "disabled:cursor-default disabled:opacity-50",
  "data-active:bg-amonix-primary data-active:font-semibold data-active:text-white data-active:shadow-none",
  "data-active:hover:bg-amonix-primary-hover data-active:hover:text-white"
)

export const SEGMENT_LIST_COMPACT = SEGMENT_LIST
export const SEGMENT_TRIGGER_COMPACT = SEGMENT_TRIGGER

export type SegmentOption<T extends string> = {
  value: T
  label: ReactNode
  disabled?: boolean
}

type Props<T extends string> = {
  value: T
  onChange: (value: T) => void
  options: SegmentOption<T>[]
  /** Default matches Payment Requests (`md`). */
  size?: "sm" | "md"
  fullWidth?: boolean
  className?: string
  "aria-label"?: string
}

/** Standalone segmented control for pages that do not use Tabs primitives. */
export function SegmentedControl<T extends string>({
  value,
  onChange,
  options,
  size = "md",
  fullWidth = true,
  className,
  "aria-label": ariaLabel,
}: Props<T>) {
  const columns = Math.max(options.length, 1)
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={cn(
        SEGMENT_LIST,
        size === "sm" && "h-9 sm:h-10 group-data-horizontal/tabs:h-9 sm:group-data-horizontal/tabs:h-10",
        !fullWidth && "w-auto",
        className
      )}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {options.map((option) => {
        const selected = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={selected}
            disabled={option.disabled}
            data-active={selected ? "" : undefined}
            onClick={() => onChange(option.value)}
            className={SEGMENT_TRIGGER}
          >
            <span className="truncate">{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}
