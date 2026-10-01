import Container from '../ui/Container'
import Button from '../ui/Button'
import GridBackground from '../ui/GridBackground'

import limeSquiggle from '../../assets/images/cta-lime-squiggle.png'
import whiteSquiggle from '../../assets/images/shape-white-squiggle-sm.png'
import whiteCone from '../../assets/images/cta-white-cone.png'
import limeRing from '../../assets/images/cta-lime-ring.png'
import limeTriangle from '../../assets/images/cta-lime-triangle.png'
import whiteCylinder from '../../assets/images/cta-white-cylinder.png'
import limeCoil from '../../assets/images/cta-lime-coil.png'

const corner =
  'pointer-events-none absolute z-10 hidden select-none md:block md:scale-[0.7] lg:scale-[0.85] xl:scale-100'
const shape = 'absolute max-w-none'

export default function CreatorCTA() {
  return (
    <section id="creators" className="relative overflow-hidden bg-primary-700 py-16 md:py-21">
      <GridBackground />

      <div aria-hidden="true" className={`${corner} left-0 top-0 origin-top-left`}>
        <img src={limeSquiggle} alt="" width={266} height={225} className={`${shape} left-0 top-0`} />
        <img src={whiteSquiggle} alt="" width={176} height={176} className={`${shape} left-46 top-1`} />
        <img src={whiteCone} alt="" width={139} height={189} className={`${shape} left-0 top-56.75`} />
      </div>

      <div aria-hidden="true" className={`${corner} bottom-0 left-0 origin-bottom-left`}>
        <img src={limeRing} alt="" width={344} height={190} className={`${shape} bottom-0 left-4.75`} />
      </div>

      <div aria-hidden="true" className={`${corner} right-0 top-0 origin-top-right`}>
        <img src={whiteCylinder} alt="" width={218} height={372} className={`${shape} right-0 top-2`} />
        <img src={limeTriangle} alt="" width={189} height={189} className={`${shape} right-42.75 top-1`} />
      </div>

      <div aria-hidden="true" className={`${corner} bottom-0 right-0 origin-bottom-right`}>
        <img src={limeCoil} alt="" width={334} height={199} className={`${shape} -right-4.5 bottom-0`} />
      </div>

      <Container className="relative z-20 flex flex-col items-center text-center">
        <h2 className="font-heading text-heading-s font-semibold text-white md:text-heading-m">
          Unlock Your Potential as a <br className="hidden md:block" />
          Creator with ByteSpace
        </h2>
        <p className="mt-6 max-w-240 text-body-m text-white/90 md:mt-10 md:text-body-l">
          Experience the collaboration of numerous creators and an expanding selection of
          courses. Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <Button type="button" className="mt-8 md:mt-10">
          Join as Creator
        </Button>
      </Container>
    </section>
  )
}