/** The Smarter Foundry mark — an abstract cast/spark, no AI-robot imagery. */
export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={32}
      height={32}
      className={className}
      aria-hidden
    >
      <rect width="32" height="32" rx="7" fill="#1C1B19" />
      <path d="M16 6.5 L24 16 L16 25.5 L8 16 Z" fill="#B45309" />
      <circle cx="16" cy="16" r="3.4" fill="#1C1B19" />
    </svg>
  )
}
