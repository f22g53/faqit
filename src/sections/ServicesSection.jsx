import ScrollReveal from '../components/ScrollReveal'
import { serviceIcons } from '../components/Icons'
import { services } from '../data/properties'

export default function ServicesSection() {
  return (
    <section className="section" aria-label="Our services">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p>Comprehensive real estate services tailored to the needs of discerning clients.</p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <div className="services-grid">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon]
              return (
                <div className="service-card" key={service.num}>
                  <Icon />
                  <div className="service-card-num">{service.num}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
