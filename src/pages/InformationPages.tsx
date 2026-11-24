import { useSearchParams, Link } from 'react-router-dom'
import {
  BedDouble, Building2, ClipboardList, CreditCard,
  Handshake, HeartPulse, Hospital, Landmark, Laptop, MapPin,
  SearchX, ShieldPlus, Stethoscope, Users,
} from 'lucide-react'
import { Card, CategorySelect, Disclosure, iconProps, OfficialLink, PageIntro } from '../components/UI'
import { links } from '../content/philhealth'

export function About() {
  return (
    <>
      <PageIntro title="About Us" icon={Landmark} description="Learn what the Philippine Health Insurance Corporation does and how to get in touch." />
      <section className="wrap section-block two-column">
        <div>
          <div className="section-heading">
            <h2>About PhilHealth</h2>
            <p>PhilHealth administers the National Health Insurance Program in the Philippines.</p>
          </div>
          <Disclosure title="Mandate and functions">
            <p>PhilHealth manages the national program and works with healthcare providers so members can use covered benefits.</p>
            <OfficialLink href={links.mandate}>Read the official mandate</OfficialLink>
          </Disclosure>
          <Disclosure title="Vision, mission, and core values">
            <p>PhilHealth’s mission centers on social health insurance and access to healthcare for Filipinos.</p>
            <OfficialLink href={links.mission}>Read the official vision and mission</OfficialLink>
          </Disclosure>
        </div>
        <div>
          <h2 className="side-heading">Get in touch</h2>
          <Card title="Contact PhilHealth" icon={MapPin} action={<OfficialLink href={links.contact}>View the official office directory</OfficialLink>}>
            <p>Find a PhilHealth regional or local office and check its listed contact details.</p>
          </Card>
        </div>
      </section>
    </>
  )
}

const benefitCategories = [
  { value: 'inpatient', label: 'Inpatient' },
  { value: 'outpatient', label: 'Outpatient' },
  { value: 'specialized', label: 'Specialized care' },
] as const

const benefits = [
  { category: 'inpatient', title: 'Inpatient benefits', description: 'Benefits for covered care during a hospital admission.', icon: BedDouble },
  { category: 'outpatient', title: 'Outpatient benefits', description: 'Benefits for selected procedures and treatments that do not require an overnight stay.', icon: Stethoscope },
  { category: 'specialized', title: 'Z Benefits', description: 'Packages for selected serious or complex conditions with specific requirements.', icon: ShieldPlus },
]

export function Benefits() {
  const [params, setParams] = useSearchParams()
  const requested = params.get('category')
  const category = benefitCategories.some(item => item.value === requested) ? requested ?? '' : ''
  const displayed = category ? benefits.filter(item => item.category === category) : benefits
  return (
    <>
      <PageIntro title="Benefits" icon={HeartPulse} description="Explore the types of care PhilHealth covers and find official package information." />
      <section className="wrap section-block">
        <div className="section-heading"><h2>Browse by type of care</h2></div>
        <div className="filters filters-compact">
          <CategorySelect id="benefit-category" value={category} categories={benefitCategories}
            onChange={value => setParams(value ? { category: value } : {}, { replace: true })} />
        </div>
        <p className="results-status" role="status">{displayed.length} {displayed.length === 1 ? 'category' : 'categories'} shown</p>
        <div className="card-grid">
          {displayed.map(item => (
            <Card key={item.title} title={item.title} icon={item.icon}
              action={<OfficialLink href={links.benefits + '#:~:text=' + encodeURIComponent(item.title)}>Read about {item.title.toLowerCase()}</OfficialLink>}>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
        <div className="related-panel">
          <div><h2>Need benefit claim forms?</h2><p>Browse forms by name or category, then open the official PDF.</p></div>
          <Link className="button button-outline" to="/downloads?category=claims">Find claim forms</Link>
        </div>
      </section>
    </>
  )
}

const partners = [
  { title: 'Healthcare providers', description: 'Explore healthcare provider information and accreditation resources.', href: links.providers, label: 'View provider information', icon: Hospital },
  { title: 'Employers', description: 'Access PhilHealth information and resources for employers.', href: links.employers, label: 'View employer resources', icon: Building2 },
  { title: 'Service providers', description: 'Find information on certified service providers for digital health systems.', href: links.serviceProviders, label: 'View service providers', icon: Laptop },
  { title: 'Collecting partners', description: 'Find accredited banks and other collection agents.', href: links.collecting, label: 'View collecting partners', icon: CreditCard },
]

export function Partners() {
  return (
    <>
      <PageIntro title="Partners" icon={Handshake} description="Find PhilHealth partners for healthcare, employment, electronic services, and collections." />
      <section className="wrap section-block">
        <div className="section-heading"><h2>Partner categories</h2></div>
        <div className="card-grid card-grid-two">
          {partners.map(item => (
            <Card key={item.title} title={item.title} icon={item.icon}
              action={<OfficialLink href={item.href}>{item.label}</OfficialLink>}>
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
        <div className="related-panel">
          <div><h2>Looking for a health facility?</h2><p>Use the official directory to check accredited facilities.</p></div>
          <OfficialLink className="button button-outline" href={links.facilities}>Find an accredited facility</OfficialLink>
        </div>
      </section>
    </>
  )
}

export function Members() {
  return (
    <>
      <PageIntro title="Members" icon={Users} description="Understand PhilHealth member categories and find the forms and resources for your next step." />
      <section className="wrap section-block">
        <div className="section-heading">
          <h2>Membership categories</h2>
          <p>Use the official membership page for current classifications and requirements.</p>
        </div>
        <div className="card-grid card-grid-two">
          <Card title="Direct contributors" icon={Users}
            action={<OfficialLink href={links.directContributors}>View direct contributor information</OfficialLink>}>
            <p>People who pay premiums directly or through an employer, such as employed and self-earning members.</p>
          </Card>
          <Card title="Indirect contributors" icon={ShieldPlus}
            action={<OfficialLink href={links.indirectContributors}>View indirect contributor information</OfficialLink>}>
            <p>People in eligible categories whose premiums are subsidized under the program.</p>
          </Card>
        </div>
        <div className="related-panel">
          <div><h2>Register or update your details</h2><p>Review the form titles and choose the version for your situation.</p></div>
          <Link className="button button-primary" to="/downloads?category=membership"><ClipboardList {...iconProps} /> View membership forms</Link>
        </div>
      </section>
    </>
  )
}

export function NotFound() {
  return (
    <>
      <PageIntro title="Page not found" icon={SearchX} description="This address doesn’t match a page in the prototype. Check the address or use one of the links below." />
      <div className="wrap section-block button-row">
        <Link className="button button-primary" to="/">Go to Home</Link>
        <Link className="button button-outline" to="/downloads">Browse Downloads</Link>
      </div>
    </>
  )
}
