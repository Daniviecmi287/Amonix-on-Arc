import { DEMO_NOTICE, DEMO_TOKENS, portfolioTotalUsd } from "@/lib/demo/fixtures"

export async function GET() {
  return Response.json({
    simulated: true,
    notice: DEMO_NOTICE,
    totalUsd: portfolioTotalUsd(),
    tokens: DEMO_TOKENS,
  })
}
