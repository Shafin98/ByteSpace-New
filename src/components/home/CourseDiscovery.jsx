import Container from '../ui/Container'
import CategoryTabs from './CategoryTabs'
import CourseGrid from './CourseGrid'

export default function CourseDiscovery() {
  return (
    <section id="courses" className="bg-white py-12 md:py-18">
      <Container>
        <div className="mx-auto max-w-229.25 text-center">
          <h2 className="font-heading text-heading-s font-semibold text-neutral-950 md:text-heading-m">
            Discover Your Passion, <br className="hidden md:block" />
            Build Your Skills
          </h2>
          <p className="mt-4 text-body-m text-neutral-400">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a
            variety of courses across different fields, from technology to the arts, and make a
            difference in your career and life.
          </p>
        </div>

        <CategoryTabs className="mt-8 md:mt-12" />
        <CourseGrid className="mt-10 md:mt-20" />
      </Container>
    </section>
  )
}