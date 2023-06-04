import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Aboutme from '../Components/Aboutme'
import Latest from '../Components/Latest'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Aboutme/>
      <Latest/>
    </div>
  )
}

export default Home