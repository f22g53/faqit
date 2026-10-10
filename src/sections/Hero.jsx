import CursorEdgeGlowButton from '../components/CursorEdgeGlowButton'
import { site, heroBadges } from '../data/plugin'

const scrollTo = (sel) => () => document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">افزونهٔ فارسی ویدیو برای وردپرس</span>
          <h1>
            ویدیوهای آپارات و یوتیوب را به <em>صفحهٔ تماشاگاه</em> وردپرس بیاورید
          </h1>
          <p className="hero-sub">
            فقط لینک ویدیوها را وارد کنید تا عنوان و کاور خودکار شناسایی شود و صفحه‌ای زیبا با اسلایدر،
            فیلتر منبع و پخش در مودال بسازید — بدون نیاز به API.
          </p>

          <div className="hero-actions">
            <CursorEdgeGlowButton onClick={scrollTo(site.demoHref)}>مشاهده دمو</CursorEdgeGlowButton>
            <CursorEdgeGlowButton onClick={scrollTo(site.purchaseHref)}>خرید افزونه</CursorEdgeGlowButton>
          </div>

          <ul className="hero-badges">
            {heroBadges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <img
            src="/images/hero.png"
            alt="نمای صفحهٔ تماشاگاه با اسلایدر ویدیوها و پخش در مودال"
            width="1200"
            height="800"
          />
        </div>
      </div>
    </section>
  )
}
