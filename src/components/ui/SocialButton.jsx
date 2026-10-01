export default function SocialButton({ label, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex size-14 items-center justify-center rounded-xl border border-neutral-100 bg-white text-neutral-950 transition-colors hover:border-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
    >
      {children}
    </button>
  )
}