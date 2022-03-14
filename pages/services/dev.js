import React from 'react'
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

import Head from "next/head";

import { NavbarLocale } from '../../locales/Navbar';

function Dev() {
  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[`${l}`]
  return (
    <div className='pt-20'>
      <Head>
        <title>{t.dev} | {t.ozzo}</title>
      </Head>
      <h3 className={styles.title}>
        {t.dev}
      </h3>
    </div>
  )
}

export default Dev;