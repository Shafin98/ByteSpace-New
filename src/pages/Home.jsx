import Navbar from '../components/layout/Navbar'
import Hero from '../components/home/Hero'
import LogoStrip from '../components/home/LogoStrip'
import CourseDiscovery from '../components/home/CourseDiscovery'
import LearningPaths from '../components/home/LearningPaths'
import Showcase from '../components/home/Showcase'
import CreatorCTA from '../components/home/CreatorCTA'

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <CourseDiscovery />
        <LearningPaths />
        <Showcase />
        <CreatorCTA />
      </main>
    </div>
  )
}