import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import {
  PhoneIcon, MailIcon, InstagramIcon, LinkedinIcon, TwitterIcon,
} from '../components/Icons'
import { team } from '../data/properties'

export default function TeamSection() {
  return (
    <section className="section" aria-label="Our team">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-label">Our Team</span>
          <h2 className="section-title">Meet the Experts</h2>
          <p>A dedicated team of professionals committed to finding your perfect property.</p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.name}>
                <div className="team-card-image">
                  <img src={member.image} alt={`${member.name} — ${member.role}`} loading="lazy" />
                  <div className="team-card-overlay">
                    <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="team-social" aria-label={`Call ${member.name}`}><PhoneIcon size={16} /></a>
                    <a href={`mailto:${member.email}`} className="team-social" aria-label={`Email ${member.name}`}><MailIcon size={16} /></a>
                    <a href="#" className="team-social" aria-label={`${member.name} on Instagram`}><InstagramIcon size={16} /></a>
                    <a href="#" className="team-social" aria-label={`${member.name} on LinkedIn`}><LinkedinIcon size={16} /></a>
                  </div>
                </div>
                <h4>{member.name}</h4>
                <p className="role">{member.role}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
