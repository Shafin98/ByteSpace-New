// White info card that floats over images. Position it with className.
export default function FloatingCard({ className = '', children }) {
  return (
    <div
      className={`absolute z-30 rounded-xl bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)] ${className}`}
    >
      {children}
    </div>
  )
}