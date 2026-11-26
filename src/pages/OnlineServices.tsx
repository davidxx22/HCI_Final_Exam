import { ClipboardCheck, CreditCard, HeartPulse, Landmark, Users } from 'lucide-react'
import { Card, OfficialLink, PageIntro } from '../components/UI'
import { links, serviceGroups } from '../content/philhealth'

const groupIcons = {
  membership: Users,
  benefits: HeartPulse,
  contribution: CreditCard,
  collection: Landmark,
  accreditation: ClipboardCheck,
}

export function OnlineServices() {
  return (
    <>
      <PageIntro title="Online Services" description="Find the service you need. Links open official PhilHealth portals and guides." />
      <div className="wrap section-block service-directory">
        {serviceGroups.map(({ id, title, services }) => (
          <section key={id} aria-labelledby={id}>
            <h2 id={id} className="service-group-heading" tabIndex={-1}>{title}</h2>
            <div className={services.length > 1 ? 'card-grid card-grid-two' : undefined}>
              {services.map(service => (
                <Card key={service.title} title={service.title} icon={groupIcons[id]}
                  action={
                    <div className="service-actions">
                      {service.actions.map(({ label, href }) => <OfficialLink key={href} href={href}>{label}</OfficialLink>)}
                    </div>
                  }>
                  <p>{service.description}</p>
                  {service.features && <ul className="service-features">{service.features.map(feature => <li key={feature}>{feature}</li>)}</ul>}
                </Card>
              ))}
            </div>
          </section>
        ))}
        <OfficialLink href={links.services}>View the official Online Services directory</OfficialLink>
      </div>
    </>
  )
}
