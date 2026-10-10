import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  LogoIcon, PhoneIcon, MailIcon, MapPinIcon,
  InstagramIcon, LinkedinIcon, TwitterIcon, FacebookIcon,
} from './Icons'
import { siteInfo } from '../data/properties'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <LogoIcon />
              <span className="logo-text">Horizon Properties</span>
            </Link>
            <p>
              Connecting people with extraordinary homes and smart investments.
              Premium properties in prime locations, guided by integrity and expertise.
            </p>
            <div className="footer-social">
              <a href={siteInfo.social.instagram} aria-label="Instagram"><InstagramIcon /></a>
              <a href={siteInfo.social.linkedin} aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href={siteInfo.social.twitter} aria-label="Twitter"><TwitterIcon /></a>
              <a href={siteInfo.social.facebook} aria-label="Facebook"><FacebookIcon /></a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Navigation</h5>
            <ul className="footer-links">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul className="footer-contact">
              <li><PhoneIcon size={15} /> {siteInfo.phone}</li>
              <li><MailIcon size={15} /> {siteInfo.email}</li>
              <li><MapPinIcon size={15} /> {siteInfo.address}</li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Newsletter</h5>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>
              Subscribe for exclusive property listings and market insights.
            </p>
            {subscribed && <p style={{ color: 'var(--gold)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>Thank you for subscribing!</p>}
            <form className="footer-newsletter" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email for newsletter"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Horizon Properties. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
