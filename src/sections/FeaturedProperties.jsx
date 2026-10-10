import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import PropertyCarousel from '../components/PropertyCarousel'
import { ArrowRight } from '../components/Icons'
import { properties } from '../data/properties'

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured)
  const display = featured.length >= 4 ? featured : properties.slice(0, 6)

  return (
    <section className="featured-section" aria-label="Featured properties">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-label">Featured</span>
          <h2 className="section-title">Featured Properties</h2>
          <p>Explore our handpicked selection of exceptional homes and investment opportunities.</p>
        </ScrollReveal>
      </div>
      <div className="container" style={{ overflow: 'visible' }}>
        <PropertyCarousel properties={display} />
      </div>
      <div className="container" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link to="/properties" className="link-arrow">
          View All Properties
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
