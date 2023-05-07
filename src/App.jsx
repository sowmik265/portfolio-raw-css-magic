import React from 'react'
import { Header } from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
// import Testimonial from './components/Testimonials/Testimonial'
import COntact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
// import './index.css'

const App = () => {
  return (
    <>
    <Header></Header> 
    <Nav></Nav>
    <About></About>
    <Experience></Experience>
    <Services></Services>
    <Portfolio></Portfolio>
    {/* <Testimonial></Testimonial> */}
    <COntact></COntact>
    <Footer></Footer>
    </>
  )
}

export default App