import { steps } from '../data/plugin'

export default function HowItWorks() {
  return (
    <section className="section section--light" id="how">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow eyebrow--dark">نحوهٔ کار</span>
          <h2>در سه مرحله ساده راه‌اندازی کنید</h2>
          <p>بدون تنظیمات پیچیده و بدون نیاز به دانش فنی؛ از نصب تا انتشار صفحهٔ تماشاگاه فقط چند دقیقه است.</p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.num}>
              <div className="step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
