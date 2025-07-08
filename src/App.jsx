import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandsTicker from './components/BrandsTicker'
import FeatureCarousel from './components/FeatureCarousel'
import TargetAudience from './components/TargetAudience'
import Carousel from './components/Carousel'
import './styles.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandsTicker />
      <FeatureCarousel />
      <TargetAudience />
      <Carousel />
    </>
  )
}

export default App
