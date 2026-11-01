/**
 * AMONIX layout / control tokens.
 * Colors live in `src/app/globals.css` (`--amonix-*`); use Tailwind `amonix-*` classes.
 * Prefer these sizing tokens over one-off heights/radii/padding.
 */

/** Control heights — Payment Requests segmented control is the density reference. */
export const CONTROL_HEIGHT = {
  sm: "h-9",
  /** Segmented control / compact actions */
  md: "h-11 sm:h-12",
  /** Primary page CTAs and form fields */
  lg: "h-12",
  /** Amount entry (slightly taller for numeric focus) */
  amount: "h-[52px]",
} as const

export const RADIUS = {
  pill: "rounded-full",
  control: "rounded-full",
  field: "rounded-xl",
  card: "rounded-2xl",
  segment: "rounded-xl",
} as const

export const TYPE = {
  pageTitle: "text-lg font-semibold text-amonix-text",
  sectionTitle: "text-sm font-semibold text-amonix-text",
  label: "text-sm font-medium text-amonix-text",
  helper: "text-xs text-amonix-text-secondary",
  muted: "text-xs text-amonix-text-muted",
  error: "text-xs text-amonix-error",
  metricValue: "text-lg font-semibold text-amonix-text",
  body: "text-sm text-amonix-text-secondary",
} as const

export const SPACE = {
  pageGap: "flex flex-col gap-4",
  sectionGap: "flex flex-col gap-3",
  /** Gap between header / panel / actions in a transaction form. */
  formStack: "gap-4",
  /** Major sections inside TransactionFormPanel (~24–32px). */
  panelStack: "gap-6",
  /** Label → control (~6–8px). */
  fieldGap: "flex flex-col gap-1.5",
  /** Controls inside one logical section (~12–16px). */
  sectionControls: "flex flex-col gap-3",
  actionGap: "gap-2",
  /** TransactionFormPanel padding — mobile ~16–20px, desktop ~24–32px. */
  panelPad: "px-4 py-5 sm:px-6 sm:py-6",
  cardPad: "px-4 py-3",
  cardPadLg: "px-5 py-4",
} as const

export const SURFACE = {
  card: "rounded-2xl border border-amonix-border bg-amonix-surface",
  /** Single outer shell for transaction inputs (not nested mini-cards). */
  panel: "rounded-2xl border border-amonix-border bg-white",
  page: "bg-amonix-background",
  /** App background → this tint → white interactive cards. Distinct from the portfolio chart. */
  group: "rounded-3xl border border-amonix-primary/10 bg-amonix-section p-2.5 sm:p-3",
} as const

/** Home, Assets, and Privacy action tiles. Mobile is the compact size; sm+ keeps the desktop size. */
export const ACTION_TILE = {
  root: "flex min-h-[80px] w-full min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-[20px] border border-amonix-border/70 bg-amonix-surface px-2 py-2 text-center transition-colors hover:bg-amonix-primary-very-light sm:min-h-[80px] sm:gap-1.5 sm:rounded-2xl sm:px-3 sm:py-2.5",
  iconWrap: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amonix-primary-light text-amonix-primary sm:h-10 sm:w-10",
  icon: "h-4 w-4 sm:h-5 sm:w-5",
  label: "max-w-full text-[13px] font-medium leading-tight text-amonix-text",
} as const

export const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amonix-primary" as const
