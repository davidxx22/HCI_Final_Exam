import { useEffect, useRef, useState } from 'react'
import { Facebook, Instagram, Menu, X, Youtube } from 'lucide-react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import philHealthLogo from './assets/philhealth-logo.png'
import { iconProps, OfficialLink } from './components/UI'
import { links } from './content/philhealth'
import { Home } from './pages/Home'
import { About, Benefits, Partners, Members, NotFound } from './pages/InformationPages'
import { Downloads } from './pages/Downloads'

const pages = [
  { to: '/', label: 'Home', page: <Home /> },
  { to: '/about-us', label: 'About Us', page: <About /> },
  { to: '/benefits', label: 'Benefits', page: <Benefits /> },
  { to: '/partners', label: 'Partners', page: <Partners /> },
  { to: '/members', label: 'Members', page: <Members /> },
  { to: '/downloads', label: 'Downloads', page: <Downloads /> },
]

const navigation = [
  { to: '/', label: 'Home' },
  { to: '/benefits', label: 'Benefits' },
  { to: '/members', label: 'Members' },
  { to: '/partners', label: 'Partners' },
  { to: links.services, label: 'Online Services' },
  { to: '/downloads', label: 'Downloads' },
]

const landingFooterLinks = [
  { heading: 'Members', items: [
    { label: 'Employed Members', to: links.directContributors },
    { label: 'Self-Employed', to: links.directContributors },
    { label: 'Voluntarily Paying', to: links.directContributors },
    { label: 'Indigent Members', to: links.indirectContributors },
    { label: 'OFW Members', to: links.directContributors },
  ] },
  { heading: 'Services', items: [
    { label: 'Benefits & Coverage', to: '/benefits' },
    { label: 'Premium Payment', to: links.services },
    { label: 'Member Portal', to: links.memberPortal },
    { label: 'Find a Hospital', to: links.facilities },
    { label: 'File a Claim', to: '/downloads?category=claims' },
  ] },
  { heading: 'Company', items: [
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

function Header({ landing }: { landing: boolean }) {
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  return (
    <header className={landing ? 'site-header landing-header' : 'site-header'} onKeyDown={event => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        menuButton.current?.focus()
      }
    }}>
      <div className={landing ? 'landing-wrap header-inner' : 'wrap header-inner'}>
        <Brand />
        <button className="menu-button" type="button" ref={menuButton}
          aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X {...iconProps} /> : <Menu {...iconProps} />}
          {open ? 'Close menu' : 'Menu'}
        </button>
        <nav className={open ? 'main-nav is-open' : 'main-nav'} id="main-navigation" aria-label="Main navigation">
          {navigation.map(item => item.to === links.services
            ? <a key={item.to} href={item.to} onClick={() => setOpen(false)}>{item.label}</a>
            : <NavLink key={item.to} to={item.to} end onClick={() => setOpen(false)}>{item.label}</NavLink>)}
        </nav>
        <a href={links.memberPortal} className="button button-primary header-service" onClick={() => setOpen(false)}>Login</a>
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

function LandingFooter() {
  return (
    <footer className="site-footer landing-footer">
      <div className="landing-wrap">
        <div className="landing-footer-main">
          <div className="landing-footer-brand">
            <Brand />
            <p>The Philippine Health Insurance Corporation is dedicated to providing every Filipino family with quality, accessible, and affordable healthcare through a sustainable social health insurance program.</p>
            <div className="landing-socials">
              <a href={links.facebook} aria-label="PhilHealth on Facebook"><Facebook {...iconProps} size={19} /></a>
              <a href={links.x} aria-label="PhilHealth on X"><span aria-hidden="true">𝕏</span></a>
              <a href={links.youtube} aria-label="PhilHealth on YouTube"><Youtube {...iconProps} size={19} /></a>
              <a href={links.instagram} aria-label="PhilHealth on Instagram"><Instagram {...iconProps} size={19} /></a>
            </div>
          </div>
          <nav className="landing-footer-nav" aria-label="Footer navigation">
            {landingFooterLinks.map(({ heading, items }) => (
              <div key={heading}>
                <h2>{heading}</h2>
                <ul>
                  {items.map(({ label, to }) => <li key={label}><Link to={to}>{label}</Link></li>)}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="landing-footer-legal">
          <p>© 2026 Philippine Health Insurance Corporation. All rights reserved. By @Zel</p>
          <nav aria-label="Legal and contact links">
            <a href={links.contact}>Contact Us</a>
            <a href={links.disclaimer}>Disclaimer</a>
            <a href={links.privacy}>Privacy Notice</a>
          </nav>
        </div>
        <p className="landing-prototype-note">Student HCI prototype. Sample announcements and figures from the Figma design.</p>
      </div>
    </footer>
  )
}

export function App() {
  const { pathname } = useLocation()
  const landing = pathname === '/'
  const lastPath = useRef(pathname)
  const main = useRef<HTMLElement>(null)

  useEffect(() => {
    const page = pages.find(item => item.to === pathname.toLowerCase().replace(/\/$/, '') || item.to === pathname.toLowerCase())
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
      <Header key={pathname} landing={landing} />
      <main id="main-content" ref={main} tabIndex={-1}>
        <Routes>
          {pages.map(item => <Route key={item.to} path={item.to} element={item.page} />)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {landing ? <LandingFooter /> : <Footer />}
    </>
  )
}
