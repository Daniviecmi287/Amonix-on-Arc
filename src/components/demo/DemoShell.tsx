"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Activity, Home, Layers, Send, WalletCards } from "lucide-react"
import { Logo } from "@/components/shared/Logo"
import { cn } from "@/lib/utils"

const ITEMS = [
  { href: "/demo/home", label: "Home", icon: Home },
  { href: "/demo/assets", label: "Assets", icon: WalletCards },
  { href: "/demo/send", label: "Send", icon: Send },
  { href: "/demo/defi", label: "DeFi", icon: Layers },
  { href: "/demo/activity", label: "Activity", icon: Activity },
]

export function DemoShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <div className="mx-auto flex min-h-full w-full max-w-5xl flex-col">
      <header className="flex items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Logo size={28} showWordmark />
        </Link>
        <span className="rounded-full bg-amonix-primary-light px-2 py-0.5 text-[10px] font-semibold text-amonix-primary">
          Public Edition
        </span>
      </header>
      <div className="flex flex-1">
        <nav className="hidden w-44 shrink-0 flex-col gap-1 p-3 lg:flex" aria-label="Demo">
          {ITEMS.map((item) => {
            const active = pathname.startsWith(item.href)
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium",
                  active ? "bg-amonix-primary-light text-amonix-primary" : "text-amonix-text-secondary hover:bg-white"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>
        <main className="min-w-0 flex-1 px-4 pb-24 pt-2 lg:pb-8">{children}</main>
      </div>
      <nav
        aria-label="Demo"
        className="fixed inset-x-0 bottom-0 z-20 border-t border-amonix-border bg-amonix-surface/95 lg:hidden"
      >
        <div className="mx-auto grid h-16 max-w-[480px] grid-cols-5">
          {ITEMS.map((item) => {
            const active = pathname.startsWith(item.href)
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center gap-1 text-[11px] font-medium"
              >
                <Icon className={cn("h-5 w-5", active ? "text-amonix-primary" : "text-amonix-text-muted")} />
                <span className={active ? "text-amonix-primary" : "text-amonix-text-muted"}>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
