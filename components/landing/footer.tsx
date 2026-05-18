import { Mark } from '@/components/landing/mark'

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <Mark className="h-6 w-6" />
            <span className="text-base tracking-tight">
              <span className="font-normal">Smarter</span>
              <span className="font-semibold">Foundry</span>
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#products" className="hover:text-foreground transition-colors">
              Products
            </a>
            <a href="#company" className="hover:text-foreground transition-colors">
              Company
            </a>
            <a
              href="mailto:hello@smarterfoundry.ai"
              className="hover:text-foreground transition-colors"
            >
              hello@smarterfoundry.ai
            </a>
          </div>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Smarter Foundry LLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
