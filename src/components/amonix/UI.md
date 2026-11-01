# AMONIX UI foundation

Lightweight product primitives so features share the same visual system.

Colors and semantic tokens live in `src/app/globals.css` (`--amonix-*`).
Sizing / density tokens live in `tokens.ts`.

## Rule for new features

Do **not** invent one-off button heights, pill tabs, card radii, form fields, metric blocks, or label/value rows.

Reuse these from `@/components/amonix` first:

| Pattern | Primitive |
|--------|-----------|
| Transaction inputs | `TransactionForm` → `TransactionFormPanel` → sections → `TransactionFormActions` |
| Pill tabs | `SegmentedControl` / `SEGMENT_LIST` + `SEGMENT_TRIGGER` |
| CTAs | `Button` (`primary` / `secondary` / `tertiary` / `danger`; DeFi uses `size="action"`) |
| Financial values | `MetricValue` (`info` / `positive` / `debt` / `risk` / `rate`) via `DetailRow`/`MetricCard` `tone` |
| Icon chrome | `IconButton` |
| Action clusters | `ActionGroup` |
| Forms | `FormField`, `TextField`, `AmountField`, `QuantityField`, `NoteField` |
| Recipient | `RecipientInput` (shared) |
| Asset | `AssetPicker` / `LockedAssetField` |
| Cards / metrics | `SectionCard`, `MetricCard`, `DetailRow`, `Badge` |
| Page rhythm | `PageSection`, `PageIntro` |
| Grouped sections | `SoftSection` (`SURFACE.group`) — blush section, white cards inside. Not the portfolio chart. |
| Quick actions | `ActionButton` using `ACTION_TILE` |

Only add a new primitive when the interaction is genuinely different.

## Transaction forms

**Same visual system ≠ same business semantics.**

Default input structure:

```tsx
<TransactionForm>
  <PageHeader /> {/* or tabs — outside panel */}
  <TransactionFormPanel>
    <TransactionFormSection title="Recipient">…</TransactionFormSection>
    <TransactionFormSection>…asset / amount / note…</TransactionFormSection>
  </TransactionFormPanel>
  <FormError>{serverOrQuoteError}</FormError>
  <TransactionFormActions>
    <Button variant="primary" className="w-full sm:w-auto sm:min-w-40">Review</Button>
  </TransactionFormActions>
</TransactionForm>
```

| Rule | Detail |
|------|--------|
| Inputs | Inside **one** `TransactionFormPanel` |
| CTA | **Outside** the panel (`TransactionFormActions`) |
| Width | ~800px focused column |
| Mental model | WHO → ASSET → AMOUNT → OPTIONAL DETAILS → REVIEW (use only stages that apply) |
| Fungible | `AssetPicker` + `AmountField` / `AmountInput` |
| NFT | NFT preview/selector + `QuantityField` (721 locked `1`, 1155 editable + Owned / Max) |
| Validation | Inline on fields; no “Missing: …” footers |
| `FormError` | Server / quote / execution only |

Do **not** nest mini-cards per field. Do **not** put Review inside the panel.

Do **not** force Swap From/To, Split participants, Scan merchant identity, Earn vault pickers, or Borrow risk cards into Send field lists — only reuse the shell and field chrome. Keep large risk/APY cards outside the input panel when they are context, not inputs.

## DeFi product hub

Navigation has one **DeFi** entry (`/app/defi`). Do not add Earn / Borrow / Liquidity / Stake as separate nav items.

Hub cards (desktop grid / mobile stack), exact order:

1. Earn — lend/yield opportunities (Lending is a **strategy inside Earn**, not a product)
2. Borrow — collateralized borrowing
3. Liquidity — Arc-native pools only
4. Stake — Arc-native only; keep visible but Unavailable when no verified provider

Canonical routes: `/app/defi/earn`, `/app/defi/borrow`, `/app/defi/liquidity`, `/app/defi/stake`.
Legacy `/app/earn-borrow` redirects with query preservation.

**Cross-chain funding** is a Receive flow (from another supported chain when a route is shown). **Bridge** is a separate USDC path toward Arc Testnet. Do not fold Bridge into Earn, Borrow, Liquidity, or Stake.

Hub card icons (canonical via `src/lib/ui/featureIcons.ts`): DeFi nav=`Layers`, Pay=`CreditCardReader`, Earn=`PiggyBank`, Borrow=`HandCoins`, Liquidity=`Droplets`, Stake=`Lock`, Payment Request=`Receipt`.

## Transaction lifecycle shells

| Step | Primitive |
|------|-----------|
| Input | `TransactionForm` → `TransactionFormPanel` → `TransactionFormActions` |
| Review | `WorkflowReview` / `ReviewPanel` / `TransactionConfirm` / `TransactionReview` — **not** `TransactionFormPanel` |
| Processing | `TransactionStatusView` / `ProgressStateCard` |
| Success | `CanonicalReceipt` / `TransactionReceipt` / `OutcomeCard` |
| Failure / reconciling | `FailureStateCard` / `ProgressStateCard` + sibling actions |

### Page actions vs panel content

**Transaction content belongs inside the workflow panel.
Page-level transaction actions belong in a separate action area below the panel.**

| Step | Inside panel | Outside (sibling below) |
|------|--------------|-------------------------|
| Form | fields, Max, asset/recipient controls | Review / Continue CTA (`TransactionFormActions`) |
| Review | amounts, rows, participants | Confirm / Submit (`WorkflowReview` footer / `ActionGroup`) |
| Processing | status, stage rows | Check status / Cancel when present |
| Success | receipt hero + details | View Activity / Done (`ActionGroup`) |
| Failure / reconciling | error or still-confirming copy | Try again / Check status |

Do **not** attach page CTAs to the panel border (`extra` on `OutcomeCard` is for inline controls like copy hash only).

Reuse `ActionGroup` (`tone="end"`) or `TransactionFormActions` — do not invent per-page action wrappers.

Review uses normal document flow, shared ~680–760px max width, desktop CTA right-aligned (`sm:w-auto`), mobile full-width. Avoid fixed/absolute centering for the main review card.

## Segmented controls

**Payment Requests** is the visual source of truth (height, radius, font, selected/unselected).

Receive (From Arc / From other chains), Tokens/NFTs, Incoming/Outgoing, Create/Activity, Equal/Custom must use `SegmentedControl` or `SEGMENT_LIST` + `SEGMENT_TRIGGER`.

Status filter chips under History are not segmented controls — keep them as compact filters.

## Buttons

Use `<Button variant="…" size="…">`. Do **not** ship raw styled product `<button className="h-12…">` for normal CTAs.

| Variant | Use |
|---------|-----|
| **Primary** | Strongest: Send, Pay, Deposit, Borrow, Repay, Confirm, Start earning, Add more |
| **Secondary** | Tinted neutral surface, clearer border, **dark readable text**: Withdraw, Add collateral, Borrow more, Back |
| **Tertiary** | Lower emphasis than secondary; same readable text when enabled: View details, Quiet dismiss |
| **Danger** | Destructive-secondary (soft red tint): Close loan — not as dominant as primary |
| **Disabled** | Muted gray — clearly inactive; must not look like enabled secondary |

Sizes: `sm` (compact), `md` (default form/Payment CTAs), `action` (DeFi Earn/Borrow/Liquidity Review), `lg` (rare). Width follows label/context — do not force equal widths. DeFi position actions and “Review add/remove liquidity” must use `size="action"`.

Enabled secondary/tertiary must never look disabled. Icon-only chrome uses `IconButton`.

### Financial metric tones

Use `MetricValue` (or `tone` on `DetailRow` / `MetricCard`) so values read as metrics, not body text.

Values use **semantic text color + font weight only** — no tinted pill fills. Status labels (`Active`, `Safe`, unavailable…) may still use `Badge` pills.

| Tone | Meaning | Examples |
|------|---------|----------|
| **info** | Position / collateral / pool share | Position, Provided, Collateral deposited |
| **positive** | Yield / safe | Earned, Safe health |
| **debt** | Obligation | Borrowed, Outstanding debt |
| **risk** | Danger | Critical/At-risk health, liquidation price |
| **rate** | Yield rate | APY, variable rate |

## Status badges with icons

Payment/split lifecycle badges with icons stay in `@/components/shared/StatusBadge`.
Tone chips (Active, Variable, Safe…) use `@/components/amonix/Badge`.

## Slippage UI rule

Show **Slippage** only when execution includes a genuine variable-output conversion or pool min-amount / tolerance protection that the router actually uses.

| Requires Slippage UI | Does **not** require Slippage UI |
|----------------------|----------------------------------|
| Swap | Send / Receive / fixed payments |
| AMM Add Liquidity (min amounts) | Earn vault deposit / withdraw |
| AMM Remove Liquidity (min outputs) | Borrow / repay / collateral adjust / close loan |
| Future bridge with embedded asset conversion **if** the provider exposes tolerance | Simple Stake deposit (default) |

Do **not** add a Slippage field beside every Amount input for visual consistency. Keep configuration behind a compact settings trigger before Review; Review stays read-only.

## Home portfolio chart

The Home chart is a **projection of canonical portfolio state**, not a second ledger.

| Rule | Detail |
|------|--------|
| Source | Shared portfolio valuation (`/api/portfolio`) + client liquid wallet from `useWalletAssets` |
| Net value | Wallet + Earn + Liquidity + Borrow collateral − Borrow debt (Stake omitted while unavailable) |
| No double count | Do not count vault/LP claim tokens in the wallet leg; do not count the same collateral twice |
| Series toggles | Display preferences only — hiding Earn/Liquidity/Borrow must not change Total Balance |
| History | Real `portfolio_snapshots` only for DeFi legs; never fabricate past Earn/Borrow/Liquidity values |
| PnL | Range value change of the portfolio series (existing semantics), not a separate performance model |
| Structure | Keep Balance header → PnL → legend/controls → chart → `1H 1D 1W 1M 1Y Max` |
| Series colors | Canonical map in `src/lib/portfolio/chartSeries.ts`: Portfolio `#16A34A`, Assets `#4F6FAE`, Shield `#7C3AED`, Earn `#C58A00`, Borrow `#B45309`, Liquidity `#2563EB`, Stake `#A3A3A3` |
