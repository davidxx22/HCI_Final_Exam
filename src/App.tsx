import { useEffect, useRef, useState } from 'react'
import { HeartPulse, Menu, X } from 'lucide-react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { iconProps, OfficialLink } from './components/UI'
import { links } from './content/philhealth'
import { Home, About, Benefits, Partners, Members, NotFound } from './pages/InformationPages'
import { Downloads } from './pages/Downloads'

const navigation = [
  { to: '/', label: 'Home', page: <Home /> },
  { to: '/about-us', label: 'About Us', page: <About /> },
  { to: '/benefits', label: 'Benefits', page: <Benefits /> },
  { to: '/partners', label: 'Partners', page: <Partners /> },
  { to: '/members', label: 'Members', page: <Members /> },
  { to: '/downloads', label: 'Downloads', page: <Downloads /> },
]

function Brand() {
  return (
    <Link to="/" className="brand" aria-label="PhilHealth home">
      <span className="brand-icon"><HeartPulse {...iconProps} size={24} /></span>
      <span>PhilHealth<span className="brand-subtitle">Philippine Health Insurance Corporation</span></span>
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  return (
    <header className="site-header" onKeyDown={event => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        menuButton.current?.focus()
      }
    }}>
      <div className="wrap header-inner">
        <Brand />
        <button className="menu-button" type="button" ref={menuButton}
          aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X {...iconProps} /> : <Menu {...iconProps} />}
          {open ? 'Close menu' : 'Menu'}
        </button>
        <nav className={open ? 'main-nav is-open' : 'main-nav'} id="main-navigation" aria-label="Main navigation">
          {navigation.map(item =>
            <NavLink key={item.to} to={item.to} end onClick={() => setOpen(false)}>{item.label}</NavLink>)}
        </nav>
        <OfficialLink href={links.services} className="button button-primary header-service">Online services</OfficialLink>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-main">
        <div>
          <Brand />
          <p>Student redesign prototype for an HCI project.</p>
        </div>
        <nav aria-label="Footer navigation">
          <div>
            <h2>Explore</h2>
            <Link to="/members">Members</Link>
            <Link to="/benefits">Benefits</Link>
            <Link to="/downloads">Downloads</Link>
          </div>
          <div>
            <h2>PhilHealth resources</h2>
            <OfficialLink href={links.contact}>Contact and office directory</OfficialLink>
            <OfficialLink href={links.services}>Online services</OfficialLink>
            <OfficialLink href={links.home}>Official PhilHealth website</OfficialLink>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export function App() {
  const { pathname } = useLocation()
  const lastPath = useRef(pathname)
  const main = useRef<HTMLElement>(null)

  useEffect(() => {
    const page = navigation.find(item => item.to === pathname.toLowerCase().replace(/\/$/, '') || item.to === pathname.toLowerCase())
    document.title = (page?.label ?? 'Page not found') + ' | PhilHealth redesign prototype'
    if (lastPath.current !== pathname) {
      lastPath.current = pathname
      window.scrollTo(0, 0)
      main.current?.querySelector<HTMLElement>('[data-page-heading]')?.focus({ preventScroll: true })
    }
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header key={pathname} />
      <main id="main-content" ref={main} tabIndex={-1}>
        <Routes>
          {navigation.map(item => <Route key={item.to} path={item.to} element={item.page} />)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
