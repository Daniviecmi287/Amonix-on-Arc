/** Persisted AMONIX-initiated transactions. Chain fields stay separate from app metadata. */
export type AppTransactionType =
  | "SEND"
  | "SWAP"
  | "RECEIVE"
  | "PAYMENT_REQUEST"
  | "SPLIT_BILL"
  | "NFT_SEND"
  | "NFT_SENT"
  | "NFT_RECEIVED"
  | "AMONIX_PAY"
  | "EARN_DEPOSIT"
  | "EARN_WITHDRAW"
  | "BORROW_OPEN"
  | "BORROW_REPAY"
  | "COLLATERAL_ADDED"
  | "COLLATERAL_WITHDRAWN"
  | "BORROW_INCREASED"
  | "LOAN_CLOSED"
  | "LIQUIDITY_ADD"
  | "LIQUIDITY_REMOVE"
  | "CROSS_CHAIN_DEPOSIT"
  | "BRIDGE"

export type AppTransactionStatus = "PENDING" | "SUCCESS" | "FAILED"

export type AppTransactionDirection = "OUTGOING" | "INCOMING" | "SWAP"

export type AppTransactionSource = "AMONIX" | "CHAIN_SYNC"

export type AppTransactionMetadata = {
  toSymbol?: string
  toContract?: string
  estimatedToAmount?: string
  actualToAmount?: string
  outputEstimated?: boolean
  rate?: string
  route?: string
  provider?: string
  providerLabel?: string
  liquidityRouter?: string | null
  liquidityRouterLabel?: string | null
  routePercent?: number
  slippage?: string
  approvalTxHash?: string
  circleTransactionId?: string
  /** ERC-4337 user operation hash. Distinct from the Arc transaction hash. */
  userOpHash?: string
  minimumReceived?: string
  discoveredAt?: string
  requestId?: string
  purpose?: string
  payerUserId?: string
  requesterUserId?: string
  splitBillId?: string
  participantId?: string
  billTitle?: string
  nftTokenId?: string
  nftStandard?: string
  collectionAddress?: string
  privacyProvider?: string
  privateReference?: string
  sandbox?: boolean
  destinationAmount?: string
  destinationCurrency?: string
  providerStatus?: string
  providerOrderId?: string
  merchantName?: string
  merchantId?: string
  fiatAmount?: string
  fiatCurrency?: string
  exchangeRate?: string
  quoteId?: string
  reference?: string
  settlementMode?: string
  paymentStatus?: string
  opportunity?: string
  variableApy?: string
  healthFactor?: string
  healthBand?: string
  collateralAmount?: string
  collateralSymbol?: string
  loanId?: string
  remainingDebt?: string
  lpAmount?: string
  poolId?: string
  poolProvider?: string
  token0Amount?: string
  token1Amount?: string
  token0Symbol?: string
  token1Symbol?: string
  sourceChain?: string
  sourceTxHash?: string
  destinationTxHash?: string
  settlementStatus?: string
  bankName?: string
  bankAccountName?: string
  bankAccountMask?: string
}

export type AppTransaction = {
  id: string
  userId: string
  operationId: string
  type: AppTransactionType
  direction: AppTransactionDirection
  status: AppTransactionStatus
  assetSymbol: string | null
  assetContract: string | null
  amount: string | null
  fromAddress: string | null
  toAddress: string | null
  recipientUserId: string | null
  recipientDisplayName: string | null
  recipientUsername: string | null
  network: string
  chainId: number
  txHash: string | null
  feeAmount: string | null
  feeAsset: string | null
  note: string | null
  purpose: string | null
  provider: string | null
  routeProvider: string | null
  source: AppTransactionSource
  logIndex: number | null
  blockNumber: number | null
  eventId: string | null
  createdAt: string
  submittedAt: string | null
  confirmedAt: string | null
  failedAt: string | null
  errorCode: string | null
  errorMessage: string | null
  metadata: AppTransactionMetadata
}
