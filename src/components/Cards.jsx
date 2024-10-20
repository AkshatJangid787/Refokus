import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto py-20 flex flex-col lg:flex-row gap-6'>
        <Card width={"lg:basis-1/3"} start={false} para={true} />
        <Card width={"lg:basis-2/3"} start={true} para={false} hover="true" />
      </div>
    </div>
  )
}

export default Cards;
