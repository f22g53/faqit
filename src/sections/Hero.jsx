import CursorEdgeGlowButton from '../components/CursorEdgeGlowButton'
import { site, heroBadges } from '../data/plugin'

const scrollTo = (sel) => () => document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <>
      <section className="hero" id="top" aria-label="نمای افزونه">
        <img
          className="hero-tv"
          src="/images/hero.png"
          alt="نمای صفحهٔ تماشاگاه روی نمایشگر با اسلایدر ویدیوها و پخش در مودال"
          width="1600"
          height="900"
        />
      </section>

      <section className="hero-intro">
        <div className="container">
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
      </section>
    </>
  )
}
