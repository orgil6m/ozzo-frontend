import React from 'react'
import { useRouter } from 'next/router';
import CountUp from 'react-countup';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid'


import { StatsLocale } from "../../locales/Stats";
import { useState } from 'react';

function FeaturedStats() {
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = StatsLocale[`${l}`]
    const [show, setShow] = useState(false)
    return (
     <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-10 lg:my-10 my-5 cursor-default">
        {StatsLocale[`${l}`].items.map((stats, index) =>(
            <div key={index}>
                <div className='transition-all duration-500 ease-in-out w-full flex text-center items-center h-full flex-col rounded-lg border border-gray-100 
                hover:border-gray-300 my-3 relative group' onClick={() => {setShow(!show) ; console.log("hi")}}>
                  <div className='transition-all duration-500 ease-in-out absolute right-5 top-5 p-1 bg-gray-100 rounded-full group-hover:bg-gray-200'>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
              
                  <p className='my-2 font-semibold uppercase pt-5'>
                      {stats.title}
                  </p>
            
                    <span className='text-gray-700 mt-2 scale-75 '>{stats.icon}</span>
                    <div className={`w-12 h-1 my-3  ${stats.class1} `}></div>
                  {!show ?    
                  <>
                    <p className='text-3xl font-black text-gray-700'><CountUp end={stats.number} /></p>
                    <p className='font-light '>{stats.text1}</p>
                  </>
                :
                <div className='flex flex-col items-center text-center'>
                  <p className='text-xs w-4/5 text-center my-5 '>{stats.text2}</p>
                </div>
              }
                
              
                </div>
          </div>
        ))}
      </div>
  )
}

export default FeaturedStats