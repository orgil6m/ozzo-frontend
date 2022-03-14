import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

import { NavbarLocale } from '../locales/Navbar';


const Contact = () => {
  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[`${l}`]
  return (
    <div className="pt-20">
    <Head>
      <title>{t.contact}  | {t.ozzo}</title>
    </Head>
    <h1 className={styles.title}>
          Contact
      </h1>
  </div>)
}

export default Contact;