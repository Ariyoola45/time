import React from 'react'
import Imgz from '../images/about/about-company.jpg'

const Differ = () => {
  return (
    <div className='w-full h-[60%] relative top-24 bottom-24 py-16 '>
        <div className="max-w-[1330px] mx-auto">
            <div className="w-[100%] flex flex-col justify-center items-center mx-auto">
                <div className="grid gap-10 md:grid-cols-2">
                        <div className="">
                            <img src={Imgz} alt="office images"  />
                        </div>
                        <div className="">
                            <h2 className='text-3xl mb-4 font-bold'>WHY WE ARE DIFFERENT</h2>
                            <p className='text-[1.17rem] mb-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                               totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                 odit aut fugit, sed quia consequun. Lorem ipsum dolor sit amet, 
                              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                              labore et dolore magna aliqua</p>
                              <p className='text-[1.19rem] mb-4'>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
                                 saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Differ