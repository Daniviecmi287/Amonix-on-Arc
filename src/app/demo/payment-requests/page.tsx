import { Badge, Button, SectionCard, SoftSection } from "@/components/amonix"
import { PageHeader } from "@/components/demo/PageHeader"
import { SimulateBanner } from "@/components/demo/SimulateBanner"
import { DEMO_REQUESTS } from "@/lib/demo/fixtures"

export default function DemoPaymentRequestsPage() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Payment requests" backHref="/demo/home" />
      <SimulateBanner />
      <SoftSection>
        <div className="flex flex-col gap-2">
          {DEMO_REQUESTS.map((item) => (
            <SectionCard key={item.id}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-amonix-text">@{item.from}</p>
                  <p className="text-xs text-amonix-text-secondary">{item.note}</p>
                </div>
                <Badge tone={item.status === "paid" ? "success" : "warning"}>{item.status}</Badge>
              </div>
              <p className="mt-2 text-lg font-semibold text-amonix-text">{item.amount}</p>
              {item.status === "pending" ? (
                <Button variant="primary" size="sm" className="mt-3" disabled>
                  Pay (simulated only)
                </Button>
              ) : null}
            </SectionCard>
          ))}
        </div>
      </SoftSection>
    </div>
  )
}
