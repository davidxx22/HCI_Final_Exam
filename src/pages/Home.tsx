import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ArrowUpRight, Bell, Briefcase, Check, CircleAlert,
  Clock, File, GitFork, Heart, House, Link as LinkIcon, MessageSquare, Monitor,
  Newspaper, Search, SquareCheckBig, UserRoundPlus, Users, type LucideIcon,
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

const coverageItems = [
  { id: 1, label: 'In-patient and out-patient care coverage' },
  { id: 2, label: 'In-patient and out-patient care coverage' },
  { id: 3, label: 'In-patient and out-patient care coverage' },
  { id: 4, label: 'In-patient and out-patient care coverage' },
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
  { title: 'Job Vacancies', href: links.jobs, icon: Briefcase },
  { title: 'Official Statements', href: links.statements, icon: MessageSquare },
  { title: 'YAKAP Issuances', href: links.yakapIssuances, icon: SquareCheckBig },
  { title: 'Joint Issuances', href: links.jointIssuances, icon: LinkIcon },
  { title: 'Find a Facility', href: links.facilities, icon: Search },
]

function SectionHeading({ id, label, title, icon: Icon, children }: {
  id: string; label: string; title: ReactNode; icon: LucideIcon; children: ReactNode
}) {
  return (
    <div className="landing-heading">
      <p className="landing-tag"><Icon {...iconProps} size={13} /> {label}</p>
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
  return (
    <>
      <section className="landing-green landing-hero">
        <div className="landing-wrap landing-hero-inner">
          <div>
            <p className="landing-tag hero-tag"><span aria-hidden="true" /> 31st Anniversary · YAKAP Program</p>
            <h1 tabIndex={-1} data-page-heading lang="fil">
              <span>Sa Bagong</span> <span>Pilipinas,</span> <em>Malayo Ako</em> <span>sa Sakit.</span>
            </h1>
            <p className="landing-hero-description">The Philippine Health Insurance Corporation ensures every Filipino has access to quality, accessible, and affordable health care services through its comprehensive national health insurance program.</p>
            <div className="button-row landing-actions">
              <a className="button button-yellow" href={links.registration}><UserRoundPlus {...iconProps} size={17} /> Register Now</a>
              <a className="button button-on-dark" href="#why-philhealth">Learn More <ArrowUpRight {...iconProps} size={15} /></a>
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
        <SectionHeading id="offerings-heading" label="What We Offer" title={<>Everything You Need,<br /> All in One Place</>} icon={Clock}>
          From membership registration to benefit claims — access all PhilHealth services seamlessly.
        </SectionHeading>
        <div className="card-grid card-grid-four landing-service-grid">
          {offerings.map(({ title, description, label, to, icon }) => (
            <Card key={title} title={title} icon={icon}
              action={<Link className="text-link" to={to}>{label} <ArrowRight {...iconProps} size={15} /></Link>}>
              <p>{description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="landing-section landing-news" aria-labelledby="announcements-heading">
        <div className="landing-wrap">
          <SectionHeading id="announcements-heading" label="Latest Updates" title="Announcements & Highlights" icon={Bell}>
            Stay informed with the latest circulars, advisories, and news from PhilHealth.
          </SectionHeading>
          <div className="landing-news-grid">
            <article className="landing-feature">
              <div className="landing-feature-art">
                <img src={anniversaryBanner} alt="" width="1660" height="448" loading="lazy" />
                <span className="landing-tag">Anniversary</span>
              </div>
              <div className="landing-feature-copy">
                <p className="landing-tag">Featured</p>
                <h3 lang="fil">Ika-31 Anibersaryo ng PhilHealth at National Health Insurance Month</h3>
                <p>This February, we celebrate 31 years of providing Filipinos with quality and affordable health care coverage through our growing family of programs.</p>
                <a className="text-link" href={links.anniversaryNews}>Read More <ArrowRight {...iconProps} size={15} /></a>
              </div>
            </article>
            <ul className="landing-updates" aria-label="Sample announcements from the Figma design">
              {updates.map(({ date, month, title, description }) => (
                <li className="landing-update" key={date}>
                  <time dateTime={date}><strong>{date.slice(-2)}</strong><span>{month}</span></time>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="landing-section landing-green landing-coverage" id="why-philhealth" aria-labelledby="coverage-heading">
        <div className="landing-wrap landing-coverage-inner">
          <div>
            <p className="landing-tag">Why PhilHealth</p>
            <h2 id="coverage-heading">Universal Health Coverage for Every Filipino Family</h2>
            <p className="landing-coverage-description">The YAKAP (Your All-Encompassing Komprehensibong Assistance Para sa Lahat) program ensures that no Filipino is left behind — from the poorest communities to employed professionals.</p>
            <ul className="landing-coverage-list">
              {coverageItems.map(({ id, label }) => (
                <li key={id}><span><Check {...iconProps} size={15} /></span>{label}</li>
              ))}
            </ul>
            <div className="landing-actions">
              <Link className="button button-yellow" to="/members"><UserRoundPlus {...iconProps} size={17} /> Become a Member</Link>
            </div>
          </div>
          <Stats items={coverageStats} className="landing-coverage-stats" />
        </div>
      </section>

      <section className="landing-wrap landing-section" aria-labelledby="quick-access-heading">
        <SectionHeading id="quick-access-heading" label="Resources" title="Quick Access" icon={GitFork}>
          Find official documents, news, and resources in one click.
        </SectionHeading>
        <div className="landing-resource-grid">
          {resources.map(({ title, href, icon: Icon }) => (
            <a key={title} className="landing-resource" href={href}>
              <span className="icon-box"><Icon {...iconProps} size={25} /></span> {title}
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
