import React from 'react'

const Things = () => {
  return (
    <div className='relative w-full h-[50%] bg-[#02bdd5] p-[3.5rem] my-20'>
        <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col justify-center items-center text-center  mx-auto md:w-[80%]">
                <h2 className='text-4xl text-[#fff] my-8'>SO WHAT YOU THINK ?</h2>
                <p className='text-2xl   text-[#fff] my-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
                    possimus commodi, fugiat magnam temporibus vero magni recusandae? 
                    Dolore, maxime praesentium</p>
                    <button className='text-xl bg-[#fff] text-[#000] py-4 uppercase px-16   hover:bg-[#02bdd5] outline-white border-white'>Contact with me</button>
            </div>
        </div>
    </div>
  )
}

export default Things