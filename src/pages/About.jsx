import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { ArrowRight } from '../components/Icons'
import CTASection from '../components/CTASection'
import { aboutMainImage, aboutSecondaryImage, heroImage } from '../data/properties'

const values = [
  { title: 'Integrity', desc: 'We operate with complete transparency and honesty in every transaction.' },
  { title: 'Excellence', desc: 'We hold ourselves to the highest standard in service and results.' },
  { title: 'Client Focus', desc: 'Your goals drive everything we do — from first call to closing.' },
  { title: 'Expertise', desc: 'Deep market knowledge and architectural understanding inform every recommendation.' },
]

const stats = [
  { num: '25+', label: 'Years Experience' },
  { num: '850+', label: 'Properties Sold' },
  { num: '$2.4B', label: 'In Sales' },
  { num: '98%', label: 'Client Satisfaction' },
]

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>About Horizon Properties</h1>
          <p>For over two decades, we have connected discerning clients with extraordinary homes and smart investments.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <ScrollReveal className="about-text">
              <span className="section-label">Our Story</span>
              <h2>A Legacy of Distinction</h2>
              <p>
                Founded in 2001, Horizon Properties began with a simple conviction:
                that buying or selling a home should be an experience as refined as
                the properties themselves. Over two decades, we have grown into one
                of the most trusted names in luxury real estate, representing
                architectural masterpieces and exceptional investments across the
                country's most sought-after markets.
              </p>
              <p>
                Our approach is rooted in deep market knowledge, architectural
                understanding, and an unwavering commitment to client satisfaction.
                We don't just sell properties — we curate lifestyles and build
                lasting relationships.
              </p>
              <Link to="/contact" className="btn btn--navy">
                Work With Us
                <ArrowRight size={18} />
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={1} className="about-images">
              <div className="about-img-main">
                <img src={aboutMainImage} alt="Modern luxury home exterior" loading="lazy" />
              </div>
              <div className="about-img-secondary">
                <img src={aboutSecondaryImage} alt="Architectural interior" loading="lazy" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section--surface-alt">
        <div className="container">
          <ScrollReveal>
            <div className="about-page-stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="why-item-num">{s.num}</div>
                  <h4 style={{ marginTop: '0.5rem' }}>{s.label}</h4>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <ScrollReveal className="section-header">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What We Stand For</h2>
            <p>The principles that guide every decision and every relationship.</p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="services-grid">
              {values.map((v, i) => (
                <div className="service-card" key={v.title}>
                  <div className="service-card-num">0{i + 1}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
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
