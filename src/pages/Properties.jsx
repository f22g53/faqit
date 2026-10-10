import { useState, useMemo } from 'react'
import PropertyCard from '../components/PropertyCard'
import ScrollReveal from '../components/ScrollReveal'
import { properties, propertyTypes, locations } from '../data/properties'

export default function Properties() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('All')
  const [location, setLocation] = useState('All')
  const [beds, setBeds] = useState('Any')
  const [maxPrice, setMaxPrice] = useState('Any')
  const [sortBy, setSortBy] = useState('featured')

  const filtered = useMemo(() => {
    let result = properties.filter((p) => {
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase())
      const matchType = type === 'All' || p.type === type
      const matchLocation = location === 'All' || p.city === location
      const matchBeds = beds === 'Any' || p.bedrooms >= parseInt(beds)
      const matchPrice = maxPrice === 'Any' || p.price <= parseInt(maxPrice)
      return matchSearch && matchType && matchLocation && matchBeds && matchPrice
    })

    switch (sortBy) {
      case 'price-low': result = [...result].sort((a, b) => a.price - b.price); break
      case 'price-high': result = [...result].sort((a, b) => b.price - a.price); break
      case 'beds': result = [...result].sort((a, b) => b.bedrooms - a.bedrooms); break
      default: result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }
    return result
  }, [search, type, location, beds, maxPrice, sortBy])

  const handleReset = () => {
    setSearch('')
    setType('All')
    setLocation('All')
    setBeds('Any')
    setMaxPrice('Any')
    setSortBy('featured')
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Properties</h1>
          <p>Browse our curated collection of premium homes and investment properties.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <ScrollReveal>
            <div className="filters-bar">
              <div className="filter-group filter-search">
                <label htmlFor="search">Search</label>
                <input
                  id="search"
                  type="text"
                  placeholder="Property name or location..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="filter-group">
                <label htmlFor="type">Type</label>
                <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                  {propertyTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="filter-group">
                <label htmlFor="location">Location</label>
                <select id="location" value={location} onChange={(e) => setLocation(e.target.value)}>
                  {locations.map((l) => <option key={l}>{l}</option>)}
                </select>
              </div>
              <div className="filter-group">
                <label htmlFor="beds">Bedrooms</label>
                <select id="beds" value={beds} onChange={(e) => setBeds(e.target.value)}>
                  <option>Any</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                  <option value="6">6+</option>
                </select>
              </div>
              <div className="filter-group">
                <label htmlFor="price">Max Price</label>
                <select id="price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
                  <option>Any</option>
                  <option value="2000000">$2M</option>
                  <option value="3000000">$3M</option>
                  <option value="4000000">$4M</option>
                  <option value="5000000">$5M</option>
                  <option value="7000000">$7M</option>
                </select>
              </div>
              <div className="filter-group">
                <label htmlFor="sort">Sort By</label>
                <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="beds">Most Bedrooms</option>
                </select>
              </div>
              <div className="filter-actions">
                <button className="btn btn--outline-dark" onClick={handleReset}>Reset</button>
              </div>
            </div>
          </ScrollReveal>

          <div className="results-bar">
            <div className="results-count">
              Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? 'property' : 'properties'}
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="properties-grid">
              {filtered.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No properties found</h3>
              <p>Try adjusting your filters or search criteria.</p>
              <button className="btn btn--navy" style={{ marginTop: '1.5rem' }} onClick={handleReset}>
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
