import React from 'react'
import Navbar from '../Components/Navbar'
import ConForm from '../Components/ConForm'
import ServeContact1 from '../Components/ServeContact1'
import Footer from '../Components/Footer'
import Things from '../Components/Things'

const Contact = () => {
  return (
    <div className=''>
       <Navbar/>
       <ServeContact1/>
       <ConForm/>
       <Things/>
       <Footer/>
       
    </div>
  )
}

export default Contact