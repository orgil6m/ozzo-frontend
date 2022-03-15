import React, { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useRouter } from 'next/router'

import { SlideImagesText } from '../locales/SlideImagesText';


import image1 from '../Assets/Slide1.jpg'
import image2 from '../Assets/Slide2.jpg'
import image3 from '../Assets/Slide3.jpg'

const ImageSlider = () => {
    const router = useRouter();
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = SlideImagesText[`${l}`]
    const slideImages = [
    {
        bgImage:`${image1.src}`,
        url:"../services/store",
        class1: "",
        class2: "",
        class3: "border-white text-white hover:bg-gray-500/10",
        class4: "text-gray-400",
        class5: '',
        text0: `${t.text0.slide1}`,
        text1: `${t.text1.slide1}`,
        text2: `${t.text2.slide1}`,
        text3: `${t.text3.slide1}`,
        text4: `${t.text4.slide1}`,
        text5: `${t.text5}`,
    },
    {
        bgImage:`${image2.src}`,
        url:"../services/academy",
        class1: "bg-gradient-to-l from-transparent lg:to-black/20 to-black/90 items-end" ,
        class2:" text-right",
        class3: "border-white text-white hover:bg-white/10",
        class4: "text-gray-400 text-right",
        class5: 'font-medium',
        text0: `${t.text0.slide2}`,
        text1: `${t.text1.slide2}`,
        text2: `${t.text2.slide2}`,
        text3: `${t.text3.slide2}`,
        text4: `${t.text4.slide2}`,
        text5: `${t.text5}`,
    },
    {
        bgImage:`${image3.src}`,
        url:"../services/maintenance",
        class1: "bg-gradient-to-l md:from-transparent md:to-black/50 from-black/50 to-black/50",
        class2:"",
        class3: "border-white text-white cursor-default hover:bg-white/10 hover:text-white ",
        class4: 'text-gray-300',
        class5: '',
        text0: `${t.text0.slide3}`,
        text1: `${t.text1.slide3}`,
        text2: `${t.text2.slide3}`,
        text3: `${t.text3.slide3}`,
        text4: `${t.text4.slide3}`,
        text5: `${t.text5}`,
    },
];

    const SlideProperties = { 
        duration: 5000,
        transitionDuration: 1000,
        canSwipe : false,
    }
    return (
     <div className=''>
         <div className="slide-container">
        <Slide {...SlideProperties} easing="ease">
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide w-screen h-screen" key={index}>
                <div className='w-full h-full bg-cover bg-center'  style={{'backgroundImage': `url(${slideImage.bgImage}`}}>
                    <div className={`w-screen h-full flex justify-center flex-col md:p-20 p-10 ${slideImage.class1}`} >
                        <div className={`font-medium text-white md:text-6xl mt-20 text-4xl ${slideImage.class2}`}>
                            <p  className='break-inside-auto'>
                            {slideImage.text0}
                            </p>
                            <p>
                            {slideImage.text1}
                            </p>
                        </div>
                        <div className={`tracking-widest md:font-thin md:text-sm md:pt-10 pt-5 text-[12px] font-light ${slideImage.class4}`}>
                            <p className='break-inside-auto'> {slideImage.text2} </p>
                            <p className='break-inside-auto'> {slideImage.text3} </p>
                            <p className={`${slideImage.class5}`}> {slideImage.text4} </p>
                        </div>
                        <div className={`transition-all duration-300 ease-in-out border md:mt-10 w-40 sm:h-12 h-10 mt-5 flex items-center justify-center rounded-lg cursor-default  hover:translate-x-2  ${slideImage.class3}`} onClick={() => {router.push(slideImage.url)}}>
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
        {/* <div className='w-full absolute bottom-10 flex justify-center'>
            <div className='w-80 h-0.5 flex justify-around '>
                <div className={`w-20 h-full bg-white opacity-80 rouned-full shadow-md`}></div>
                <div className={`w-20 h-full bg-white opacity-80 rouned-full shadow-md`}></div>
                <div className={`w-20 h-full bg-white opacity-80 rouned-full shadow-md`}></div>
            </div>
        </div> */}
      </div>
    </div>
)
}

export default ImageSlider;