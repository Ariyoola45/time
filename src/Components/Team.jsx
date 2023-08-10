import React from 'react'
import term1 from  '../images/team/team-1.jpg'
import term2 from  '../images/team/team-2.jpg'
import term3 from  '../images/team/team-3.jpg'
import term4 from  '../images/team/team-4.jpg'
import{FaFacebookF , FaTwitter ,FaLinkedinIn ,FaGooglePlusG} from 'react-icons/fa'

const Team = () => {
  return (
    <div className='w-full h-full relative mt-4  left-0  py-10 '>
        <div className='max-w-[1440px] mx-auto'>
            <div className='flex flex-col  items-center justify-center mx-auto'>
                <h3 className='text-3xl font-bold'>MEET THE TEAM</h3>
                </div>
                <div className="grid mt-8 md:grid-cols-4" >
                    <div className="py-8  ">
                        <img src={term1} alt="human "className='w-full md:w-[315px] ' />
                        <p className='text-[#02bdd5] text-2xl'>Jonathon Andrew</p>
                        <span className='text-xl'>CEO, Project Manager</span>
                        <p className=' text-[1.1rem] mt-6 mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                        </p>
                        <div className="flex">
                        <FaFacebookF className='bg-[#02bdd5] text-[#fff] p-[.19rem]   text-2xl cursor-pointer' />
                        <FaTwitter className='bg-[#02bdd5] text-[#fff] p-[.19rem] ml-4 text-2xl cursor-pointer' />
                        <FaLinkedinIn className='bg-[#02bdd5] text-[#fff] p-[.19rem] ml-4 text-2xl cursor-pointer'  />
                        <FaGooglePlusG className='bg-[#02bdd5] text-[#fff] p-[.19rem] ml-4 text-2xl cursor-pointer' /> 
                         </div>
                    </div>
                    <div className="py-8  ">
                        <img src={term2} alt="human "className='w-full md:w-[315px] '  />
                        <p className='text-[#02bdd5] text-2xl'>Jonathon Andrew</p>
                        <span className='text-xl'>CEO, Project Manager</span>
                        <p className=' text-[1.1rem] mt-6 mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                        </p>
                        <div className="flex">
                        <FaFacebookF className='bg-[#02bdd5] text-[#fff] p-[.19rem]   text-2xl cursor-pointer' />
                        <FaTwitter className='bg-[#02bdd5] text-[#fff] p-[.19rem] ml-4 text-2xl cursor-pointer' />
                        <FaLinkedinIn className='bg-[#02bdd5] text-[#fff] p-[.19rem] ml-4 text-2xl cursor-pointer'  />
                        <FaGooglePlusG className='bg-[#02bdd5] text-[#fff] p-[.19rem] ml-4 text-2xl cursor-pointer' /> 
                         </div>
                    </div>
                    <div className="py-8  ">
                        <img src={term3} alt="human "className='w-full md:w-[315px] ' />
                        <p className='text-[#02bdd5] text-2xl'>Jonathon Andrew</p>
                        <span className='text-xl'>CEO, Project Manager</span>
                        <p className=' text-[1.1rem] mt-6 mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                        </p>
                        <div className="flex">
                        <FaFacebookF className='bg-[#02bdd5] text-[#fff] p-[.19rem]   text-2xl cursor-pointer' />
                        <FaTwitter className='bg-[#02bdd5] text-[#fff] p-[.19rem] ml-4 text-2xl cursor-pointer' />
                        <FaLinkedinIn className='bg-[#02bdd5] text-[#fff] p-[.19rem] ml-4 text-2xl cursor-pointer'  />
                        <FaGooglePlusG className='bg-[#02bdd5] text-[#fff] p-[.19rem] ml-4 text-2xl cursor-pointer' /> 
                         </div>
                    </div>
                    <div className="py-8  ">
                        <img src={term4} alt="human " className='w-full md:w-[315px]'/>
                        <p className='text-[#02bdd5] text-2xl'>Jonathon Andrew</p>
                        <span className='text-xl'>CEO, Project Manager</span>
                        <p className=' text-[1.1rem] mt-6 mb-4'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                        </p>
                        <div className="flex">
                        <FaFacebookF className='bg-[#02bdd5] text-[#fff] p-[.19rem]   text-2xl cursor-pointer' />
                        <FaTwitter className='bg-[#02bdd5] text-[#fff] p-[.19rem] ml-4 text-2xl cursor-pointer' />
                        <FaLinkedinIn className='bg-[#02bdd5] text-[#fff] p-[.19rem] ml-4 text-2xl cursor-pointer'  />
                        <FaGooglePlusG className='bg-[#02bdd5] text-[#fff] p-[.19rem] ml-4 text-2xl cursor-pointer' /> 
                         </div>
                    </div>
                </div>
            
        </div>
    </div>
  )
}

export default Team