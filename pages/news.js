import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import {getNews} from "../Datas/news"

import { NavbarLocale} from '../locales/Navbar';
import {NewsLocale} from '../locales/News'

export async function getServerSideProps() {
  const NewsData = await getNews();
  NewsData.reverse();
  return {
    props: {NewsData},
  }
}

const News = ({ NewsData }) => {
    const router = useRouter(); 
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = NavbarLocale[`${l}`]
    return (
    <div className="pt-20">
        <Head>
          <title>{t.news} | {t.ozzo}</title>
        </Head>
        <div className='w-full p-10 '>
        <div className='transition-all duration-1000 ease-in-out lg:w-full font-semibold text-2xl flex items-center text-gray-800 mb-10'> 
            <div className='transition-all duration-1000 ease-in-out  md:h-10 h-8 w-1 bg-red-500 mdmr-5 mr-5'></div>
            <p className='w-3/6'>{NewsLocale[`${l}`].title}</p>
             <div className='transition-all duration-1000 ease-in-out cursor-default w-3/6 h-10 font-thin text-base flex items-center justify-end ' onClick={() => { router.push('/news')}}>
            </div>
        </div>
        <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 '>
            {NewsData.map((FeaturedNewsData, index) => (
            <div key={index}>
                <div className='transition-all duration-500 ease-in-out rounded-md w-full bg-cover bg-center drop-shadow-x hover:opacity-90' style={{'backgroundImage': `url(${FeaturedNewsData.cover}`}} onClick={() => { router.push(`/news/${FeaturedNewsData.path}`)}} > 
                    <div className=' w-full h-96 rounded-md flex justify-end items-start flex-col p-5 bg-gradient-to-b from-transparent to-black/90 backdrop-brightness-150'>
                        <div className=''>
                            <div className='flex w-full h-8 items-center mb-3'>
                                <div className='bg-red-500 w-0.5 h-full mr-3'> </div>  
                                <h2 className='text-white font-bold uppercase text-lg '>{FeaturedNewsData.langs[`${l}`].title}</h2>
                            </div>
                            <p className='text-white/60 text-sm'>{FeaturedNewsData.langs[`${l}`].text.slice(0, 75)}... </p>
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
    </div>)
}

export default News;