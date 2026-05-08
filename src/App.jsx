import { BrowserRouter, Routes, Route } from 'react-router'
import { About } from './pages/About'

import './App.css'
import { Footer } from './components/Footer'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
     
    </>
  )
}

export default App
