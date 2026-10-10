import { useEffect, useState } from 'react'
import { site, navItems } from '../data/plugin'

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : 'site-header--top'}`}>
        <div className="container header-inner">
          <a href="#top" className="logo" aria-label={`${site.name} — خانه`} onClick={close}>
            <img src="/plugin/logo.png" alt="نشان افزونهٔ تماشاگاه" />
            <span className="logo-text">
              <b>{site.name}</b>
              <span>{site.tagline}</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="ناوبری اصلی">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="باز و بسته کردن منو"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={close} />
      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-label="ناوبری موبایل">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="nav-link" onClick={close}>
            {item.label}
          </a>
        ))}
      </nav>
    </>
  )
}
