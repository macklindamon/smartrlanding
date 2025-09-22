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
      <SolutionsForEachStep />
      <WhyBrokersLoveSmartr />
      <AnimatedReviews />

    </>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <CookieConsent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
