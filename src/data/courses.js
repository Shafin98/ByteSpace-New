import course1 from '../assets/images/course-1.png'
import course2 from '../assets/images/course-2.png'
import course3 from '../assets/images/course-3.png'
import course4 from '../assets/images/course-4.png'
import course5 from '../assets/images/course-5.png'
import course6 from '../assets/images/course-6.png'

const shared = {
  author: 'purepearl studio',
  price: 25,
  period: 'lifetime',
  rating: 4.5,
  level: 'Beginner',
  students: '26+',
}

export const courses = [
  {
    id: 1,
    title: 'Learn Figma from Basic',
    image: course1,
    imageAlt: 'Wireframe sketches and sticky notes on a desk',
    ...shared,
  },
  {
    id: 2,
    title: 'Build Digital Asset',
    image: course2,
    imageAlt: 'Grid of design icons on a grey background',
    ...shared,
  },
  {
    id: 3,
    title: 'the Power of Big Data',
    image: course3,
    imageAlt: 'Analytics dashboard with charts on a monitor',
    ...shared,
  },
  {
    id: 4,
    title: 'Balancing Productivity and Life',
    image: course4,
    imageAlt: 'Desktop computer on a tidy desk showing the words Do More',
    ...shared,
  },
  {
    id: 5,
    title: 'Mastering Money Management',
    image: course5,
    imageAlt: 'Green line chart on a laptop screen',
    ...shared,
  },
  {
    id: 6,
    title: 'From Idea to Startup Success',
    image: course6,
    imageAlt: 'Team meeting around a table with sticky notes on the wall',
    ...shared,
  },
]