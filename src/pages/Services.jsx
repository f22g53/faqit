import ScrollReveal from '../components/ScrollReveal'
import { serviceIcons } from '../components/Icons'
import { services } from '../data/properties'
import CTASection from '../components/CTASection'

export default function Services() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive real estate services designed for discerning clients and exceptional properties.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <ScrollReveal>
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

      {/* Process */}
      <section className="section section--surface-alt">
        <div className="container">
          <ScrollReveal className="section-header">
            <span className="section-label">How We Work</span>
            <h2 className="section-title">Our Process</h2>
            <p>A structured approach that ensures clarity and confidence at every stage.</p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="why-grid">
              {[
                { num: '01', label: 'Consultation', desc: 'We begin with a deep understanding of your goals and preferences.' },
                { num: '02', label: 'Curation', desc: 'We curate properties that match your criteria and investment strategy.' },
                { num: '03', label: 'Negotiation', desc: 'We leverage market expertise to secure the best possible terms.' },
                { num: '04', label: 'Closing', desc: 'We guide you through every detail to a seamless and confident close.' },
              ].map((step) => (
                <div className="why-item" key={step.num}>
                  <div className="why-item-num">{step.num}</div>
                  <h4>{step.label}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
