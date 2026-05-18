const principles = [
  {
    title: 'Practical AI',
    description:
      'We use AI where it genuinely helps a real task — not as a headline. Each app stays small, focused, and useful.',
  },
  {
    title: 'Privacy-conscious design',
    description:
      'We collect what an app needs to work and no more, and we think carefully about what data leaves a device.',
  },
  {
    title: 'Focused consumer workflows',
    description:
      'Each product does one thing well and respects the time and attention of the people who use it.',
  },
]

export function Company() {
  return (
    <section
      id="company"
      className="scroll-mt-16 border-y border-border bg-surface-light py-20 md:py-28"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            The company
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Smarter Foundry is an independent, founder-operated software company.
            We build and run a small set of niche consumer mobile apps, with a
            focus on practical AI, privacy-conscious design, and focused everyday
            workflows. We prefer doing a few things well over chasing scale.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title}>
              <h3 className="text-base font-semibold">{principle.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
