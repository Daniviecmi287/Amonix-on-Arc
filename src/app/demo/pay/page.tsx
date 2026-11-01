import { ScanLine } from "lucide-react"
import { SectionCard } from "@/components/amonix"
import { PageHeader } from "@/components/demo/PageHeader"
import { SimulateBanner } from "@/components/demo/SimulateBanner"

export default function DemoPayPage() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="AMONIX Pay" backHref="/demo/home" />
      <SimulateBanner />
      <SectionCard>
        <div className="flex items-center gap-3">
          <ScanLine className="h-5 w-5 text-amonix-primary" />
          <div>
            <p className="text-sm font-semibold text-amonix-text">Scan & Pay</p>
            <p className="text-xs text-amonix-text-secondary">Camera and merchant settlement are not included in Public Edition.</p>
          </div>
        </div>
      </SectionCard>
      <SectionCard>
        <p className="text-sm font-semibold text-amonix-text-secondary">Bank transfer</p>
        <p className="text-xs text-amonix-text-muted">Coming soon in the product. Not simulated here.</p>
      </SectionCard>
    </div>
  )
}
