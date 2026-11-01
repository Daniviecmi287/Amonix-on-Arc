# Features

Factual capabilities of **AMONIX on Arc** as of product version **0.1.0**, grounded in the current application—not in outdated planning notes.

Statuses:

- **Implemented** — available on Arc Testnet when the relevant provider/route is up.
- **Experimental** — UI or partial path exists; execution, liquidity, or coverage is limited or not live.
- **Unavailable** — a screen exists, but the action cannot be completed.
- **Non-operational** — the control may be visible; it does not execute or move funds.
- **Planned** — called out in the product but not offered to users.

The production implementation is privately maintained. This file does not include source, secrets, or internal endpoints.

---

## Account and wallet

| Feature | Status | Notes |
| --- | --- | --- |
| Create account (email) | Implemented | One-time code verification through the Circle-backed email flow |
| Claim username | Implemented | Required before Home for accounts without a username |
| Sign in with email | Implemented | |
| Sign in with X | Implemented | Can be linked or removed from Profile |
| Sign in / link passkey | Implemented | WebAuthn; also used as a step on sensitive operations |
| Circle User-Controlled Wallet on Arc Testnet | Implemented | Smart-contract account; address shown in My Wallet and Receive |
| App Lock | Implemented | Locks the signed-in UI after idle time (30-minute window) |
| English / Vietnamese | Implemented | Profile → Settings |
| Help and About | Implemented | Includes feature grid and Arc connection status |

---

## Portfolio and assets

| Feature | Status | Notes |
| --- | --- | --- |
| Home balance and shortcuts | Implemented | Incoming payment requests and split shares surface as “needs attention” |
| Token portfolio | Implemented | Hide-balances toggle |
| Import ERC-20 | Implemented | Lookup on Arc Testnet by contract address |
| Testnet faucet entry | Implemented | Points users at Circle’s public faucet |
| NFTs | Implemented | Owned list, collection import, per-item actions when supported |
| Receive on Arc | Implemented | Address + QR |
| Receive from another chain | Implemented | Only when a deposit route is shown |

---

## Transfers and exchange

| Feature | Status | Notes |
| --- | --- | --- |
| Send supported assets | Implemented | Recipients: username, saved payee, or address |
| Saved payees | Implemented | |
| Swap with quotes | Implemented | Slippage control; quote can change before confirm |
| Router selection | Implemented | Best vs manual among **available** quotes |
| Community Uniswap V2-style swap/LP | Experimental | Community pools on Arc Testnet, not official Circle infra |
| Bridge (Circle CCTP) | Implemented | Shown as Circle CCTP / App Kit when a route exists; progress is tracked in-app |

---

## Social payments

| Feature | Status | Notes |
| --- | --- | --- |
| Payment Request | Implemented | Create, view, pay, reject, cancel, remind — AMONIX users |
| Split Bill | Implemented | Create, pay share, track participant status |
| Canonical receipts | Implemented | Shared receipt layout for success/failure/pending |

Settlement uses the same user-controlled wallet and Arc Testnet assets as Send.

---

## AMONIX Pay

| Feature | Status | Notes |
| --- | --- | --- |
| Scan & Pay | Implemented | Camera QR → review → authorize → onchain receipt |
| Pay in USDC on Arc | Implemented | Copy in-app: review, confirm with wallet, receipt |
| Bank transfer | Planned | Disabled in the Pay hub (“Coming Soon”) |
| Test payment generator | Experimental | Developer-oriented helper in the app; not a consumer bank rail |

---

## DeFi

| Feature | Status | Notes |
| --- | --- | --- |
| DeFi hub | Implemented | Earn, Borrow, Liquidity, Tracking, Stake |
| Earn | Implemented | Supply / withdraw when Circle App Kit reports a usable opportunity |
| Borrow | Implemented | Collateral, borrow, repay, health when available |
| Liquidity add/remove | Experimental | Verified community Uniswap V2-style pools |
| Stake | Unavailable | Screen explains that no verified Arc staking provider is available |
| Paused / failed provider states | Implemented | App can show unavailable or in-progress instead of fake APY |

Yield and borrow rates are market-dependent and **not guaranteed**.

---

## Wallet tracking

| Feature | Status | Notes |
| --- | --- | --- |
| Save public addresses | Implemented | Rename / remove |
| Holdings and activity on demand | Implemented | Loads after the user opens a tracked wallet |
| Networks | Implemented | Ethereum, Base, Arbitrum, Optimism, Polygon, and Arc Testnet |
| Signing for tracked wallets | Not offered | Read-only by design |

---

## Privacy

| Feature | Status | Notes |
| --- | --- | --- |
| Privacy home, Shield, Private Send, Unshield UI | Experimental | About labels this area “Coming soon” |
| Privacy transactions | Non-operational | In-app copy: Arc private execution is not available yet; shield, private send, and unshield do not move funds |

---

## Activity, receipts, notifications

| Feature | Status | Notes |
| --- | --- | --- |
| Activity list and detail | Implemented | Same receipt model as immediate success screens |
| Receipt hierarchy | Implemented | Status icon, status text, amount(s), details, actions — no AMONIX logo on the card |
| Notifications | Implemented | Transfers, requests, splits, Pay-related events, and similar |
| Explorer links | Implemented | Arc Testnet explorer for wallet and transactions when a hash exists |

---

## What AMONIX does not claim

- Arc **Mainnet** availability
- Unlimited tokens, chains, or DEXs
- Guaranteed Earn APY or borrow liquidity
- Live confidential (shielded) transfers
- Live staking
- Live bank / fiat off-ramp
- Custody of user keys in a “we sign for you” model
- Production source code in this GitHub repository

## Public Edition demo

This repository includes a **simulated** Next.js app (`/demo/*`) that reuses the AMONIX UI kit. It demonstrates Home, Assets, Send, Receive, Swap, Payment Requests, Split Bills, DeFi, Pay (informational), and Activity receipts.

Every demo API response sets `simulated: true`. Stake is shown as unavailable. Privacy transactions are not offered. None of these screens execute onchain.

For planned work, see [ROADMAP.md](ROADMAP.md).
