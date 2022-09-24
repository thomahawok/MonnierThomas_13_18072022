import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'

import CurrentEmmpoyeesEreka from './pages/CurrentEmmpoyeesEreka'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <section className="elementsToDisplay">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/CurrentEmmpoyeesEreka"
            element={<CurrentEmmpoyeesEreka />}
          />
        </Routes>
      </section>
      <Footer />
    </Router>
  )
}

export default App
