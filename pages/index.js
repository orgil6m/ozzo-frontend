import React from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";

import ImageSlider from '../components/ImageSlider';
import FeaturedNews from '../components/FeaturedNews';
import FeaturedActivities from '../components/FeaturedActivities';
import FeaturedServices from '../components/FeaturedServices';
import FeaturedMission from '../components/FeaturedMission';

import { NavbarLocale } from '../locales/Navbar';
import FeaturedStats from '../components/FeaturedStats';

function Home() {
  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[`${l}`]
  return (
   <div className="">
      <Head>
        <title>{t.home}  | {t.ozzo}</title>
      </Head>
      <ImageSlider />
      <div className='md:p-10 p-5'>
        <FeaturedActivities />
        <FeaturedServices />
        <FeaturedMission />
        <FeaturedStats />
        
        <FeaturedNews />
     
      </div>
     
   </div>
  );
}
export default Home;
