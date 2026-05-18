export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      <div className="relative container mx-auto px-6 max-w-5xl py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
            Smarter Foundry LLC
          </p>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-[3.4rem] font-semibold tracking-tight text-balance leading-[1.1]">
            AI-enabled consumer apps for focused, everyday decisions.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Smarter Foundry LLC builds and operates niche mobile products that
            help people make better decisions around food, fitness, and
            communication.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href="#products"
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              See our products
            </a>
            <a
              href="#company"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About the company →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
