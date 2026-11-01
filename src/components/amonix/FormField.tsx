"use client"

import type { ReactNode } from "react"
import { Input } from "@/components/ui/input"
import { AMOUNT_INPUT, AMOUNT_SHELL, FIELD_INPUT } from "@/components/shared/formControls"
import { SPACE, TYPE } from "@/components/amonix/tokens"
import { sanitizeDecimalTyping } from "@/lib/validation/decimalAmount"
import { cn } from "@/lib/utils"

export function FormField({
  id,
  label,
  helper,
  error,
  children,
  className,
}: {
  id?: string
  label: ReactNode
  helper?: ReactNode
  error?: string | null
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn(SPACE.fieldGap, className)}>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className={TYPE.label}>
          {label}
        </label>
        {helper ? <span className={cn(TYPE.helper, "shrink-0 text-right")}>{helper}</span> : null}
      </div>
      {children}
      {error ? (
        <p className={TYPE.error} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function TextField({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  helper,
  disabled,
  className,
}: {
  id: string
  label: ReactNode
  value: string
  onChange: (value: string) => void
  placeholder?: string
  error?: string | null
  helper?: ReactNode
  disabled?: boolean
  className?: string
}) {
  return (
    <FormField id={id} label={label} helper={helper} error={error} className={className}>
      <Input
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={Boolean(error) || undefined}
        className={cn(FIELD_INPUT, error && "border-amonix-error")}
      />
    </FormField>
  )
}

/**
 * Shared financial amount entry.
 * Layout: label + right helper · [ value | SYMBOL  Max ]
 */
export function AmountField({
  id,
  label,
  value,
  onChange,
  onBlur,
  symbol,
  helper,
  maxLabel = "Max",
  onMax,
  maxDisabled,
  error,
  disabled,
  className,
}: {
  id: string
  label: ReactNode
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  symbol: string
  helper?: ReactNode
  maxLabel?: string
  onMax?: () => void
  maxDisabled?: boolean
  error?: string | null
  disabled?: boolean
  className?: string
}) {
  return (
    <FormField id={id} label={label} helper={helper} error={error} className={className}>
      <div className={cn(AMOUNT_SHELL, error && "border-amonix-error", disabled && "opacity-50")}>
        <Input
          id={id}
          value={value}
          onChange={(event) => {
            const next = sanitizeDecimalTyping(event.target.value)
            if (next != null) onChange(next)
          }}
          onBlur={onBlur}
          inputMode="decimal"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder="0.00"
          disabled={disabled}
          aria-invalid={Boolean(error) || undefined}
          className={AMOUNT_INPUT}
        />
        <div className="flex shrink-0 items-center gap-2.5 pr-3.5">
          <span className="text-sm font-medium text-amonix-text-muted">{symbol}</span>
          {onMax ? (
            <button
              type="button"
              disabled={maxDisabled || disabled}
              onClick={onMax}
              className="text-xs font-semibold text-amonix-primary disabled:cursor-default disabled:opacity-40"
            >
              {maxLabel}
            </button>
          ) : null}
        </div>
      </div>
    </FormField>
  )
}

/**
 * NFT / integer quantity — same chrome as AmountField, integer inputMode.
 * ERC-721: pass disabled / fixed value 1. ERC-1155: editable + Owned helper + Max.
 */
export function QuantityField({
  id,
  label = "Quantity",
  value,
  onChange,
  helper,
  maxLabel = "Max",
  onMax,
  maxDisabled,
  error,
  disabled,
  className,
}: {
  id: string
  label?: ReactNode
  value: string
  onChange: (value: string) => void
  helper?: ReactNode
  maxLabel?: string
  onMax?: () => void
  maxDisabled?: boolean
  error?: string | null
  disabled?: boolean
  className?: string
}) {
  return (
    <FormField id={id} label={label} helper={helper} error={error} className={className}>
      <div className={cn(AMOUNT_SHELL, error && "border-amonix-error", disabled && "opacity-50")}>
        <Input
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value.replace(/[^\d]/g, ""))}
          inputMode="numeric"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder="1"
          disabled={disabled}
          aria-invalid={Boolean(error) || undefined}
          className={AMOUNT_INPUT}
        />
        {onMax ? (
          <div className="flex shrink-0 items-center pr-3.5">
            <button
              type="button"
              disabled={maxDisabled || disabled}
              onClick={onMax}
              className="text-xs font-semibold text-amonix-primary disabled:cursor-default disabled:opacity-40"
            >
              {maxLabel}
            </button>
          </div>
        ) : null}
      </div>
    </FormField>
  )
}
