import React from 'react'
import {FaRegNewspaper} from  'react-icons/fa'
import img1 from "../images/team.jpg"

// import { useEffect ,useState } from 'react'

const Love = () => {
  

  return (
    <div className='w-full h-[100%] relative top-16 py-[7rem] '>
        <div className="max-w-[1440px] mx-auto">
          <div className="w-[100%] md:w-[60%]">
            <h2 className='font-bold text-2xl mb-4  '>WHAT WE LOVE TO DO</h2>
            <p className='text-xl mb-8 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Perspiciatis porro recusandae non quibusdam iure adipisci.</p>
          </div>
          <div className="grid md:grid-cols-2">
            
                <div className=' w-full order-2 grid md:grid-cols-2 '>
                <div className="w-[100%] text-center md:w-[80%]">
                  <div className="flex flex-col justify-center items-center my-[1.1rem]">
                    <  FaRegNewspaper className='text-6xl text-[#02bdd5]'/>
                  </div>
                  <h3 className='text-2xl  text-gray-800 font-bold '>BRANDING</h3>
                  <p className='text-[1.1rem] mt-[.7rem] text-gray-400'>Veritatis eligendi, dignissimos. Porta fermentum mus 
                    aute pulvinar earum minus platea massa feugiat rutrum urna facilisi ipsameum</p>
                </div>
                <div className="w-[100%] order-3 text-center md:w-[80%]">
                  <div className="flex flex-col justify-center items-center my-[1.1rem]">
                    <  FaRegNewspaper className='text-6xl text-[#02bdd5]'/>
                  </div>
                  <h3 className='text-2xl text-gray-800 font-bold '>BRANDING</h3>
                  <p className='text-[1.1rem] mt-[.7rem] text-gray-400'>Veritatis eligendi, dignissimos. Porta fermentum mus 
                    aute pulvinar earum minus platea massa feugiat rutrum urna facilisi ipsameum</p>
                </div>
                <div className="w-[100%] order-4 text-center md:w-[80%]">
                  <div className="flex flex-col justify-center items-center my-[1.1rem]">
                    <  FaRegNewspaper className='text-6xl text-[#02bdd5]'/>
                  </div>
                  <h3 className='text-2xl  text-gray-800 font-bold '>BRANDING</h3>
                  <p className='text-[1.1rem] mt-[.7rem] text-gray-400'>Veritatis eligendi, dignissimos. Porta fermentum mus 
                    aute pulvinar earum minus platea massa feugiat rutrum urna facilisi ipsameum</p>
                </div>
                <div className="w-[100%] order-5 text-center md:w-[80%]">
                  <div className="flex flex-col justify-center items-center my-[1.1rem]">
                    <  FaRegNewspaper className='text-6xl text-[#02bdd5]'/>
                  </div>
                  <h3 className='text-2xl text-gray-800 font-bold '>BRANDING</h3>
                  <p className='text-[1.1rem] mt-[.7rem] text-gray-400'>Veritatis eligendi, dignissimos. Porta fermentum mus 
                    aute pulvinar earum minus platea massa feugiat rutrum urna facilisi ipsameum</p>
                </div>
                </div>
                <div className="sm:order-1 md:order-5">
                    <img src={img1} alt="" />
                </div>
               
          </div>
        </div>
    </div>
  )
}

export default Love