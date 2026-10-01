import CourseCard from './CourseCard'
import { courses } from '../../data/courses'

export default function CourseGrid({ className = '' }) {
  return (
    <div
      className={`grid justify-items-center gap-6 md:grid-cols-2 md:justify-items-stretch lg:grid-cols-3 xl:gap-10 ${className}`}
    >
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  )
}