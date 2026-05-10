import { BrowserRouter, Routes, Route } from 'react-router'
import { About } from './pages/About'
import { Beskrivelse } from './pages/Beskrivelse'
import { Uddannelse } from './pages/Uddannelse'

import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

function App() {
 

  return (
    
    <BrowserRouter>
      <Routes>
        <Navbar />
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Beskrivelse />} />
        <Route path="/Uddannelse" element={<Uddannelse />} />
      </Routes>
      <Footer />
    </BrowserRouter>
     
  )
}

export default App
