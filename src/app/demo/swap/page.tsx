"use client"

import { useState } from "react"
import { toast } from "sonner"
import {
  AmountField,
  Button,
  DetailRow,
  FormError,
  TransactionForm,
  TransactionFormActions,
  TransactionFormPanel,
  TransactionFormSection,
} from "@/components/amonix"
import { PageHeader } from "@/components/demo/PageHeader"
import { SimulateBanner } from "@/components/demo/SimulateBanner"

export default function DemoSwapPage() {
  const [fromAmount, setFromAmount] = useState("40")
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Swap" backHref="/demo/home" />
      <SimulateBanner />
      <TransactionForm>
        <TransactionFormPanel>
          <TransactionFormSection title="From">
            <AmountField
              id="from"
              label="You pay"
              value={fromAmount}
              onChange={setFromAmount}
              symbol="USDC"
              onMax={() => setFromAmount("1280.50")}
            />
          </TransactionFormSection>
          <TransactionFormSection title="To">
            <AmountField id="to" label="You receive" value="0.0139" onChange={() => undefined} symbol="WETH" />
          </TransactionFormSection>
          <DetailRow label="Route" value="Simulated quote" />
          <DetailRow label="Network fee" value="~$0.001 USDC" />
        </TransactionFormPanel>
        <FormError>Quotes in this demo are fixtures. They are not live router prices.</FormError>
        <TransactionFormActions>
          <Button
            variant="primary"
            className="w-full sm:w-auto"
            onClick={() => toast.message("Simulated swap — not submitted onchain")}
          >
            Simulate swap
          </Button>
        </TransactionFormActions>
      </TransactionForm>
    </div>
  )
}
