import React from 'react'
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

import Head from "next/head";

import { mn } from '../../locales/Navbar';
import { en } from '../../locales/Navbar';
import { cn } from '../../locales/Navbar';

function Web() {
   const router = useRouter();
  const t = router.locale === 'en' ? en : router.locale === 'cn' ?  cn : mn ;
  console.log(t);
  return (
    <div>
      <Head>
        <title>{t.web} | {t.ozzo}</title>
      </Head>
     <div className='lg:flex hidden w-full h-20'></div>
      <h3 className={styles.title}>
        {t.web}
      </h3>
    </div>
  )
}

export default Web;