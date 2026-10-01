import { useState } from 'react'

// The Figma lays the pills out in three fixed rows, so we keep them as rows.
const categoryRows = [
  [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
  ],
  [
    'Digital Illustration',
    'Film & Video',
    'Crafts',
    'Freelance & Entrepreneurship',
    'Graphic Design',
    'Photography',
  ],
  ['Productivity', 'Web Development', 'Data Science', 'Cooking'],
]

const pillBase =
  'inline-flex h-10 items-center rounded-full px-6 text-body-s transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700'

export default function CategoryTabs({ className = '', onChange }) {
  const [active, setActive] = useState('Featured')

  const select = (label) => {
    setActive(label)
    onChange?.(label)
  }

  return (
    <div className={`flex flex-col items-center gap-3 md:gap-6 ${className}`}>
      {categoryRows.map((row, rowIndex) => {
        const isLastRow = rowIndex === categoryRows.length - 1
        return (
          <div key={rowIndex} className="flex flex-wrap justify-center gap-x-3 gap-y-3">
            {row.map((label) => {
              const isActive = label === active
              return (
                <button
                  key={label}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => select(label)}
                  className={`${pillBase} ${
                    isActive
                      ? 'bg-secondary-400 text-neutral-950'
                      : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {label}
                </button>
              )
            })}
            {isLastRow && (
              <button
                type="button"
                className={`${pillBase} font-medium text-primary-700 hover:text-primary-800`}
              >
                + More
              </button>
            )}
          </div>
        )
      })}
    </div>
  )
}