export default function Input({ label, id, className = '', ...props }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-label-s font-medium text-neutral-950">
        {label}
      </label>
      <input
        id={id}
        className="mt-2 h-13 w-full rounded-xl border border-neutral-100 bg-white px-4 text-body-m text-neutral-950 outline-none placeholder:text-neutral-400 focus:border-primary-700"
        {...props}
      />
    </div>
  )
}