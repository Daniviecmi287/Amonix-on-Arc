"use client"

import type { ReactNode, TextareaHTMLAttributes } from "react"
import { Textarea } from "@/components/ui/textarea"
import { FormField } from "@/components/amonix/FormField"
import { NOTE_INPUT } from "@/components/shared/formControls"
import { SPACE, SURFACE, TYPE } from "@/components/amonix/tokens"
import { cn } from "@/lib/utils"

/**
 * Focused column for money-movement forms (Send, PR, Split, Swap, Earn, Borrow…).
 * Review/receipt screens may keep a wider shell outside this wrapper.
 *
 * Default structure:
 * ```
 * <TransactionForm>
 *   <header />
 *   <TransactionFormPanel>…fields…</TransactionFormPanel>
 *   <FormError /> // page-level only
 *   <TransactionFormActions>CTA</TransactionFormActions>
 * </TransactionForm>
 * ```
 */
export function TransactionForm({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("mx-auto flex w-full min-w-0 max-w-[800px] flex-col overflow-x-clip", SPACE.formStack, className)}>
      {children}
    </div>
  )
}

/**
 * Single outer shell for related transaction inputs.
 * Put fields / helpers / inline validation inside; keep Review CTA outside.
 */
export function TransactionFormPanel({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn(SURFACE.panel, SPACE.panelPad, "flex min-w-0 flex-col", SPACE.panelStack, className)}>
      {children}
    </div>
  )
}

/** Major stage inside the panel: WHO / ASSET / AMOUNT / OPTIONAL DETAILS. */
export function TransactionFormSection({
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

export function FormError({ children, className }: { children?: ReactNode; className?: string }) {
  if (!children) return null
  return (
    <p className={cn(TYPE.error, className)} role="alert">
      {children}
    </p>
  )
}

/** Optional note — compact 2–3 lines, shared across transaction flows. */
export function NoteField({
  id = "note",
  label,
  value,
  onChange,
  placeholder = "Add a note...",
  error,
  maxLength,
  rows = 2,
  className,
  ...props
}: {
  id?: string
  label: ReactNode
  value: string
  onChange: (value: string) => void
  placeholder?: string
  error?: string | null
  maxLength?: number
  rows?: number
  className?: string
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id" | "value" | "onChange" | "placeholder" | "rows" | "className">) {
  return (
    <FormField id={id} label={label} error={error} className={className}>
      <Textarea
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        rows={rows}
        aria-invalid={Boolean(error) || undefined}
        className={cn(NOTE_INPUT, error && "border-amonix-error")}
        {...props}
      />
    </FormField>
  )
}

/**
 * Page-level transaction CTAs — sibling **below** the content panel, never inside it.
 * Also use for receipt / failure / reconcile actions when not using `ActionGroup`.
 */
export function TransactionFormActions({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex flex-col items-stretch gap-2 pt-1 sm:flex-row sm:items-center sm:justify-end", className)}>
      {children}
    </div>
  )
}
