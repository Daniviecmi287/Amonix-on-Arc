import { SoftSection } from "@/components/amonix"
import { AssetRow } from "@/components/demo/AssetRow"
import { PageHeader } from "@/components/demo/PageHeader"
import { SimulateBanner } from "@/components/demo/SimulateBanner"
import { DEMO_TOKENS, portfolioTotalUsd } from "@/lib/demo/fixtures"
import { formatCurrency } from "@/lib/utils/format"

export default function DemoAssetsPage() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Assets" backHref="/demo/home" />
      <SimulateBanner />
      <p className="text-sm text-amonix-text-secondary">Simulated total {formatCurrency(portfolioTotalUsd())}</p>
      <SoftSection title="Tokens">
        <div className="flex flex-col gap-1">
          {DEMO_TOKENS.map((token) => (
            <AssetRow key={token.id} token={token} />
          ))}
        </div>
      </SoftSection>
    </div>
  )
}
