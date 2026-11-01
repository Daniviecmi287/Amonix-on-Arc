/**
 * Monetary decimal entry helpers.
 * Accepts "." or "," as the decimal separator and normalizes to "." for
 * validation, calculation, and API payloads. Rejects ambiguous multi-separator values.
 */

/** True when the string mixes or repeats decimal separators (e.g. "5,5.2", "1..2", "1,,2"). */
export function isAmbiguousDecimalInput(raw: string): boolean {
  const value = raw.trim()
  if (!value) return false
  const dots = (value.match(/\./g) ?? []).length
  const commas = (value.match(/,/g) ?? []).length
  if (dots > 1 || commas > 1) return true
  if (dots >= 1 && commas >= 1) return true
  return false
}

/**
 * Normalize typed monetary text for the input field.
 * Returns null when the value is invalid/ambiguous and should be rejected.
 * Allows an empty string and a trailing separator while editing ("5." / "5," → "5.").
 */
export function sanitizeDecimalTyping(raw: string): string | null {
  const value = raw.trim()
  if (!value) return ""
  if (isAmbiguousDecimalInput(value)) return null
  if (!/^[\d.,]+$/.test(value)) return null

  const normalized = value.replace(",", ".")
  if (!/^\d*\.?\d*$/.test(normalized)) return null
  return normalized
}

/**
 * Normalize a completed amount for validation / API (always uses ".").
 * Returns null for empty, incomplete ("5."), or ambiguous / non-numeric values.
 */
export function normalizeDecimalAmount(raw: string): string | null {
  const sanitized = sanitizeDecimalTyping(raw)
  if (sanitized == null || sanitized === "" || sanitized === ".") return null
  if (!/^\d+(\.\d+)?$/.test(sanitized)) return null
  return sanitized
}
