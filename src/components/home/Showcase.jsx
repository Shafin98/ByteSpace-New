import GlowBackground from '../ui/GlowBackground'
import CareerGrowth from './CareerGrowth'
import CourseCreation from './CourseCreation'

export default function Showcase() {
  return (
    <div className="relative overflow-hidden bg-white py-16 md:py-30">
      <GlowBackground />
      <div className="relative flex flex-col gap-12 lg:gap-18">
        <CareerGrowth />
        <CourseCreation />
      </div>
    </div>
  )
}