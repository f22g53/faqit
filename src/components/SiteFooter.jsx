import { site, navItems } from '../data/plugin'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/plugin/logo.png" alt="نشان افزونهٔ تماشاگاه" />
              <b>{site.name}</b>
            </div>
            <p className="footer-about">
              تماشاگاه، افزونهٔ فارسی ویدیو برای وردپرس است. فقط لینک ویدیوهای آپارات و یوتیوب را وارد کنید تا
              عنوان و کاور خودکار شناسایی شود و صفحه‌ای زیبا با اسلایدر، فیلتر منبع و پخش در مودال بسازید.
            </p>
          </div>

          <div className="footer-col">
            <h4>بخش‌ها</h4>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </div>

          <div className="footer-col">
            <h4>افزونه</h4>
            <a href="#features">ویژگی‌ها</a>
            <a href="#how">نحوهٔ نصب</a>
            <a href="#faq">سوالات متداول</a>
            <a href="#top">خرید افزونه</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} افزونهٔ {site.name} — سازنده: {site.author}</span>
          <span>نسخهٔ {site.version} — فارسی و راست‌چین</span>
        </div>
      </div>
    </footer>
  )
}
