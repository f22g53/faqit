import ScrollReveal from '../components/ScrollReveal'

const stats = [
  { num: '25+', label: 'Years Experience', desc: 'Trusted expertise in luxury real estate' },
  { num: '850+', label: 'Properties Sold', desc: 'Exceptional homes placed with the right owners' },
  { num: '$2.4B', label: 'In Sales', desc: 'Total transaction volume across prime markets' },
  { num: '98%', label: 'Client Satisfaction', desc: 'Verified reviews from satisfied clients' },
]

export default function WhyChoose() {
  return (
    <section className="section section--surface-alt" aria-label="Why choose Horizon">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-label">Why Horizon</span>
          <h2 className="section-title">A Different Standard of Service</h2>
          <p>We bring architectural precision and editorial care to every transaction.</p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <div className="why-grid">
            {stats.map((s) => (
              <div className="why-item" key={s.label}>
                <div className="why-item-num">{s.num}</div>
                <h4>{s.label}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
