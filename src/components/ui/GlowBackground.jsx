// Lime wash across the top that fades to white, plus soft lime / blue blobs lower down.
export default function GlowBackground({ className = '' }) {
  const blob = 'absolute rounded-full blur-[120px]'
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-160 bg-linear-to-b from-secondary-400/60 via-secondary-200/30 to-transparent" />
      <div className={`${blob} -left-40 top-1/2 size-100 bg-primary-200/40`} />
      <div className={`${blob} -bottom-24 -left-24 size-125 bg-secondary-300/40`} />
      <div className={`${blob} -bottom-40 -right-24 size-125 bg-primary-200/50`} />
    </div>
  )
}