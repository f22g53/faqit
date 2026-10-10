import { Link } from 'react-router-dom'
import { useState } from 'react'
import { MapPinIcon, BedIcon, BathIcon, AreaIcon, HeartIcon } from './Icons'

export default function PropertyCard({ property, loading = false }) {
  const [fav, setFav] = useState(false)

  if (loading) {
    return (
      <div className="property-card" style={{ minHeight: 380 }}>
        <div style={{ aspectRatio: '4/3', background: 'var(--surface)' }} />
        <div className="property-card-body">
          <div style={{ height: 24, background: 'var(--surface)', borderRadius: 4, marginBottom: 8 }} />
          <div style={{ height: 16, background: 'var(--surface)', borderRadius: 4, width: '60%' }} />
          <div style={{ height: 16, background: 'var(--surface)', borderRadius: 4, width: '40%' }} />
        </div>
      </div>
    )
  }

  return (
    <Link to={`/properties/${property.slug}`} className="property-card" aria-label={`${property.name}, ${property.location}`}>
      <div className="property-card-image">
        <img src={property.image} alt={`${property.name} — ${property.location}`} loading="lazy" />
        <span className="property-card-badge">{property.type}</span>
        <button
          className={`property-card-fav ${fav ? 'active' : ''}`}
          onClick={(e) => { e.preventDefault(); setFav(!fav) }}
          aria-label={fav ? 'Remove from favorites' : 'Save to favorites'}
          aria-pressed={fav}
        >
          <HeartIcon size={18} filled={fav} />
        </button>
      </div>
      <div className="property-card-body">
        <div className="property-card-price">{property.priceDisplay}</div>
        <h3 className="property-card-name">{property.name}</h3>
        <div className="property-card-location">
          <MapPinIcon size={15} />
          {property.location}
        </div>
        <div className="property-card-meta">
          <span><BedIcon size={16} /> {property.bedrooms} Beds</span>
          <span><BathIcon size={16} /> {property.bathrooms} Baths</span>
          <span><AreaIcon size={16} /> {property.sqft.toLocaleString()} ft²</span>
        </div>
      </div>
    </Link>
  )
}
