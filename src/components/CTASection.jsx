import { Link } from 'react-router-dom'
import { KeyIcon, ArrowRight } from './Icons'

export default function CTASection() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cta-banner">
          <div className="cta-banner-left">
            <div className="cta-icon">
              <KeyIcon size={28} />
            </div>
            <div>
              <h3>Ready to Find Your Perfect Property?</h3>
              <p>Let our experts guide you to the right home or investment.</p>
            </div>
          </div>
          <Link to="/contact" className="btn btn--navy btn--lg">
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
