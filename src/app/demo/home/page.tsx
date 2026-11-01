import { FEATURE_ICONS } from "@/lib/ui/featureIcons"
import { ActionButton } from "@/components/shared/ActionButton"
import { HiddenAmount } from "@/components/shared/HiddenAmount"
import { SoftSection } from "@/components/amonix"
import { AssetRow } from "@/components/demo/AssetRow"
import { SimulateBanner } from "@/components/demo/SimulateBanner"
import { DEMO_TOKENS, portfolioTotalUsd } from "@/lib/demo/fixtures"
import { formatCurrency } from "@/lib/utils/format"

export default function DemoHomePage() {
  const total = portfolioTotalUsd()
  return (
    <div className="flex flex-col gap-4">
      <SimulateBanner />
      <section className="rounded-2xl bg-gradient-to-br from-amonix-text to-amonix-primary p-5 text-white">
        <p className="text-sm text-white/80">Portfolio (simulated)</p>
        <p className="mt-2 text-3xl font-semibold">
          <HiddenAmount hidden={false}>{formatCurrency(total)}</HiddenAmount>
        </p>
        <p className="mt-1 text-xs text-white/70">Arc Testnet · not a live balance</p>
      </section>
      <SoftSection>
        <div className="grid grid-cols-4 gap-2">
          <ActionButton href="/demo/send" icon={FEATURE_ICONS.send} label="Send" />
          <ActionButton href="/demo/receive" icon={FEATURE_ICONS.receive} label="Receive" />
          <ActionButton href="/demo/swap" icon={FEATURE_ICONS.swap} label="Swap" />
          <ActionButton href="/demo/payment-requests" icon={FEATURE_ICONS.paymentRequest} label="Request" />
        </div>
      </SoftSection>
      <SoftSection title="Assets">
        <div className="flex flex-col gap-1">
          {DEMO_TOKENS.map((token) => (
            <AssetRow key={token.id} token={token} />
          ))}
        </div>
      </SoftSection>
    </div>
  )
}
