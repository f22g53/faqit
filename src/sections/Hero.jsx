import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons'
import { heroImage } from '../data/properties'

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-bg hero-img-animate">
        <img src={heroImage} alt="Luxury modern villa with infinity pool at dusk" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-animate">
          Discover Exceptional
          <br />
          Homes &amp; Investments
        </h1>
        <p className="hero-animate hero-animate-delay-1">
          Premium properties in prime locations. Find your dream home
          or the perfect investment with confidence.
        </p>
        <div className="hero-actions hero-animate hero-animate-delay-2">
          <Link to="/properties" className="btn btn--gold btn--lg">
            Browse Properties
            <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="btn btn--outline btn--lg">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="hero-scroll hero-animate hero-animate-delay-3">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
