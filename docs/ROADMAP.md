# Roadmap

This roadmap separates **shipped** product (Arc Testnet, version 0.1.0) from **planned** work. It is directional, not a promise of dates or mainnet launch.

The production implementation is privately maintained. Shipping in the private app may land before this public document is updated.

---

## Already shipped (do not treat as roadmap)

Confirmed in the current app and summarized in [FEATURES.md](FEATURES.md):

- Circle User-Controlled Wallet on Arc Testnet
- Email, X, and passkey sign-in
- Send, Receive, Swap, Payment Request, Split Bill
- AMONIX Pay Scan & Pay
- Earn and Borrow when providers are available
- Circle CCTP bridge when a route is offered
- Activity, receipts, notifications
- Read-only wallet tracking
- English / Vietnamese
- Brand mark and logo-free receipts (October 2026)

---

## Near term

| Item | Why it is not “shipped” | User-visible today |
| --- | --- | --- |
| **Private execution** | Privacy transactions are **non-operational**; they do not move funds | Preview screens + “coming soon” |
| **Stake** | No verified Arc staking provider is available | Stake tile marked unavailable |
| **Bank transfer (AMONIX Pay)** | Pay hub shows Coming Soon | Scan & Pay only |
| **Broader swap / LP venues** | Community Uniswap V2-style liquidity is experimental; other routers appear only when they quote | Swap router list is availability-based |
| **More deposit corridors** | Other-chain receive only when a provider route is shown | Arc receive always; cross-chain optional |

---

## Next product themes

### 1. Confidential balances on Arc

Enable shield / unshield / private send **only** after a verified Arc privacy provider can execute. Until then, keep the UI honest (no fake private balances).

### 2. Verified staking

Offer Stake when an Arc-native, verified provider exists. Do not invent APY or cross-chain stake.

### 3. Additional Pay rails

Bank or fiat-style payout is a **planned** AMONIX Pay option. It must not be described as live Scan & Pay.

### 4. Reliability and coverage on Testnet

Continue hardening bridge recovery, provider pauses (Earn/Borrow), quote freshness, and mobile authorization—without changing the user-control model.

### 5. Assets and networks

Expand tokens, NFT metadata, and tracking networks as public data sources and Arc liquidity allow. Tracking remains read-only.

---

## Later / explicit decision required

| Item | Constraint |
| --- | --- |
| **Arc Mainnet** | Config exists in documentation; the product target remains Testnet until an explicit launch decision |
| **External injected wallets** | Everyday AMONIX flows use Circle UCW, not “connect MetaMask every time” |
| **Mainnet fiat on/off ramp** | Not offered; testnet faucet is not a ramp |
| **Open-sourcing production** | Out of scope for this public docs repository |

---

## Non-goals (current)

- Simulating success when a provider failed
- Mixing native 18-decimal USDC gas units with 6-decimal application amounts in the UI
- Treating community DEX pools as official Circle products
- Background-controlling watched wallets
- Publishing secrets, private endpoints, or the production source tree

---

## How to read dates

No calendar commitments are published here. When a planned row moves to shipped, update [FEATURES.md](FEATURES.md) and [CHANGELOG.md](../CHANGELOG.md) from the **running product**, not from this list alone.
