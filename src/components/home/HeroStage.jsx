import FloatingCard from '../ui/FloatingCard'
import AvatarStack from '../ui/AvatarStack'
import { StarIcon } from '../ui/icons'

import student from '../../assets/images/hero-student.png'
import whiteSquiggleSm from '../../assets/images/shape-white-squiggle-sm.png'
import whiteRing from '../../assets/images/shape-white-ring.png'
import whiteTriangle from '../../assets/images/shape-white-triangle.png'
import whiteSquiggleLg from '../../assets/images/shape-white-squiggle-lg.png'

const shapes = [
  { src: whiteSquiggleSm, w: 176, h: 176, className: 'left-[187px] top-[-43px] hidden md:block' },
  { src: whiteTriangle, w: 189, h: 189, className: 'left-[1086px] top-[-55px] hidden md:block' },
  { src: whiteRing, w: 344, h: 343, className: 'left-[19px] top-[161px]' },
  { src: whiteSquiggleLg, w: 317, h: 332, className: 'left-[1088px] top-[133px]' },
]

export default function HeroStage() {
  return (
    <div className="relative mt-8 h-63.75 sm:h-79 md:mt-0 md:h-89.25 lg:h-108.5 xl:h-127.5">
      <div className="absolute left-1/2 top-0 h-127.5 w-360 -translate-x-1/2 origin-top scale-50 sm:scale-[0.62] md:scale-[0.7] lg:scale-[0.85] xl:scale-100">
        {/* Lime circle */}
        <div className="absolute left-1/2 top-17 z-0 size-275 -translate-x-1/2 rounded-full bg-secondary-500" />

        {/* 3D shapes */}
        {shapes.map(({ src, w, h, className }) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            width={w}
            height={h}
            className={`pointer-events-none absolute z-10 select-none ${className}`}
          />
        ))}

        {/* Student */}
        <img
          src={student}
          alt="Smiling student with headphones holding a laptop"
          width={722}
          height={515}
          className="absolute left-1/2 top-0 z-20 -translate-x-1/2"
        />

        {/* Floating cards */}
        <FloatingCard className="left-101 top-31.25 hidden w-52 md:block">
          <p className="text-label-s font-medium text-neutral-950">UI/UX Design</p>
          <p className="mt-1 text-body-xs text-neutral-400">200 Courses • 1000+ Students</p>
        </FloatingCard>

        <FloatingCard className="left-210.5 top-34.25 hidden w-58 md:block">
          <p className="text-body-xs text-neutral-950">Learning Progress</p>
          <p className="mt-2 font-heading text-heading-s font-semibold text-neutral-950">55%</p>
          <div
            role="progressbar"
            aria-label="Learning progress"
            aria-valuenow={55}
            aria-valuemin={0}
            aria-valuemax={100}
            className="mt-4 h-2 overflow-hidden rounded-full bg-neutral-100"
          >
            <div className="h-full w-[55%] rounded-full bg-secondary-400" />
          </div>
        </FloatingCard>

        <FloatingCard className="left-82 top-80.75 hidden w-64.5 md:block">
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
  )
}