import React from 'react'
import { SiSolana } from "react-icons/si";

function Footer() {
  return (
    <div className='w-full bg-zinc-900 text-white'>
      <div className='max-w-screen-xl mx-auto py-10 px-4 lg:px-0 flex flex-col lg:flex-row gap-10 lg:gap-32'>
      
        <div className='lg:basis-1/2'>
          <h1 className='text-5xl sm:text-7xl md:text-[9rem] lg:text-[12rem] font-semibold leading-none tracking-tight'>
            refokus.
          </h1>
        </div>
        
        <div className='lg:basis-1/2 flex flex-col lg:flex-row gap-10 lg:gap-4'>
          
          <div className='basis-1/3'>
            <h4 className='mb-6 lg:mb-10 text-zinc-600'>Socials</h4>
            {["Instagram", "Twitter", "LinkedIn"].map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className='block mt-2 capitalize text-zinc-600 hover:text-white transition duration-300'
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className='basis-1/3'>
            <h4 className='mb-6 lg:mb-10 text-zinc-600'>Sitemap</h4>
            {["Home", "Work", "Careers", "Contact"].map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className='block mt-2 capitalize text-zinc-300 hover:text-white transition duration-300'
              >
                {item}
              </a>
            ))}
          </div>
       
          <div className='basis-full lg:basis-1/2 flex flex-col items-start lg:items-end'>
            <p className='text-left lg:text-right text-sm lg:text-base mb-4 lg:mb-0'>
              Refokus is a pioneering digital agency driven by design and empowered by technology.
            </p>
            <button className='py-2 px-4 bg-blue-600 mt-4 lg:mt-10 rounded-xl flex items-center gap-2 cursor-not-allowed'>
              <SiSolana /> Enterprise Partner
            </button>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Footer;
