import { panels, adNetworks } from '../data/plugin'

export default function Panel() {
  return (
    <section className="section section--white" id="panel">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow eyebrow--dark">پنل مدیریت</span>
          <h2>کنترل کامل، از یک پنل ساده و مدرن</h2>
          <p>مدیریت لینک‌ها، درآمدزایی از ویدیوها و شخصی‌سازی ظاهر؛ همه در یک پنل فارسی و راست‌چین.</p>
        </div>

        {panels.map((panel, index) => (
          <div className={`panel-row ${index % 2 === 1 ? 'reverse' : ''}`} key={panel.id}>
            <div className="panel-media">
              <img src={panel.image} alt={panel.alt} loading="lazy" />
            </div>
            <div className="panel-body">
              <span className="eyebrow eyebrow--dark">{panel.eyebrow}</span>
              <h3>{panel.title}</h3>
              <p>{panel.text}</p>
              <ul className="panel-points">
                {panel.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {panel.networks && (
                <div className="ad-logos">
                  {adNetworks.map((network) => (
                    <figure key={network.en}>
                      <img src={network.logo} alt={`لوگوی ${network.name}`} loading="lazy" />
                      <figcaption>{network.name}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
