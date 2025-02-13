import { useState } from 'react'
import {BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
      {/* <Route path="/Category/EditCategory" element={<Navbar/>}/> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
