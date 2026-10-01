import Navbar from '../components/layout/Navbar'
import Hero from '../components/home/Hero'
import LogoStrip from '../components/home/LogoStrip'
import CourseDiscovery from '../components/home/CourseDiscovery'

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <CourseDiscovery />
      </main>
    </div>
  )
}