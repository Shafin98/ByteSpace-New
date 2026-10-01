const variants = {
  primary: 'bg-secondary-400 text-neutral-950 hover:bg-secondary-300',
}

export default function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  return (
    <button
      className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-label-m font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}