import { DEMO_NOTICE } from "@/lib/demo/fixtures"

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { action?: string; to?: string; amount?: string; asset?: string }
    | null
  if (!body?.action) {
    return Response.json({ simulated: false, error: "Missing action" }, { status: 400 })
  }
  return Response.json({
    simulated: true,
    onchain: false,
    notice: DEMO_NOTICE,
    echo: {
      action: body.action,
      to: body.to ?? null,
      amount: body.amount ?? null,
      asset: body.asset ?? null,
    },
    reference: `sim_${Date.now()}`,
  })
}
