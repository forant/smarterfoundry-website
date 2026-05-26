import { Smartphone, Sparkles, Zap } from 'lucide-react'

const capabilities = [
  {
    icon: Smartphone,
    title: 'iOS app development',
    description:
      'Native iOS apps built end-to-end, from product shape to App Store release.',
  },
  {
    icon: Sparkles,
    title: 'AI-enabled product features',
    description:
      'Practical AI woven into real workflows, where it earns its place in the experience.',
  },
  {
    icon: Zap,
    title: 'Rapid MVP prototyping',
    description:
      'Small, working products in weeks — built to test the idea, not the org chart.',
  },
]

export function Partnerships() {
  return (
    <section
      id="partnerships"
      className="scroll-mt-16 py-20 md:py-28"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">
            Selective Partnerships
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            We occasionally build with others.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            In addition to our own products, we occasionally partner with
            founders and small teams to design and build AI-enabled mobile
            experiences.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {capabilities.map((capability) => (
            <div key={capability.title}>
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-surface-light">
                <capability.icon
                  className="h-5 w-5 text-accent"
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="mt-4 text-base font-semibold">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="mailto:hello@smarterfoundry.ai?subject=Project%20inquiry"
            className="inline-flex items-center text-sm font-medium text-accent hover:underline underline-offset-4"
          >
            Discuss a project →
          </a>
        </div>
      </div>
    </section>
  )
}
