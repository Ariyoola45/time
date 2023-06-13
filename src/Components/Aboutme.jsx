import React from 'react'
import about from '../images/about/about.jpg'
const Aboutme = () => {
  return (
    <div className=' w-full h-full  bg-wh p-10 mt-20' >
        <div className='max-w-[1340px] mx-auto'>
           <div className='flex flex-col justify-center items-center' >
           <div className=' xl:grid-cols-2 md:grid'>
                <div className='mt-10 mr-3 pr-2' >
                     <h2 className='text-3xl font-bold  mb-14'>ABOUT ME</h2>
                     <p className='text-[1.3rem] text-gray-400 mb-14 '>Hello, I’m a UI/UX Designer & Front End Developer from Victoria, Australia.
                         I hold a master degree of Web Design from the World
                         University.And scrambled it to make a type specimen book. I
                         t has survived not only five centuries
                     </p>
                     <p className='text-[1.3rem] text-gray-400 mb-14'>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, adipisci voluptatum repudiandae,
                      natus impedit repellat aut officia illum at assumenda iusto reiciendis placeat.
                       Temporibus, vero.
                     </p>
                </div>
                <div className='mt-10 ml-3 pl-2'> 
                    <img src={about} alt="" />
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Aboutme