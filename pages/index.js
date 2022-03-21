import React from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";

import ImageSlider from '../components/ImageSlider';
import FeaturedNews from '../components/FeaturedNews';
import FeaturedActivities from '../components/FeaturedActivities';
import FeaturedServices from '../components/FeaturedServices';
import FeaturedMission from '../components/FeaturedMission';
import FeaturedPartners from '../components/FeaturedPartners';
import FeaturedStats from '../components/FeaturedStats';
import ContactLocale from '../components/FeaturedContact';

import { NavbarLocale } from '../locales/Navbar';


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
      <div className='lg:px-32 md:px-20 lg:py-10 p-5 '>
        <FeaturedNews />
        <FeaturedActivities />
        <FeaturedServices />
        <FeaturedMission />
        <FeaturedStats />
        <FeaturedPartners />
      </div>     
      <ContactLocale />

      <div className='from-red-400 to-red-500 from-sky-400 to-sky-500 from-sky-600 to-sky-700 from-teal-400 to-teal-500 from-emerald-400 to-emerald-500 from-violet-400 to-violet-500 bg-red-500 bg-sky-500 bg-sky-700 bg-teal-500 bg-emerald-500 bg-violet-500 border-red-500 border-teal-500 border-sky-500 border-sky-700 '>
      </div>
   </div>
  );
}
export default Home;
