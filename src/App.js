import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import CurrentEmmpoyees from './pages/CurrentEmmpoyees'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <section className="elementsToDisplay">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CurrentEmmpoyees" element={<CurrentEmmpoyees />} />
        </Routes>
      </section>
      <Footer />
    </Router>
  )
}

export default App
