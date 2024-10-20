import React from 'react';
import Marque from './Marque';

function Marques() {
  
  var images = [
    [
    "https://cdn.prod.website-files.com/625e8524a4e1135fbab93b78/625e8524a4e113b5c0b93d07_mural.png",
    "https://cdn.prod.website-files.com/625e8524a4e1135fbab93b78/625e8524a4e1134990b93d28_superai.png",
    "https://cdn.prod.website-files.com/625e8524a4e1135fbab93b78/625e8524a4e1138207b93d2b_Rocketchat.png",
    "https://cdn.prod.website-files.com/625e8524a4e1135fbab93b78/625e8524a4e113de2fb93d2c_haufe.png",
    "https://cdn.prod.website-files.com/625e8524a4e1135fbab93b78/625e8524a4e11332e1b93d26_maxxis.png",
    "https://cdn.prod.website-files.com/625e8524a4e1135fbab93b78/625e8524a4e1135966b93d24_rentspree.png"
    ],
    [
      "https://cdn.prod.website-files.com/625e8524a4e1135fbab93b78/625e8524a4e113b5c0b93d07_mural.png",
      "https://cdn.prod.website-files.com/625e8524a4e1135fbab93b78/625e8524a4e1134990b93d28_superai.png",
      "https://cdn.prod.website-files.com/625e8524a4e1135fbab93b78/625e8524a4e1138207b93d2b_Rocketchat.png",
      "https://cdn.prod.website-files.com/625e8524a4e1135fbab93b78/625e8524a4e113de2fb93d2c_haufe.png",
      "https://cdn.prod.website-files.com/625e8524a4e1135fbab93b78/625e8524a4e11332e1b93d26_maxxis.png",
      "https://cdn.prod.website-files.com/625e8524a4e1135fbab93b78/625e8524a4e1135966b93d24_rentspree.png"
      ]
  ];


  return (
    <div className='py-20 w-full relative overflow-hidden'>
      {images.map((item, index) => <Marque key={index} direction={index === 0 ? "left" : "right"} imagesurls={item} />)}
    </div>
  );
}

export default Marques;
