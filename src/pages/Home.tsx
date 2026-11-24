import { useEffect, useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Briefcase, CircleAlert, ClipboardList, File, Heart, House,
  Link as LinkIcon, MessageSquare, Monitor, Newspaper, SquareCheckBig, Users,
} from 'lucide-react'
import anniversaryBanner from '../assets/philhealth-anniversary-nhip.jpg'
import { Card, iconProps } from '../components/UI'
import { links } from '../content/philhealth'

const anniversaryArt = import.meta.env.BASE_URL + 'philhealth-anniversary.png'

const offerings = [
  { title: 'Members', description: 'Learn about membership categories, premium payment schedules, and data amendment procedures tailored for each member type.', label: 'Explore Members', to: '/members', icon: Users },
  { title: 'Benefits', description: 'Comprehensive health packages covering primary care to catastrophic conditions including eligibility requirements and coverage guidelines.', label: 'View Benefits', to: '/benefits', icon: Heart },
  { title: 'Online Services', description: 'Register, pay premiums, file claims, and locate the nearest office — all from the comfort of your home through our digital portal.', label: 'Go Online', to: links.services, icon: Monitor },
  { title: 'Our Partners', description: 'We work with thousands of accredited hospitals, clinics, and health facilities nationwide to deliver accessible care for every Filipino.', label: 'Find Partners', to: '/partners', icon: House },
]

const updates = [
  { date: '2026-03-18', month: 'Mar', title: 'YAKAP Program Coverage Expansion', description: 'Enhanced benefit packages now available for all active members nationwide effective April 2026.' },
  { date: '2026-03-10', month: 'Mar', title: 'New Online Payment Channels Available', description: 'Members can now pay premiums via GCash, Maya, and major e-banking platforms.' },
  { date: '2026-03-01', month: 'Mar', title: 'Unclaimed Benefits — Check the List', description: 'Review the updated list of unclaimed refunds and reimbursements from 2023–2024.' },
  { date: '2026-02-20', month: 'Feb', title: 'Digital ID Integration with PhilSys', description: 'Your PhilSys ID can now be used to access PhilHealth benefits and services at accredited facilities.' },
]

const heroStats = [
  { value: '60M+', label: 'Active Members' },
  { value: '₱280B', label: 'Benefits Paid' },
  { value: '5,000+', label: 'Partner Hospitals' },
]

const coverageStats = [
  { value: '100%', label: 'No-Balance Billing for Indigents' },
  { value: '60M+', label: 'Members Nationwide' },
  { value: '5K+', label: 'Accredited Facilities' },
  { value: '₱280B', label: 'Benefits Disbursed (2024)' },
]

const resources = [
  { title: 'Circulars', href: links.circulars, icon: File },
  { title: 'Advisories', href: links.advisories, icon: CircleAlert },
  { title: 'News', href: links.news, icon: Newspaper },
  { title: 'IB', href: links.invitationsToBid, icon: ClipboardList, accessibleLabel: 'IB (Invitation to Bid)' },
  { title: 'Job Vacancies', href: links.jobs, icon: Briefcase },
  { title: 'Official Statements', href: links.statements, icon: MessageSquare },
  { title: 'YAKAP Issuances', href: links.yakapIssuances, icon: SquareCheckBig },
  { title: 'Joint Issuances', href: links.jointIssuances, icon: LinkIcon },
]

function SectionHeading({ id, title, children }: {
  id: string; title: ReactNode; children: ReactNode
}) {
  return (
    <div className="landing-heading" data-scroll-reveal>
      <h2 id={id}>{title}</h2>
      <p>{children}</p>
    </div>
  )
}

function Stats({ items, className }: { items: typeof heroStats; className: string }) {
  return (
    <dl className={className}>
      {items.map(({ value, label }) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function Home() {
  const landing = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!landing.current || typeof IntersectionObserver === 'undefined') return

    const targets = [...landing.current.querySelectorAll('[data-scroll-reveal], [data-scroll-stagger] > *')]
      .filter(target => target.getBoundingClientRect().top >= window.innerHeight)
    if (!targets.length) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.setAttribute('data-scroll-state', 'revealed')
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px -32px 0px' })

    targets.forEach(target => {
      target.setAttribute('data-scroll-state', 'pending')
      observer.observe(target)
    })

    return () => {
      observer.disconnect()
      targets.forEach(target => target.removeAttribute('data-scroll-state'))
    }
  }, [])

  return (
    <div ref={landing}>
      <section className="landing-green landing-hero">
        <div className="landing-wrap landing-hero-inner">
          <div>
            <h1 tabIndex={-1} data-page-heading lang="fil">
              <span>Sa Bagong</span> <span>Pilipinas,</span> <em>Malayo Ako</em> <span>sa Sakit.</span>
            </h1>
            <p className="landing-hero-description">The Philippine Health Insurance Corporation ensures every Filipino has access to quality, accessible, and affordable health care services through its comprehensive national health insurance program.</p>
            <div className="button-row landing-actions">
              <a className="button button-yellow" href={links.registration}>Become a member</a>
              <a className="button button-on-dark" href="#why-philhealth">Learn More</a>
            </div>
            <Stats items={heroStats} className="landing-hero-stats" />
          </div>
          <figure className="landing-hero-art">
            <img src={anniversaryArt} alt="PhilHealth’s 31st anniversary: Ka-YAKAP ang Pilipino sa Kalusugang Segurado."
              width="821" height="449" fetchPriority="high" />
          </figure>
        </div>
      </section>

      <section className="landing-wrap landing-section landing-offerings" aria-labelledby="offerings-heading">
        <SectionHeading id="offerings-heading" title={<>Everything You Need,<br /> All in One Place</>}>
          From membership registration to benefit claims — access all PhilHealth services seamlessly.
        </SectionHeading>
        <div className="card-grid card-grid-four landing-service-grid" data-scroll-stagger>
          {offerings.map(({ title, description, label, to, icon }) => (
            <Link key={title} className="landing-service-card" to={to} aria-label={label}>
              <Card title={title} icon={icon}
                action={<span className="text-link">{label} <ArrowRight {...iconProps} size={15} /></span>}>
                <p>{description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="landing-section landing-news" aria-labelledby="announcements-heading">
        <div className="landing-wrap">
          <SectionHeading id="announcements-heading" title="Announcements & Highlights">
            Stay informed with the latest circulars, advisories, and news from PhilHealth.
          </SectionHeading>
          <div className="landing-news-grid">
            <article className="landing-feature" data-scroll-reveal>
              <div className="landing-feature-art">
                <img src={anniversaryBanner} alt="" width="1660" height="448" loading="lazy" />
              </div>
              <div className="landing-feature-copy">
                <h3 lang="fil">Ika-31 Anibersaryo ng PhilHealth at National Health Insurance Month</h3>
                <p>This February, we celebrate 31 years of providing Filipinos with quality and affordable health care coverage through our growing family of programs.</p>
                <a className="text-link" href={links.anniversaryNews}>Read More</a>
              </div>
            </article>
            <ul className="landing-updates" aria-label="Sample announcements from the Figma design" data-scroll-stagger>
              {updates.map(({ date, month, title, description }) => (
                <li key={date}>
                  <div className="landing-update">
                    <time dateTime={date}><strong>{date.slice(-2)}</strong><span>{month}</span></time>
                    <div><h3>{title}</h3><p>{description}</p></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="landing-section landing-green landing-coverage" id="why-philhealth" aria-labelledby="coverage-heading">
        <div className="landing-wrap landing-coverage-inner" data-scroll-stagger>
          <div>
            <h2 id="coverage-heading">Universal Health Coverage for Every Filipino Family</h2>
            <p className="landing-coverage-description">The Yaman ng Kalusugan Program (YAKAP) ensures that no Filipino is left behind — from the poorest communities to employed professionals.</p>
            <div className="landing-actions">
              <Link className="button button-yellow" to="/members">Become a Member</Link>
            </div>
          </div>
          <Stats items={coverageStats} className="landing-coverage-stats" />
        </div>
      </section>

      <section className="landing-wrap landing-section" aria-labelledby="quick-access-heading">
        <SectionHeading id="quick-access-heading" title="Quick Access">
          Find official documents, news, and resources in one click.
        </SectionHeading>
        <div className="landing-resource-grid" data-scroll-stagger>
          {resources.map(({ title, href, icon: Icon, accessibleLabel }) => (
            <a key={title} className="landing-resource" href={href} aria-label={accessibleLabel}>
              <span className="icon-box"><Icon {...iconProps} size={25} /></span> {title}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
