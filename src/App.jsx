import { BrowserRouter, Routes, Route } from 'react-router'
import { About } from './pages/About'

import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Navbar />
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Beskrivelse />} />
      </Routes>
      <Footer />
    </BrowserRouter>
     
    </>
  )
}

export default App
