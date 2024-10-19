import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-20 flex gap-3'>
             <Card/>
             <Card/>
        </div>
    </div>
  )
}

export default Cards