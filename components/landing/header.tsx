import Link from 'next/link'
import { Mark } from '@/components/landing/mark'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            aria-label="Smarter Foundry home"
            className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Mark className="h-7 w-7" />
            <span className="text-xl tracking-tight">
              <span className="font-normal">Smarter</span>
              <span className="font-semibold">Foundry</span>
            </span>
          </Link>
          <nav className="hidden sm:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#products" className="hover:text-foreground transition-colors">
              Products
            </a>
            <a href="#company" className="hover:text-foreground transition-colors">
              Company
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
