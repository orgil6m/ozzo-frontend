import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import ImageSlider from '../components/ImageSlider';

import Head from "next/head";

import { mn } from '../locales/Navbar';
import { en } from '../locales/Navbar';
import { cn } from '../locales/Navbar';

function Home() {
  // console.log({Carousel})
  const router = useRouter();
  const t = router.locale === 'en' ? en : router.locale === 'cn' ?  cn : mn 
  return (
   <div className=''>
     <Head>
      <title>{t.home} | {t.ozzo}</title>
     </Head>
     <h3 className={styles.title}>
       {/* {t.home} */}
      </h3>
      <ImageSlider />
      <div className='w-full h-screen bg-sky-500'>
      <p>
        hi
      </p>
      </div>
   </div>
  );
}
export default Home;
