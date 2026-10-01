import GlowBackground from '../ui/GlowBackground'
import CareerGrowth from './CareerGrowth'
import CourseCreation from './CourseCreation'

// Figma: 120px above and below, 72px between the two blocks.
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