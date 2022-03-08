import React, { useState, useEffect } from 'react';

import image1 from '../Assets/1.png'
import image2 from '../Assets/2.png'
import image3 from '../Assets/3.png'

const slideImages = [
  {
    url: '1.png',
    caption: 'Slide 1'
  },
  {
    url: '2.png',
    caption: 'Slide 2'
  },
  {
    url: '3.png',
    caption: 'Slide 3'
  },
];

function ImageSlider() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        
        }, 10000);
        return () => clearInterval(interval);
    }, []);

  return (
     <div className=''>
        <div className='w-screen h-fit bg-cover bg-center' style={{ backgroundImage: `url( ${image1.src} )`}}>
            <div className='w-screen h-screen bg-gradient-to-l from-transparent to-black/40 flex justify-center flex-col p-20' >
                <div className='text-white font-medium text-6xl -mt-40 '>
                    <p  className='break-inside-auto'>
                    ХӨГЖМИЙН
                    </p>
                    <p>
                    ЗАСВАР
                    </p>
                </div>
                <div className='tracking-widest text-gray-300 font-thin text-sm pt-10'>
                    <p className='break-inside-auto'>
                  Та хайртай хөгжимдөө шаардлагатай 
                  </p>
                  <p>
                  засвар үйлчилгээг нь хийлгэсэн үү?
                  </p>
                </div>
                <div className='transition-all duration-300 ease-in-out border border-white mt-10 w-40 h-12 flex items-center justify-center rounded-lg text-white cursor-default hover:bg-white/10 hover:text-white hover:translate-x-2'>
                    <p className='p-2  font-medium opacity-80'>Дэлгэрэнгүй </p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                </div>
                <div className='absolute inset-x-0 bottom-16  flex w-72 items-center justify-around'>
                    <div className='w-20 h-0.5 bg-red-500'>
                    </div>
                    <div className='w-20 h-0.5 bg-gray-300'>
                    </div>
                    <div className='w-20 h-0.5 bg-gray-300'>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-screen h-fit bg-cover bg-center' style={{ backgroundImage: `url( ${image2.src} )`}}>
            <div className='w-screen h-screen bg-gradient-to-l from-black/20 to-black/10 flex justify-center flex-col items-end p-20' >
                <div className=' text-white font-medium text-6xl -mt-40 text-right'>
                     <p  className='break-inside-auto'>
                    ХӨГЖМИЙН 
                    </p>
                    <p>
                    АКАДЕМИ
                    </p>
        
                </div>
                <div className='tracking-widest text-gray-400 font-thin text-sm pt-10 text-right'>
                    <p className='break-inside-auto'>
                        Хүн бүр хөгжимчин болох ёсгүй ч
                    </p>
                    <p className='break-inside-auto'>
                        Хүн бүрт хөгжмийн боловсрол хэрэгтэй
                    </p>
                    <p className='font-medium'>
                        П.Даваацэрэн
                    </p>
                </div>
                <div className='transition-all duration-300 ease-in-out border border-white mt-10 w-40 h-12 flex items-center justify-center rounded-lg text-white cursor-default hover:bg-white/10 hover:text-white hover:translate-x-2'>
                    <p className='p-2  font-medium opacity-80'>Дэлгэрэнгүй </p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className='w-screen h-fit bg-cover bg-center' style={{ backgroundImage: `url( ${image3.src} )`}}>
            <div className='w-screen h-screen flex justify-center flex-col p-20' >
                <div className='text-gray-700 font-medium text-6xl -mt-10 '>
                    <p  className='break-inside-auto'>
                    ХӨГЖМИЙН
                    </p>
                    <p>
                    ДЭЛГҮҮР
                    </p>
                </div>
                <div className='tracking-widest text-gray-600 font-thin text-sm pt-10'>
                    <p className='break-inside-auto'>
                Enya Guitars Mongolia | NUX Mongolia
                  </p>
                </div>
                <div className='transition-all duration-300 ease-in-out border border-gray-500 mt-10  w-40 h-12 flex items-center justify-center rounded-lg text-gray-500 cursor-default hover:bg-gray-500/10 hover:translate-x-2'>
                    <p className='p-2 font-medium'>Дэлгэрэнгүй </p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageSlider;