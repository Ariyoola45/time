import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Aboutme from '../Components/Aboutme'
import Latest from '../Components/Latest'
import Offer from '../Components/Offer'
import Things from '../Components/Things'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Aboutme/>
      <Latest/>
      <Offer/>
      <Things/>
      <Footer/>
    </div>
  )
}

export default Home