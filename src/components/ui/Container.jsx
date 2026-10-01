// Content width from the Figma layout grid: 1200px (1440 frame, 120px margins).
export default function Container({ className = '', children }) {
  return (
    <div className={`mx-auto w-full max-w-300 px-4 sm:px-6 md:px-8 xl:px-0 ${className}`}>
      {children}
    </div>
  )
}