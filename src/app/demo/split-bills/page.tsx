import { Badge, SectionCard, SoftSection } from "@/components/amonix"
import { PageHeader } from "@/components/demo/PageHeader"
import { SimulateBanner } from "@/components/demo/SimulateBanner"
import { DEMO_SPLITS } from "@/lib/demo/fixtures"

export default function DemoSplitBillsPage() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Split bills" backHref="/demo/home" />
      <SimulateBanner />
      <SoftSection>
        <div className="flex flex-col gap-2">
          {DEMO_SPLITS.map((item) => (
            <SectionCard key={item.id} title={item.title}>
              <div className="flex items-center justify-between">
                <p className="text-sm text-amonix-text">Your share {item.share}</p>
                <Badge tone={item.status === "settled" ? "success" : "warning"}>{item.status}</Badge>
              </div>
            </SectionCard>
          ))}
        </div>
      </SoftSection>
    </div>
  )
}
