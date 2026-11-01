import { DEMO_NOTICE } from "@/lib/demo/fixtures"

export function SimulateBanner() {
  return (
    <p className="rounded-2xl bg-amonix-warning-bg px-3 py-2 text-xs font-medium text-amonix-warning">
      {DEMO_NOTICE}
    </p>
  )
}
