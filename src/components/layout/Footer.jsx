import Container from '../ui/Container'
import Button from '../ui/Button'
import { footerColumns, legalLinks } from '../../data/footerLinks'
import logo from '../../assets/images/logo-dark.svg'

const linkClass =
  'text-body-s text-neutral-700 transition-colors hover:text-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white pt-12 pb-8 md:pt-18 md:pb-10">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:gap-12 xl:grid-cols-[620px_auto]">
          {/* Brand + newsletter */}
          <div>
            <a href="/" aria-label="ByteSpace home" className="inline-block">
              <img src={logo} alt="ByteSpace" width={171} height={37} className="h-9.25 w-auto" />
            </a>
            <p className="mt-5 max-w-130 text-body-s text-neutral-900">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex max-w-126 gap-6 md:mt-12">
              <label className="flex-1">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-13 w-full min-w-0 rounded-full border border-neutral-200 bg-white px-6 text-body-m text-neutral-950 outline-none placeholder:text-neutral-700 focus:border-primary-700"
                />
              </label>
              <Button type="submit" className="shrink-0">
                Search
              </Button>
            </form>

            <p className="mt-6 max-w-120 text-body-xs text-neutral-900">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from
              our company.
            </p>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:mt-12 xl:grid-cols-[208px_208px_auto] xl:gap-x-0"
          >
            {footerColumns.map((column, i) => (
              <ul key={i} className="flex flex-col gap-4">
                {column.map((label) => (
                  <li key={label}>
                    <a href="#" className={linkClass}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-neutral-100 pt-6 lg:mt-33">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-body-xs text-neutral-700">
              @ 2023 ByteSpace. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((label) => (
                <li key={label}>
                  <a href="#" className={`${linkClass} text-body-xs`}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}