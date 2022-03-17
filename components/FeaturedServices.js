import React from 'react'
import { useRouter } from 'next/router';
import { ActivitesLocale } from "../locales/Activites";
 
function FeaturedServices() {
    const router = useRouter();
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    return (
    <div>
        <div className="transition-all duration-500 ease-in-out grid lg:grid-cols-3 gap-5 lg:my-10 my-5">
        {ActivitesLocale[`${l}`].services.map((Activities, index) =>(
          <div key={index}>
            <div className={`transition-all duration-300 ease-in-out w-full bg-gradient-to-r flex flex-col items-center justify-start rounded-lg pt-10 hover:opacity-90 ${Activities.class1}`} >
              <div className="flex w-4/5 items-center">
              <div className="mr-3 flex justify-start items-center">
                {Activities.icon}
              </div>
              <div className="h-full flex items-center ">
                <p className="font-black text-lg text-white uppercase">
                {Activities.title}
                </p>
              </div>
              </div>
              <div className="w-4/5 text-justify  flex my-3 pb-5 text-white/80">
                <p>
                  {Activities.text1}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedServices
