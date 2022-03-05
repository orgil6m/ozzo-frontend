import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

import Head from "next/head";


import { mn } from '../locales/Home/mn';
import { en } from '../locales/Home/en';
import { cn } from '../locales/Home/cn';

function Home() {
  const router = useRouter();
  const t = router.locale === 'en' ? en : router.locale === 'cn' ?  cn : mn 
  return (
   <div className=''>
     <Head>
       <title>{t.title}</title>
     </Head>
     {/* <div className='w-full h-screen bg-sky-500 text-white'>  
    <p>hi</p>
      </div> */}
     <h3 className={styles.title}>
       {t.title}
       
      </h3>
   </div>
  );
}
export default Home;
