import React from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";

import ImageSlider from '../components/ImageSlider';
import FeaturedNews from '../components/FeaturedNews';


import { mn } from '../locales/Navbar';
import { en } from '../locales/Navbar';
import { cn } from '../locales/Navbar';

function Home() {
  const router = useRouter();
  const t = router.locale === 'en' ? en : router.locale === 'cn' ?  cn : mn 
  return (
   <div className='pt-20'>
     <Head>
     </Head>
     
      <ImageSlider />
      <FeaturedNews />
   </div>
  );
}
export default Home;
