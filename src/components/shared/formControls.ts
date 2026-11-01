import { ACTION_PRIMARY } from "@/components/amonix/buttonStyles"

/**
 * Shared transaction / form control chrome.
 * Text inputs, selects, asset triggers, and amount shells share height/radius/focus.
 */

const fieldChrome =
  // text-base (≥16px) on small viewports prevents iOS Safari focus zoom; sm:text-sm restores desktop density.
  "box-border h-12 w-full min-w-0 rounded-xl border border-amonix-border bg-white text-base sm:text-sm font-medium text-amonix-text transition-colors outline-none " +
  "placeholder:font-normal placeholder:text-amonix-text-muted " +
  "hover:border-amonix-primary/40 " +
  "focus-visible:border-amonix-primary focus-visible:ring-3 focus-visible:ring-amonix-primary/15 " +
  "disabled:cursor-default disabled:opacity-50"

export const FIELD_TRIGGER =
  `${fieldChrome} flex cursor-pointer items-center justify-between px-3.5`

export const ASSET_TRIGGER = FIELD_TRIGGER

export const RECIPIENT_METHOD_TRIGGER =
  `${fieldChrome} flex cursor-pointer items-center justify-between bg-amonix-primary-very-light px-3.5 font-semibold`

export const FIELD_INPUT = `${fieldChrome} px-3.5`

/** Amount uses the same height/radius as other fields; suffix + Max sit inside the shell. */
export const AMOUNT_SHELL =
  "flex h-12 w-full items-center rounded-xl border border-amonix-border bg-white transition-colors " +
  "hover:border-amonix-primary/40 " +
  "focus-within:border-amonix-primary focus-within:ring-3 focus-within:ring-amonix-primary/15"

export const AMOUNT_INPUT =
  "amonix-amount-input h-full min-w-0 flex-1 border-0 bg-transparent px-3.5 text-base sm:text-sm font-medium text-amonix-text shadow-none " +
  "placeholder:font-normal placeholder:text-amonix-text-muted " +
  "focus-visible:border-0 focus-visible:ring-0"

export const NOTE_INPUT =
  "min-h-[4.5rem] w-full min-w-0 resize-none rounded-xl border border-amonix-border bg-white px-3.5 py-2.5 text-base sm:text-sm font-medium text-amonix-text " +
  "placeholder:font-normal placeholder:text-amonix-text-muted " +
  "focus-visible:border-amonix-primary focus-visible:ring-3 focus-visible:ring-amonix-primary/15"

export const DROPDOWN_ROW =
  "flex min-h-11 w-full cursor-pointer items-center justify-between gap-2 rounded-lg px-2.5 py-1.5 text-left text-sm hover:bg-amonix-primary-very-light disabled:cursor-default"

/** @deprecated Prefer ACTION_PRIMARY from actionControls. */
export const PRIMARY_BUTTON = ACTION_PRIMARY
