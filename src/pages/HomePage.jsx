import HeroWithNavbar from '../components/HeroWithNavbar'
import AboutSection from '../components/AboutSection'
import Services from '../components/Services'
import Locations from '../components/Locations'
import CTA from '../components/CTA'
// import Features from '../components/Features'
// import Stats from '../components/Stats'

export default function HomePage() {
  return (
    <>
      <HeroWithNavbar />
      <AboutSection />
      <Services />
      <Locations />
      <CTA />
      {/* <Features />
      <Stats /> */}
    </>
  )
}