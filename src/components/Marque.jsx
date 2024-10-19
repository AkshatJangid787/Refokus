import React from 'react';

function Marque({ imagesurls }) {
  return (
    <div className='flex w-full py-6 gap-20 whitespace-nowrap overflow-hidden '>
      {imagesurls.map(url => <img src={url} className='invert w-[10vw] flex-shink-0'/>)}
      {imagesurls.map(url => <img src={url} className='invert w-[10vw] flex-shrink-0'/>)}
    </div>
  );
}

export default Marque;
