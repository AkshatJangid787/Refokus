import { motion } from 'framer-motion';
import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

function Card({ width, start, para, hover = "false" }) {
  return (
    <motion.div 
      whileHover={{
        backgroundColor: hover === "true" && "#7443ff", 
        padding: hover === "true" && "25px"
      }} 
      className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[25rem] flex flex-col justify-between`}
    >
      {/* Card Heading Section */}
      <div className='w-full'>
        <div className='w-full flex justify-between items-center'>
          <h3 className='text-lg sm:text-xl lg:text-2xl'>One Heading</h3>
          <IoIosArrowRoundForward className='text-lg sm:text-2xl'/>
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-medium mt-5'>
          Whatever Heading.
        </h1>
      </div>

      {/* Card Content Section */}
      <div className='down w-full mt-auto'>
        {start && (
          <div>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-none'>
              Start a project
            </h1>
            <button className='rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50'>
              Contact Us
            </button>
          </div>
        )}
        {para && (
          <p className='text-sm sm:text-base text-zinc-500 font-medium'>
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default Card;
