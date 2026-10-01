import Container from '../ui/Container'

// 24x24 stroke icons drawn inside the lime circle.
const paths = [
  {
    label: 'Design',
    icon: (
      <>
        <path d="M12 19l7-7 3 3-7 7zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18zM2 2l7.6 7.6" />
        <circle cx="11" cy="11" r="2" />
      </>
    ),
  },
  {
    label: 'Development',
    icon: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M12 18h.01" />
      </>
    ),
  },
  {
    label: 'IT & Software',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M2 20h20" />
      </>
    ),
  },
  {
    label: 'Business',
    icon: (
      <>
        <rect x="4" y="5" width="4" height="15" rx="1" />
        <rect x="10" y="3" width="4" height="17" rx="1" />
        <rect x="16" y="7" width="4" height="13" rx="1" />
      </>
    ),
  },
  {
    label: 'Marketing',
    icon: (
      <>
        <path d="M3 11v3l12 5V6L3 11z" />
        <path d="M18 9a4 4 0 010 6" />
      </>
    ),
  },
  {
    label: 'Photography',
    icon: (
      <>
        <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
        <circle cx="12" cy="13" r="3.5" />
      </>
    ),
  },
]

export default function LearningPaths() {
  return (
    <section aria-labelledby="paths-title" className="bg-white pb-16 md:pb-30">
      <Container className="flex flex-col items-center text-center">
        <h2
          id="paths-title"
          className="font-heading text-heading-xs font-semibold text-neutral-950 md:text-heading-s"
        >
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mt-4 max-w-228 text-body-s text-neutral-400">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range
          of courses spans various fields, ensuring there&apos;s something for everyone. Unleash
          your potential and explore our carefully curated categories.
        </p>

        <ul className="mt-10 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10 md:mt-12">
          {paths.map(({ label, icon }) => (
            <li key={label}>
              <a
                href="#courses"
                className="flex h-36 flex-col items-center justify-center gap-4 rounded-2xl border border-neutral-100 bg-white text-body-s font-medium text-neutral-950 transition-colors hover:border-secondary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 md:h-41"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-secondary-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-6"
                    aria-hidden="true"
                  >
                    {icon}
                  </svg>
                </span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}