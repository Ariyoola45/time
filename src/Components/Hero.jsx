import React from 'react'
import './Css/Img.css'
import Typed from 'react-typed'
const Hero = () => {
  return (
    <div className='Img  mx-auto  flex flex-col justify-center items-center   text-center '>
        <div className="max-w-[1300px] flex flex-col justify-center items-center">
        <div className=' w-[100%] flex flex-col justify-center items-center p-8 ' >
        <h2 className='p-4 text-5xl font-bold '>HI, MY NAME IS JONATHON & I AM A</h2>
        <div>
              
 
                <Typed
                strings={[
                    'DEVELOPER',
                    'DESIGNBER',
                    'FATHER']}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    loop className='p-4 text-4xl mb-5 text-[#02bdd5] font-bold'/>
                    
               
            </div>
        <p className='p-4 text-gray-400 mt-5 text-2xl'>WITH 10 YEARS EXPERIENCE, I'VE OCCUPIED MANY ROLES INCLUDING DIGITAL DESIGN DIRECTOR,
            WEB DESIGNER AND DEVELOPER. THIS SITE SHOWCASES SOME OF MY WORK.</p>

            <button className="text-xl py-4 px-6 uppercase mt-14 bg-gray-800 text-gray-50 hover:bg-[#02bdd5] duration-300">
              download more
            </button>
        </div>
        </div>
    </div>
  )
}

export default Hero