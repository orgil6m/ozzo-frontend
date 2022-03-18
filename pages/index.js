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
      <div className='lg:px-32 md:px-20 lg:py-10 p-5'>
        <FeaturedNews />
        <FeaturedActivities />
        <FeaturedServices />
        <FeaturedMission />
        <FeaturedStats />
        <FeaturedPartners />
      </div>     
      <ContactLocale />
   </div>
  );
}
export default Home;
