import Link from "next/link"
import type { DemoToken } from "@/lib/demo/fixtures"
import { formatCurrency, formatPercent, formatTokenAmount } from "@/lib/utils/format"
import { TokenIcon } from "./TokenIcon"

export function AssetRow({ token }: { token: DemoToken }) {
  const up = token.change24h >= 0
  return (
    <Link
      href="/demo/assets"
      className="flex items-center gap-3 rounded-2xl bg-amonix-surface px-3 py-3 hover:bg-amonix-primary-very-light"
    >
      <TokenIcon symbol={token.symbol} />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-amonix-text">{token.name}</p>
        <p className="text-xs text-amonix-text-secondary">
          {formatTokenAmount(token.balance)} {token.symbol}
        </p>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold text-amonix-text">{formatCurrency(token.valueUsd)}</p>
        <p className={`text-xs ${up ? "text-amonix-success" : "text-amonix-error"}`}>{formatPercent(token.change24h)}</p>
      </div>
    </Link>
  )
}
