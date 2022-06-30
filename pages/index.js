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

import preview from "../Assets/preview.jpg"
import { NavbarLocale } from '../locales/Navbar';


function Home() {
  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[l]

  return (
   <div className="cursor-default">
     
      <Head>
        <title>{t.home}  | {t.ozzo}</title>
        <meta name="description" content="OZZO LLC" />
        <meta name="keywords" content="Ozzo,ozzo music,daavkatunes, daavka, guitar, ukulele, piano" />
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta name="twitter:description" content="OZZO LLC Official Website" />
        <meta name="application-name" content="OZZO LLC"/>

        <meta name="twitter:card" content="OZZO LLC" />
        <meta name="twitter:url" content="https://ozzo.mn"/>
        <meta name="twitter:title" content="OZZO LLC" />
        <meta name="twitter:description" content="OZZO LLC Official Website" />
        <meta name="twitter:image" content={preview.src} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="OZZO LLC" />
        <meta property="og:description" content="OZZO LLC Official Website" />
        <meta property="og:url" content="https://ozzo.mn" />
        <meta property="og:image" content={preview.src} />

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
