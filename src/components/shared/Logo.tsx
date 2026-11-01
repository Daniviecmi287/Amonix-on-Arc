import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({
  size = 40,
  showWordmark = false,
  className,
}: {
  size?: number
  showWordmark?: boolean
  className?: string
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image
        src="/amonix-mark.png"
        alt="AMONIX"
        width={1024}
        height={855}
        sizes={`${size}px`}
        className="object-contain"
        style={{ width: size, height: size }}
        priority
      />
      {showWordmark && (
        <span className="text-lg font-semibold tracking-wide text-amonix-text">AMONIX</span>
      )}
    </div>
  )
}
