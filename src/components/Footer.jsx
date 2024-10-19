import React from 'react'
import { SiSolana } from "react-icons/si";


function Footer() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
        <div className='basis-1/2'>
           <h1 className='text-[12rem] font-semibold leading-none tracking-tight'>refokus.</h1>
        </div>
        <div className='basis-1/2 flex gap-4 '>
               <div className='basis-1/3'>
                <h4 className='mb-10 text-zinc-600'>Socials</h4>
                {["Instagram", "twitter (x?)", "LinkeddIn"].map((item, index)=><a className='block mt-2 capitalize text-zinc-600'>{item}</a>)}
               </div>
               <div className='basis-1/3'>
                <h4 className='mb-10 text-zinc-600'>Sitemap</h4>
                {["Home", "Work", "Careers", "Contact"].map((item, index)=><a className='block mt-2 capitalize text-zinc-300'>{item}</a>)}
               </div>
               <div className='basis-1/2 flex flex-col items-end'>
                <p className='text-right'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                <button className='py-2 px-4 bg-blue-600 mt-10 rounded-xl flex items-center gap-2 cursor-not-allowed'> <SiSolana/> Enterprise Partner</button>
               </div>
         </div>
         
      </div>
    </div>
  )
}

export default Footer