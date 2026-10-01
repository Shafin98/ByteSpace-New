import Container from '../ui/Container'
import { testimonials } from '../../data/testimonials'

const lime = '212 251 32' 
const blue = '40 114 255' 

const glows = [
  { rgb: lime, alpha: 0.5, size: 700, left: 424, top: -173 },
  { rgb: lime, alpha: 0.4, size: 500, left: 1177, top: 82 },
  { rgb: blue, alpha: 0.3, size: 640, left: -243, bottom: -160 },
]

function Glows() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-y-0 left-1/2 w-360 -translate-x-1/2">
        {glows.map(({ rgb, alpha, size, ...position }, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              ...position,
              width: size,
              height: size,
              background: `radial-gradient(closest-side, rgb(${rgb} / ${alpha}), rgb(${rgb} / 0))`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

function TestimonialCard({ name, role, avatar, quote }) {
  return (
    <figure className="mx-auto w-full max-w-lg rounded-3xl bg-white p-6 lg:max-w-none">
      <img src={avatar} alt="" width={80} height={80} className="size-20 rounded-full" />
      <figcaption className="mt-5">
        <p className="font-heading text-heading-xs font-semibold text-neutral-950">{name}</p>
        <p className="mt-1 text-body-m text-primary-700">{role}</p>
      </figcaption>
      <blockquote className="mt-6 text-body-m leading-[1.8] text-neutral-600">{quote}</blockquote>
    </figure>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="relative overflow-hidden bg-neutral-50 py-16 md:py-24"
    >
      <Glows />

      <Container className="relative">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <h2
            id="testimonials-title"
            className="font-heading text-heading-s font-semibold text-neutral-950 md:text-heading-m"
          >
            Discover What Our <br className="hidden md:block" />
            Community Is Saying
          </h2>
          <p className="text-body-m leading-[1.8] text-neutral-600 lg:max-w-145">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what
            we do. Hear directly from those who have experienced the transformative journey of
            learning and creating on our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-6 md:mt-16 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </Container>
    </section>
  )
}