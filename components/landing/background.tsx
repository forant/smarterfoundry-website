const noiseSvg =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")"

const gridMask =
  'radial-gradient(ellipse at center top, black 0%, black 30%, transparent 80%)'

export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* One small, localized warm bloom near the top of the page */}
      <div
        className="sf-blob"
        style={{
          top: '-12vh',
          left: '8vw',
          width: '42vmax',
          height: '42vmax',
          background:
            'radial-gradient(circle at center, rgba(217, 119, 6, 0.22) 0%, rgba(217, 119, 6, 0) 65%)',
          animation: 'sf-blob-a 70s ease-in-out infinite',
        }}
      />

      {/* Very faint hairline grid — only readable if you look for it */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(244, 242, 236, 0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(244, 242, 236, 0.022) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          WebkitMaskImage: gridMask,
          maskImage: gridMask,
        }}
      />

      {/* Soft edge vignette to settle the periphery */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 55%, rgba(11, 13, 17, 0.55) 100%)',
        }}
      />

      {/* Fine grain */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{ backgroundImage: noiseSvg }}
      />
    </div>
  )
}
