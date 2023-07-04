import React from 'react'
import Navbar from '../Components/Navbar'
import Serve from '../Components/Serve'
import Footer from '../Components/Footer'
import Things from '../Components/Things'
import Differ from '../Components/Differ'
import Latest from '../Components/Latest2'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Serve/>
        <Differ/>
        <Latest/>
        <Things/>
        <Footer/>
      
    </div>
  )
}

export default About