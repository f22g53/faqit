import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import {
  PhoneIcon, MailIcon, MapPinIcon, ArrowRight,
} from '../components/Icons'
import { siteInfo } from '../data/properties'

const contactItems = [
  { icon: PhoneIcon, title: 'Phone', value: siteInfo.phone, href: `tel:${siteInfo.phone.replace(/\s/g, '')}` },
  { icon: MailIcon, title: 'Email', value: siteInfo.email, href: `mailto:${siteInfo.email}` },
  { icon: MapPinIcon, title: 'Office', value: siteInfo.address, href: '#' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Whether you're buying, selling, or investing, our team is ready to guide you.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <div className="contact-grid">
            <ScrollReveal>
              <span className="section-label">Contact Us</span>
              <h2 style={{ marginBottom: '2rem' }}>Let's Start a Conversation</h2>
              {contactItems.map((item) => (
                <a
                  href={item.href}
                  key={item.title}
                  className="contact-info-item"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="contact-info-icon">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </a>
              ))}
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <form className="contact-form" onSubmit={handleSubmit}>
                {submitted && (
                  <div className="form-success">
                    Thank you for reaching out! We'll get back to you within 24 hours.
                  </div>
                )}
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="c-name">Full Name</label>
                    <input id="c-name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="c-email">Email</label>
                    <input id="c-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Your email" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="c-phone">Phone</label>
                    <input id="c-phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Your phone" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="c-subject">Subject</label>
                    <select id="c-subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                      <option>General Inquiry</option>
                      <option>Buying a Property</option>
                      <option>Selling a Property</option>
                      <option>Investment Advisory</option>
                      <option>Schedule a Viewing</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="c-msg">Message</label>
                  <textarea id="c-msg" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help you?" />
                </div>
                <button type="submit" className="btn btn--navy btn--block btn--lg">
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
