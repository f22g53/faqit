import { useState } from 'react'
import { faqs } from '../data/plugin'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section className="section section--light" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow eyebrow--dark">سوالات متداول</span>
          <h2>پرسش‌های پرتکرار دربارهٔ تماشاگاه</h2>
          <p>پاسخ کوتاه و روشن به پرسش‌هایی که پیش از نصب افزونه بیشتر پرسیده می‌شود.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <div className={`faq-item ${open ? 'open' : ''}`} key={faq.q}>
                <button
                  className="faq-q"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  aria-expanded={open}
                >
                  <span>{faq.q}</span>
                  <svg className="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div className="faq-a" role="region">
                  <p>{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
