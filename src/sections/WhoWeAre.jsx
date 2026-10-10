import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { ArrowRight } from '../components/Icons'
import { aboutMainImage, aboutSecondaryImage } from '../data/properties'

export default function WhoWeAre() {
  return (
    <section className="about-section" aria-label="About us">
      <div className="container">
        <div className="about-grid">
          <ScrollReveal className="about-text">
            <span className="section-label">About Us</span>
            <h2>Who We Are</h2>
            <p>
              At Horizon Properties, we connect people with extraordinary homes
              and smart investments. Integrity, transparency, and client
              satisfaction are at the heart of everything we do.
            </p>
            <Link to="/about" className="btn btn--navy">
              Learn More
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={1} className="about-images">
            <div className="about-img-main">
              <img src={aboutMainImage} alt="Modern luxury two-story home" loading="lazy" />
            </div>
            <div className="about-img-secondary">
              <img src={aboutSecondaryImage} alt="Architectural interior detail" loading="lazy" />
            </div>
            <Link to="/properties" className="about-arrow-btn" aria-label="View properties">
              <ArrowRight size={22} />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
