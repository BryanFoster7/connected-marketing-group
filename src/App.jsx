import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Information from './components/Information'
import Services from './components/Services'
import Admin from './components/Admin'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-light selection:bg-primary selection:text-dark">
        <Header />
        <Routes>
          <Route path="/information" element={<Information />} />
          <Route path="/services" element={<Services />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <About />
              <CTA />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App