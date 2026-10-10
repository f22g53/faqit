import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import Hero from './sections/Hero'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import Panel from './sections/Panel'
import FaqSection from './sections/FaqSection'

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Panel />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  )
}
