import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandsTicker from './components/BrandsTicker'
import Stats from './components/Stats'
import TargetAudience from './components/TargetAudience'
import Carousel from './components/Carousel'
import Pricing from './components/Pricing'
import './styles.css'

function HomePage() {
  return (
    <>
      <Hero />
      <BrandsTicker />
      <Stats />
      <TargetAudience />
      <Carousel />
    </>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  )
}

export default App
