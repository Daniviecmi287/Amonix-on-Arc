import { FOCUS, RADIUS } from "@/components/amonix/tokens"

/** Shared product button base — Payment Requests CTA density (h-12, pill, text-sm medium). */
const base = cnBase(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap",
  RADIUS.pill,
  "text-sm font-medium transition-colors select-none",
  FOCUS,
  "disabled:pointer-events-none disabled:cursor-default",
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
)

function cnBase(...parts: string[]) {
  return parts.filter(Boolean).join(" ")
}

/**
 * Shared product button sizes.
 * - sm: compact chrome
 * - md: Payment Request / general form CTAs (h-12)
 * - action: DeFi position & Review CTAs (Earn / Borrow / Liquidity Review)
 * - lg: rare wide primary
 */
export const BUTTON_SIZE = {
  sm: "h-9 px-3.5 text-xs",
  md: "h-12 px-5",
  /** Canonical DeFi action scale — Liquidity “Review add liquidity” (h-12 / px-5 / text-sm). */
  action: "h-12 px-5 text-sm",
  lg: "h-12 px-6 sm:min-w-40",
} as const

export const BUTTON_VARIANT = {
  primary: cnBase(
    base,
    "bg-amonix-primary text-white hover:bg-amonix-primary-hover active:bg-amonix-primary-pressed",
    "disabled:bg-amonix-border disabled:text-amonix-text-muted disabled:opacity-100"
  ),
  /** Clearer than passive chips: tinted surface, stronger border, readable text. */
  secondary: cnBase(
    base,
    "border border-[#d4d4da] bg-amonix-background text-amonix-text shadow-[0_1px_2px_rgba(21,21,21,0.04)]",
    "hover:border-amonix-primary/30 hover:bg-amonix-primary-very-light",
    "disabled:border-amonix-border disabled:bg-amonix-background disabled:text-amonix-text-muted disabled:opacity-50 disabled:shadow-none"
  ),
  /** Lower emphasis than secondary; same readable text when enabled. */
  tertiary: cnBase(
    base,
    "border border-[#d4d4da] bg-amonix-background/80 text-amonix-text",
    "hover:border-amonix-primary/25 hover:bg-amonix-primary-very-light",
    "disabled:border-amonix-border disabled:bg-transparent disabled:text-amonix-text-muted disabled:opacity-50"
  ),
  /** Destructive-secondary: soft red exit actions (e.g. Close loan) — below primary dominance. */
  danger: cnBase(
    base,
    "border border-amonix-error/35 bg-amonix-error-bg text-amonix-error",
    "hover:border-amonix-error/50 hover:bg-amonix-error/15",
    "disabled:opacity-50"
  ),
} as const

/** @deprecated Prefer `<Button variant="primary" />`. */
export const ACTION_PRIMARY = `${BUTTON_VARIANT.primary} ${BUTTON_SIZE.md}`
/** @deprecated Prefer `<Button variant="secondary" />`. */
export const ACTION_SECONDARY = `${BUTTON_VARIANT.secondary} ${BUTTON_SIZE.md}`
/** @deprecated Prefer `<Button variant="tertiary" />`. */
export const ACTION_TERTIARY = `${BUTTON_VARIANT.tertiary} ${BUTTON_SIZE.md}`
export const ACTION_DANGER = `${BUTTON_VARIANT.danger} ${BUTTON_SIZE.md}`
export const ACTION_STACK = "flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center"
export const ACTION_PRIMARY_BLOCK = `${ACTION_PRIMARY} w-full sm:w-auto`
