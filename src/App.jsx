import { useState } from 'react'
import {BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar />
      <Home />
      <Routes>
        
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
