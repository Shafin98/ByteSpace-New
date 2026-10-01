import Container from '../ui/Container'

import logo1 from '../../assets/images/logo-partner-1.png'
import logo2 from '../../assets/images/logo-partner-2.png'
import logo3 from '../../assets/images/logo-partner-3.png'
import logo4 from '../../assets/images/logo-partner-4.png'
import logo5 from '../../assets/images/logo-partner-5.png'

const logos = [
  { src: logo1, w: 167 },
  { src: logo2, w: 168 },
  { src: logo3, w: 170 },
  { src: logo4, w: 170 },
  { src: logo5, w: 169 },
]

export default function LogoStrip() {
  return (
    <section aria-label="Partners" className="bg-neutral-50 py-10 lg:flex lg:h-50.5 lg:items-center lg:py-0">
      <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:flex-nowrap lg:justify-between">
        {logos.map(({ src, w }) => (
          <img
            key={src}
            src={src}
            alt="Logoipsum"
            width={w}
            height={41}
            className="h-10.25 w-auto shrink-0"
          />
        ))}
      </Container>
    </section>
  )
}