import React, { useEffect } from 'react'
import Page1 from '../images/team.jpg'
import { useState } from 'react'
import {db} from '../config/firebase'
import {addDoc, collection} from 'firebase/firestore'



const style = {

  name : `text-xl border py-[0.7rem] px-[.5rem] mb-4 focus:outline-none`,
  Email :  `text-xl border py-[0.7rem] px-[.5rem] mb-4 focus:outline-none`,
  subject : `text-xl border py-[0.7rem] px-[.5rem] mb-4 focus:outline-none`,
  massage :  `text-xl border py-[0.7rem] px-[.5rem] mb-4 focus:outline-none`,
  Submit : `text-xl border bg-[#02bdd5] text-[#fff] px-[1.2rem] py-[.5rem] `
}

const ConForm = () => {
    const [Name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const submit = async (e) =>{
      await e.preventDefault()

      const dataRef = collection(db , 'contact') 

      try{
       await addDoc(dataRef , {
          name: Name,
          email:email,
          subject:subject,
          message:message



        })
         
      }catch(err){
        console.log(err)
      }

      alert('massage has been submitted ')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      }
      
  useEffect(() => {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }, [])
  
        
   
  return (
    <div className='w-full h-full relative p-16 mt-[5rem]'>
        <div className="max-w-[1440px] mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
                <div className=" ">
                        <h3 className="text-3xl font-bold  my-4 "> CONTACT WITH ME</h3>
                        <p className='text-gray-500 text-xl mb-8'>Lorem ipsum dolor sit met, 
                            consectetur adipisicing elit. Dolore, ea! consectetur adipisicing elit.
                             Dolore, ea!</p>
                        <form 
                        action="#" 
                        className=' flex flex-col '
                        // onClick={submit}
                        >
                            <input 
                            type="text" 
                            name=' name ' 
                            placeholder='Your Name ' 
                            className={style.name} 
                            onChange={(e) => setName(e.target.value)}
                            />
                            <input 
                            type="email" 
                            name="email"
                             id="email" 
                             placeholder='Your Email' 
                             className={style.Email} 
                             onChange={(e) => setEmail(e.target.value)}
                             />
                            <input 
                            type="text" 
                            name='Subject ' 
                            placeholder='Subject' 
                            className={style.subject}
                            onChange={(e) => setSubject(e.target.value)}
                            />
                            <textarea name="" 
                            id="" cols="30" 
                            rows="10" 
                            placeholder='Message' 
                            className={style.massage}
                            onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <div>
                            <button 
                             className={style.Submit}
                            onClick={submit}
                            >Submit
                              </button>
                            </div>
                        </form>
                </div>
                <div className="">
                      <h3 className="text-3xl font-bold  my-4 "> FIND US</h3>
                        <p className='text-gray-500 text-xl mb-8'>Si aute quis eu proident o cupidatat ne anim nescius, et
                         est praesentibus, o quorum vidisse expetendis, nostrud eram quibusdam
                          ad nam nostrud ubi.</p>
                          <img src={Page1} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConForm