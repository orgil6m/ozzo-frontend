import React from 'react'
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

import Head from "next/head";

import { NavbarLocale } from '../../locales/Navbar';

function Services() {
  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[`${l}`]
  return (
    <div className='pt-20'>
      <Head>
        <title>{t.maintenance} | {t.ozzo}</title>
      </Head>
      
      <h3 className={styles.title}>
        {t.maintenance}      
      </h3>
      <p>
          uusch boloh asuudluud
          <br />
        tuunii shalgaan
        <br />
        graph
      </p>
    </div>
  )
}

export default Services;