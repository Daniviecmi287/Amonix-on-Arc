import Link from "next/link"
import { Badge, MetricCard, MetricGrid, SectionCard, SoftSection } from "@/components/amonix"
import { PageHeader } from "@/components/demo/PageHeader"
import { SimulateBanner } from "@/components/demo/SimulateBanner"
import { FEATURE_ICONS } from "@/lib/ui/featureIcons"
import { DEMO_DEFI } from "@/lib/demo/fixtures"
import { formatCurrency } from "@/lib/utils/format"

const ITEMS = [
  { href: "/demo/defi#earn", icon: FEATURE_ICONS.earn, title: "Earn", value: formatCurrency(DEMO_DEFI.earnUsd), status: "Simulated" },
  { href: "/demo/defi#borrow", icon: FEATURE_ICONS.borrow, title: "Borrow", value: formatCurrency(DEMO_DEFI.borrowUsd), status: `Health ${DEMO_DEFI.health}` },
  { href: "/demo/defi#liquidity", icon: FEATURE_ICONS.liquidity, title: "Liquidity", value: formatCurrency(DEMO_DEFI.liquidityUsd), status: "Community pool fixture" },
  { href: "/demo/defi#stake", icon: FEATURE_ICONS.stake, title: "Stake", value: "—", status: "Unavailable" },
]

export default function DemoDefiPage() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="DeFi" backHref="/demo/home" />
      <SimulateBanner />
      <MetricGrid columns={2}>
        <MetricCard label="Earn (sim)" value={formatCurrency(DEMO_DEFI.earnUsd)} />
        <MetricCard label="Borrow (sim)" value={formatCurrency(DEMO_DEFI.borrowUsd)} />
      </MetricGrid>
      <SoftSection>
        <div className="flex flex-col gap-2">
          {ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <SectionCard key={item.title}>
                <Link href={item.href} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amonix-primary-light text-amonix-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-amonix-text">{item.title}</p>
                    <p className="text-xs text-amonix-text-secondary">{item.status}</p>
                  </div>
                  <p className="text-sm font-semibold text-amonix-text">{item.value}</p>
                  {item.title === "Stake" ? <Badge tone="neutral">Unavailable</Badge> : null}
                </Link>
              </SectionCard>
            )
          })}
        </div>
      </SoftSection>
    </div>
  )
}
