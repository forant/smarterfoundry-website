export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          top: '-20%',
          left: '-5%',
          width: 'min(40rem, 70vw)',
          height: 'min(40rem, 70vw)',
          background:
            'radial-gradient(circle at center, rgba(217, 119, 6, 0.18) 0%, rgba(217, 119, 6, 0) 60%)',
          filter: 'blur(30px)',
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
            sport.
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
