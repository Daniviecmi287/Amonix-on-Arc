# Changelog

Confirmed public milestones for **AMONIX on Arc**. Entries are paraphrased from project history; private commit messages, remotes, and internals are omitted.

The production implementation is privately maintained. This file records product-visible milestones, not a dump of every private commit.

Format: newest first. Version in the app About screen: **0.1.0**.

---

## 2026-11-01 — Public Edition source and demo

- Published an allowlisted **Public Edition**: AMONIX UI primitives, selected presentation components, documentation, and a simulated Next.js demo.
- Demo APIs return fixture data with `simulated: true` and `onchain: false`. They do not submit wallet signatures or chain transactions.
- Automatic sync to this repository copies only paths listed in `PUBLISH_MANIFEST`.

## 2026-10-31 — Brand, receipts, Circle SDK

- Unified the AMONIX **symbol (brand mark)** across the signed-in app chrome (header and related surfaces).
- Removed redundant **AMONIX logo / wordmark from in-app receipt cards** so Send, Swap, Bridge, Pay, requests, splits, and Activity share the same success layout (status icon, copy, amounts, details, actions).
- Upgraded and **aligned the Circle SDK / App Kit adapter stack** so wallet, bridge, and DeFi kits stay on compatible versions for Arc Testnet.

## 2026-10-24 — Auth device, bridge recovery, Pay

- Hardened Circle **device registration / OTP** behavior on iOS Safari-style browsers.
- Improved **bridge source recovery** and pending-state handling so a finished or failed source transfer is not stuck as a false “in progress” banner.
- Reliability work on Circle auth, payment flows, and AMONIX Pay UX.

## 2026-10-17 — 2026-10-22 — Bridge, kits, DeFi UI

- Continued **Circle kit upgrades** and Arc DeFi stability.
- Bridge resume, destination success, and transfer-history behavior.
- Profile, Split Bill, and DeFi spacing / layout refinements.

## 2026-10-11 — 2026-10-13 — Tracking and deposits

- **Read-only wallet tracking** (saved public addresses, on-demand holdings and activity).
- Persistent **bridge / deposit history** and paginated transfer views.
- Safari auth and Split Bill payment recovery fixes.

## 2026-10-07 — 2026-10-09 — Circle Bridge

- Shipped **Circle CCTP bridge** into the wallet experience (USDC toward Arc Testnet when a route is offered).
- Recovery, reconciliation, and pending-transfer UX for source and destination stages.
- Isolated bridge runtime dependencies and App Kit production ESM compatibility.

## 2026-10-03 — 2026-10-06 — Earn, Borrow, lock, notifications

- **Earn and Borrow** flows with real provider state (including paused / error handling).
- Unified transaction UI (review / processing / receipt).
- Portfolio loading, **idle App Lock**, swap routing and liquidity refinements.
- Persisted notifications in the app header; activity and request/split query improvements.

## 2026-10-01 — 2026-10-02 — AMONIX Pay

- **Scan & Pay** merchant payment flow (QR → review → onchain receipt).
- Public **test payment generator** for development/demo of Pay (not a bank rail).
- Swap quote persistence for execution; payment request and split bill persistence fixes.

## 2026-09-29 — 2026-09-30 — Auth factors and Pay foundation

- **X and passkey** authentication, including passkey management.
- AMONIX Pay product surface (Scan live; bank transfer remains coming soon).
- Persistent application data for accounts and product records.

## 2026-09-28 — Arc wallet goes live on Testnet

In one intensive window the product moved from read-only Arc integration to a **real user-controlled wallet**:

- Circle **User-Controlled Wallet** provisioning on Arc Testnet
- Real **USDC balance** and **Send**, including AMONIX recipient resolution
- Real **payment request** and **split bill** settlement on Arc
- Persisted **receipts and Activity** synced from wallet activity
- App Kit send estimation and reminder notifications
- Privacy **provider architecture prepared**; execution still not available

## 2026-09-27 — Project start (this generation)

- AMONIX consumer wallet product established as the Arc-focused application (version 0.1.0 line).

---

## Not listed on purpose

- Private incident notes, tokens, and endpoints
- Database or hosting vendor changes beyond “the app persists accounts and activity”
- Every UI spacing tweak
- Unreleased experiments that never reached the product screens above

For current capability vs planned work, see [docs/FEATURES.md](docs/FEATURES.md) and [docs/ROADMAP.md](docs/ROADMAP.md).
