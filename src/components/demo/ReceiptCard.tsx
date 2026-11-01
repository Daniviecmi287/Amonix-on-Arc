import { CircleCheckBig, CircleX, Clock } from "lucide-react"
import { ActionGroup, Button, DetailRow, SectionCard } from "@/components/amonix"

export function ReceiptCard({
  status,
  title,
  amount,
  rows,
}: {
  status: "completed" | "pending" | "failed"
  title: string
  amount: string
  rows: { label: string; value: string }[]
}) {
  const Icon = status === "completed" ? CircleCheckBig : status === "failed" ? CircleX : Clock
  const color =
    status === "completed" ? "text-amonix-success" : status === "failed" ? "text-amonix-error" : "text-amonix-warning"
  return (
    <div className="mx-auto flex w-full max-w-[760px] flex-col gap-4">
      <div className="flex flex-col items-center gap-2 rounded-2xl bg-amonix-surface px-4 py-5 text-center">
        <Icon className={`h-10 w-10 ${color}`} aria-hidden="true" />
        <p className="text-sm text-amonix-text-secondary">{title}</p>
        <p className="text-[1.75rem] font-semibold text-amonix-text">{amount}</p>
        <p className="text-[10px] font-semibold uppercase tracking-wide text-amonix-warning">Simulated</p>
      </div>
      <SectionCard>
        <h2 className="mb-1 text-sm font-semibold text-amonix-text">Details</h2>
        {rows.map((row) => (
          <DetailRow key={row.label} label={row.label} value={row.value} />
        ))}
      </SectionCard>
      <ActionGroup>
        <Button variant="secondary">View Activity</Button>
        <Button variant="primary">Done</Button>
      </ActionGroup>
    </div>
  )
}
