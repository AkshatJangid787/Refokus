import React from 'react';
import { IoIosReturnRight } from 'react-icons/io';

function Button({ title = "Get Started" }) {
  return (
    <div className='min-w-28 sm:min-w-30 md:min-w-52 px-2 sm:px-4 py-1 sm:py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
      <span className='text-xs sm:text-sm md:text-base font-medium'>{title}</span>
      <IoIosReturnRight className='ml-2 text-base sm:text-lg md:text-xl' />
    </div>
  );
}

export default Button;
