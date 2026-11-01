export type NotificationType =
  | "token_sent"
  | "token_received"
  | "pay_received"
  | "bank_pay_completed"
  | "bank_pay_failed"
  | "shield_completed"
  | "private_transfer_sent"
  | "private_transfer_received"
  | "unshield_completed"
  | "payment_request_received"
  | "payment_request_paid"
  | "payment_request_rejected"
  | "payment_request_cancelled"
  | "payment_request_reminded"
  | "split_bill_received"
  | "split_participant_paid"
  | "split_participant_rejected"
  | "split_bill_cancelled"
  | "split_bill_reminded"
  | "earn_deposit"
  | "earn_withdraw"
  | "borrow_opened"
  | "borrow_increased"
  | "borrow_repaid"
  | "collateral_added"
  | "collateral_withdrawn"
  | "loan_closed"
  | "liquidity_added"
  | "liquidity_removed"
  | "cross_chain_deposit"
  | "bridge_completed"

export type NotificationActor = {
  userId?: string
  displayName?: string
  username?: string
  avatar?: string
}

export type NotificationRelatedEntityType = "transaction" | "payment_request" | "split_bill" | "privacy"

export type Notification = {
  id: string
  type: NotificationType
  /** Time AMONIX created the notification record (ingestion). */
  createdAt: string
  /** On-chain / block event time used for relative display. Falls back to createdAt. */
  eventAt?: string
  /** True when the user opened this notification (destination click). Prefer readAt. */
  isRead: boolean
  /** Set when Notification Center shows this item. Drives the bell badge. */
  seenAt?: string | null
  /** Set when the user opens this notification. */
  readAt?: string | null
  actor?: NotificationActor
  amount?: number
  asset?: string
  relatedEntityType?: NotificationRelatedEntityType
  relatedEntityId?: string
  metadata?: Record<string, unknown>
}

/** Relative-time / sort timestamp — prefer on-chain event time over late ingestion. */
export function notificationEventAt(notification: Notification): string {
  return notification.eventAt || notification.createdAt
}

export function notificationIsSeen(notification: Notification): boolean {
  return Boolean(notification.seenAt) || Boolean(notification.readAt) || notification.isRead
}

export function notificationIsRead(notification: Notification): boolean {
  return Boolean(notification.readAt) || notification.isRead
}
