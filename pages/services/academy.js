import React from 'react'
import { useRouter } from 'next/router';
import academy_cover from "../../Assets/academy_cover.jpg"
import Head from "next/head";

import FeaturedContact from "../../components/FeaturedContact"
import PricingInfo from "../../components/Academy/PricingInfo"
import LessonsInfo from "../../components/Academy/LessonsInfo"

import { NavbarLocale } from '../../locales/Navbar';
import { AcademyLocale } from '../../locales/academy';
import { SlideImagesText } from '../../locales/SlideImagesText';
import { PricingLocale } from '../../locales/PricingInfo';

function Academy() {
  const router = useRouter();
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = NavbarLocale[l]
    const academy = AcademyLocale[l]
    const tt = SlideImagesText[`${l}`]
  return (
    <div className='pt-20'>
      <Head>
        <title>{tt.academy} | {tt.ozzo}</title>
      </Head>
        <div className='lg:flex hidden w-full bg-fixed bg-center bg-cover'  style={{'backgroundImage': `url(${academy_cover.src}`}}>
          <div className='p-32 w-full h-[30rem]  from-black/40 to-black/50 flex justify-end items-center'>
          </div>
        </div>
        <div className='lg:px-32 md:px-20 lg:mt-10 p-5' >
          <div className="lg:mb-10 mb-5 flex cursor-default">
            <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/")}> {t.home} </p>
            <p className="text-sm text-black/50 pr-2 "> / </p>
            <p className="transition-all duration-300 ease-in-out text-sm  hover:text-black"> {t.academy} </p>
          </div>
          <div className="my-10">
            <div className='lg:w-full font-semibold flex items-center text-gray-800'> 
                <div className='md:h-10 h-8 w-1 bg-red-500 mr-5'></div>
                <p className='mr-5 uppercase lg:text-2xl text-base'>{t.academy}</p>
            </div>
          </div>
          <div className='h-full w-full grid lg:grid-cols-4 md:grid-cols-2  gap-5'>
            {academy.branches.map((branch, index) => (
              <div key={index}>
                <div className={`border border-gray-100 rounded-md p-5 text-gray-700 font-semibold text-base uppercase `}>
                  {/* <div className='w-full flex justify-center my-5'>
                   <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  </div> */}
                  <div className='w-full flex justify-center'>
                     {branch.title}
                  </div>
                 
                </div>
              </div>
            ))}
           
           
          </div>
         
          <LessonsInfo />
          <PricingInfo />
        </div>
        
    <FeaturedContact />
    </div>
  )
}

export default Academy