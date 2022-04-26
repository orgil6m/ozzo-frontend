import React from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";

import ImageSlider from '../components/Home/ImageSlider';
import FeaturedNews from '../components/Home/FeaturedNews';
import FeaturedActivities from '../components/Home/FeaturedActivities';
import FeaturedServices from '../components/Home/FeaturedServices';
import FeaturedMission from '../components/Home/FeaturedMission';
import Partners from '../components/Partners';
import FeaturedStats from '../components/Home/FeaturedStats';
import Contact from '../components/Contact';

import { NavbarLocale } from '../locales/Navbar';


function Home() {
  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[`${l}`]

  return (
   <div className="cursor-default">
      <Head>
        <title>{t.home}  | {t.ozzo}</title>
      </Head>
      <ImageSlider />
      <div className='lg:px-32 md:px-20 lg:py-10 p-5 '>
        <FeaturedActivities />
        <FeaturedServices />
        <FeaturedMission />
        <FeaturedStats />
        <FeaturedNews />
        <Partners />
      </div>     
      <Contact />

    
   </div>
  );
}
export default Home;
