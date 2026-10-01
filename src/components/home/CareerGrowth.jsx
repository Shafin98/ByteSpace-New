import Container from '../ui/Container'
import FloatingCard from '../ui/FloatingCard'
import CourseCard from './CourseCard'
import { courses } from '../../data/courses'

import student from '../../assets/images/hero-student.png'
import squiggle from '../../assets/images/shape-lime-squiggle-vertical.png'

const stats = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
]

export default function CareerGrowth() {
  return (
    <section>
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-0">
        <div className="max-w-145">
          <h2 className="font-heading text-heading-s font-semibold text-neutral-950 md:text-heading-m">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="mt-6 max-w-113 text-body-m text-neutral-700">
            Explore our curated selection of courses tailored to enhance your capabilities and
            accelerate your career journey. Whether you are looking to sharpen specific skills,
            gain industry expertise, or embark on a new career path entirely, we have the
            resources you need.
          </p>
          <dl className="mt-12 flex gap-12">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt className="font-heading text-3xl font-medium text-primary-700">{value}</dt>
                <dd className="text-body-s text-neutral-500">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto h-75.75 w-82.5 sm:h-110.25 sm:w-120 lg:h-137.75 lg:w-150">
          <div className="absolute left-0 top-0 h-137.75 w-150 origin-top-left scale-[0.55] sm:scale-[0.8] lg:scale-100">
            <div className="absolute left-9.25 top-0 z-10 hidden w-93.25 sm:block">
              <CourseCard course={courses[0]} />
            </div>

            <img
              src={squiggle}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-110 top-16.5 z-40 w-54.25 max-w-none select-none"
            />

            <img
              src={student}
              alt="Smiling student with headphones holding a laptop"
              className="pointer-events-none absolute left-0 top-3 z-20 h-auto w-189.5 max-w-none drop-shadow-[0_24px_32px_rgba(0,0,0,0.12)]"
            />

            <FloatingCard className="left-96.25 top-53 hidden w-58 sm:block">
              <p className="text-body-xs text-neutral-950">Learning Progress</p>
              <p className="mt-2 font-heading text-heading-s font-semibold text-neutral-950">
                55%
              </p>
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
          </div>
        </div>
      </Container>
    </section>
  )
}