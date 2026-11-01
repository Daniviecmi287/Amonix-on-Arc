"use client"

import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { IconButton } from "@/components/amonix"

/** Public Edition header. Same layout as the product PageHeader, without i18n or auth. */
export function PageHeader({ title, backHref }: { title: string; backHref?: string }) {
  const router = useRouter()
  return (
    <div className="mb-4 flex items-center gap-2">
      <IconButton
        label="Go back"
        onClick={() => (backHref ? router.push(backHref) : router.back())}
        className="text-amonix-text"
      >
        <ChevronLeft className="h-5 w-5" />
      </IconButton>
      <h1 className="text-lg font-semibold text-amonix-text">{title}</h1>
    </div>
  )
}
