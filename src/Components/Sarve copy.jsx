import React from 'react'
import {AiTwotoneHome} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Sarve = () => {
  return (
    <div className=' w-full  bg-[#02bdd5] relative p-[2%] top-16  '>
        <div >
            <div className='flex flex-col justify-center items-center mt-4 '>
                <h2 className='text-[#fff] text-6xl font-bold pt-8 pb-4'>SERVICE</h2>
                <div className=' '>
                  <div className='flex items-center text-[#fff] pt-4 pb-[1.7rem] text-center'>
                      <AiTwotoneHome className='mr-1 text-xl '/>
                      <Link to="/"className='mr-4 text-xl ' >Home</Link>
                      <p className='mr-4 text-xl' >/</p>
                  <p className='text-xl'> About</p>
                  </div>
                 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sarve