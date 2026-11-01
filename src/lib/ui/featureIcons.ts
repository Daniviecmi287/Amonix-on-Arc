import type { LucideIcon } from "lucide-react"
import {
  ArrowDownLeft,
  ArrowDownToLine,
  ArrowUpRight,
  CreditCardReader,
  Droplets,
  Globe2,
  HandCoins,
  Layers,
  Lock,
  PiggyBank,
  Radar,
  Receipt,
  Repeat,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react"
import type { AppTransactionType } from "@/lib/types/transactions"
import type { NotificationType } from "@/lib/types/notifications"

/**
 * Canonical feature icons for Home, DeFi, Activity, About, and related surfaces.
 * Import from here — do not invent per-page icon maps for these features.
 */
export const FEATURE_ICONS = {
  send: Send,
  receive: ArrowDownToLine,
  /** POS / payment terminal */
  pay: CreditCardReader,
  swap: Repeat,
  paymentRequest: Receipt,
  splitBill: Users,
  earn: PiggyBank,
  /** Hand with money — distinct from Payment Request receipt */
  borrow: HandCoins,
  liquidity: Droplets,
  stake: Lock,
  tracking: Radar,
  crossChainDeposit: Globe2,
  defi: Layers,
  /** Same shield used by Privacy in the main navigation. */
  privacy: ShieldCheck,
} as const

export type FeatureIconKey = keyof typeof FEATURE_ICONS

export function featureIcon(key: FeatureIconKey): LucideIcon {
  return FEATURE_ICONS[key]
}

/** Resolve Activity / history icon from persisted AMONIX transaction type. */
export function iconForAppTransaction(type: AppTransactionType): LucideIcon {
  switch (type) {
    case "AMONIX_PAY":
      return FEATURE_ICONS.pay
    case "PAYMENT_REQUEST":
      return FEATURE_ICONS.paymentRequest
    case "SPLIT_BILL":
      return FEATURE_ICONS.splitBill
    case "SWAP":
      return FEATURE_ICONS.swap
    case "EARN_DEPOSIT":
    case "EARN_WITHDRAW":
      return FEATURE_ICONS.earn
    case "BORROW_OPEN":
    case "BORROW_REPAY":
    case "COLLATERAL_ADDED":
    case "COLLATERAL_WITHDRAWN":
    case "BORROW_INCREASED":
    case "LOAN_CLOSED":
      return FEATURE_ICONS.borrow
    case "LIQUIDITY_ADD":
    case "LIQUIDITY_REMOVE":
      return FEATURE_ICONS.liquidity
    case "CROSS_CHAIN_DEPOSIT":
    case "BRIDGE":
      return FEATURE_ICONS.crossChainDeposit
    case "RECEIVE":
    case "NFT_RECEIVED":
      return ArrowDownLeft
    case "SEND":
    case "NFT_SEND":
    case "NFT_SENT":
    default:
      return ArrowUpRight
  }
}

/** Resolve Notification Center icon from notification type — same families as Home/Activity. */
export function iconForNotificationType(type: NotificationType): LucideIcon {
  switch (type) {
    case "pay_received":
    case "bank_pay_completed":
    case "bank_pay_failed":
      return FEATURE_ICONS.pay
    case "payment_request_received":
    case "payment_request_paid":
    case "payment_request_rejected":
    case "payment_request_cancelled":
    case "payment_request_reminded":
      return FEATURE_ICONS.paymentRequest
    case "split_bill_received":
    case "split_participant_paid":
    case "split_participant_rejected":
    case "split_bill_cancelled":
    case "split_bill_reminded":
      return FEATURE_ICONS.splitBill
    case "earn_deposit":
    case "earn_withdraw":
      return FEATURE_ICONS.earn
    case "borrow_opened":
    case "borrow_increased":
    case "borrow_repaid":
    case "collateral_added":
    case "collateral_withdrawn":
    case "loan_closed":
      return FEATURE_ICONS.borrow
    case "liquidity_added":
    case "liquidity_removed":
      return FEATURE_ICONS.liquidity
    case "cross_chain_deposit":
    case "bridge_completed":
      return FEATURE_ICONS.crossChainDeposit
    case "token_received":
      return FEATURE_ICONS.receive
    case "token_sent":
      return FEATURE_ICONS.send
    case "shield_completed":
    case "private_transfer_sent":
    case "private_transfer_received":
    case "unshield_completed":
      return ShieldCheck
    default:
      return FEATURE_ICONS.send
  }
}
