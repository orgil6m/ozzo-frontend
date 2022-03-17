import React from 'react'
import { useRouter } from 'next/router';
import CountUp from 'react-countup';


import { StatsLocale } from "../locales/Stats";

function FeaturedStats() {
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = StatsLocale[`${l}`]
    return (
     <div className="transition-all duration-500 ease-in-out grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:my-10 my-5">
        {StatsLocale[`${l}`].items.map((stats, index) =>(
            <div key={index}>
                <div className='transition-all duration-300 ease-in-out w-full flex justify-center items-center h-full flex-col rounded-lg hover:shadow-lg'>
                <p className='my-2 font-bold uppercase'>
                    {stats.title}
                </p>
                <span className='text-gray-700 mt-2'>{stats.icon}</span>
                <div className={`w-12 h-1 my-3 ${stats.class1} `}></div>
                <p className='text-4xl font-black text-gray-700'><CountUp end={stats.number} /></p>
                <p>{stats.text1}</p>
                <p className='text-sm w-4/5 text-justify my-5'>{stats.text2}</p>
                </div>
           
          </div>
        ))}
      </div>
  )
}

export default FeaturedStats