import Icon from '../components/PluginIcons'
import { features } from '../data/plugin'

export default function Features() {
  return (
    <section className="section section--white" id="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow eyebrow--dark">امکانات اصلی</span>
          <h2>هر آنچه برای یک صفحهٔ ویدیوی حرفه‌ای نیاز دارید</h2>
          <p>تماشاگاه تمام ابزارهای لازم برای ساخت و مدیریت صفحهٔ ویدیو در وردپرس را در یک افزونهٔ سبک جمع کرده است.</p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon">
                <Icon name={feature.icon} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
