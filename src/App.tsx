import { useEffect, useRef, useState } from 'react'
import { Facebook, Instagram, Menu, X, Youtube } from 'lucide-react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import philHealthLogo from './assets/philhealth-logo.png'
import { iconProps } from './components/UI'
import { links } from './content/philhealth'
import { Home } from './pages/Home'
import { About, Benefits, Partners, Members, NotFound } from './pages/InformationPages'
import { Downloads } from './pages/Downloads'
import { OnlineServices } from './pages/OnlineServices'

const pages = [
  { to: '/', label: 'Home', page: <Home /> },
  { to: '/about-us', label: 'About Us', page: <About /> },
  { to: '/benefits', label: 'Benefits', page: <Benefits /> },
  { to: '/members', label: 'Members', page: <Members /> },
  { to: '/partners', label: 'Partners', page: <Partners /> },
  { to: '/online-services', label: 'Online Services', page: <OnlineServices /> },
  { to: '/downloads', label: 'Downloads', page: <Downloads /> },
]

const footerLinks = [
  { heading: 'Members', items: [
    { label: 'Employed Members', to: links.directContributors },
    { label: 'Self-Employed', to: links.directContributors },
    { label: 'Voluntarily Paying', to: links.directContributors },
    { label: 'Indigent Members', to: links.indirectContributors },
    { label: 'OFW Members', to: links.directContributors },
  ] },
  { heading: 'Services', items: [
    { label: 'Benefits & Coverage', to: '/benefits' },
    { label: 'Online Services', to: '/online-services' },
    { label: 'Employer Contributions', to: '/online-services#contribution' },
    { label: 'Member Portal', to: links.memberPortal },
    { label: 'Find a Hospital', to: links.facilities },
    { label: 'Find Claim Forms', to: '/downloads?category=claims' },
  ] },
  { heading: 'PhilHealth', items: [
    { label: 'About PhilHealth', to: '/about-us' },
    { label: 'News & Media', to: links.news },
    { label: 'Transparency', to: links.transparency },
    { label: 'Job Vacancies', to: links.jobs },
    { label: 'Contact Us', to: links.contact },
  ] },
]

function Brand() {
  return (
    <Link to="/" className="brand" aria-label="PhilHealth home">
      <img src={philHealthLogo} alt="" width="402" height="122" />
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
      <div className="header-inner">
        <Brand />
        <button className="menu-button" type="button" ref={menuButton}
          aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X {...iconProps} /> : <Menu {...iconProps} />}
          {open ? 'Close menu' : 'Menu'}
        </button>
        <nav className={open ? 'main-nav is-open' : 'main-nav'} id="main-navigation" aria-label="Main navigation">
          {pages.map(({ to, label }) => <NavLink key={to} to={to} end onClick={() => setOpen(false)}>{label}</NavLink>)}
        </nav>
        <Link to="/about-us#about-contact" className="button button-primary header-service" onClick={() => setOpen(false)}>Contact Us</Link>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand />
            <p>Student redesign prototype for an HCI project.</p>
            <a className="footer-official" href={links.home}>Official PhilHealth website</a>
            <div className="footer-socials">
              <a href={links.facebook} aria-label="PhilHealth on Facebook"><Facebook {...iconProps} size={19} /></a>
              <a href={links.x} aria-label="PhilHealth on X"><span aria-hidden="true">𝕏</span></a>
              <a href={links.youtube} aria-label="PhilHealth on YouTube"><Youtube {...iconProps} size={19} /></a>
              <a href={links.instagram} aria-label="PhilHealth on Instagram"><Instagram {...iconProps} size={19} /></a>
            </div>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {footerLinks.map(({ heading, items }) => (
              <div key={heading}>
                <h2>{heading}</h2>
                <ul>
                  {items.map(({ label, to }) => (
                    <li key={label}>{to.startsWith('/') ? <Link to={to}>{label}</Link> : <a href={to}>{label}</a>}</li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="footer-legal">
          <p>© 2026 Philippine Health Insurance Corporation. All rights reserved.</p>
          <nav aria-label="Legal links">
            <a href={links.disclaimer}>Disclaimer</a>
            <a href={links.privacy}>Privacy Notice</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export function App() {
  const { pathname, hash } = useLocation()
  const lastPath = useRef(pathname)
  const main = useRef<HTMLElement>(null)

  useEffect(() => {
    const page = pages.find(item => item.to === pathname.toLowerCase().replace(/\/$/, '') || item.to === pathname.toLowerCase())
    document.title = (page?.label ?? 'Page not found') + ' | PhilHealth redesign prototype'
    const changedPage = lastPath.current !== pathname
    lastPath.current = pathname
    const section = hash && document.getElementById(hash.slice(1))
    if (section) {
      section.scrollIntoView()
      section.focus({ preventScroll: true })
    } else if (changedPage) {
      window.scrollTo(0, 0)
      main.current?.querySelector<HTMLElement>('[data-page-heading]')?.focus({ preventScroll: true })
    }
  }, [pathname, hash])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header key={pathname} />
      <main id="main-content" ref={main} tabIndex={-1}>
        <Routes>
          {pages.map(item => <Route key={item.to} path={item.to} element={item.page} />)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
