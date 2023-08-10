import React from 'react'
import Logo from '../images/logo.png'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'



import { Link } from 'react-router-dom'

import { useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Navbar = () => {

    const [Click, setClick] = useState(false)


    
    const handle = ()=>{
        setClick(!Click)
    }
  return (
    <div className='  w-full h-[100px] fixed border-b px-8 top-0 left-0  bg-[#fff] z-[5]'>
        <div className='md:max-w-[1440px] p-4 mx-auto'>

        
        <div className="flex justify-between   " >
            <img src={Logo} alt="" />
            <ul className=' hidden md:flex justify-center items-center '>
                <li className='p-4' >
                    <Link className= 'text-xl' to="/"> Home </Link>
                </li>
                <li className='p-4' >
                    <Link  className= 'text-xl'to="/Service"> Service </Link>
                </li>
                <li className='p-4' >
                    <Link  className= 'text-xl'to="/About "> About </Link>
                </li>
            
                <li className='p-4'>
                    <Link  className= 'text-xl' to="Contact"> Contact </Link>
                </li>
            </ul>
            <div onClick={handle} className="block md:hidden ">
                    {/* <AiOutlineMenu  className='text-xl z-10 '/> */}
                    {!Click  ? <AiOutlineMenu  className='text-2xl z-10'/> :<AiOutlineClose  className='text-2xl z-10 '/>}

            </div>
        <div className={Click ? 'fixed left-0 top-20 w-full h-[55%] bg-gray-50 ease-in-out duration-700': 'fixed top-[-100%] '}>
            <ul className='pt-24 uppercase  pl-5'>
                <li className='p-4' >
                    <Link className= 'text-xl' to="/"> Home </Link>
                </li>
                <li className='p-4' >
                    <Link  className= 'text-xl'to="/Service"> Service </Link>
                </li>
                <li className='p-4' >
                    <Link  className= 'text-xl'to="/About"> About </Link>
                </li>
                
               


     
               
                
                <li className='p-4'>
                    <Link  className= 'text-xl' to="Contact"> Contact </Link>
                </li>
            </ul>
            </div>
     </div>
        </div>
    </div>
  )
}

export default Navbar