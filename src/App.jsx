import { BrowserRouter, Routes, Route } from 'react-router'
import { About } from './pages/About'
import { Beskrivelse } from './pages/Beskrivelse'
import { Uddannelse } from './pages/Uddannelse'
import { Praktik } from './pages/Praktik'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

import './App.css'


function App() {
 

  return (
    
    <BrowserRouter>
     <Navbar />
      <Routes>
        
        <Route path="/About" element={<About />} />
        <Route path="/Beskrivelse" element={<Beskrivelse />} />
        <Route path="/Uddannelse" element={<Uddannelse />} />
        <Route path="/Praktik" element={<Praktik />} />
      </Routes>
      <Footer />
    </BrowserRouter>
     
  )
}

export default App
