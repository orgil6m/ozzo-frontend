import React from 'react'
import { useRouter } from 'next/router';
import dev_cover from "../../Assets/DEV/dev_cover.jpg"
import dev_about from "../../Assets/DEV/dev_about.svg"
import dev2 from "../../Assets/DEV/dev2.svg"
import daavkatunes from "../../Assets/DEV/daavkatunes.mn.png"
import NFT from "../../Assets/DEV/NFT.jpg"
import { motion } from 'framer-motion';
import { DevLocale } from '../../locales/Dev';

import Head from "next/head";

import { NavbarLocale } from '../../locales/Navbar';

function Dev() {
  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[`${l}`]
  const locale = DevLocale[l]
  return (
    <div className='pt-20 '>
      <Head>
        <title>{t.dev} | {t.ozzo}</title>
      </Head>
       <div className='w-full md:bg-fixed bg-top bg-cover lg:h-[30rem] h-[15rem]' style={{'backgroundImage': `url(${dev_cover.src}`}}>
          
        </div>
      <div className='lg:px-32 md:px-20 lg:mt-10 p-5' >
        {/* PATH ROUTER */}
        <div className="lg:mb-10 mb-5 flex cursor-default">
          <p className="transition-all duration-300 ease-in-out text-sm text-gray-700/80 pr-2 hover:text-black" onClick={() => router.push("/")}> {t.home} </p>
          <p className="text-sm text-gray-700/50 pr-2 "> / </p>
          <p className="transition-all duration-300 ease-in-out text-sm text-gray-700/80 hover:text-black"> {t.service[5].title} </p>
        </div>
        {/* DEV ABOUT */}
         <motion.div 
          initial={{ opacity : 0, x: -50}}
          whileInView={{ opacity : 1, x : 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 3, delay: 0.5 }} 
          className='lg:w-full font-semibold text-2xl flex items-center mb-10'
        > 
          <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <p className='uppercase'>{t.service[5].title}</p>
          <span className='text-green-500 ml-2 -mt-1'>
            /
          </span>
          <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
        <div className='w-full '>
          <div className='grid lg:grid-cols-2'>
            <motion.div 
              initial={{ opacity : 0, x: -50}}
              whileInView={{ opacity : 1, x : 0 }}
              transition={{ type: "spring", duration: 3, delay:1 }} 
              className='col-span md:pb-20 pb-10 lg:pr-10'
            >
              <p className='text-justify'> 
                {locale.about}
              </p>
               <div className='mt-5 '>
              </div>
            </motion.div>
            <motion.div  
              initial={{ opacity : 0, x: 100}}
              whileInView={{ opacity : 1, x : 0 }}
              transition={{ type: "spring", duration: 3 }} 
              className='col-span flex justify-center items-center lg:pb-20 ' 
            >
                 <img className='w-2/3' src={dev_about.src} />
            </motion.div>
          </div>
        </div>
          <div className='w-full flex justify-center uppercase font-medium text-2xl items-center text-gray-800'>
            <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
            {locale.service}
             <span className='text-green-500 ml-2 -mt-1'>
            /
          </span>
          <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-5 my-20 '>
           {locale.services.map((row, index) => (
                  <motion.div
                  initial={{ opacity : 0,}}
                  whileInView={{ opacity : 1}}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 3, delay: index*0.2}} 
                   key={index} className="flex flex-col md:mb-5">
                    <div className='text-lg font-medium flex items-center'>
                      <div className={`mr-3 ${row.color} p-1 rounded-md `}>
                        {row.icon}
                      </div>
                      {row.title}
                    </div>
                  
                    <p className='text-sm py-5 md:pr-5 text-justify'>
                    {row.text}
                    </p>
                  </motion.div>
                ))}
        </div>
        <div className='w-full flex justify-center uppercase font-medium text-2xl items-center text-gray-800'>
            <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
            {locale.portfolio}
             <span className='text-green-500 ml-2 -mt-1'>
            /
          </span>
          <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <motion.div    i
              initial={{ opacity : 0 , x:-100}}
              whileInView={{ opacity : 1 , x :0}}
              transition={{ type: "spring", duration: 3 }} className='my-10 grid md:grid-cols-2 gap-10 mb-20' >
            <motion.div className='relative mt-5 w-full aspect-w-16 aspect-h-9 bg-center bg-cover rounded-lg overflow-hidden' 
            style={{'backgroundImage': `url(${daavkatunes.src}`}} onClick={() => router.push('https://www.daavkatunes.mn')} >
              <div className='transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 backdrop-blur-sm backdrop-brightness-75  w-full h-full flex justify-center items-center rounded-lg flex-col'>
                <span className='text-xl font-bold text-white'>
                  www.DaavkaTunes.mn
                </span>
                <div className='bottom-10 absolute px-4 py-2 bg-indigo-500 rounded-full text-white text-xs font-light' >
                  Web & Mobile App
                </div>
              </div>
            </motion.div>  
            <motion.div className='relative mt-5 w-full aspect-w-16 aspect-h-9 bg-center bg-cover rounded-lg overflow-hidden' 
            style={{'backgroundImage': `url(${NFT.src}`}} onClick={() => router.push('https://www.ard.art')} >
              <div className='transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 backdrop-blur-sm backdrop-brightness-75  w-full h-full flex justify-center items-center rounded-lg flex-col'>
                <span className='text-xl font-bold text-white'>
                  DaavkaTunes NFT Collection
                </span>
                <div className='bottom-10 absolute px-4 py-2 bg-indigo-500 rounded-full text-white text-xs font-light' >
                  NFT Collection
                </div>
              </div>
            </motion.div>
        </motion.div>
        {/* <div className='my-20'>
          <div className='w-full flex justify-center'>
            <img className='w-1/4' src={dev2.src} />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Dev;