import React from 'react'
import { useRouter } from 'next/router';
import { ActivitesLocale } from "../locales/Activites";
import {NavbarLocale} from "../locales/Navbar"
 
function FeaturedServices() {
    const router = useRouter();
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    return (
    <div>
      <div className="transition-all duration-500 ease-in-out grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:my-10 my-5">
        {ActivitesLocale[`${l}`].services.map((Activities, index) =>(
          <div key={index}>
            <div className={`transition-all duration-300 ease-in-out w-full h-full bg-gradient-to-r flex flex-col items-center justify-start rounded-lg py-8 hover:opacity-90  ${Activities.class}` } >
              <div className="flex w-4/5 items-center">
                <div className="mr-3 flex justify-start items-center">
                  {Activities.icon}
                </div>
                <div className="h-full flex items-center ">
                  <p className="font-black text-base text-white uppercase">
                  {Activities.title}
                  </p>
                </div>
              </div>
              {/* <div className="w-4/5 text-justify flex my-3 text-white/80">
                <p className="">
                  {Activities.text1}
                </p>
              </div> */}
              <div className='transition-all duration-500 ease-in-out pt-3 text-justify flex items-center text-sm text-white hover:translate-x-2'>
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

export default FeaturedServices
