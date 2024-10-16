import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marques from './components/Marques'

function App() {
  return (
    <div className='w-full h-full bg-zinc-900 font-[satoshi] text-slate-100'>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marques/>
    </div>
  )
}

export default App