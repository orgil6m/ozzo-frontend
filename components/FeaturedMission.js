import React from 'react'
import { useRouter } from 'next/router';

import { MissionLocale } from "../locales/Mission";

function FeaturedMission() {
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = MissionLocale[`${l}`]
    return (
        <div className='w-full py-5'>
        <div className='transition-all duration-500 ease-in-out lg:w-full font-semibold md:text-2xl text-lg flex items-center text-gray-800 mb-5 '> 
            <div className='transition-all duration-1000 ease-in-out md:h-10 h-8 w-1 bg-red-500 mr-2'></div>
            <p className='w-4/6 uppercase'>{t.title}</p>
        </div>
      <div className='transition-all duration-500 ease-in-out lg:w-full text-justify flex items-center text-gray-800 '> 
        <p>
          {t.text}
        </p>
      </div>
    </div>
  )
}

export default FeaturedMission