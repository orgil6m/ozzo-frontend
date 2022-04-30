import React from 'react'
import { useRouter } from 'next/router';
import academy_cover from "../../Assets/ACADEMY/academy_cover.jpg"
import Head from "next/head";
import Image from 'next/image';

import Branches from '../../components/Academy/Branches';
import Contact from "../../components/Contact"
import PricingInfo from "../../components/Academy/PricingInfo"
import Courses from "../../components/Academy/Courses"
import FAQ from "../../components/Academy/FAQ"

import { NavbarLocale } from '../../locales/Navbar';


function Academy() {
  const router = useRouter();
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = NavbarLocale[l]
  return (
    <div className='pt-20'>
      <Head>
        <title>{t.service[0].title}</title>
      </Head>
        <div className='w-full md:bg-fixed bg-top bg-cover lg:h-[30rem] h-[15rem]' style={{'backgroundImage': `url(${academy_cover.src}`}}>
          
        </div>
        <div className='lg:px-32 md:px-20 lg:mt-10 p-5' >
          {/* PATH ROUTER */}
          <div className="lg:mb-10 mb-5 flex cursor-default">
            <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/")}> {t.home} </p>
            <p className="text-sm text-black/50 pr-2 "> / </p>
            <p className="transition-all duration-300 ease-in-out text-sm  hover:text-black"> {t.service[0].title} </p>
          </div>
          {/* HOGJMIIN ACADEMY */}
          <div className="my-10">
            <div className='lg:w-full font-semibold flex items-center text-gray-800'> 
                <div className='md:h-10 h-8 w-1 bg-sky-500 mr-5'></div>
                <p className='mr-5 uppercase lg:text-2xl text-base'>{t.service[0].title}</p>
            </div>
          </div>
            <Branches />
            <Courses />
            <PricingInfo />
            <FAQ />
        </div>
      <Contact />
    </div>
  )
}

export default Academy