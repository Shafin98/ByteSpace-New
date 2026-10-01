export default function GridBackground({ cell = 80, className = '' }) {
  const line = 'rgba(255,255,255,0.08)'
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundSize: `${cell}px ${cell}px`,
        backgroundImage: `linear-gradient(to right, ${line} 1px, transparent 1px), linear-gradient(to bottom, ${line} 1px, transparent 1px)`,
      }}
    />
  )
}