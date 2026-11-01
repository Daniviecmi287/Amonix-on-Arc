export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

export function formatTokenAmount(value: number, maxDecimals = 4): string {
  if (!Number.isFinite(value)) return "0"
  const abs = Math.abs(value)
  const places = abs > 0 && abs < 1 ? Math.max(maxDecimals, 6) : maxDecimals
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: places,
  }).format(value)
}

export function formatPercent(value: number): string {
  const sign = value > 0 ? "+" : ""
  return `${sign}${value.toFixed(2)}%`
}
