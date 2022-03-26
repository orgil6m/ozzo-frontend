import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';


import { PartnersLocale } from "../locales/Partners";
import { NavbarLocale } from '../locales/Navbar';

function FeaturedMission() {
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = PartnersLocale[l]
    return (
        <div className='w-full py-5'>
        <div className='lg:w-full font-semibold md:text-2xl text-lg flex items-center text-gray-800 mb-5 '> 
            <div className='md:h-10 h-8 w-1 bg-yellow-500 mr-5'></div>
            <p className='w-4/6 uppercase'>{t.title}</p>
        </div>
        <div className="w-4/4 grid lg:grid-cols-4 md:grid-cols-2 gap-5 lg:mt-10 ">
            {t.partners.map((partners, index) => (
                <div key={index}>
                    <div className={`transition-all duration-300 ease-in-out bg-white h-full flex flex-col text-gray-500 items-center py-5 rounded-lg border border-gray-100 hover:shadow-md`}>
                        <Image src={partners.logo}  alt="logo" width={200} height={50} />
                            <div className='pt-3 text-justify flex items-center text-sm  cursor-default transition-all duration-300 ease-in-out hover:opacity-50'
                             onClick={() => {router.push(partners.url)}}>
                                {NavbarLocale[l].learnmore}
                            </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturedMission