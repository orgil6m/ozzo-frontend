import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';

import { PartnersLocale } from "../locales/Partners";
import { NavbarLocale } from '../locales/Navbar';

function FeaturedMission() {
    const router = useRouter()
   
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = PartnersLocale[`${l}`]
    return (
        <div className='w-full py-5'>
        <div className='transition-all duration-500 ease-in-out lg:w-full font-semibold md:text-2xl text-lg flex items-center text-gray-800 mb-5 '> 
            <div className='transition-all duration-1000 ease-in-out md:h-10 h-8 w-1 bg-red-500 mr-2'></div>
            <p className='w-4/6 uppercase'>{t.title}</p>
        </div>
        <div className="transition-all duration-500 ease-in-out w-4/4 grid lg:grid-cols-4 md:grid-cols-2 gap-5 lg:mt-10 ">
            {PartnersLocale[`${l}`].partners.map((partners, index) => (
                <div key={index}>
                    <div className={`transition-all duration-300 ease-in-out shadow-md  border-t-4 bg-white h-full flex flex-col text-gray-500 hover:text-gray-800 items-center py-5 rounded-lg ${partners.class1}`}>
                        <Image src={partners.logo}  alt="logo" width={200} height={50} />
                         <div className='transition-all duration-500 ease-in-out pt-3 text-justify flex items-center text-sm hover:translate-x-2'>
                             {NavbarLocale[l].learnmore}
                             <svg className="h-3 w-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturedMission