import React from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import logo1 from "../Assets/logo_muzg_4.png"
import logo2 from "../Assets/logo_muzg_3.png"

import { NavbarLocale } from '../locales/Navbar';
import { ActivitesLocale } from "../locales/Activites";

const FeaturedActivities = () => {
  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[`${l}`]
  const tt = ActivitesLocale[`${l}`]
  
  return (
    <div className='w-full pt-5 mb-10'>
      <div className='transition-all duration-500 ease-in-out lg:w-full font-semibold md:text-2xl text-lg flex items-center text-gray-800 mb-5 '> 
        <div className='transition-all duration-1000 ease-in-out md:h-10 h-8 w-1 bg-red-500 mr-2'></div>
        <p className='w-4/6'>{tt.title}</p>
      </div>
      <div className='transition-all duration-500 ease-in-out lg:w-full text-justify flex items-center text-gray-800 mb-5 '> 
        <p>
          {tt.text}
        </p>
      </div>
      <div className="w-full flex items-center justify-center my-5">
        <div className="lg:w-1/3 md:w-1/2 w-full flex">
          <Image src={logo1} alt="logo" className="mr-10"  />
          <div className="w-full"></div>
          <Image src={logo2} aspect-video alt="logo"  />
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-100 rounded-full"></div>
    </div>
  )}

export default FeaturedActivities;
