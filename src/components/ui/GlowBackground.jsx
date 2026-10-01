const lime = '212 251 32' 
const blue = '40 114 255' 

const glows = [
  { rgb: blue, alpha: 0.24, size: 1137, left: 722, bottom: -461 }, // Ellipse 8
  { rgb: lime, alpha: 0.4, size: 1137, left: -152, top: -466 }, // Ellipse 11
  { rgb: blue, alpha: 0.16, size: 1137, left: -508, top: 183 }, // Ellipse 9
  { rgb: blue, alpha: 0.08, size: 1137, left: 811, top: -458 }, // Ellipse 10
  { rgb: lime, alpha: 0.6, size: 672, left: -287, bottom: -154 }, // Ellipse 12
]

export default function GlowBackground({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-y-0 left-1/2 w-360 -translate-x-1/2">
        {glows.map(({ rgb, alpha, size, ...position }, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              ...position,
              width: size,
              height: size,
              background: `radial-gradient(closest-side, rgb(${rgb} / ${alpha}), rgb(${rgb} / 0))`,
            }}
          />
        ))}
      </div>
    </div>
  )
}