import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ButtonLink, MetricCard, MetricGrid, SectionCard, SoftSection } from "@/components/amonix"
import { Logo } from "@/components/shared/Logo"
import { FEATURE_ICONS } from "@/lib/ui/featureIcons"

const FEATURES = [
  { icon: FEATURE_ICONS.send, title: "Send & Receive", body: "Review, authorize, receipt — product UI with simulated amounts." },
  { icon: FEATURE_ICONS.swap, title: "Swap", body: "Quote-style form and router chrome without live execution." },
  { icon: FEATURE_ICONS.paymentRequest, title: "Requests & splits", body: "Social payment cards using the same AMONIX primitives." },
  { icon: FEATURE_ICONS.earn, title: "DeFi hub", body: "Earn, Borrow, Liquidity, and unavailable Stake." },
]

export default function LandingPage() {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-4xl flex-col gap-10 px-4 py-10">
      <header className="flex items-center justify-between">
        <Logo size={32} showWordmark />
        <Link href="/demo/home" className="text-sm font-medium text-amonix-primary">
          Open demo
        </Link>
      </header>

      <section className="flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-amonix-primary">Arc Testnet · Public Edition</p>
        <h1 className="text-4xl font-semibold tracking-tight text-amonix-text">Everyday Money, Onchain</h1>
        <p className="max-w-2xl text-base leading-7 text-amonix-text-secondary">
          AMONIX is a user-controlled wallet experience for Arc. This repository publishes documentation, the
          product UI kit, and a runnable simulated demo. Production signing, Circle wallet internals, and live
          settlement stay in the private application.
        </p>
        <div className="flex flex-wrap gap-2">
          <ButtonLink href="/demo/home" variant="primary" className="inline-flex items-center gap-2">
            Launch simulated demo <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </section>

      <MetricGrid>
        <MetricCard label="Network" value="Arc Testnet" />
        <MetricCard label="Wallet model" value="User-controlled" />
        <MetricCard label="This repo" value="UI + demo" />
      </MetricGrid>

      <SoftSection title="What you can inspect">
        <div className="grid gap-2 sm:grid-cols-2">
          {FEATURES.map((item) => {
            const Icon = item.icon
            return (
              <SectionCard key={item.title} title={item.title}>
                <div className="flex gap-2 text-sm text-amonix-text-secondary">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-amonix-primary" />
                  {item.body}
                </div>
              </SectionCard>
            )
          })}
        </div>
      </SoftSection>
    </div>
  )
}
