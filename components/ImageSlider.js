import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useRouter } from 'next/router'


import { mn } from '../locales/SlideImagesText';
import { en } from '../locales/SlideImagesText';
import { cn } from '../locales/SlideImagesText';

import image1 from '../Assets/1.png'
import image2 from '../Assets/2.png'
import image3 from '../Assets/3.png'


function ImageSlider() {
    const router = useRouter();
    const t = router.locale === 'en' ? en : router.locale === 'cn' ?  cn : mn;
    console.log(t)
    const slideImages = [
    {
        bgImage:`${image1.src}`,
        url:"../service/store",
        class1: "",
        class2:"text-gray-700 -mt-40 ",
        class3: " border-gray-500 text-gray-500 hover:bg-gray-500/10",
        class4: "text-gray-600",
        class5: '',
        text0: `${t.text0}`,
        text1: `${t.text1.slide1}`,
        text2: `${t.text2.slide1}`,
        text3: `${t.text3.slide1}`,
        text4: `${t.text4.slide1}`,
        text5: `${t.text5}`,
    },
    {
        bgImage:`${image2.src}`,
         url:"../service/academy",
        class1: "bg-gradient-to-l from-black/20 to-black/10 items-end" ,
        class2:" -mt-40 text-right text-white ",
        class3: "border-white text-white hover:bg-white/10 hover:text-white",
        class4: "text-gray-400 text-right",
        class5: 'font-medium',
        text0: `${t.text0}`,
        text1: `${t.text1.slide2}`,
        text2: `${t.text2.slide2}`,
        text3: `${t.text3.slide2}`,
        text4: `${t.text4.slide2}`,
        text5: `${t.text5}`,
    },
    {
        bgImage:`${image3.src}`,
        url:"../service/services",
        class1: "bg-gradient-to-l from-transparent to-black/40",
        class2:"-mt-40 text-white",
        class3: "border-white text-white cursor-default hover:bg-white/10 hover:text-white ",
        class4: 'text-gray-300',
        class5: '',
        text0: `${t.text0}`,
        text1: `${t.text1.slide3}`,
        text2: `${t.text2.slide3}`,
        text3: `${t.text3.slide3}`,
        text4: `${t.text4.slide3}`,
        text5: `${t.text5}`,
    },
];
    return (
     <div className=''>
         <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className='w-screen h-screen bg-cover bg-center z-10' style={{'backgroundImage': `url(${slideImage.bgImage}`}}>
                <div className={`w-screen h-screen flex justify-center flex-col p-20 ${slideImage.class1}`} >
                    <div className={`font-medium text-6xl ${slideImage.class2}`}>
                        <p  className='break-inside-auto'>
                       {slideImage.text0}
                        </p>
                        <p>
                        {slideImage.text1}
                        </p>
                    </div>
                <div className={`tracking-widest font-thin text-sm pt-10 ${slideImage.class4}`}>
                    <p className='break-inside-auto'>
                        {slideImage.text2}
                    </p>
                    <p className='break-inside-auto'>
                      {slideImage.text3}
                    </p>
                    <p className={`${slideImage.class5}`}>
                       {slideImage.text4}
                    </p>
                </div>
                <div className={`transition-all duration-300 ease-in-out border mt-10 w-40 h-12 flex items-center justify-center rounded-lg cursor-default  hover:translate-x-2 ${slideImage.class3}`} onClick={() => {router.push(slideImage.url)}}>
                    <p className='p-2 font-medium'>{slideImage.text5} </p>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                </div>
                </div>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </div>
)
}

export default ImageSlider;