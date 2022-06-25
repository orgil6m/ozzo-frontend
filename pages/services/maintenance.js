import React from 'react'
import { useRouter } from 'next/router';
import service_cover from "../../Assets/Slide3.jpg"
import service_about from "../../Assets/maintenance.svg"
import Head from "next/head";
import { motion } from 'framer-motion';

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
        <title>{t.service[3].title}</title>
      </Head>
     
      <div className='w-full md:bg-fixed bg-center bg-cover' style={{'backgroundImage': `url(${service_cover.src}`}}>
          <div className='p-32 w-full h-[30rem] flex justify-center items-center'>
          </div>
        </div>

       <div className='lg:px-32 md:px-20 lg:mt-10 p-5 mb-10' >
        {/* PATH ROUTER */}
        <div className="lg:mb-10 mb-5 flex cursor-default">
          <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/")}> {t.home} </p>
          <p className="text-sm text-black/50 pr-2 "> / </p>
          <p className="transition-all duration-300 ease-in-out text-sm  hover:text-black"> {t.service[3].title} </p>
        </div>
       {/* SERVICE ABOUT */}
        <motion.div   
          initial={{ opacity : 0, x: -50}}
          whileInView={{ opacity : 1, x : 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 3, delay: 1 }} 
          className='lg:w-full font-semibold text-2xl flex items-center text-gray-800 mb-10'
        > 
          <div className='md:h-10 h-8 w-1 bg-sky-700 mr-5'></div>
          <p className='uppercase'>{t.service[3].title}</p>
        </motion.div>
        <div className='w-full '>
          <div className='grid lg:grid-cols-2'>
            <motion.div 
              initial={{ opacity : 0, x: -50}}
              whileInView={{ opacity : 1, x : 0 }}
              transition={{ type: "spring", duration: 3, delay: 2 }}  className='col-span pb-20 text-grey-700 lg:pr-10'>
              <p className='text-justify'> 
                {maintenance.about}
              </p>
              <div className='mt-5'>
                {maintenance.services.map((service, index) => (
                   <div key={index} className="flex items-start">
                  <div className='text-sky-700 '>
                    <svg className="h-5 w-5 mr-2 mt-2 m-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className='my-2 text-sm text-justify'>
                    {service}
                  </p>
                </div>
                ))}
              </div>
            </motion.div>
            <motion.div    
              initial={{ opacity : 0, x: 100}}
              whileInView={{ opacity : 1, x : 0 }}
              transition={{ type: "spring", duration: 3, delay:1 }} 
              className='col-span flex justify-center items-center lg:pb-20 px-10' 
            >
                <img className='w-2/3' src={service_about.src} alt="service_about"/>
            </motion.div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Services;