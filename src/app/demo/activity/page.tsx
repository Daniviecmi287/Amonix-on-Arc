import Link from "next/link"
import { Badge, SoftSection } from "@/components/amonix"
import { PageHeader } from "@/components/demo/PageHeader"
import { SimulateBanner } from "@/components/demo/SimulateBanner"
import { DEMO_ACTIVITY } from "@/lib/demo/fixtures"

export default function DemoActivityPage() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Activity" backHref="/demo/home" />
      <SimulateBanner />
      <SoftSection>
        <div className="flex flex-col divide-y divide-amonix-border">
          {DEMO_ACTIVITY.map((row) => (
            <Link key={row.id} href={`/demo/activity/${row.id}`} className="flex items-center justify-between gap-3 px-2 py-3">
              <div>
                <p className="text-sm font-medium text-amonix-text">{row.title}</p>
                <p className="text-xs text-amonix-text-muted">{row.when}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-amonix-text">{row.amount}</p>
                <Badge tone={row.status === "completed" ? "success" : "warning"}>{row.status}</Badge>
              </div>
            </Link>
          ))}
        </div>
      </SoftSection>
    </div>
  )
}
