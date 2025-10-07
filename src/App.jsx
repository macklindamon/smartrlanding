import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PaymentsFeatureGrid from './components/PaymentsFeatureGrid'
import Hero from './components/Hero'
import BrandsTicker from './components/BrandsTicker'
import Stats from './components/Stats'
import SaaSAnalytics, { WhyBrokersLoveSmartr, SolutionsForEachStep, AnimatedReviews, ServicesSection } from './components/SaaSAnalytics'
import FeatureStepsCarousel from './components/FeatureStepsCarousel'
import Carousel from './components/Carousel'
import Pricing from './components/Pricing'
import TabbedCardSection from './components/TabbedCardSection'
import AgenticCS from './components/AgenticCS'
import CaseStudies from './components/CaseStudies'
import CaseStudyDetail from './components/CaseStudyDetail'
import Videos from './components/Videos'
import TeamDetail from './components/TeamDetail'
import Team from './components/Team'
import Company from './components/Company'
import PlatformFeature from './components/PlatformFeature'
import './styles.css'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import CookiePolicy from './components/CookiePolicy'

function HomePage() {
  return (
    <>
      <Hero />
      <BrandsTicker />
      <Stats />
      <SaaSAnalytics />
      <AgenticCS />
      <TabbedCardSection />
      <WhyBrokersLoveSmartr />
      <AnimatedReviews />
    </>
  )
}

function App() {
  return (
    <Router>
      <header role="banner">
        <Navbar />
      </header>
      <CookieConsent />
      <main role="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/platform/:slug" element={<PlatformFeature />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/campaigns/bucket-list/" element={<Videos />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:slug" element={<TeamDetail />} />
          <Route path="/company" element={<Company />} />
          <Route path="/cookies" element={<CookiePolicy />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
