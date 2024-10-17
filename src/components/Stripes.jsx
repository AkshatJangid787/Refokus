import React from 'react'
import Stripe from './Stripe'

function Stripes() {
    var data = [
        {url: "https://cdn.prod.website-files.com/625e8524a4e1135fbab93b78/625e8524a4e113b5c0b93d07_mural.png", number: 48},
        {url: "https://cdn.prod.website-files.com/625e8524a4e1135fbab93b78/625e8524a4e1134990b93d28_superai.png", number: 2},
        {url: "https://cdn.prod.website-files.com/625e8524a4e1135fbab93b78/625e8524a4e1138207b93d2b_Rocketchat.png", number: 11},
        {url: "https://cdn.prod.website-files.com/625e8524a4e1135fbab93b78/625e8524a4e113de2fb93d2c_haufe.png", number: 48},
        {url: "https://cdn.prod.website-files.com/625e8524a4e1135fbab93b78/625e8524a4e11332e1b93d26_maxxis.png", number: 2},
        {url: "https://cdn.prod.website-files.com/625e8524a4e1135fbab93b78/625e8524a4e1135966b93d24_rentspree.png", number: 11},
    ]
  return (
    <div className='flex items-center mt-20'>
        {data.map((elem, index)=>(
            <Stripe val={elem}/>
        ))}
    </div>
  )
}

export default Stripes