import React from 'react'
import{FaFacebookF , FaTwitter ,FaLinkedinIn ,FaGooglePlusG} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full h-[100px] relative'>
        <div className="max-w-[1340px] mx-auto mb-8">
            <div className="grid grid-cols-1   md:flex  justify-between items-center  ">
              
                    <div className="text-center md:text-left ">
                    <p>Copyright: Design and Developed by <a  className='text-[#02bdd5]'   href="https://themefisher.com/" target="_blank">Themefisher</a> </p>
                     <p>Copyright: Get More Bootstrap Template From Our  <a className='text-[#02bdd5]' href="/"  target="_blank" >Store</a> </p>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <FaFacebookF className='text-[#02bdd5] ml-4 text-2xl cursor-pointer' />
                        <FaTwitter className='text-[#02bdd5] ml-4 text-2xl cursor-pointer' />
                        <FaLinkedinIn className='text-[#02bdd5] ml-4 text-2xl cursor-pointer'  />
                        <FaGooglePlusG className='text-[#02bdd5] ml-4 text-2xl cursor-pointer' />
                    </div>
               
            </div>
        </div>
    </div>
  )
}

export default Footer