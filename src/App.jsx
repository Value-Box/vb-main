import { useState } from 'react'
import {BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
      {/* <Route path="/Category/EditCategory" element={<Navbar/>}/> */}
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
