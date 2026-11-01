import { DEMO_ACTIVITY, DEMO_NOTICE } from "@/lib/demo/fixtures"

export async function GET() {
  return Response.json({
    simulated: true,
    notice: DEMO_NOTICE,
    activity: DEMO_ACTIVITY,
  })
}
