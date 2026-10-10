import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  MapPinIcon, BedIcon, BathIcon, AreaIcon, CheckIcon, ArrowRight,
  ArrowLeft, CloseIcon, PhoneIcon, MailIcon, HeartIcon,
} from '../components/Icons'
import PropertyCard from '../components/PropertyCard'
import ScrollReveal from '../components/ScrollReveal'
import { properties } from '../data/properties'

export default function PropertyDetail() {
  const { slug } = useParams()
  const property = properties.find((p) => p.slug === slug)
  const [activeImg, setActiveImg] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)
  const [fav, setFav] = useState(false)
  const [scheduleOpen, setScheduleOpen] = useState(false)

  useEffect(() => {
    setActiveImg(0)
  }, [slug])

  if (!property) {
    return (
      <>
        <section className="page-header">
          <div className="container">
            <h1>Property Not Found</h1>
            <p>The property you're looking for is no longer available.</p>
          </div>
        </section>
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <Link to="/properties" className="btn btn--navy">Back to Properties</Link>
          </div>
        </section>
      </>
    )
  }

  const similar = properties.filter((p) => p.id !== property.id && p.city === property.city).slice(0, 4)
  const similarFinal = similar.length >= 2 ? similar : properties.filter((p) => p.id !== property.id).slice(0, 4)

  const gallery = property.gallery

  const nextImg = () => setActiveImg((i) => (i + 1) % gallery.length)
  const prevImg = () => setActiveImg((i) => (i - 1 + gallery.length) % gallery.length)

  return (
    <>
      <section className="page-header" style={{ padding: '8rem 0 2rem' }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/properties">Properties</Link>
            <span>/</span>
            <span>{property.name}</span>
          </nav>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {/* Gallery */}
          <div className="detail-gallery">
            <div className="detail-gallery-main" onClick={() => setFullscreen(true)}>
              <img src={gallery[activeImg]} alt={`${property.name} — main view`} />
            </div>
            {gallery.slice(1, 5).map((img, i) => (
              <div
                className="detail-gallery-thumb"
                key={i}
                onClick={() => setActiveImg(i + 1)}
              >
                <img src={img} alt={`${property.name} — view ${i + 2}`} loading="lazy" />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="detail-content">
            <div className="detail-main">
              <span className="section-label">{property.type}</span>
              <h1 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', marginBottom: '0.5rem' }}>{property.name}</h1>
              <div className="property-card-location" style={{ marginBottom: '2rem', fontSize: '1rem' }}>
                <MapPinIcon size={18} />
                {property.location}
              </div>

              <div className="detail-stats" style={{ borderTop: 'none', paddingTop: 0, marginBottom: '2rem' }}>
                <div className="detail-stat">
                  <span className="detail-stat-label">Bedrooms</span>
                  <span className="detail-stat-value">{property.bedrooms}</span>
                </div>
                <div className="detail-stat">
                  <span className="detail-stat-label">Bathrooms</span>
                  <span className="detail-stat-value">{property.bathrooms}</span>
                </div>
                <div className="detail-stat">
                  <span className="detail-stat-label">Square Feet</span>
                  <span className="detail-stat-value">{property.sqft.toLocaleString()}</span>
                </div>
                <div className="detail-stat">
                  <span className="detail-stat-label">Lot Size</span>
                  <span className="detail-stat-value">{property.lot}</span>
                </div>
                <div className="detail-stat">
                  <span className="detail-stat-label">Year Built</span>
                  <span className="detail-stat-value">{property.year}</span>
                </div>
              </div>

              <h2>Property Description</h2>
              <p>{property.description}</p>

              <h2>Key Features</h2>
              <div className="detail-features">
                {property.features.map((f) => (
                  <div className="detail-feature" key={f}>
                    <CheckIcon size={16} />
                    {f}
                  </div>
                ))}
              </div>

              <h2>Amenities</h2>
              <div className="detail-amenities">
                {property.amenities.map((a) => (
                  <span className="detail-amenity" key={a}>{a}</span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="detail-sidebar">
              <div className="detail-agent-card">
                <div className="detail-price-tag">{property.priceDisplay}</div>
                <div className="detail-agent-info">
                  <div className="detail-agent-avatar">
                    <img src={property.agent.image} alt={property.agent.name} />
                  </div>
                  <div>
                    <h4>{property.agent.name}</h4>
                    <p>{property.agent.title}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <button
                    className="btn btn--navy btn--block"
                    onClick={() => setScheduleOpen(true)}
                  >
                    Schedule a Viewing
                    <ArrowRight size={18} />
                  </button>
                  <Link to="/contact" className="btn btn--outline-dark btn--block">
                    Contact Agent
                  </Link>
                  <a href={`tel:${property.agent.phone.replace(/\s/g, '')}`} className="btn btn--outline-dark btn--block">
                    <PhoneIcon size={16} />
                    {property.agent.phone}
                  </a>
                  <button
                    className="btn btn--outline-dark btn--block"
                    onClick={() => setFav(!fav)}
                  >
                    <HeartIcon size={18} filled={fav} />
                    {fav ? 'Saved to Favorites' : 'Save to Favorites'}
                  </button>
                </div>
              </div>
            </aside>
          </div>

          {/* Similar properties */}
          {similarFinal.length > 0 && (
            <div style={{ marginTop: '5rem' }}>
              <ScrollReveal className="section-header">
                <span className="section-label">More Properties</span>
                <h2 className="section-title">Similar Properties</h2>
              </ScrollReveal>
              <div className="properties-grid">
                {similarFinal.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="detail-mobile-cta">
        <div className="detail-price-tag">{property.priceDisplay}</div>
        <button className="btn btn--navy" style={{ flex: 1 }} onClick={() => setScheduleOpen(true)}>
          Schedule Viewing
        </button>
      </div>

      {/* Fullscreen gallery */}
      {fullscreen && (
        <div className="gallery-fullscreen" onClick={() => setFullscreen(false)} role="dialog" aria-label="Image gallery">
          <button className="gallery-close" onClick={() => setFullscreen(false)} aria-label="Close gallery">
            <CloseIcon size={24} />
          </button>
          <button className="gallery-nav gallery-nav--prev" onClick={(e) => { e.stopPropagation(); prevImg() }} aria-label="Previous image">
            <ArrowLeft size={24} />
          </button>
          <img src={gallery[activeImg]} alt={`${property.name} — fullscreen view`} onClick={(e) => e.stopPropagation()} />
          <button className="gallery-nav gallery-nav--next" onClick={(e) => { e.stopPropagation(); nextImg() }} aria-label="Next image">
            <ArrowRight size={24} />
          </button>
          <div className="gallery-thumbs" onClick={(e) => e.stopPropagation()}>
            {gallery.map((img, i) => (
              <div
                className={`gallery-thumb-item ${i === activeImg ? 'active' : ''}`}
                key={i}
                onClick={() => setActiveImg(i)}
              >
                <img src={img} alt={`Thumbnail ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Schedule modal */}
      {scheduleOpen && (
        <div className="gallery-fullscreen" onClick={() => setScheduleOpen(false)} role="dialog" aria-label="Schedule a viewing">
          <div
            className="contact-form"
            style={{ maxWidth: 480, width: '90%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.3rem' }}>Schedule a Viewing</h3>
              <button onClick={() => setScheduleOpen(false)} aria-label="Close"><CloseIcon size={22} /></button>
            </div>
            <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>{property.name} — {property.location}</p>
            <ScheduleForm agent={property.agent} onClose={() => setScheduleOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}

function ScheduleForm({ agent, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { onClose() }, 2000)
  }

  if (submitted) {
    return <div className="form-success">Thank you! We'll contact you shortly to confirm your viewing appointment.</div>
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="sched-name">Full Name</label>
        <input id="sched-name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="sched-email">Email</label>
          <input id="sched-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Your email" />
        </div>
        <div className="form-field">
          <label htmlFor="sched-phone">Phone</label>
          <input id="sched-phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Your phone" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="sched-date">Preferred Date</label>
        <input id="sched-date" type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
      </div>
      <div className="form-field">
        <label htmlFor="sched-msg">Message</label>
        <textarea id="sched-msg" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Any specific requests?" />
      </div>
      <button type="submit" className="btn btn--navy btn--block">Request Viewing</button>
    </form>
  )
}
