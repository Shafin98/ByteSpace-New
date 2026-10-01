import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import GridBackground from '../ui/GridBackground'
import AuthIllustration from './AuthIllustration'
import logo from '../../assets/images/logo-light.svg'

// Shared by Login and Register: blue grid, left intro + illustration, white card on the right.
export default function AuthLayout({ title, description, children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-primary-700">
      <GridBackground />

      <Container className="relative z-10 grid gap-10 py-8 lg:grid-cols-2 lg:gap-12 lg:pt-17 lg:pb-20">
        <div>
          <Link
            to="/"
            aria-label="ByteSpace home"
            className="inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <img src={logo} alt="ByteSpace" className="h-8 w-auto md:h-9.25" />
          </Link>

          <h2 className="mt-8 font-heading text-heading-xs font-medium text-white lg:mt-14">
            {title}
          </h2>
          <p className="mt-4 max-w-120 text-body-m text-white/90">{description}</p>

          <AuthIllustration className="mt-16 hidden lg:block" />
        </div>

        <main className="w-full max-w-142 justify-self-center rounded-3xl bg-white p-6 sm:p-12 lg:justify-self-end">
          <div className="flex flex-col lg:min-h-175.5">{children}</div>
        </main>
      </Container>
    </div>
  )
}