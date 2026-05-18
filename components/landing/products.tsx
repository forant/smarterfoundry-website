import { Utensils, Bike, PenLine } from 'lucide-react'

const products = [
  {
    icon: Utensils,
    name: 'SmarterEats',
    description:
      'AI-assisted food decision support and meal awareness — helping people notice patterns and make everyday food choices with a little more context.',
  },
  {
    icon: Bike,
    name: 'SmarterTraining',
    description:
      'Adaptive indoor cycling and fitness guidance that adjusts to your energy, schedule, and goals instead of assuming a perfect week.',
  },
  {
    icon: PenLine,
    name: 'PostPoint',
    description:
      'Lightweight tools for clearer, faster writing and posting — small assists for everyday communication, without getting in the way.',
  },
]

export function Products() {
  return (
    <section id="products" className="scroll-mt-16 py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Three focused consumer apps, each built and operated by Smarter
            Foundry.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="flex flex-col rounded-lg border border-border bg-surface p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-surface-light">
                <product.icon
                  className="h-5 w-5 text-accent"
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{product.name}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
