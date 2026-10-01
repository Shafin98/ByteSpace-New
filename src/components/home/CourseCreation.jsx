import Container from '../ui/Container'
import FloatingCard from '../ui/FloatingCard'
import AvatarStack from '../ui/AvatarStack'
import { StarIcon } from '../ui/icons'

import creator from '../../assets/images/creator-woman.png'
import squiggle from '../../assets/images/shape-lime-squiggle-tilted.png'

const benefits = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0 text-primary-700" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path
        d="M7 12.5l3.2 3.2L17 9"
        fill="none"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const cardBase = 'absolute left-0 z-10 hidden rounded-xl bg-primary-700 p-4 text-white sm:block'

/*
  Fixed 541 x 596 canvas (Figma px). The 435 x 596 woman PNG sits 28px in from the left;
  the blue cards start at x = 0 and sit behind her, and the Happy Students card sticks
  78px out past her right edge (28 + 435 + 78 = 541).
*/
export default function CourseCreation() {
  return (
    <section>
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-0">
        <div className="relative order-last mx-auto h-82 w-74.5 sm:h-119.25 sm:w-108.25 lg:order-first lg:mx-0 lg:h-149 lg:w-135.25">
          <div className="absolute left-0 top-0 h-149 w-135.25 origin-top-left scale-[0.55] sm:scale-[0.8] lg:scale-100">
            <img
              src={squiggle}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-74.5 top-28.5 z-40 w-54.25 max-w-none select-none"
            />

            <div className={`${cardBase} top-11 w-59`}>
              <p className="text-label-s font-medium">Total Revenue</p>
              <p className="text-body-xs text-white/70">July 11th</p>
              <p className="mt-2 font-heading text-heading-xs font-semibold">$120.29</p>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/25">
                <div className="h-full w-3/4 rounded-full bg-secondary-400" />
              </div>
            </div>

            <div className={`${cardBase} top-47 w-33.5`}>
              <p className="text-label-xs font-medium">Year to Date</p>
              <p className="text-body-xs text-white/70">2023</p>
              <p className="mt-2 font-heading text-body-m font-semibold">$1,200.38</p>
              <span className="mt-2 inline-block rounded-full bg-secondary-400 px-2 text-body-xs font-medium text-neutral-950">
                +12%
              </span>
            </div>

            <img
              src={creator}
              alt="Smiling course creator with headphones holding a tablet"
              className="absolute left-5.25 top-0 z-20 h-auto w-130.5 max-w-none drop-shadow-[0_24px_32px_rgba(0,0,0,0.12)]"
            />

            <FloatingCard className="bottom-15 left-70.75 hidden w-64.5 sm:block">
              <p className="text-label-s font-medium text-neutral-950">Happy Students</p>
              <p className="mt-0.5 flex items-center gap-1 text-body-xs">
                <span className="text-neutral-950">4.5</span>
                <span className="text-neutral-400">(240)</span>
                <StarIcon className="size-3 text-secondary-400" />
              </p>
              <div className="mt-2">
                <AvatarStack />
              </div>
            </FloatingCard>
          </div>
        </div>

        <div className="max-w-140 lg:pl-7">
          <h2 className="font-heading text-heading-s font-semibold text-neutral-950 md:text-heading-m">
            Create &amp; Manage <br className="hidden md:block" />
            Courses Easily.
          </h2>
          <p className="mt-6 text-body-m text-neutral-700">
            <strong className="font-medium text-neutral-950">ByteSpace</strong> supports
            individuals or entities in the creation, publication, and administration of
            educational courses.
          </p>
          <ul className="mt-10 flex flex-col gap-3.5">
            {benefits.map((item) => (
              <li key={item} className="flex items-center gap-2 text-body-m text-neutral-950">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}