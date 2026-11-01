import { PageHeader } from "@/components/demo/PageHeader"
import { ReceiptCard } from "@/components/demo/ReceiptCard"
import { SimulateBanner } from "@/components/demo/SimulateBanner"
import { DEMO_ACTIVITY } from "@/lib/demo/fixtures"

export default async function DemoActivityDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const row = DEMO_ACTIVITY.find((item) => item.id === id) ?? DEMO_ACTIVITY[0]
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Receipt" backHref="/demo/activity" />
      <SimulateBanner />
      <ReceiptCard
        status={row.status}
        title={`${row.title} successful`}
        amount={row.amount}
        rows={[
          { label: "Type", value: row.type },
          { label: "Network", value: "Arc Testnet" },
          { label: "Execution", value: "Simulated — not onchain" },
        ]}
      />
    </div>
  )
}
