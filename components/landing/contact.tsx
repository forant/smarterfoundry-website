const details = [
  { label: 'Company', value: 'Smarter Foundry LLC' },
  {
    label: 'Email',
    value: 'hello@smarterfoundry.ai',
    href: 'mailto:hello@smarterfoundry.ai',
  },
  { label: 'Location', value: 'Alameda, California' },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Contact
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Questions about Smarter Foundry or one of our apps? Get in touch.
          </p>
        </div>
        <dl className="mt-10 grid gap-6 sm:grid-cols-3 max-w-2xl">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <dt className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {detail.label}
              </dt>
              <dd className="mt-2 text-base font-medium">
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="text-accent hover:underline underline-offset-4"
                  >
                    {detail.value}
                  </a>
                ) : (
                  detail.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
