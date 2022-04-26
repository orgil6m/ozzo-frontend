import React from 'react'
import { useRouter } from 'next/router';
import store_cover from "../../Assets/STORE/store_cover.jpg"
import styles from '../../styles/Home.module.css';

import Head from "next/head";

import { NavbarLocale } from '../../locales/Navbar';
function Store() {
  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[l]
  return (
    <div className='pt-20'>
      <Head>
        <title>{t.service[1].title}</title>
      </Head>
      <div className='w-full bg-fixed bg-bottom bg-cover' style={{'backgroundImage': `url(${store_cover.src}`}}>
          <div className='p-32 w-full h-[30rem]'>
          </div>
      </div>
      <div className='lg:px-32 md:px-20 lg:mt-10 p-5' >
        {/* PATH ROUTER */}
        <div className="lg:mb-10 mb-5 flex cursor-default">
          <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/")}> {t.home} </p>
          <p className="text-sm text-black/50 pr-2 "> / </p>
          <p className="transition-all duration-300 ease-in-out text-sm  hover:text-black"> {t.service[1].title} </p>
        </div>
      </div>
    </div>
  )
}
  
export default Store