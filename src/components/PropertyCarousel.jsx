import { useRef, useState, useEffect, useCallback } from 'react'
import PropertyCard from './PropertyCard'
import { ArrowLeft, ArrowRight } from './Icons'

export default function PropertyCarousel({ properties }) {
  const carouselRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const dragState = useRef({ startX: 0, scrollLeft: 0, hasMoved: false })

  const updateButtons = useCallback(() => {
    const el = carouselRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 10)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  useEffect(() => {
    updateButtons()
    const el = carouselRef.current
    if (!el) return
    el.addEventListener('scroll', updateButtons, { passive: true })
    window.addEventListener('resize', updateButtons)
    return () => {
      el.removeEventListener('scroll', updateButtons)
      window.removeEventListener('resize', updateButtons)
    }
  }, [updateButtons])

  const scrollByAmount = (dir) => {
    const el = carouselRef.current
    if (!el) return
    const amount = el.clientWidth * 0.8
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  // Mouse drag support
  const onMouseDown = (e) => {
    const el = carouselRef.current
    if (!el) return
    setIsDragging(true)
    dragState.current = {
      startX: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
      hasMoved: false,
    }
    el.classList.add('dragging')
  }

  const onMouseMove = (e) => {
    if (!isDragging) return
    const el = carouselRef.current
    if (!el) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = x - dragState.current.startX
    if (Math.abs(walk) > 5) dragState.current.hasMoved = true
    el.scrollLeft = dragState.current.scrollLeft - walk
  }

  const onMouseUp = () => {
    setIsDragging(false)
    const el = carouselRef.current
    if (el) el.classList.remove('dragging')
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); scrollByAmount(-1) }
    if (e.key === 'ArrowRight') { e.preventDefault(); scrollByAmount(1) }
  }

  return (
    <div className="carousel-wrapper">
      <button
        className="carousel-btn carousel-btn--prev"
        onClick={() => scrollByAmount(-1)}
        disabled={!canPrev}
        aria-label="Previous properties"
      >
        <ArrowLeft size={20} />
      </button>
      <div
        className="carousel"
        ref={carouselRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onKeyDown={onKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Featured properties carousel"
      >
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
      <button
        className="carousel-btn carousel-btn--next"
        onClick={() => scrollByAmount(1)}
        disabled={!canNext}
        aria-label="Next properties"
      >
        <ArrowRight size={20} />
      </button>
    </div>
  )
}
