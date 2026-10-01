import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import { CloseIcon, MenuIcon } from '../ui/icons'
import logo from '../../assets/images/logo-light.svg'
import bagIcon from '../../assets/images/icon-bag.png'

const navLinks = [
  { label: 'Home', href: '/', active: true },
  { label: 'Courses', href: '#courses' },
  { label: 'Creators', href: '#creators' },
]

const accountLinks = [
  { label: 'Sign In', href: '/login' },
  { label: 'Join Us', href: '/register' },
]

const linkClass = (active) =>
  `text-body-m transition-colors hover:text-white ${active ? 'text-white' : 'text-white/80'}`

function NavItem({ href, className, children }) {
  return href.startsWith('/') ? (
    <Link to={href} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <Container className="grid h-18 grid-cols-[1fr_auto] items-center md:h-30 md:grid-cols-[1fr_auto_1fr]">
        <Link to="/" aria-label="ByteSpace home" className="justify-self-start">
          <img src={logo} alt="ByteSpace" className="h-8 w-auto md:h-9.25" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ label, href, active }) => (
            <NavItem key={label} href={href} className={linkClass(active)}>
              {label}
            </NavItem>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-4 md:gap-6">
          <div className="hidden items-center gap-6 md:flex">
            {accountLinks.map(({ label, href }) => (
              <NavItem key={label} href={href} className={linkClass(false)}>
                {label}
              </NavItem>
            ))}
          </div>

          <button type="button" aria-label="Cart" className="shrink-0">
            <img src={bagIcon} alt="" width={24} height={24} />
          </button>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-white md:hidden"
          >
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          aria-label="Mobile"
          className="flex flex-col gap-4 bg-primary-800 px-4 py-6 sm:px-6 md:hidden"
        >
          {[...navLinks, ...accountLinks].map(({ label, href, active }) => (
            <NavItem key={label} href={href} className={linkClass(active)}>
              {label}
            </NavItem>
          ))}
        </nav>
      )}
    </header>
  )
}