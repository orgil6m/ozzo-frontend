import React from 'react'
import { useRouter } from 'next/router';
import service_cover from "../../Assets/slide3.jpg"
import service_about from "../../Assets/maintenance.svg"
import Head from "next/head";

import { NavbarLocale } from '../../locales/Navbar';
import {MaintenanceLocale} from '../../locales/Maintenance'

function Services() {
  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const maintenance = MaintenanceLocale[l]
  const t = NavbarLocale[l]
  return (
    <div className='pt-20'>
      <Head>
        <title>{t.maintenance} | {t.ozzo}</title>
      </Head>
     
        <div className='w-full md:bg-fixed bg-top bg-cover lg:h-[30rem] h-[15rem]' style={{'backgroundImage': `url(${service_cover.src}`}}>
          
        </div>

       <div className='lg:px-32 md:px-20 lg:mt-10 p-5 mb-10' >
        {/* PATH ROUTER */}
        <div className="lg:mb-10 mb-5 flex cursor-default">
          <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/")}> {t.home} </p>
          <p className="text-sm text-black/50 pr-2 "> / </p>
          <p className="transition-all duration-300 ease-in-out text-sm  hover:text-black"> {t.service[3].title} </p>
        </div>
       {/* SERVICE ABOUT */}
        <div className='lg:w-full font-semibold text-2xl flex items-center text-gray-800 mb-10'> 
          <div className='md:h-10 h-8 w-1 bg-sky-700 mr-5'></div>
          <p className='uppercase'>{t.service[3].title}</p>
        </div>
        <div className='w-full '>
          <div className='grid lg:grid-cols-2'>
            <div className='col-span pb-20 text-grey-700 lg:pr-10'>
              <p className='text-justify'> 
                {maintenance.about}
              </p>
              <div className='mt-5'>
         
              </div>
            </div>
            <div className='col-span flex justify-center items-center lg:pb-20 px-10' >
                <img className='w-2/3' src={service_about.src} alt="service_about"/>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Services;