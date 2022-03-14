import React from 'react'
import { useRouter } from 'next/router';

import { FeaturedNewsLocale } from '../locales/FeaturedNews';

import Cover1 from '../Assets/Cover1.jpg'
import Cover2 from '../Assets/Cover2.jpg'
import Cover3 from '../Assets/Cover3.jpg'

function FeaturedNews() {
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = FeaturedNewsLocale[`${l}`]
    const FeaturedNewsData = [
    {
        id : "1",
        cover:`${Cover1.src}`,
        path : "DaavkaTunes-X-MongolNFT",
        date: ' 2022-04-01',
        title : t.id[0].title,
        text : t.id[0].text.slice(0, 100),
    },
    {
        id: "2",
        cover:`${Cover2.src}`,
        path : "DaavkaTunes-Movie-Night",
        date: ' 2022-03-01',
        title : t.id[1].title,
        text : t.id[1].text.slice(0, 100),
    },
    {
        id: "3",
        cover:`${Cover3.src}`,
        path : 'DT-Acoustic-Concert',
        date: ' 2021-10-10',
        title : t.id[2].title,
        text : t.id[2].text.slice(0, 100),
    },
];
    return (
    <div className='w-full md:p-10 p-5 '>
        <div className='transition-all duration-1000 ease-in-out lg:w-full font-semibold md:text-2xl text-lg flex items-center text-gray-800 mb-10'> 
            <div className='transition-all duration-1000 ease-in-out md:h-10 h-8 w-1 bg-red-500 mdmr-5 mr-2'></div>
            <p className='w-4/6'>{t.title}</p>
             <div className='transition-all duration-1000 ease-in-out cursor-default w-3/6 h-10 font-thin text-base flex items-center justify-end ' onClick={() => { router.push('/news')}}>
                {t.more}
                <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </div>
        </div>
        <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 '>
            {FeaturedNewsData.map((FeaturedNewsData, index) => (
            <div key={index}>
                <div className='transition-all duration-500 ease-in-out w-full bg-cover bg-center drop-shadow-x hover:opacity-90' style={{'backgroundImage': `url(${FeaturedNewsData.cover}`}} onClick={() => { router.push(`/news/${FeaturedNewsData.path}`)}} > 
                    <div className=' w-full h-96 flex justify-end items-start flex-col p-5 bg-gradient-to-b from-transparent to-black/90 backdrop-brightness-150'>
                        <div className=''>
                            <div className='flex w-full h-8 items-center mb-3'>
                                <div className='bg-red-500 w-0.5 h-full mr-3'> </div>  
                                <h2 className='text-white font-bold uppercase text-lg '>{FeaturedNewsData.title}</h2>
                            </div>
                            <p className='text-white/60 text-sm'>{FeaturedNewsData.text.slice(0, 75)}... </p>
                            <div className='pt-2 font-thin flex justify-between text-sm pb-1 items-center'>
                                <p className='text-white/50  font-light italic'>{FeaturedNewsData.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          ))} 
        </div>
    </div>
  )
}

export default FeaturedNews