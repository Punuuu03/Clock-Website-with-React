import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Products  from './components/Products/Products'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <>
     <div>
        <Router>
        <Navbar/>
        
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/products" element={<Products/>} />
            <Route exact path="/contact" element={<Contact/>} />
         </Routes>
         
        </Router>
        
      </div>
    </>
  )
}
export default App
