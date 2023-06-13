import React from 'react'
import iten1 from '../images/portfolio/item-1.jpg'
import iten2 from '../images/portfolio/item-2.jpg'
import iten3 from '../images/portfolio/item-3.jpg'
import iten4 from '../images/portfolio/item-4.jpg'
import iten5 from '../images/portfolio/item-5.jpg'
import iten6 from '../images/portfolio/item-6.jpg'

const Latest = () => {
  return (
    <div className='w-full h-full relative  mb-[10rem] '>
        <div className='max-w-[1440px] mx-auto'>
            <div className='flex flex-col justify-center items-center ' >
                  <div className='w-[80%] text-center mt-60 mb-10'>
                  <h2 className="text-4xl font-Roboto  "> LATEST WORKS </h2>
                    <p className='mt-5 text-gray-400 text-[1.1rem]'>      
                        Aliquam lobortis. Maecenas vestibulum mollis diam. Pellentesque auctor neque nec urna.
                             Nulla sit amet est. Aenean posuere
                             tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna
                                dolor sagittis lacus
                      </p>
                  </div>
                <div className='grid md:grid-cols-3 mt-10 gap-8  '>
                        <div className=' w-full shadow-xl hover:scale-105 duration-300 '>
                            <img className='' src={iten1} alt="" />
                            <div  className='p-4 bg-[#fff]'>
                                <a className='text-[#02bdd5] text-2xl font-bold' href="/">Dew Drop</a>
                                <p className='text-xl text-'>Redesigne UI Concept</p>
                            </div>
                        </div>
                        <div className=' w-full shadow-xl hover:scale-105 duration-300 '>
                            <img className='' src={iten2} alt="" />
                            <div  className='p-4 bg-[#fff]'>
                                <a className='text-[#02bdd5] text-2xl font-bold' href="/">Dew Drop</a>
                                <p className='text-xl text-'>Redesigne UI Concept</p>
                            </div>
                        </div>
                        <div className='w-full shadow-xl  hover:scale-105 duration-300 '>
                            <img className='' src={iten3} alt="" />
                            <div  className='p-4 bg-[#fff]'>
                                <a className='text-[#02bdd5] text-2xl font-bold' href="/">Dew Drop</a>
                                <p className='text-xl text-'>Redesigne UI Concept</p>
                            </div>
                        </div>
                        <div className='w-full shadow-xl hover:scale-105 duration-300 '>
                            <img className='' src={iten4} alt="" />
                            <div  className='p-4 bg-[#fff]'>
                                <a className='text-[#02bdd5] text-2xl font-bold' href="/">Dew Drop</a>
                                <p className='text-xl text-'>Redesigne UI Concept</p>
                            </div>
                        </div>
                        <div className='w-full shadow-xl hover:scale-105 duration-300 '>
                            <img className='' src={iten5} alt="" />
                            <div  className='p-4 bg-[#fff]'>
                                <a className='text-[#02bdd5] text-2xl font-bold' href="/">Dew Drop</a>
                                <p className='text-xl text-'>Redesigne UI Concept</p>
                            </div>
                        </div>
                        <div className='w-full shadow-xl hover:scale-105 duration-300'>
                            <img className='' src={iten6} alt="" />
                            <div  className='p-4 bg-[#fff]'>
                                <a className='text-[#02bdd5] text-2xl font-bold' href="/">Dew Drop</a>
                                <p className='text-xl text-'>Redesigne UI Concept</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Latest