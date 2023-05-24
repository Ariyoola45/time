import React from 'react'
import Logo from '../images/logo.png'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'


import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

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
    <div className='  w-full h-[100px] fixed border-b p-8  bg-white '>
        <div className='xl:max-w-[1440px] mx-auto'>

        
        <div className="flex justify-between   " >
            <img src={Logo} alt="" />
            <ul className=' hidden md:flex justify-center items-center '>
                <li className='p-4' >
                    <a className= 'text-xl' href="/"> Home </a>
                </li>
                <li className='p-4' >
                    <a  className= 'text-xl'href="/"> Service </a>
                </li>
                <li className='p-4' >
                <Menu as='div' className="relative inline-block text-left">
         <Menu.Button>
              <a  className= 'text-xl'href="/">Blog</a>
                 </Menu.Button>
         <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
                        >
    <Menu.Items  className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md
     bg-black shadow-lg  focus:outline-none">
        <div className="py-1">
            <Menu.Item>
                    {({ active }) => (
                        <a
                            href="#"
                                className={classNames(
                                active ? 'bg-gray-800 text-gray-100' : 'text-gray-100',
                                'block px-4 py-2 text-sm'
                                )}
                                >
                                Page 404
                                </a>
                            )}
                                
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            href="#"
                                className={classNames(
                                active ? 'bg-gray-800 text-gray-100' : 'text-gray-100',
                                'block px-4 py-2 text-sm'
                                )}
                                >
                                Gallery Page
                                </a>
                            )}
                                
                </Menu.Item>
        </div>

     </Menu.Items>
                        </Transition>
                    </Menu>
                </li>
                <li className='p-4' >
<Menu as='div' className="relative inline-block text-left">
         <Menu.Button>
              <a className= 'text-xl' href="/">Page</a>
                 </Menu.Button>
         <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
                        >
    <Menu.Items  className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md
     bg-black shadow-lg  focus:outline-none">
        <div className="py-1">
            <Menu.Item>
                    {({ active }) => (
                        <a
                            href="#"
                                className={classNames(
                                active ? 'bg-gray-800 text-gray-100' : 'text-gray-100',
                                'block px-4 py-2 text-sm'
                                )}
                                >
                                Page 404
                                </a>
                            )}
                                
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            href="#"
                                className={classNames(
                                active ? 'bg-gray-800 text-gray-100' : 'text-gray-100',
                                'block px-4 py-2 text-sm'
                                )}
                                >
                                Gallery Page
                                </a>
                            )}
                                
                </Menu.Item>
        </div>

     </Menu.Items>
                        </Transition>
                    </Menu>
                </li>
                <li>
                    <a  className= 'text-xl' href="/"> Contact </a>
                </li>
            </ul>
            <div onClick={handle} className="block md:hidden ">
                    {/* <AiOutlineMenu  className='text-xl z-10 '/> */}
                    {!Click ?<AiOutlineClose  className='text-2xl z-10 '/> : <AiOutlineMenu  className='text-2xl z-10'/> }

            </div>
            <div className={!Click ? 'fixed left-0 top-20 w-full h-[50%] bg-gray-50 ease-in-out duration-700': 'fixed top-[-100%] '}>
            <ul className='pt-24 uppercase  pl-5'>
                <li className='p-4' >
                    <a className= 'text-xl' href="/"> Home </a>
                </li>
                <li className='p-4' >
                    <a  className= 'text-xl'href="/"> Service </a>
                </li>
                <li className='p-4' >
                <Menu as='div' className="relative inline-block text-left">
         <Menu.Button>
              <a  className= 'text-xl'href="/">Blog</a>
                 </Menu.Button>
         <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
                        >
    <Menu.Items  className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md
     bg-black shadow-lg  focus:outline-none">
        <div className="py-1">
            <Menu.Item>
                    {({ active }) => (
                        <a
                            href="#"
                                className={classNames(
                                active ? 'bg-gray-800 text-gray-100' : 'text-gray-100',
                                'block px-4 py-2 text-sm'
                                )}
                                >
                                Page 404
                                </a>
                            )}
                                
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            href="#"
                                className={classNames(
                                active ? 'bg-gray-800 text-gray-100' : 'text-gray-100',
                                'block px-4 py-2 text-sm'
                                )}
                                >
                                Gallery Page
                                </a>
                            )}
                                
                </Menu.Item>
        </div>

     </Menu.Items>
                        </Transition>
                    </Menu>
                </li>
                <li className='p-4' >
<Menu as='div' className="relative inline-block text-left">
         <Menu.Button>
              <a className= 'text-xl' href="/">Page</a>
                 </Menu.Button>
         <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
                        >
    <Menu.Items  className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md
     bg-black shadow-lg  focus:outline-none">
        <div className="py-1">
            <Menu.Item>
                    {({ active }) => (
                        <a
                            href="#"
                                className={classNames(
                                active ? 'bg-gray-800 text-gray-100' : 'text-gray-100',
                                'block px-4 py-2 text-sm'
                                )}
                                >
                                Page 404
                                </a>
                            )}
                                
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            href="#"
                                className={classNames(
                                active ? 'bg-gray-800 text-gray-100' : 'text-gray-100',
                                'block px-4 py-2 text-sm'
                                )}
                                >
                                Gallery Page
                                </a>
                            )}
                                
                </Menu.Item>
        </div>

     </Menu.Items>
                        </Transition>
                    </Menu>
                </li>
                <li className='p-4'>
                    <a  className= 'text-xl' href="/"> Contact </a>
                </li>
            </ul>
            </div>
     </div>
        </div>
    </div>
  )
}

export default Navbar