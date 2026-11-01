/**
 * Simulated Public Edition fixtures.
 * These amounts never represent a live wallet or an onchain settlement.
 */

export const DEMO_NOTICE =
  "Public Edition uses simulated data. Nothing here submits a wallet signature or an onchain transaction."

export type DemoToken = {
  id: string
  symbol: string
  name: string
  balance: number
  priceUsd: number
  valueUsd: number
  change24h: number
  network: string
}

export type DemoActivity = {
  id: string
  type: string
  title: string
  amount: string
  status: "completed" | "pending" | "failed"
  when: string
  simulated: true
}

export const DEMO_TOKENS: DemoToken[] = [
  {
    id: "usdc",
    symbol: "USDC",
    name: "USD Coin",
    balance: 1280.5,
    priceUsd: 1,
    valueUsd: 1280.5,
    change24h: 0.04,
    network: "Arc Testnet",
  },
  {
    id: "weth",
    symbol: "WETH",
    name: "Wrapped Ether",
    balance: 0.42,
    priceUsd: 2860,
    valueUsd: 1201.2,
    change24h: 2.41,
    network: "Arc Testnet",
  },
  {
    id: "eurc",
    symbol: "EURC",
    name: "Euro Coin",
    balance: 210,
    priceUsd: 1.08,
    valueUsd: 226.8,
    change24h: -0.82,
    network: "Arc Testnet",
  },
]

export const DEMO_ADDRESS = "0xA11CE00000000000000000000000000000C0FFEE"

export const DEMO_ACTIVITY: DemoActivity[] = [
  {
    id: "act-1",
    type: "SEND",
    title: "Sent USDC",
    amount: "−25.00 USDC",
    status: "completed",
    when: "2 hours ago",
    simulated: true,
  },
  {
    id: "act-2",
    type: "PAYMENT_REQUEST",
    title: "Payment request paid",
    amount: "+12.00 USDC",
    status: "completed",
    when: "Yesterday",
    simulated: true,
  },
  {
    id: "act-3",
    type: "SWAP",
    title: "Swap USDC → WETH",
    amount: "40.00 USDC",
    status: "pending",
    when: "Pending (simulated)",
    simulated: true,
  },
]

export const DEMO_REQUESTS = [
  { id: "pr-1", from: "mina", amount: "18.00 USDC", note: "Lunch", status: "pending" as const },
  { id: "pr-2", from: "kai", amount: "40.00 USDC", note: "Tickets", status: "paid" as const },
]

export const DEMO_SPLITS = [
  { id: "sb-1", title: "Weekend trip", share: "32.50 USDC", status: "active" as const },
  { id: "sb-2", title: "Dinner", share: "14.00 USDC", status: "settled" as const },
]

export const DEMO_DEFI = {
  earnUsd: 420.15,
  borrowUsd: 90,
  health: "1.86",
  liquidityUsd: 75.4,
  stakeAvailable: false,
}

export function portfolioTotalUsd(tokens: DemoToken[] = DEMO_TOKENS) {
  return tokens.reduce((sum, token) => sum + token.valueUsd, 0)
}
