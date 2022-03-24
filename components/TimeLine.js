import React, { useRef } from "react";
import { useRouter } from 'next/router';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { TimeLineLocale } from '../locales/TimeLine';
import logo from "../Assets/logo_ozzo_3.svg"

const TimeLine = () => {
    const router = useRouter();
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const slideRef = useRef();
    const TimeLine = TimeLineLocale[l]
    const even = TimeLine.years.filter(v => v.year % 2 == 0)
    const odd = TimeLine.years.filter(v => v.year % 2 == 1)
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
                slidesToShow: 4,
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
      <div className='lg:w-full font-semibold  flex items-center text-gray-800'> 
      <div className='md:h-10 h-8 w-1 bg-cyan-500 mdmr-5 mr-5'></div>
        <p className=' mr-5 uppercase lg:text-2xl text-base'>{TimeLine.title}</p>
        <select onChange={goto} className="transition-all duration-300 ease-in-out text-lg font-light bg-transparent focus:outline-none opacity-50 hover:opacity-100 ">
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
          <div key={index}>
            <div className="p-10 bg-white h-full text-gray-800 font-bold text-xl m-2 ">
              <div className="mb-3 flex items-center ">
                {data.year} 
              </div>
              <p className="font-light text-sm">
                {data.text.map((text, index) =>(
                  <>
                  <div key={index} className="flex items-start my-1" >
                      <div className="mr-2 mt-1 opacity-90 ">
                        <svg className="h-3 w-3 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                      </div>
                      <div className="text-sm">
                        {text} 
                      </div>
                    </div>
                  </>
                ))}
              </p>
            </div>
          </div>
        ))}
      </Slide>

         
  </div>
  )
}

export default TimeLine