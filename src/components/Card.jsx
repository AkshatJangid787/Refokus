import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

function Card() {
  return (
    <div className='w-1/2 bg-zinc-800 p-5 rounded-xl'>
     <div className='w-full '>
     <div className='w-full flex justify-between items-center'>
            <h3>one heading</h3>
            <IoIosArrowRoundForward/>
        </div>
        <h1 className='3xl font-medium mt-10 '>whatever heading.</h1>
     </div>
     <div className='down w-full mt-52'>
        <h1 className='text-6xl font-semibold tracking-tight leading-none'>start a project</h1>
        <button className='rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50'>Contact Us</button>
        <p className='text-sm text-zinc-500 font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
     </div>
    </div> 
  )
}

export default Card