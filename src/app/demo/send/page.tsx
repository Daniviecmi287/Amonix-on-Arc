"use client"

import { useState } from "react"
import { toast } from "sonner"
import {
  AmountField,
  Button,
  FormError,
  TextField,
  TransactionForm,
  TransactionFormActions,
  TransactionFormPanel,
  TransactionFormSection,
} from "@/components/amonix"
import { PageHeader } from "@/components/demo/PageHeader"
import { ReceiptCard } from "@/components/demo/ReceiptCard"
import { SimulateBanner } from "@/components/demo/SimulateBanner"

export default function DemoSendPage() {
  const [to, setTo] = useState("mina")
  const [amount, setAmount] = useState("25")
  const [done, setDone] = useState(false)
  const [busy, setBusy] = useState(false)

  async function simulate() {
    setBusy(true)
    try {
      const response = await fetch("/api/demo/simulate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ action: "send", to, amount, asset: "USDC" }),
      })
      const payload = (await response.json()) as { simulated?: boolean; error?: string }
      if (!payload.simulated) {
        toast.error(payload.error ?? "Simulation failed")
        return
      }
      setDone(true)
      toast.message("Simulated send — not submitted onchain")
    } finally {
      setBusy(false)
    }
  }

  if (done) {
    return (
      <div className="flex flex-col gap-4">
        <PageHeader title="Send" backHref="/demo/home" />
        <SimulateBanner />
        <ReceiptCard
          status="completed"
          title="Send successful"
          amount={`−${amount} USDC`}
          rows={[
            { label: "To", value: to },
            { label: "Network", value: "Arc Testnet" },
            { label: "Execution", value: "Simulated — not onchain" },
          ]}
        />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Send" backHref="/demo/home" />
      <SimulateBanner />
      <TransactionForm>
        <TransactionFormPanel>
          <TransactionFormSection title="Recipient">
            <TextField id="to" label="Username or address" value={to} onChange={setTo} />
          </TransactionFormSection>
          <TransactionFormSection>
            <AmountField
              id="amount"
              label="Amount"
              value={amount}
              onChange={setAmount}
              symbol="USDC"
              helper="Available 1,280.50 USDC (simulated)"
              onMax={() => setAmount("1280.50")}
            />
          </TransactionFormSection>
        </TransactionFormPanel>
        <FormError>This Public Edition never calls a wallet or a chain.</FormError>
        <TransactionFormActions>
          <Button variant="primary" className="w-full sm:w-auto" loading={busy} onClick={() => void simulate()}>
            Simulate send
          </Button>
        </TransactionFormActions>
      </TransactionForm>
    </div>
  )
}
