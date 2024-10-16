import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center'>
        <img className='w-[5rem]' src={logo} alt="" />
        <div className='links flex gap-14 ml-24 pt-1'>
            {["Home", "Work", "Culture"].map(elem => <a className='flex items-center gap-1' href='#'>
                <span className='inline-block w-1 h-1 rounded-full bg-green-500 mb-1'></span>
                {elem}</a>)}
        </div>
    </div>
  )
}

export default Navbar