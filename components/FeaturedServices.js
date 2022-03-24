import React from 'react'
import { useRouter } from 'next/router';
import { ActivitesLocale } from "../locales/Activites";
import {NavbarLocale} from "../locales/Navbar"
 
function FeaturedServices() {
    const router = useRouter();
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    return (
    <div>
      <div className=" grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 lg:my-10 my-5 cursor-default">
        {ActivitesLocale[`${l}`].services.map((Activities, index) =>(
          <div key={index}>
            <div className={`transition-all duration-300 ease-in-out w-full h-full bg-gradient-to-r flex flex-col items-center justify-start rounded-lg py-5 hover:opacity-90 relative overflow-hidden ${Activities.class}` }   onClick={() => { router.push(`/services/${Activities.url}`)}}>
                <div className='w-full p-1 flex justify-center items-center'>
                  {Activities.icon}
                </div>
                <div className='w-full  p-5 h-full flex justify-center text-center items-center text-white font-black uppercase'>
                    {Activities.title}
                </div>
                <div className='absolute -bottom-16 -right-16 opacity-10'>
                    {Activities.icon1}
                </div>
              <div className='transition-all duration-300 ease-in-out p-1 text-justify flex items-center text-sm text-white'>
                {NavbarLocale[l].learnmore}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedServices
