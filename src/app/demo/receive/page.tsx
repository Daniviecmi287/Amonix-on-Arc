"use client"

import QRCode from "react-qr-code"
import { Button } from "@/components/amonix"
import { ReceivePanel, ReceivePanelSection } from "@/components/shared/ReceivePanel"
import { PageHeader } from "@/components/demo/PageHeader"
import { SimulateBanner } from "@/components/demo/SimulateBanner"
import { DEMO_ADDRESS } from "@/lib/demo/fixtures"
import { toast } from "sonner"

export default function DemoReceivePage() {
  return (
    <div className="flex flex-col gap-4">
      <PageHeader title="Receive" backHref="/demo/home" />
      <SimulateBanner />
      <ReceivePanel>
        <ReceivePanelSection title="Arc address" description="Demo fixture — not a provisioned production wallet.">
          <div className="flex justify-center rounded-2xl bg-white p-4">
            <QRCode value={DEMO_ADDRESS} size={160} />
          </div>
          <p className="break-all text-center text-sm font-medium text-amonix-text">{DEMO_ADDRESS}</p>
          <Button
            variant="secondary"
            className="w-full"
            onClick={async () => {
              await navigator.clipboard.writeText(DEMO_ADDRESS)
              toast.success("Copied demo address")
            }}
          >
            Copy address
          </Button>
        </ReceivePanelSection>
      </ReceivePanel>
    </div>
  )
}
