import React from 'react'
import { Link, Links, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import About from './Pages/AboutUs/About'
import DigitalIdentity from './Pages/DigitalIdentity/DigitalIdentity'
import ContactUs from './Pages/ContactUsPage/ContactUs'

const App = () => {
  return (
    <div>     
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='aboutus' element={<About/>}/>
        <Route path='digitalIdentity' element={<DigitalIdentity/>}/>
        <Route path='contactUs' element={<ContactUs/>}/>

 
        
      </Routes>
    </div>
  )
}




export default App