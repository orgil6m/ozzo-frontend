import { data } from 'autoprefixer';
import React, { useRef } from "react";


import { useRouter } from 'next/router';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { TimeLineLocale } from '../locales/TimeLine';

const TimeLine = () => {
    const router = useRouter();
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
      const slideRef = useRef();

    const TimeLine = TimeLineLocale[l]
    const SlideProperties = { 
      duration: 5000,
      transitionDuration: 1000,
      canSwipe : true,
      autoplay: false,
      arrows: false,
     
       responsive: [
         {
            breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                 indicators: i => (<div className='indicator'> </div>),
            }
         },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                 indicators: i => (<div className='indicator'> </div>),
            }
        },
    ]
    }
     const goto = ({ target }) => {
    slideRef.current.goTo(parseInt(target.value, 10));
  }
  return (
    <div className="w-full flex flex-col pt-10 text-gray-200 cursor-default select-none py-20 ">
      <div className='transition-all duration-1000 ease-in-out lg:w-full font-semibold  flex items-center text-gray-800 mb-10'> 
      <div className='transition-all duration-1000 ease-in-out  md:h-10 h-8 w-1 bg-cyan-500 mdmr-5 mr-5'></div>
        <p className=' mr-5 uppercase lg:text-2xl text-base'>{TimeLine.title}</p>
        <select onChange={goto} className="transition-all duration-500 ease-out text-lg font-light bg-transparent focus:outline-none opacity-50 hover:opacity-100 ">
            <option value="0">2022</option>
            <option value="1">2021</option>
            <option value="2">2020</option>
            <option value="3">2019</option>
            <option value="4">2018</option>
            <option value="5">2017</option>
            <option value="6">2016</option>
            <option value="7">2015</option>
            <option value="8">2014</option>
            <option value="9">2013</option>
            <option value="10">2012</option>
            <option value="11">2011</option>
            <option value="12">2010</option>
        </select>
      </div>
      <Slide ref={slideRef} {...SlideProperties} easing="ease">
        {TimeLine.years.map((data, index)=>(
          <div key={index} className="">         
          <div className='text-2xl text-gray-800 p-5 w-full flex justify-between items-center'> 
              {data.year}
              <svg className="animate-pulse h-4 w-4 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
          </div>
          <div className='relative top-2 solute w-4 h-4 bg-white mx-10 rounded-full border-2 border-cyan-500'>
          </div>
          <div className='w-full bg-cyan-500 shadow-2xl shadow-cyan-500/50 h-0.5'>
          </div>
          <div  className=' bg-gradient-to-b from-cyan-500/20 to-transparent h-56 px-10 py-5 text-gray-700 lg:text-base font-light '>
              {data.text.map((text, index) => (
                <div key={index}>
                    <p className='text-sm'>
                      {text}
                    </p>
                </div>
              ))}
          </div>
          </div>
        ))}
        
      </Slide>
         
  </div>
  )
}

export default TimeLine