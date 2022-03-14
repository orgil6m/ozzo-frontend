import React from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";

import ImageSlider from '../components/ImageSlider';
import FeaturedNews from '../components/FeaturedNews';

import cover4 from "../Assets/cover4.jpg"


import { NavbarLocale } from '../locales/Navbar';

function Home() {
  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[`${l}`]
  console.log({cover4})
  return (
   <div className=''>
     <Head>
        <title>{t.home}  | {t.ozzo}</title>
     </Head>
      <ImageSlider />
      <div className='md:p-10 p-5'>
        <FeaturedNews />
      </div>
      
   </div>
  );
}
export default Home;
