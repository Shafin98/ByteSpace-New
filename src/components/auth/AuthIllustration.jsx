import CourseCard from '../home/CourseCard'
import AvatarStack from '../ui/AvatarStack'
import { StarIcon } from '../ui/icons'
import { courses } from '../../data/courses'

// Shapes already used elsewhere in the project. Swap an import here if one doesn't match Figma.
import limeRing from '../../assets/images/auth-lime-ring.png'
import limeCone from '../../assets/images/cta-lime-triangle.png'
import whiteSquiggle from '../../assets/images/shape-white-squiggle-sm.png'

const bigData = courses[2]
const digitalAsset = courses[1]

const shape = 'pointer-events-none absolute max-w-none select-none'

export default function AuthIllustration({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`relative lg:h-109.5 lg:w-99.25 xl:h-136.5 xl:w-124 ${className}`}
    >
      <div className="absolute left-0 top-0 h-136.5 w-124 origin-top-left lg:scale-[0.8] xl:scale-100">
        {/* back card */}
        <div className="absolute left-0 top-21.25 z-0 w-93.25">
          <CourseCard course={digitalAsset} />
        </div>

        {/* front card */}
        <div className="absolute left-27.5 top-0 z-10 w-93.25">
          <CourseCard course={bigData} />
        </div>

        <img src={limeRing} alt="" className={`${shape} left-7.75 top-4.25 z-20 w-34`} />
        <img src={limeCone} alt="" className={`${shape} left-0 top-103.25 z-20 w-30`} />
        <img src={whiteSquiggle} alt="" className={`${shape} left-94 top-85 z-40 w-30`} />

        {/* Happy Students (lime) */}
        <div className="absolute left-55.75 top-106.5 z-30 w-64.5 rounded-xl bg-secondary-400 p-4">
          <p className="text-label-s font-medium text-neutral-950">Happy Students</p>
          <p className="mt-0.5 flex items-center gap-1 text-body-xs">
            <span className="font-medium text-neutral-950">4.5</span>
            <span className="text-neutral-700">(240)</span>
            <StarIcon className="size-3 text-primary-700" />
          </p>
          <div className="mt-2">
            <AvatarStack tone="dark" />
          </div>
        </div>
      </div>
    </div>
  )
}