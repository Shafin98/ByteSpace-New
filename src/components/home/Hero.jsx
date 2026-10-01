import Container from '../ui/Container'
import Button from '../ui/Button'
import GridBackground from '../ui/GridBackground'
import { SearchIcon } from '../ui/icons'
import HeroStage from './HeroStage'

import limeSquiggle from '../../assets/images/shape-lime-squiggle.png'
import limeCylinder from '../../assets/images/shape-lime-cylinder.png'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-700 pt-18 md:pt-30">
      <GridBackground />

      <img
        src={limeSquiggle}
        alt=""
        aria-hidden="true"
        width={266}
        height={387}
        className="pointer-events-none absolute left-0 top-38.25 z-10 hidden origin-left select-none md:block md:scale-[0.7] lg:top-46.25 lg:scale-[0.85] xl:top-54.5 xl:scale-100"
      />
      <img
        src={limeCylinder}
        alt=""
        aria-hidden="true"
        width={213}
        height={372}
        className="pointer-events-none absolute right-0 top-38.75 z-10 hidden origin-right select-none md:block md:scale-[0.7] lg:top-47.25 lg:scale-[0.85] xl:top-55.5 xl:scale-100"
      />

      <Container className="relative z-20 flex flex-col items-center pt-10 text-center md:pt-12.25">
        <h1 className="font-heading text-heading-s font-semibold text-white md:text-heading-m lg:text-heading-l">
          Get Access to Hundreds <br className="hidden md:block" />
          Courses Available
        </h1>

        <p className="mt-4 max-w-225 text-body-m text-white/90 md:mt-8 md:text-body-l">
          Unlock your creativity, gain valuable knowledge, and grow your business with our
          wide range of courses.
        </p>

        <form
          role="search"
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 flex w-full max-w-143.75 items-center gap-4 md:mt-16"
        >
          <label className="flex h-12 flex-1 items-center gap-3 rounded-full bg-white px-5">
            <SearchIcon className="size-5 shrink-0 text-neutral-500" />
            <input
              type="search"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-body-s text-neutral-950 outline-none placeholder:text-neutral-400"
            />
          </label>
          <Button type="submit">Search</Button>
        </form>
      </Container>

      <HeroStage />
    </section>
  )
}