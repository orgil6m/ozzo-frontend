import React from 'react'
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

import Head from "next/head";

import { mn } from '../../locales/Navbar';
import { en } from '../../locales/Navbar';
import { cn } from '../../locales/Navbar';

function Services() {
   const router = useRouter();
  const t = router.locale === 'en' ? en : router.locale === 'cn' ?  cn : mn ;
  return (
    <div className='pt-20'>
      <Head>
        <title>{t.maintenance} | {t.ozzo}</title>
      </Head>
      
      <h3 className={styles.title}>
        {t.maintenance}
      </h3>
    </div>
  )
}

export default Services;