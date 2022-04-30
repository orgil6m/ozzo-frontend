import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import {getNews} from "../Datas/news"

import Contact from '../components/Contact';
import { NavbarLocale} from '../locales/Navbar';

export async function getServerSideProps() {
  const NewsData = await getNews();
  const base = process.env.BASE_URL;
  NewsData.reverse();
  return {
    props: {NewsData, base},
  }
}

const News = ({ NewsData, base }) => {
    const router = useRouter(); 
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = NavbarLocale[`${l}`]
    return (
    <div className="pt-20 cursor-default">
        <Head>
          <title>{t.news} | {t.ozzo}</title>
        </Head>
        <div className='w-full lg:px-32 md:px-20 lg:py-10 p-5  '>
        <div className="lg:mb-10 mb-5 flex cursor-default">
            <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/")}> {t.home} </p>
            <p className="text-sm text-black/50 pr-2 "> / </p>
            <p className="transition-all duration-300 ease-in-out text-sm text-black"> {t.news} </p>
        </div>
        <div className='lg:w-full font-semibold text-2xl flex items-center text-gray-800 my-10'> 
            <div className='md:h-10 h-8 w-1 bg-red-500 mdmr-5 mr-5'></div>
            <p className='w-3/6 uppercase'>{t.news}</p>
        </div>
        <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 mb-10 '>
            {NewsData.map((news, index) => (
            <div key={index} className="transition-all duration-300 ease-in-out border group border-gray-100 overflow-hidden rounded-lg ">
                <div className='transition-all duration-300 ease-in-out w-full aspect-w-16 aspect-h-9 bg-cover bg-center group-hover:opacity-90 group-hover:scale-105' style={{'backgroundImage': `url(${news.cover}`}} onClick={() => { router.push(`/news/${news.path}`)}} >    
                </div>
                <div className="p-5">
                    <div className='flex w-full h-8 items-center mb-3 '>
                        <h2 className='text-gray-800 font-bold uppercase text-lg '>{news.langs[l].title}</h2>
                    </div>
                    <p className='text-gray-800/80 text-sm'>{news.langs[0].text.slice(0, 75)}... </p>
                    <div className='pt-2 font-thin flex text-sm pb-1 items-center text-gray-800/50'>
                        <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className='font-light italic'>{news.date}</p>
                    </div>
                </div>
            </div>
          ))} 
        </div>
    </div>
    <Contact />
    </div>)
}

export default News;